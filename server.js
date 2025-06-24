// Simple proxy server for Notion API
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Notion API configuration
const NOTION_TOKEN = process.env.VITE_NOTION_TOKEN || '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';
const NOTION_VERSION = '2022-06-28';
const NOTION_BASE_URL = 'https://api.notion.com/v1';

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'https://www.parkjapa.com'],
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Notion API proxy endpoint
app.all('/api/notion/*', async (req, res) => {
  try {
    const path = req.path.replace('/api/notion', '');
    const url = `${NOTION_BASE_URL}${path}`;
    
    console.log('🔄 Proxy: Forwarding request to:', url);
    console.log('🔄 Proxy: Request method:', req.method);
    
    const response = await fetch(url, {
      method: req.method,
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': NOTION_VERSION,
        'Content-Type': 'application/json'
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
    });

    const data = await response.json();
    console.log('✅ Proxy: Request successful, status:', response.status);
    
    res.status(response.status).json(data);
  } catch (error) {
    console.error('❌ Proxy error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error?.message || 'Unknown error'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Notion proxy server running on http://localhost:${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 Notion API proxy: http://localhost:${PORT}/api/notion/*`);
}); 