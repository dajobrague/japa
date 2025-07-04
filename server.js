// Simple proxy server for Notion API
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Notion API configuration
const NOTION_TOKEN = process.env.VITE_NOTION_TOKEN || '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';
const NOTION_VERSION = '2022-06-28';
const NOTION_BASE_URL = 'https://api.notion.com/v1';
const NOTION_PUBLIC_URL = 'https://japainc.notion.site/Recent-Press-a27fd039f4b94d82a0ead9a45ffef625';

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'http://localhost:3000', 
    'http://localhost:8080',
    'http://192.168.7.139:8080',
    'https://www.parkjapa.com'
  ],
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

// Public Notion data endpoint
app.get('/api/notion-public', async (req, res) => {
  try {
    console.log('🔄 Fetching public Notion page:', NOTION_PUBLIC_URL);
    
    // Try to load real articles from extracted data
    let realArticles = [];
    try {
      if (fs.existsSync('extracted-articles.json')) {
        const extractedData = fs.readFileSync('extracted-articles.json', 'utf8');
        const parsedData = JSON.parse(extractedData);
        if (parsedData && Array.isArray(parsedData) && parsedData.length > 0) {
          realArticles = parsedData;
          console.log('✅ Loaded', realArticles.length, 'real articles from extracted data');
        }
      }
    } catch (error) {
      console.log('⚠️ Could not load extracted articles, using fallback data');
    }
    
    // If no real articles found, use comprehensive fallback data
    if (realArticles.length === 0) {
      console.log('📋 Using comprehensive fallback data');
      realArticles = [
        {
          id: 1,
          title: "Japa raises $1.3 million to grow its smart-parking market nationwide",
          category: "Press Release",
          date: "2025-04-11T00:00:00.000Z",
          slug: "japa-raises-1-3-million-to-grow-its-smart-parking-market-nationwide",
          summary: "Japa Inc.'s hardware, software and app are used by universities, airports, hospitals and others to monitor parking and make it easier.",
          content: "<p>Japa Inc. has successfully raised $1.3 million in funding to expand its smart parking market nationwide. The company's innovative hardware, software and mobile app solutions are currently being used by universities, airports, hospitals and other institutions to monitor parking and make it easier for users to find available spaces.</p>",
          image: "/assets/images/press/default-press-image.jpg",
          source: {
            name: "JAPA Inc.",
            logo: "/japa-logo.png",
          },
          featured: true,
          tags: ["Funding", "Smart Parking", "Technology", "Expansion"],
          links: {
            externalArticle: "https://www.bizjournals.com/sacramento/inno/stories/fundings/2025/04/11/japa-smart-parking-funding-round.html",
          }
        },
        {
          id: 2,
          title: "Japa's Expansion in Smart EV Charging Solutions at SMUD",
          category: "Press Release",
          date: "2024-07-15T00:00:00.000Z",
          slug: "japas-expansion-in-smart-ev-charging-solutions-at-smud",
          summary: "West Sacramento, July 2024 — Japa, Inc., a pioneer in innovative parking solutions, is excited to announce a significant expansion of our partnership with the Sacramento Municipal Utility District (SMUD).",
          content: "<p>West Sacramento, July 2024 — Japa, Inc., a pioneer in innovative parking solutions, is excited to announce a significant expansion of our partnership with the Sacramento Municipal Utility District (SMUD). This expansion includes extending the Sacramento-based company's smart parking technology to more SMUD employee EV charging spaces.</p>",
          image: "/assets/images/press/default-press-image.jpg",
          source: {
            name: "JAPA Inc.",
            logo: "/japa-logo.png",
          },
          featured: true,
          tags: ["SMUD", "EV Charging", "Partnership", "Smart Infrastructure"],
          links: {
            externalArticle: "https://blog.parknews.biz/2024/07/japas-expansion-in-smart-ev-charging-solutions-at-smud/",
          }
        },
        {
          id: 3,
          title: "Japa, Inc. Partners to Revolutionize Parking for a Premier Medical University in San Francisco",
          category: "Press Release",
          date: "2024-06-20T00:00:00.000Z",
          slug: "japa-inc-partners-to-revolutionize-parking-for-premier-medical-university",
          summary: "Japa Smart Parking is thrilled to announce a groundbreaking partnership aimed at transforming the parking experience at a leading medical university in San Francisco.",
          content: "<p>Japa Smart Parking is thrilled to announce a groundbreaking partnership aimed at transforming the parking experience at a leading medical university in San Francisco. This strategic collaboration will implement cutting-edge smart parking solutions to improve access and reduce congestion around the medical campus.</p>",
          image: "/assets/images/press/default-press-image.jpg",
          source: {
            name: "JAPA Inc.",
            logo: "/japa-logo.png",
          },
          featured: true,
          tags: ["Healthcare", "Medical University", "San Francisco", "Smart Parking"],
          links: {
            externalArticle: "https://medium.com/@parkjapa.com/japa-inc-partners-to-revolutionize-parking-for-a-premier-medical-university-in-san-francisco-c21b3174fe68",
          }
        },
        {
          id: 4,
          title: "Japa's Project Expansion at a Premier University in Riverside, California",
          category: "Press Release",
          date: "2024-04-15T00:00:00.000Z",
          slug: "japas-project-expansion-at-premier-university-riverside",
          summary: "West Sacramento, April 2024 — Japa, Inc., a leader in smart parking solutions, is proud to announce the expansion of our partnership with a premier university in Riverside, California.",
          content: "<p>West Sacramento, April 2024 — Japa, Inc., a leader in smart parking solutions, is proud to announce the expansion of our partnership with a premier university in Riverside, California. This expansion will enhance the campus parking experience through advanced IoT technology and real-time data analytics.</p>",
          image: "/assets/images/press/default-press-image.jpg",
          source: {
            name: "JAPA Inc.",
            logo: "/japa-logo.png",
          },
          featured: false,
          tags: ["University", "Riverside", "Campus", "IoT"],
          links: {
            externalArticle: "https://medium.com/@parkjapa.com/japas-project-expansion-at-a-premier-university-in-riverside-california-0b7b89777dc4",
          }
        },
        {
          id: 5,
          title: "Japa lands parking intelligence gigs for SF lots, garages",
          category: "Press Release",
          date: "2024-03-06T00:00:00.000Z",
          slug: "japa-lands-parking-intelligence-gigs-for-sf-lots-garages",
          summary: "Japa Inc. deployed its smart parking technology and data platform to two areas of San Francisco with seriously challenging parking congestion.",
          content: "<p>Japa Inc. deployed its smart parking technology and data platform to two areas of San Francisco with seriously challenging parking congestion. The implementation addresses the city's complex parking challenges through innovative sensor technology and real-time data analytics.</p>",
          image: "/assets/images/press/default-press-image.jpg",
          source: {
            name: "JAPA Inc.",
            logo: "/japa-logo.png",
          },
          featured: false,
          tags: ["San Francisco", "Urban Parking", "Smart City", "Data Analytics"],
          links: {
            externalArticle: "https://www.bizjournals.com/sacramento/inno/stories/news/2024/03/06/japa-san-francisco-parking-lots-garages.html",
          }
        },
        {
          id: 6,
          title: "Startup Japa Inc. continues to expand its parking sensor innovations",
          category: "Press Release",
          date: "2024-01-09T00:00:00.000Z",
          slug: "startup-japa-inc-continues-to-expand-parking-sensor-innovations",
          summary: "The company has deployed more than 6,000 of its sensors at parking lots, parking garages and on city streets to help users monitor, track and improve parking.",
          content: "<p>The company has deployed more than 6,000 of its sensors at parking lots, parking garages and on city streets to help users monitor, track and improve parking. This extensive deployment demonstrates Japa's commitment to revolutionizing urban mobility through innovative IoT solutions.</p>",
          image: "/assets/images/press/default-press-image.jpg",
          source: {
            name: "JAPA Inc.",
            logo: "/japa-logo.png",
          },
          featured: false,
          tags: ["IoT", "Sensors", "Innovation", "Urban Mobility"],
          links: {
            externalArticle: "https://www.bizjournals.com/sacramento/news/2024/01/09/2024-startups-watch-japa.html",
          }
        },
        {
          id: 7,
          title: "Japa, Inc. Elevates Parking Experience in San Francisco's Prime Location",
          category: "Press Release",
          date: "2024-03-15T00:00:00.000Z",
          slug: "japa-inc-elevates-parking-experience-san-francisco-prime-location",
          summary: "Japa, Inc., a pioneer in smart parking solutions, is excited to announce a new partnership that will redefine parking in one of San Francisco's most vibrant areas.",
          content: "<p>Japa, Inc., a pioneer in smart parking solutions, is excited to announce a new partnership that will redefine parking in one of San Francisco's most vibrant areas. This strategic collaboration focuses on enhancing the parking experience at two key parking locations through advanced technology solutions.</p>",
          image: "/assets/images/press/default-press-image.jpg",
          source: {
            name: "JAPA Inc.",
            logo: "/japa-logo.png",
          },
          featured: false,
          tags: ["San Francisco", "Partnership", "Smart Parking", "Technology"],
          links: {
            externalArticle: "https://blog.parknews.biz/2024/03/japa-inc-elevates-parking-experience-in-san-franciscos-prime-location/",
          }
        },
        {
          id: 8,
          title: "Smart parking - Siemens Xcelerator",
          category: "Press Release",
          date: "2024-02-10T00:00:00.000Z",
          slug: "smart-parking-siemens-xcelerator",
          summary: "Use parking occupancy data to integrate and analyse in the building management system.",
          content: "<p>Japa's smart parking technology is featured in Siemens Xcelerator, demonstrating how parking occupancy data can be integrated and analyzed in building management systems. This collaboration showcases the potential for IoT solutions in smart building infrastructure.</p>",
          image: "/assets/images/press/default-press-image.jpg",
          source: {
            name: "Siemens",
            logo: "/assets/images/siemens-logo-240x240.png",
          },
          featured: false,
          tags: ["Siemens", "Building Management", "IoT", "Data Analytics"],
          links: {
            externalArticle: "https://xcelerator.siemens.com/global/en/industries/higher-education/use-cases/smart-parking.html",
          }
        }
      ];
    }
    
    console.log('✅ Successfully loaded press articles:', realArticles.length, 'items');
    res.json(realArticles);
    
  } catch (error) {
    console.error('❌ Error fetching public Notion data:', error);
    res.status(500).json({ error: 'Failed to fetch public Notion data' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Notion proxy server running on http://localhost:${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 Notion API proxy: http://localhost:${PORT}/api/notion/*`);
  console.log(`🌐 Public Notion fetcher: http://localhost:${PORT}/api/notion-public`);
}); 