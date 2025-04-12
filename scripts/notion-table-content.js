#!/usr/bin/env node

// Notion Table Content Fetcher
// This script fetches the content of the table in the press coverage page
import https from 'https';
import fs from 'fs';

// Configuration
const NOTION_TOKEN = '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';
const PAGE_ID = '1d376841-73f9-8022-bfae-e1e25582072f';
const TABLE_BLOCK_ID = '1d376841-73f9-80e2-8ab3-c98d4feae0f0'; // ID of the table block from previous script
const OUTPUT_FILE = 'notion-table-content.json';

console.log('=== Notion Table Content Fetcher ===\n');
console.log(`Fetching table content from block ID: ${TABLE_BLOCK_ID}`);

// Function to fetch table rows (child blocks of the table)
async function getTableRows(blockId) {
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
    
    console.log('\nFetching table rows...');
    
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

// Function to format a table row for display
function formatTableRow(row) {
  if (row.type !== 'table_row') {
    return `Not a table row: ${row.type}`;
  }
  
  const cells = row.table_row.cells;
  const formattedCells = cells.map(cell => {
    const cellText = cell.map(textObj => extractText([textObj])).join(' ');
    return cellText || '(empty)';
  });
  
  return formattedCells;
}

// Function to transform table data into a structured format
function structureTableData(rows) {
  // First, convert all rows to a simpler format
  const formattedRows = rows.map(row => formatTableRow(row));
  
  // Extract assumed headers (first row)
  const headers = formattedRows[0] || ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
  
  // Create structured objects from the data rows
  const structuredData = formattedRows.slice(1).map(row => {
    const rowData = {};
    headers.forEach((header, index) => {
      rowData[header] = row[index] || '';
    });
    return rowData;
  });
  
  return {
    headers,
    data: structuredData
  };
}

// Main function
async function main() {
  try {
    // Fetch table rows
    const tableRowsResponse = await getTableRows(TABLE_BLOCK_ID);
    
    if (tableRowsResponse.object === 'error') {
      console.error(`\nError: ${tableRowsResponse.message}`);
      return;
    }
    
    const rows = tableRowsResponse.results;
    console.log(`\nFound ${rows.length} rows in the table.`);
    
    // Display table content
    if (rows.length > 0) {
      console.log('\nTable Content:');
      
      rows.forEach((row, index) => {
        const formattedRow = formatTableRow(row);
        console.log(`Row ${index + 1}: ${JSON.stringify(formattedRow)}`);
      });
      
      // Structure the data
      const structuredData = structureTableData(rows);
      console.log('\nHeaders:', structuredData.headers);
      console.log(`\nStructured data (${structuredData.data.length} records):`);
      
      // Display first few records
      const previewCount = Math.min(3, structuredData.data.length);
      for (let i = 0; i < previewCount; i++) {
        console.log(`\nRecord ${i + 1}:`);
        Object.entries(structuredData.data[i]).forEach(([key, value]) => {
          console.log(`  ${key}: ${value}`);
        });
      }
    }
    
    // Save the full data to file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify({
      rawRows: rows,
      structuredData: structureTableData(rows)
    }, null, 2));
    
    console.log(`\nFull table data saved to ${OUTPUT_FILE} for detailed inspection.`);
    
    // Provide next steps
    console.log('\n=== NEXT STEPS ===');
    console.log('1. Review the table structure and content above');
    console.log('2. Examine the full JSON in the output file');
    console.log('3. Use this structure to create a data model for your press section');
    console.log('4. Implement the Notion integration in your website code');
    
  } catch (error) {
    console.error(`\nError: ${error.message}`);
  }
}

// Run the main function
main(); 