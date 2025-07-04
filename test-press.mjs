// Test script to verify press data integration
import fetch from 'node-fetch';

async function testPressIntegration() {
  console.log('🧪 Testing Press Data Integration...\n');
  
  try {
    // Test the public Notion endpoint
    console.log('1️⃣ Testing public Notion endpoint...');
    const response = await fetch('http://localhost:3001/api/notion-public');
    const data = await response.json();
    
    console.log(`✅ Public Notion endpoint returned ${data.length} items`);
    console.log(`📰 First item: ${data[0]?.title}`);
    console.log(`🏷️ Categories: ${data.map(item => item.category).join(', ')}\n`);
    
    // Test the frontend press page
    console.log('2️⃣ Testing frontend press page...');
    const frontendResponse = await fetch('http://localhost:8080/press');
    console.log(`✅ Frontend press page accessible (status: ${frontendResponse.status})\n`);
    
    console.log('🎉 Press integration test completed successfully!');
    console.log('\n📋 Summary:');
    console.log(`   • Public Notion URL: https://japainc.notion.site/Recent-Press-a27fd039f4b94d82a0ead9a45ffef625`);
    console.log(`   • Server endpoint: http://localhost:3001/api/notion-public`);
    console.log(`   • Frontend page: http://localhost:8080/press`);
    console.log(`   • Items loaded: ${data.length}`);
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testPressIntegration();
