#!/usr/bin/env node

// Test script for Notion press service integration
// This script simulates how the service would work in the actual application
import https from 'https';
import fs from 'fs';

// Configuration
const NOTION_TOKEN = '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';
const TABLE_BLOCK_ID = '1d376841-73f9-80e2-8ab3-c98d4feae0f0';
const OUTPUT_FILE = 'notion-press-items.json';

console.log('=== Notion Press Service Test ===\n');
console.log('This script tests the Notion press service integration');

// Define press item types (simplified from the actual types)
const PressCategories = ['News Release', 'Media Coverage', 'Award', 'Industry Update'];

// Helper functions from the service
const generateId = () => Math.floor(Math.random() * 10000);

const extractText = (richTextArray) => {
  if (!richTextArray || richTextArray.length === 0) {
    return '';
  }
  
  return richTextArray.map(rt => rt.plain_text).join('');
};

const formatTableRow = (row) => {
  if (row.type !== 'table_row') {
    return null;
  }
  
  const cells = row.table_row.cells;
  const formattedCells = cells.map(cell => {
    const cellText = cell.map(textObj => extractText([textObj])).join(' ');
    return cellText || '';
  });
  
  return formattedCells;
};

// Function to fetch table rows from Notion
const fetchTableRows = async () => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.notion.com',
      port: 443,
      path: `/v1/blocks/${TABLE_BLOCK_ID}/children?page_size=100`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28'
      }
    };
    
    console.log('\nFetching table rows from Notion...');
    
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
            console.error('\nAPI Error:', jsonResponse);
            resolve([]);
            return;
          }
          
          resolve(jsonResponse.results || []);
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
};

// Convert Notion table data to press items format
const convertToPressItems = (rows) => {
  // Get headers from first row
  const headerRow = rows[0];
  if (!headerRow || headerRow.type !== 'table_row') {
    return [];
  }
  
  const headers = formatTableRow(headerRow) || [];
  console.log('\nHeaders found:', headers);
  
  // Map column indices to field names
  const titleIndex = headers.findIndex(h => h.includes('Title'));
  const descriptionIndex = headers.findIndex(h => h.includes('Description'));
  const imageIndex = headers.findIndex(h => h.includes('Image'));
  const attachmentsIndex = headers.findIndex(h => h.includes('Attachments'));
  
  console.log('Column mapping:');
  console.log(`- Title: column ${titleIndex + 1}`);
  console.log(`- Description: column ${descriptionIndex + 1}`);
  console.log(`- Image: column ${imageIndex + 1}`);
  console.log(`- Attachments: column ${attachmentsIndex + 1}`);
  
  // Skip header row and process data rows
  return rows.slice(1).map((row, index) => {
    const cells = formatTableRow(row);
    if (!cells) return null;
    
    // Determine category based on content
    let category = 'News Release';
    const titleLower = cells[titleIndex]?.toLowerCase() || '';
    if (titleLower.includes('award') || titleLower.includes('recognition')) {
      category = 'Award';
    } else if (titleLower.includes('media') || titleLower.includes('feature') || titleLower.includes('coverage')) {
      category = 'Media Coverage';
    } else if (titleLower.includes('update') || titleLower.includes('industry')) {
      category = 'Industry Update';
    }
    
    // Create a date (most recent items first)
    const today = new Date();
    const date = new Date(today);
    date.setDate(today.getDate() - (index * 7)); // Each item is one week apart
    
    // Create a basic HTML content from the description
    const description = cells[descriptionIndex] || '';
    const content = `<p>${description}</p>`;
    
    // Create a slug from the title
    const title = cells[titleIndex] || `Press Release ${index + 1}`;
    const slug = title.toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
    
    // Extract potential image URL from the image field
    let imageUrl = '/assets/images/press/default-press-image.jpg'; // Default image
    const imageText = cells[imageIndex] || '';
    if (imageText.includes('http')) {
      // If there's a URL in the image field, use it
      const urlMatch = imageText.match(/(https?:\/\/[^\s]+)/g);
      if (urlMatch && urlMatch[0]) {
        imageUrl = urlMatch[0];
      }
    }
    
    // Extract tags from the title and description
    const allText = `${title} ${description}`;
    const tags = [];
    
    if (allText.toLowerCase().includes('parking')) tags.push('Parking');
    if (allText.toLowerCase().includes('smart')) tags.push('Smart Technology');
    if (allText.toLowerCase().includes('cities') || allText.toLowerCase().includes('urban')) tags.push('Urban');
    if (allText.toLowerCase().includes('ai') || allText.toLowerCase().includes('algorithm')) tags.push('AI');
    if (allText.toLowerCase().includes('data')) tags.push('Data');
    
    // If we don't have at least 2 tags, add some generic ones
    if (tags.length < 2) {
      if (!tags.includes('Smart Technology')) tags.push('Smart Technology');
      if (!tags.includes('Parking')) tags.push('Parking');
    }
    
    // Create the press item
    return {
      id: generateId(),
      title,
      category,
      date: date.toISOString(),
      slug,
      summary: description,
      content,
      image: imageUrl,
      source: {
        name: 'JAPA Inc.',
        logo: '/assets/images/japa-logo.svg',
      },
      featured: index < 2, // First two items are featured
      tags,
      links: {
        // Add links if available in the attachments field
        pdf: cells[attachmentsIndex]?.includes('Press Release') ? '/assets/documents/press/press-release.pdf' : undefined,
      }
    };
  }).filter(Boolean);
};

// Main function
async function main() {
  try {
    // Fetch table rows
    const rows = await fetchTableRows();
    
    if (rows.length === 0) {
      console.error('\nNo data found in the Notion table.');
      return;
    }
    
    console.log(`\nFound ${rows.length} rows in the table.`);
    
    // Convert to press items
    const pressItems = convertToPressItems(rows);
    console.log(`\nConverted ${pressItems.length} press items from Notion data.`);
    
    // Display first few press items
    const previewCount = Math.min(3, pressItems.length);
    for (let i = 0; i < previewCount; i++) {
      console.log(`\nPress Item ${i + 1}:`);
      console.log(`- Title: ${pressItems[i].title}`);
      console.log(`- Category: ${pressItems[i].category}`);
      console.log(`- Date: ${new Date(pressItems[i].date).toLocaleDateString()}`);
      console.log(`- Summary: ${pressItems[i].summary.substring(0, 100)}...`);
      console.log(`- Tags: ${pressItems[i].tags.join(', ')}`);
      console.log(`- Featured: ${pressItems[i].featured}`);
    }
    
    // Save the full data to file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(pressItems, null, 2));
    console.log(`\nSaved ${pressItems.length} press items to ${OUTPUT_FILE} for inspection.`);
    
  } catch (error) {
    console.error(`\nError: ${error.message}`);
  }
}

// Run the main function
main(); 