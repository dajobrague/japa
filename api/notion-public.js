import { getSamplePressData } from '../src/services/notionPublicService.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    console.log('🔄 Fetching press data from Notion...');
    
    // For production, we'll use the sample data until real Notion integration is set up
    const pressData = getSamplePressData();
    
    console.log(`✅ Serving ${pressData.length} press items`);
    
    res.status(200).json(pressData);
  } catch (error) {
    console.error('❌ Error in notion-public API:', error);
    res.status(500).json({ 
      error: 'Failed to fetch press data',
      message: error.message 
    });
  }
} 