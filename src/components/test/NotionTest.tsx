import { useState, useEffect } from 'react';
import { fetchNotionPressItems } from '@/services/notionPressService';
import { PressItem } from '@/types/press';

export const NotionTest = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<PressItem[]>([]);
  const [connectionDetails, setConnectionDetails] = useState<{
    token: string;
    tableBlockId: string;
    isDev: boolean;
    apiUrl: string;
  } | null>(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Get environment variables
        const token = import.meta.env.VITE_NOTION_TOKEN;
        const tableBlockId = import.meta.env.VITE_NOTION_TABLE_BLOCK_ID;
        const isDev = import.meta.env.DEV || import.meta.env.MODE === 'development';
        const apiUrl = isDev 
          ? `${window.location.protocol}//${window.location.hostname}:3001/api/notion`
          : 'https://api.notion.com/v1';
        
        setConnectionDetails({
          token: token ? `${token.substring(0, 10)}...` : 'Not set',
          tableBlockId: tableBlockId || 'Not set',
          isDev,
          apiUrl
        });
        
        const items = await fetchNotionPressItems();
        setData(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    testConnection();
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Testing Notion Connection...</h2>
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4 text-red-600">Error Testing Notion Connection</h2>
        <div className="bg-red-50 p-4 rounded-lg mb-4">
          <p className="text-red-700">{error}</p>
        </div>
        
        {connectionDetails && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Connection Details</h3>
            <ul className="space-y-1 text-sm">
              <li><span className="font-medium">Environment:</span> {connectionDetails.isDev ? 'Development' : 'Production'}</li>
              <li><span className="font-medium">API URL:</span> {connectionDetails.apiUrl}</li>
              <li><span className="font-medium">Token:</span> {connectionDetails.token}</li>
              <li><span className="font-medium">Table Block ID:</span> {connectionDetails.tableBlockId}</li>
            </ul>
          </div>
        )}
        
        <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2 text-yellow-800">Troubleshooting Tips</h3>
          <ul className="list-disc pl-5 space-y-1 text-yellow-700">
            <li>Verify your Notion token is correct in the .env file</li>
            <li>Check that the table block ID is correct</li>
            <li>Ensure the proxy server is running when in development mode</li>
            <li>Check that your Notion integration has access to the page</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Notion Connection Test Results</h2>
      <div className="bg-green-50 p-4 rounded-lg mb-4">
        <p className="text-green-700">✅ Successfully connected to Notion API</p>
      </div>
      
      {connectionDetails && (
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-medium mb-2">Connection Details</h3>
          <ul className="space-y-1 text-sm">
            <li><span className="font-medium">Environment:</span> {connectionDetails.isDev ? 'Development' : 'Production'}</li>
            <li><span className="font-medium">API URL:</span> {connectionDetails.apiUrl}</li>
            <li><span className="font-medium">Token:</span> {connectionDetails.token}</li>
            <li><span className="font-medium">Table Block ID:</span> {connectionDetails.tableBlockId}</li>
          </ul>
        </div>
      )}
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Fetched Items ({data.length})</h3>
        {data.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg">
            <h4 className="font-medium">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.category}</p>
            <p className="text-sm text-gray-600">{new Date(item.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 