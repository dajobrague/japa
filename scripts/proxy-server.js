// Simple proxy server for Notion API
import http from 'http';
import https from 'https';
import { URL } from 'url';

// Notion API configuration
const NOTION_TOKEN = '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';
const NOTION_VERSION = '2022-06-28';

// Server config
const PORT = 3001;

// Create the server
const server = http.createServer((req, res) => {
  // Set CORS headers for all origins to allow any dev server port
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Notion-Version');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
  
  // Parse the request URL using URL class
  const reqUrl = new URL(req.url || '', `http://${req.headers.host || 'localhost'}`);
  const pathname = reqUrl.pathname;
  
  // Only proxy requests to /api/notion/*
  if (!pathname.startsWith('/api/notion/')) {
    res.writeHead(404);
    res.end('Not Found');
    return;
  }
  
  console.log(`Proxying request to: ${pathname}`);
  
  // Extract the Notion API path (remove the /api/notion prefix)
  const notionPath = pathname.replace('/api/notion', '');
  const notionUrl = `https://api.notion.com/v1${notionPath}${reqUrl.search}`;
  
  console.log(`Forwarding to Notion API: ${notionUrl}`);
  
  // Configure the request options
  const options = {
    method: req.method,
    headers: {
      'Authorization': `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json'
    }
  };
  
  // Make the request to Notion
  const proxyReq = https.request(notionUrl, options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode || 500, proxyRes.headers);
    
    proxyRes.on('data', (chunk) => {
      res.write(chunk);
    });
    
    proxyRes.on('end', () => {
      res.end();
    });
  });
  
  proxyReq.on('error', (err) => {
    console.error('Proxy request error:', err);
    res.writeHead(500);
    res.end('Proxy Error');
  });
  
  // If this is a POST request, forward the body
  if (req.method === 'POST') {
    req.on('data', (chunk) => {
      proxyReq.write(chunk);
    });
    
    req.on('end', () => {
      proxyReq.end();
    });
  } else {
    proxyReq.end();
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Notion API proxy server running at http://localhost:${PORT}`);
  console.log(`Proxying requests to /api/notion/* to https://api.notion.com/v1/*`);
}); 