import express from 'express';
import cors from 'cors';
import { NOTION_CONFIG, SERVER_CONFIG, validateConfig } from './config';
import fetch from 'node-fetch';

// Validate configuration
validateConfig();

const app = express();

// Enable CORS
app.use(cors({
  origin: true, // Allow all origins in development
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Notion-Version'],
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// Notion API proxy endpoint
app.all('/api/notion/*', async (req, res) => {
  try {
    const path = req.path.replace('/api/notion', '');
    const url = `${NOTION_CONFIG.baseUrl}${path}`;
    
    console.log('🔄 Proxy: Forwarding request to:', url);
    console.log('🔄 Proxy: Request method:', req.method);
    console.log('🔄 Proxy: Request headers:', {
      'Authorization': 'Bearer [REDACTED]',
      'Notion-Version': NOTION_CONFIG.version,
      'Content-Type': 'application/json'
    });
    
    const response = await fetch(url, {
      method: req.method,
      headers: {
        'Authorization': `Bearer ${NOTION_CONFIG.token}`,
        'Notion-Version': NOTION_CONFIG.version,
        'Content-Type': 'application/json'
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
    });

    const data = await response.json();
    console.log('✅ Proxy: Request successful');
    console.log('✅ Proxy: Response status:', response.status);
    res.status(response.status).json(data);
  } catch (error: any) {
    console.error('❌ Proxy error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error?.message || 'Unknown error'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(SERVER_CONFIG.port, () => {
  console.log(`Proxy server running on port ${SERVER_CONFIG.port}`);
  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('CORS Origin:', SERVER_CONFIG.corsOrigin);
});