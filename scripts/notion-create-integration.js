#!/usr/bin/env node

// Notion Integration Creation Guide
// This script provides guidance on creating a new integration and connecting it
import https from 'https';

// Your existing token
const NOTION_TOKEN = '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';

console.log('=== Notion Integration Troubleshooting Guide ===\n');

// Function to get user info
async function getUserInfo() {
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
    
    console.log('Trying to get user information...');
    
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

// Main function
async function main() {
  try {
    // Try to get user information
    const userInfo = await getUserInfo();
    
    // Output the response
    console.log('\nAPI Response:');
    console.log(JSON.stringify(userInfo, null, 2));
    
    if (userInfo.object === 'error') {
      console.log('\n❌ Error with token. Here are some possible issues:');
      console.log('1. The token may be invalid or expired');
      console.log('2. The token might be for a different workspace');
      console.log('3. The API endpoint might have changed');
      
      console.log('\n✅ Here\'s how to create a new integration:');
      console.log('1. Go to https://www.notion.so/my-integrations');
      console.log('2. Click "New integration"');
      console.log('3. Give it a name (e.g., "JAPA Press Integration")');
      console.log('4. Select the workspace you want to connect to');
      console.log('5. Under "Capabilities", ensure the following are selected:');
      console.log('   - Read content');
      console.log('   - No user information');
      console.log('6. Save the integration');
      console.log('7. Copy the "Internal Integration Token" (it starts with "secret_")');

      console.log('\n✅ After creating your integration:');
      console.log('1. Go to the Notion page you want to access');
      console.log('2. Click "Share" in the top right corner');
      console.log('3. In the "Invite" field, type "@" and select your integration');
      console.log('4. Click "Invite"');
      
      console.log('\nThis gives your integration permission to access that specific page.');
      console.log('Once done, run the workspace scanner again to see if it appears.\n');
    } else {
      console.log('\n✅ Your token is valid and associated with:');
      console.log(`User: ${userInfo.name}`);
      console.log(`Type: ${userInfo.type}`);
      
      console.log('\nHowever, you still don\'t have access to any pages or databases.');
      console.log('This means you need to share specific pages with your integration:');
      console.log('1. Go to the Notion page you want to access');
      console.log('2. Click "Share" in the top right corner');
      console.log('3. In the "Invite" field, type "@" and select your integration');
      console.log('4. Click "Invite"');

      console.log('\nAfter sharing, run the workspace scanner again to see the pages.\n');
    }
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
  }
}

// Run the main function
main(); 