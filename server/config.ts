import dotenv from 'dotenv';

dotenv.config();

export interface ServerConfig {
  port: number;
  notionApiKey: string;
  notionApiUrl: string;
  corsOrigin: string;
}

export interface NotionConfig {
  token: string;
  databaseId: string;
  version: string;
  baseUrl: string;
}

export const validateConfig = () => {
  const requiredEnvVars = ['NOTION_API_KEY', 'NOTION_DATABASE_ID'];
  const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

  if (missingEnvVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
  }
};

export const SERVER_CONFIG: ServerConfig = {
  port: parseInt(process.env.PORT || '3001', 10),
  notionApiKey: process.env.NOTION_API_KEY || '',
  notionApiUrl: process.env.NOTION_API_URL || 'https://api.notion.com/v1',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000'
};

export const NOTION_CONFIG: NotionConfig = {
  token: process.env.NOTION_API_KEY || '',
  databaseId: process.env.NOTION_DATABASE_ID || '',
  version: '2022-06-28',
  baseUrl: 'https://api.notion.com/v1'
};

validateConfig();