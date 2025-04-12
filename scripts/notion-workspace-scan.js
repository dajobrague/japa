#!/usr/bin/env node

// Notion Workspace Scanning Tool
// This script helps you discover all pages and databases in your Notion workspace
// that are accessible to your integration
import https from 'https';
import fs from 'fs';

// Configuration
const NOTION_TOKEN = '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';
const RESULTS_FILE = 'notion-scan-results.json';

console.log('=== Notion Workspace Scanner ===\n');
console.log('This tool will scan your Notion workspace and generate a report of all');
console.log('accessible pages and databases. You can use this to find the correct IDs.');

// Function to search for all content
async function searchAllContent() {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      page_size: 100 // Maximum allowed by the API
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
    
    console.log('\nSearching your Notion workspace for all accessible content...');
    
    const req = https.request(options, (res) => {
      let responseData = '';
      
      console.log(`API Response Status: ${res.statusCode} ${res.statusMessage}`);
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonResponse = JSON.parse(responseData);
          
          if (jsonResponse.object === 'error') {
            console.log('\nError response from Notion API:');
            console.log(JSON.stringify(jsonResponse, null, 2));
            resolve({ error: jsonResponse });
          } else {
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

// Function to extract and summarize page information
function summarizePage(page) {
  let title = 'Untitled';
  
  try {
    // Different page types have title in different properties
    if (page.properties && page.properties.title) {
      const titleContent = page.properties.title.title;
      if (titleContent && titleContent.length > 0) {
        title = titleContent.map(t => t.plain_text).join('');
      }
    } else if (page.title) {
      if (Array.isArray(page.title)) {
        title = page.title.map(t => t.plain_text).join('');
      } else {
        title = String(page.title);
      }
    }
  } catch (error) {
    // If we can't extract the title, use a default
    title = `${page.object} (no title)`;
  }
  
  return {
    id: page.id,
    type: page.object,
    title: title,
    url: page.url,
    created_time: page.created_time,
    last_edited_time: page.last_edited_time
  };
}

// Main function
async function main() {
  try {
    // Search for all content
    const searchResults = await searchAllContent();
    
    if (searchResults.error) {
      console.error('\n❌ Error scanning workspace. Please check your token and try again.');
      return;
    }
    
    // Extract and categorize results
    const pages = [];
    const databases = [];
    
    searchResults.results.forEach(item => {
      const summary = summarizePage(item);
      
      if (item.object === 'page') {
        pages.push(summary);
      } else if (item.object === 'database') {
        databases.push(summary);
      }
    });
    
    // Generate report
    console.log('\n--- SCAN RESULTS ---');
    console.log(`Found ${pages.length} pages and ${databases.length} databases.\n`);
    
    // Show pages
    if (pages.length > 0) {
      console.log('PAGES:');
      pages.forEach((page, index) => {
        console.log(`${index + 1}. ${page.title}`);
        console.log(`   ID: ${page.id}`);
        console.log(`   URL: ${page.url}`);
        console.log(`   Last edited: ${new Date(page.last_edited_time).toLocaleString()}`);
        console.log('');
      });
    }
    
    // Show databases
    if (databases.length > 0) {
      console.log('DATABASES:');
      databases.forEach((db, index) => {
        console.log(`${index + 1}. ${db.title}`);
        console.log(`   ID: ${db.id}`);
        console.log(`   URL: ${db.url}`);
        console.log(`   Last edited: ${new Date(db.last_edited_time).toLocaleString()}`);
        console.log('');
      });
    }
    
    // Save results to file
    const allResults = {
      timestamp: new Date().toISOString(),
      pages: pages,
      databases: databases,
      raw: searchResults
    };
    
    fs.writeFileSync(RESULTS_FILE, JSON.stringify(allResults, null, 2));
    console.log(`Full results saved to ${RESULTS_FILE}`);
    
    // Provide guidance on next steps
    console.log('\n--- NEXT STEPS ---');
    console.log('1. Find the page or database you want to use from the list above');
    console.log('2. Make sure it\'s shared with your integration (check the sharing settings in Notion)');
    console.log('3. Use the ID in your application to connect to that specific content');
    
    console.log('\n✅ Scan completed successfully!');
  } catch (error) {
    console.error(`\n❌ Error during scan: ${error.message}`);
  }
}

// Run the main function
main(); 