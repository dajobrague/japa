// Simple test script for Notion API

const NOTION_TOKEN = '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';
const TABLE_BLOCK_ID = '1d376841-73f9-80e2-8ab3-c98d4feae0f0';

async function testNotionAPI() {
  console.log('Testing Notion API direct access...');
  
  try {
    const response = await fetch(`https://api.notion.com/v1/blocks/${TABLE_BLOCK_ID}/children?page_size=100`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28'
      }
    });

    console.log('Response status:', response.status, response.statusText);
    
    if (!response.ok) {
      throw new Error(`Notion API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Data successfully fetched!');
    console.log(`Found ${data.results.length} rows`);
    
    // Check the first row to see if it's valid
    if (data.results.length > 0) {
      console.log('First row type:', data.results[0].type);
      if (data.results[0].type === 'table_row') {
        console.log('Sample cell content:', JSON.stringify(data.results[0].table_row.cells[0], null, 2));
      }
    }
    
    return data;
  } catch (error) {
    console.error('Error testing Notion API:', error);
    return null;
  }
}

// Run the test
testNotionAPI()
  .then(data => {
    if (data) {
      console.log('Test completed successfully.');
    } else {
      console.log('Test failed to fetch data.');
    }
  })
  .catch(err => {
    console.error('Unhandled error in test:', err);
  }); 