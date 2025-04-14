import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for development and production
app.use(cors({
  origin: process.env.VERCEL 
    ? ['https://japa-75elliojn-dajobragues-projects.vercel.app', 'http://localhost:5173']
    : 'http://localhost:5173'
}));

// Middleware to validate Notion token
const validateNotionToken = (req, res, next) => {
  const token = process.env.VITE_NOTION_TOKEN;
  if (!token) {
    console.error('❌ Proxy: Missing Notion token');
    return res.status(500).json({ error: 'Server configuration error: Missing Notion token' });
  }
  next();
};

// Notion API proxy endpoint
app.get('/api/notion/blocks/:blockId/children', validateNotionToken, async (req, res) => {
  try {
    const { blockId } = req.params;
    const pageSize = req.query.page_size || 100;
    
    console.log(`Proxy: Fetching Notion blocks for ${blockId} with page size ${pageSize}`);
    console.log(`Proxy: Using token: ${process.env.VITE_NOTION_TOKEN ? `${process.env.VITE_NOTION_TOKEN.substring(0, 10)}...` : 'Not set'}`);
    
    const response = await fetch(
      `https://api.notion.com/v1/blocks/${blockId}/children?page_size=${pageSize}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.VITE_NOTION_TOKEN}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json'
        }
      }
    );
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error(`Proxy: Notion API error: ${response.status}`, data);
      return res.status(response.status).json(data);
    }
    
    console.log(`Proxy: Successfully fetched ${data.results?.length || 0} blocks from Notion`);
    res.json(data);
  } catch (error) {
    console.error('Proxy: Error fetching from Notion API:', error);
    res.status(500).json({ 
      error: 'Failed to fetch data from Notion API',
      details: error.message
    });
  }
});

// Health check endpoint
app.get('/api/notion/health', (req, res) => {
  res.json({ 
    status: 'ok',
    environment: process.env.NODE_ENV || 'development',
    vercel: process.env.VERCEL === 'true'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Notion API proxy server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Running on Vercel: ${process.env.VERCEL === 'true'}`);
}); 