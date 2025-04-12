# Notion API Integration for Press Section

This document outlines the steps to test and implement the Notion API integration for the Press section of the JAPA website.

## Prerequisites

- Notion API credentials
  - OAuth Client ID: `1d0d872b-594c-80ea-b1ba-0037932a57a6`
  - Redirect URI: `https://www.parkjapa.com`
  - Client Secret: (You need to obtain this from your Notion integration settings)

## Testing the Connection

We've created a simple command-line tool to test the Notion API connection. This will help validate that the credentials are working correctly before implementing the full integration.

### Running the Test

1. Make sure you have Node.js installed
2. Run the test script:

```bash
npm run test:notion
```

3. Follow the prompts in the terminal:
   - The script will generate an authorization URL - open this in your browser
   - Authorize the integration in Notion
   - You'll be redirected to your redirect URI with a code parameter
   - Copy the code from the URL and paste it back in the terminal
   - Enter your client secret when prompted
   - The script will exchange the code for an access token and test the API connection

### Understanding the Results

If the test is successful, you'll see:
- Confirmation of the access token receipt
- Information about the Notion workspace
- Results from a test API query

If there are errors, the script will display them with details to help troubleshoot.

## Next Steps for Implementation

Once the connection test is successful, the following steps will be needed to fully implement the Notion integration:

1. **Server-Side Implementation**
   - Set up a secure server endpoint to handle the OAuth flow
   - Store the access token securely
   - Implement API calls to fetch press content from Notion

2. **Frontend Implementation**
   - Update the Press page component to fetch data from the server
   - Create components to display the Notion content
   - Implement caching for better performance

3. **Admin Interface**
   - Create a UI for managing the connection to Notion
   - Implement functionality to select which Notion databases/pages to display
   - Add options for content formatting and display settings

## Technical Approach

The implementation will require:

1. **Backend Service**: A secure server component that can:
   - Handle the OAuth flow with Notion
   - Store and manage access tokens
   - Proxy API requests to Notion
   - Cache responses for performance

2. **Frontend Components**:
   - Press item components that can render Notion content
   - Admin interface for managing the integration

3. **Deployment Considerations**:
   - Environment variables for storing secrets
   - Proper error handling
   - Rate limiting to comply with Notion API limits

## Resources

- [Notion API Documentation](https://developers.notion.com/)
- [Notion OAuth Documentation](https://developers.notion.com/docs/authorization)
- [Public Integration Guide](https://developers.notion.com/docs/create-a-notion-integration) 