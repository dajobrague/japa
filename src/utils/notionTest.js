// Notion API Test Script
// This is a utility script to test the connection to Notion API

const NOTION_CLIENT_ID = '1d0d872b-594c-80ea-b1ba-0037932a57a6';
const REDIRECT_URI = 'https://www.parkjapa.com';

/**
 * Step 1: Generate OAuth Authorization URL
 * This is the URL the user needs to visit to authorize the integration
 */
function generateAuthorizationUrl() {
  const authUrl = new URL('https://api.notion.com/v1/oauth/authorize');
  authUrl.searchParams.append('client_id', NOTION_CLIENT_ID);
  authUrl.searchParams.append('response_type', 'code');
  authUrl.searchParams.append('owner', 'user');
  authUrl.searchParams.append('redirect_uri', REDIRECT_URI);
  
  return authUrl.toString();
}

/**
 * Step 2: After authorization, you'll receive a code in the redirect URL
 * This function would exchange that code for an access token
 * Note: This requires server-side implementation with your client secret
 */
async function exchangeCodeForToken(code, clientSecret) {
  try {
    // In a real implementation, this would be a server-side request
    // with proper security for the client secret
    console.log('Would exchange code for token with:', { code, clientSecret });
    
    // Example of the API call (needs to be implemented server-side):
    /*
    const response = await fetch('https://api.notion.com/v1/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${NOTION_CLIENT_ID}:${clientSecret}`).toString('base64')}`
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI
      })
    });

    const data = await response.json();
    return data;
    */
    
    return { message: 'Code exchange simulation - needs server implementation' };
  } catch (error) {
    console.error('Error exchanging code for token:', error);
    return null;
  }
}

/**
 * Step 3: Test making a request to the Notion API with the access token
 */
async function testNotionApi(accessToken) {
  try {
    // Example of querying Notion databases
    console.log('Would query Notion with access token:', accessToken);
    
    /*
    const response = await fetch('https://api.notion.com/v1/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify({
        query: '', // An empty query returns all accessible pages
        sort: {
          direction: 'descending',
          timestamp: 'last_edited_time'
        }
      })
    });

    const data = await response.json();
    return data;
    */
    
    return { message: 'API test simulation - needs implementation with real token' };
  } catch (error) {
    console.error('Error testing Notion API:', error);
    return null;
  }
}

// Usage instructions
console.log('=== Notion API Connection Tester ===');
console.log('To test the Notion connection:');
console.log('1. Get authorization by visiting this URL:');
console.log(generateAuthorizationUrl());
console.log('\n2. After authorization, you will be redirected to your redirect URI with a code parameter');
console.log('3. Extract the code from the URL and use it with your client secret to get an access token');
console.log('4. Use the access token to make API requests to Notion');

// Export functions for use in other files
export {
  generateAuthorizationUrl,
  exchangeCodeForToken,
  testNotionApi
}; 