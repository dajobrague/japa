#!/usr/bin/env node

// Notion Integration Sharing Troubleshooting
// This script helps diagnose why your integration isn't appearing in the sharing menu
import https from 'https';

// Your existing token
const NOTION_TOKEN = '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';

console.log('=== Notion Integration Sharing Troubleshooter ===\n');

// Function to get detailed bot info
async function getBotInfo() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.notion.com',
      port: 443,
      path: '/v1/users/me',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28'
      }
    };
    
    console.log('Retrieving detailed integration information...');
    
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

// Function to check workspace members
async function getWorkspaceUsers() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.notion.com',
      port: 443,
      path: '/v1/users',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28'
      }
    };
    
    console.log('\nChecking workspace members...');
    
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

// Function to provide detailed troubleshooting steps
function provideTroubleshootingSteps(botInfo, usersInfo) {
  console.log('\n=== DIAGNOSIS RESULTS ===');
  
  // Check if the integration is properly set up
  if (botInfo.object === 'user' && botInfo.type === 'bot') {
    console.log('✅ Your integration token is valid');
    console.log(`Bot name: ${botInfo.name}`);
    
    // Check workspace info
    if (botInfo.bot && botInfo.bot.workspace_name) {
      console.log(`Workspace: ${botInfo.bot.workspace_name}`);
    }
    
    // Extract owner info
    if (botInfo.bot && botInfo.bot.owner) {
      console.log(`Owner type: ${botInfo.bot.owner.type}`);
    }
    
    // List workspace members
    if (usersInfo.results && usersInfo.results.length > 0) {
      console.log(`\nWorkspace has ${usersInfo.results.length} members:`);
      usersInfo.results.forEach((user, index) => {
        console.log(`${index + 1}. ${user.name} (${user.type})`);
      });
    }
    
    console.log('\n=== TROUBLESHOOTING STEPS ===');
    console.log('The integration doesn\'t appear in the sharing menu because:');
    console.log('1. It might be set up as a public integration instead of an internal integration');
    console.log('2. The page might be in a different workspace than the integration');
    console.log('3. The integration might not have the correct capabilities');
    
    console.log('\n=== SOLUTION OPTIONS ===');
    
    console.log('\nOPTION 1: Create a new internal integration in the correct workspace');
    console.log('1. Go to https://www.notion.so/my-integrations');
    console.log('2. Click "New integration"');
    console.log('3. Name: "JAPA Press Integration"');
    console.log('4. Make sure to select the SAME workspace as your press page');
    console.log('5. Under "Capabilities":');
    console.log('   - Select "Read content"');
    console.log('   - Select "Update content" if you need to modify content');
    console.log('   - Select "Insert content" if needed');
    console.log('6. Under "Associated workspace", select the workspace where your page is');
    console.log('7. Save and copy the new "Internal Integration Secret"');
    
    console.log('\nOPTION 2: Find the correct database ID directly');
    console.log('1. Open your Notion press page in the browser');
    console.log('2. Look at the URL, which should look like:');
    console.log('   https://www.notion.so/workspace/JapaParking-Press-Coverage-1d37684173f98022bfaee1e25582072f');
    console.log('3. The last part (1d37684173f98022bfaee1e25582072f) is your page ID');
    console.log('4. Format it with hyphens to use in the API: 1d376841-73f9-8022-bfae-e1e25582072f');
    
    console.log('\n=== VERIFICATION ===');
    console.log('After creating a new integration:');
    console.log('1. Share your page with the new integration');
    console.log('2. Update the token in your code to the new one');
    console.log('3. Run the workspace scanner again to verify access');
  } else {
    console.log('❌ There is an issue with your integration token');
    console.log('Please create a new internal integration following Option 1 above');
  }
}

// Main function
async function main() {
  try {
    // Get bot info
    const botInfo = await getBotInfo();
    
    // Get workspace users
    const usersInfo = await getWorkspaceUsers();
    
    // Provide troubleshooting
    provideTroubleshootingSteps(botInfo, usersInfo);
    
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
  }
}

// Run the main function
main(); 