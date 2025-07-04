#!/usr/bin/env node

// Simplified Notion API Test Script for direct access
import https from 'https';
import fetch from 'node-fetch';

// Configuration
const NOTION_TOKEN = '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';
const PAGE_ID = '1d376841-73f9-8022-bfae-e1e25582072f';

console.log('=== Notion API Direct Access Test ===\n');
console.log(`Testing access to page ID: ${PAGE_ID}`);
console.log('Using provided token\n');

// Function to retrieve a Notion page
async function retrievePage(pageId) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.notion.com',
      port: 443,
      path: `/v1/pages/${pageId}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28'
      }
    };
    
    console.log('Making request to Notion API...');
    
    const req = https.request(options, (res) => {
      let responseData = '';
      
      console.log(`Response Status: ${res.statusCode} ${res.statusMessage}`);
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonResponse = JSON.parse(responseData);
          
          if (jsonResponse.object === 'error') {
            console.log('\nError response from Notion API:');
            console.log(JSON.stringify(jsonResponse, null, 2));
            resolve(jsonResponse);
          } else {
            console.log('\nSuccessful response! Page data:');
            console.log(`- ID: ${jsonResponse.id}`);
            console.log(`- Created time: ${jsonResponse.created_time}`);
            console.log(`- Last edited time: ${jsonResponse.last_edited_time}`);
            
            // Try to get page title if available
            try {
              if (jsonResponse.properties && jsonResponse.properties.title) {
                const titleContent = jsonResponse.properties.title.title;
                if (titleContent && titleContent.length > 0) {
                  const pageTitle = titleContent.map(t => t.plain_text).join('');
                  console.log(`- Title: ${pageTitle}`);
                }
              }
            } catch (error) {
              console.log('(Unable to extract page title)');
            }
            
            resolve(jsonResponse);
          }
        } catch (error) {
          console.log('\nError parsing response:');
          console.log(responseData);
          reject(new Error(`Failed to parse response: ${error.message}`));
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.end();
  });
}

// Function to list child blocks of a page
async function listChildBlocks(pageId) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.notion.com',
      port: 443,
      path: `/v1/blocks/${pageId}/children`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28'
      }
    };
    
    console.log('\nRetrieving child blocks...');
    
    const req = https.request(options, (res) => {
      let responseData = '';
      
      console.log(`Response Status: ${res.statusCode} ${res.statusMessage}`);
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonResponse = JSON.parse(responseData);
          
          if (jsonResponse.object === 'error') {
            console.log('\nError response when retrieving blocks:');
            console.log(JSON.stringify(jsonResponse, null, 2));
            resolve(jsonResponse);
          } else {
            console.log(`\nFound ${jsonResponse.results.length} child blocks:`);
            
            // Display block types
            jsonResponse.results.slice(0, 5).forEach((block, index) => {
              console.log(`- Block ${index + 1}: Type = ${block.type}`);
              
              // Try to show content of text blocks
              if (block.type === 'paragraph' && block.paragraph.rich_text.length > 0) {
                const text = block.paragraph.rich_text.map(t => t.plain_text).join('');
                console.log(`  Content: ${text.substring(0, 50)}${text.length > 50 ? '...' : ''}`);
              }
            });
            
            if (jsonResponse.results.length > 5) {
              console.log(`... and ${jsonResponse.results.length - 5} more blocks`);
            }
            
            resolve(jsonResponse);
          }
        } catch (error) {
          console.log('\nError parsing response:');
          console.log(responseData);
          reject(new Error(`Failed to parse response: ${error.message}`));
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.end();
  });
}

// Function to search for databases
async function searchDatabases() {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      filter: {
        value: 'database',
        property: 'object'
      },
      page_size: 10
    });
    
    const options = {
      hostname: 'api.notion.com',
      port: 443,
      path: '/v1/search',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
        'Content-Length': data.length
      }
    };
    
    console.log('\nSearching for databases in the workspace...');
    
    const req = https.request(options, (res) => {
      let responseData = '';
      
      console.log(`Response Status: ${res.statusCode} ${res.statusMessage}`);
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonResponse = JSON.parse(responseData);
          
          if (jsonResponse.object === 'error') {
            console.log('\nError response when searching databases:');
            console.log(JSON.stringify(jsonResponse, null, 2));
            resolve(jsonResponse);
          } else {
            console.log(`\nFound ${jsonResponse.results.length} databases:`);
            
            jsonResponse.results.forEach((db, index) => {
              console.log(`- Database ${index + 1}:`);
              console.log(`  ID: ${db.id}`);
              
              // Try to get database title if available
              try {
                if (db.title && db.title.length > 0) {
                  const dbTitle = db.title.map(t => t.plain_text).join('');
                  console.log(`  Title: ${dbTitle}`);
                }
              } catch (error) {
                console.log('  (Unable to extract database title)');
              }
            });
            
            resolve(jsonResponse);
          }
        } catch (error) {
          console.log('\nError parsing response:');
          console.log(responseData);
          reject(new Error(`Failed to parse response: ${error.message}`));
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.write(data);
    req.end();
  });
}

// Main function to run tests
async function main() {
  try {
    // First try to access the specific page
    await retrievePage(PAGE_ID);
    
    // Then try to list its child blocks
    await listChildBlocks(PAGE_ID);
    
    // Finally, search for databases
    await searchDatabases();
    
    console.log('\n✅ Test completed successfully!');
    console.log('If you see useful data above, your credentials are working correctly.\n');
  } catch (error) {
    console.error(`\n❌ Error during test: ${error.message}`);
    console.log('Please check your credentials and try again.\n');
  }
}

// Run the main function
main();

// Direct test of Notion database access
const NOTION_URL = 'https://japainc.notion.site/Recent-Press-a27fd039f4b94d82a0ead9a45ffef625';

async function testNotionAccess() {
  console.log('🧪 Testing direct Notion access...');
  console.log('📄 URL:', NOTION_URL);
  
  try {
    // Try to fetch the page with different headers
    const response = await fetch(NOTION_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
      }
    });
    
    console.log('📊 Response status:', response.status);
    console.log('📋 Response headers:', Object.fromEntries(response.headers.entries()));
    
    const content = await response.text();
    console.log('📄 Content length:', content.length);
    console.log('📄 First 500 chars:', content.substring(0, 500));
    
    // Look for any data in the content
    const dataMatches = content.match(/window\.__INITIAL_STATE__\s*=\s*({.*?});/);
    if (dataMatches) {
      console.log('🎯 Found initial state data!');
      try {
        const initialState = JSON.parse(dataMatches[1]);
        console.log('📦 Initial state keys:', Object.keys(initialState));
      } catch (e) {
        console.log('❌ Could not parse initial state');
      }
    }
    
    // Save content for analysis
    const fs = await import('fs');
    fs.writeFileSync('notion-direct-content.html', content);
    console.log('💾 Saved content to notion-direct-content.html');
    
  } catch (error) {
    console.error('❌ Error accessing Notion:', error.message);
  }
}

testNotionAccess(); 