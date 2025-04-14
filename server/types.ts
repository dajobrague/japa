import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export interface NotionResponse {
  results: NotionPage[];
  hasMore: boolean;
  nextCursor?: string;
}

export interface NotionPage {
  id: string;
  properties: {
    Name: {
      title: Array<{
        text: {
          content: string;
        };
      }>;
    };
    Description: {
      rich_text: Array<{
        text: {
          content: string;
        };
      }>;
    };
    Image: {
      files: Array<{
        file: {
          url: string;
        };
      }>;
    };
    Category: {
      select: {
        name: string;
      };
    };
  };
}

export interface FormattedPage {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  client: string;
  location: string;
  date: string;
  content: string;
}

export interface NotionError extends Error {
  code?: string;
  status?: number;
} 