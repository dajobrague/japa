#!/usr/bin/env node

// Notion Page Content Fetcher
// This script fetches and displays the content of a specific Notion page
import https from 'https';
import fs from 'fs';

// Configuration
const NOTION_TOKEN = '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';
const PAGE_ID = '1d376841-73f9-8022-bfae-e1e25582072f';
// Try alternative formats if needed
const PAGE_ID_ALT = '1d37684173f98022bfaee1e25582072f';
const OUTPUT_FILE = 'notion-page-content.json';

console.log('=== Notion Page Content Fetcher ===\n');
console.log(`Fetching content from page ID: ${PAGE_ID}`);

// Function to fetch page details
async function getPageDetails(pageId) {
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
    
    console.log('\nFetching page details...');
    
    const req = https.request(options, (res) => {
      let responseData = '';
      
      console.log(`Response Status: ${res.statusCode} ${res.statusMessage}`);
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonResponse = JSON.parse(responseData);
          resolve(jsonResponse);
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

// Function to fetch children blocks
async function getChildBlocks(blockId) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.notion.com',
      port: 443,
      path: `/v1/blocks/${blockId}/children?page_size=100`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28'
      }
    };
    
    console.log('\nFetching child blocks...');
    
    const req = https.request(options, (res) => {
      let responseData = '';
      
      console.log(`Response Status: ${res.statusCode} ${res.statusMessage}`);
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonResponse = JSON.parse(responseData);
          resolve(jsonResponse);
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

// Function to extract text from rich text objects
function extractText(richTextArray) {
  if (!richTextArray || richTextArray.length === 0) {
    return '';
  }
  
  return richTextArray.map(rt => rt.plain_text).join('');
}

// Function to display summary of a block
function summarizeBlock(block) {
  let summary = `- Block type: ${block.type}`;
  
  // Extract and display content based on block type
  switch (block.type) {
    case 'paragraph':
      summary += `\n  Text: ${extractText(block.paragraph.rich_text)}`;
      break;
    case 'heading_1':
      summary += `\n  Heading: ${extractText(block.heading_1.rich_text)}`;
      break;
    case 'heading_2':
      summary += `\n  Heading: ${extractText(block.heading_2.rich_text)}`;
      break;
    case 'heading_3':
      summary += `\n  Heading: ${extractText(block.heading_3.rich_text)}`;
      break;
    case 'bulleted_list_item':
      summary += `\n  Item: ${extractText(block.bulleted_list_item.rich_text)}`;
      break;
    case 'numbered_list_item':
      summary += `\n  Item: ${extractText(block.numbered_list_item.rich_text)}`;
      break;
    case 'image':
      if (block.image.type === 'external') {
        summary += `\n  Image URL: ${block.image.external.url}`;
      } else if (block.image.type === 'file') {
        summary += `\n  Image URL: ${block.image.file.url}`;
      }
      break;
    case 'divider':
      summary += `\n  Content: [Divider Line]`;
      break;
    case 'table':
      summary += `\n  Table: ${block.table.table_width} columns`;
      break;
    case 'column_list':
      summary += `\n  Column List`;
      break;
    case 'column':
      summary += `\n  Column`;
      break;
    case 'code':
      summary += `\n  Code: ${extractText(block.code.rich_text)} (${block.code.language})`;
      break;
    case 'toggle':
      summary += `\n  Toggle: ${extractText(block.toggle.rich_text)}`;
      break;
    case 'child_page':
      summary += `\n  Child Page: ${block.child_page.title}`;
      break;
    case 'child_database':
      summary += `\n  Child Database ID: ${block.id}`;
      break;
    default:
      summary += `\n  Content type not parsed`;
  }
  
  return summary;
}

// Main function
async function main() {
  try {
    // Fetch page details
    const pageDetails = await getPageDetails(PAGE_ID);
    
    if (pageDetails.object === 'error') {
      console.error(`\nError: ${pageDetails.message}`);
      return;
    }
    
    console.log(`\nPage Title: ${pageDetails.properties.title ? extractText(pageDetails.properties.title.title) : 'No title'}`);
    console.log(`Last Edited: ${new Date(pageDetails.last_edited_time).toLocaleString()}`);
    
    // Fetch child blocks
    const blocksResponse = await getChildBlocks(PAGE_ID);
    
    if (blocksResponse.object === 'error') {
      console.error(`\nError fetching blocks: ${blocksResponse.message}`);
      return;
    }
    
    // Display summary of page content
    console.log(`\nFound ${blocksResponse.results.length} blocks on the page.`);
    console.log('\nPage Structure:');
    
    blocksResponse.results.forEach((block, index) => {
      console.log(`\nBlock ${index + 1}:`);
      console.log(summarizeBlock(block));
    });
    
    // Check for databases in the content
    const databases = blocksResponse.results.filter(block => 
      block.type === 'child_database' || 
      (block.type === 'paragraph' && block.paragraph.rich_text.some(rt => 
        rt.plain_text.includes('database') || rt.plain_text.includes('Database')))
    );
    
    if (databases.length > 0) {
      console.log('\nPotential database references found:');
      databases.forEach((db, i) => {
        console.log(`${i + 1}. ${summarizeBlock(db)}`);
      });
    }
    
    // Save full response to file for detailed investigation
    const fullData = {
      pageDetails,
      blocks: blocksResponse.results
    };
    
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(fullData, null, 2));
    console.log(`\nFull page content saved to ${OUTPUT_FILE} for detailed inspection.`);
    
    // Provide next steps
    console.log('\n=== NEXT STEPS ===');
    console.log('1. Review the page structure above to understand the content');
    console.log('2. Examine the full JSON in the output file for detailed investigation');
    console.log('3. Look for any child databases that might contain your press information');
    console.log('4. Use the structure to create the proper Press Section integration');
    
  } catch (error) {
    console.error(`\nError: ${error.message}`);
  }
}

// Run the main function
main(); 