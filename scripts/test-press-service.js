// Test script for Notion Press Service integration

// Define necessary constants
const NOTION_TOKEN = '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';
const TABLE_BLOCK_ID = '1d376841-73f9-80e2-8ab3-c98d4feae0f0';

// Helper functions
const extractText = (richTextArray) => {
  if (!richTextArray || richTextArray.length === 0) return '';
  return richTextArray.map(rt => rt.plain_text).join('');
};

const formatTableRow = (row) => {
  if (row.type !== 'table_row') return null;
  
  const cells = row.table_row.cells;
  const formattedCells = cells.map(cell => {
    const cellText = cell.map(textObj => extractText([textObj])).join(' ');
    return cellText || '';
  });
  
  return formattedCells;
};

const generateId = () => Math.floor(Math.random() * 10000);

// Function to fetch data directly from Notion
async function fetchNotionData() {
  console.log('Fetching data directly from Notion API...');
  
  try {
    const response = await fetch(`https://api.notion.com/v1/blocks/${TABLE_BLOCK_ID}/children?page_size=100`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28'
      }
    });

    console.log('Direct API response:', response.status, response.statusText);
    
    if (!response.ok) {
      throw new Error(`Notion API error: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Found ${data.results.length} rows in the Notion table`);
    return data.results;
  } catch (error) {
    console.error('Error fetching Notion data directly:', error);
    return [];
  }
}

// Convert Notion table data to press items
function convertToPressItems(rows) {
  console.log('Converting Notion data to press items...');
  
  // Get headers from first row
  const headerRow = rows[0];
  if (!headerRow || headerRow.type !== 'table_row') {
    console.error('No valid header row found');
    return [];
  }
  
  const headers = formatTableRow(headerRow) || [];
  console.log('Headers found:', headers);
  
  // Map column indices
  const titleIndex = headers.findIndex(h => h.includes('Title'));
  const descriptionIndex = headers.findIndex(h => h.includes('Description'));
  const imageIndex = headers.findIndex(h => h.includes('Image'));
  const attachmentsIndex = headers.findIndex(h => h.includes('Attachments'));
  
  console.log('Column mapping:');
  console.log(`- Title: column ${titleIndex}`);
  console.log(`- Description: column ${descriptionIndex}`);
  console.log(`- Image: column ${imageIndex}`);
  console.log(`- Attachments: column ${attachmentsIndex}`);
  
  // Process data rows
  const pressItems = rows.slice(1).map((row, index) => {
    const cells = formatTableRow(row);
    if (!cells) return null;
    
    // Basic category detection
    const titleLower = (cells[titleIndex] || '').toLowerCase();
    let category = 'News Release';
    if (titleLower.includes('award')) category = 'Award';
    else if (titleLower.includes('media')) category = 'Media Coverage';
    
    // Create date
    const today = new Date();
    const date = new Date(today);
    date.setDate(today.getDate() - (index * 7));
    
    // Generate basic content
    const title = cells[titleIndex] || `Press Item ${index + 1}`;
    const description = cells[descriptionIndex] || '';
    
    // Extract tags
    const tags = [];
    if (titleLower.includes('parking')) tags.push('Parking');
    if (titleLower.includes('smart')) tags.push('Smart Technology');
    if (titleLower.includes('urban')) tags.push('Urban');
    if (tags.length < 1) tags.push('Parking');
    
    // Generate image URL
    let imageUrl = '/assets/images/press/default-press-image.jpg';
    const imageText = cells[imageIndex] || '';
    if (imageText.toLowerCase().includes('placeholder')) {
      imageUrl = '/assets/images/press/placeholder.png';
    }
    
    return {
      id: generateId(),
      title,
      category,
      date: date.toISOString(),
      summary: description,
      tags,
      featured: index < 2
    };
  }).filter(Boolean);
  
  console.log(`Converted ${pressItems.length} press items from Notion data.`);
  
  // Display a few items
  pressItems.slice(0, 3).forEach((item, i) => {
    console.log(`\nPress Item ${i+1}:`);
    console.log(`- Title: ${item.title}`);
    console.log(`- Category: ${item.category}`);
    console.log(`- Date: ${new Date(item.date).toLocaleDateString()}`);
    console.log(`- Summary: ${item.summary.substring(0, 100)}${item.summary.length > 100 ? '...' : ''}`);
    console.log(`- Tags: ${item.tags.join(', ')}`);
    console.log(`- Featured: ${item.featured}`);
  });
  
  return pressItems;
}

// Save data to a file for inspection
function saveToFile(data, filename) {
  const fs = require('fs');
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
  console.log(`Saved ${data.length} press items to ${filename} for inspection.`);
}

// Main test function
async function testNotionPressService() {
  console.log('=== Notion Press Service Test ===\n');
  console.log('This script tests the Notion press service integration\n');
  
  try {
    console.log('Fetching table rows from Notion...');
    const rows = await fetchNotionData();
    
    if (rows.length === 0) {
      console.error('No rows returned from Notion API');
      return;
    }
    
    const pressItems = convertToPressItems(rows);
    
    try {
      saveToFile(pressItems, 'notion-press-items.json');
    } catch (err) {
      console.error('Error saving to file:', err);
    }
    
  } catch (error) {
    console.error('Error in test:', error);
  }
}

// Run the test
testNotionPressService(); 