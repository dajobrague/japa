import { Client } from '@notionhq/client';
import { FormattedPage, NotionError } from './types';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

export async function getProjectsByCategory(category: string): Promise<FormattedPage[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID!,
      filter: {
        property: 'Category',
        select: {
          equals: category,
        },
      },
    });

    return response.results.map(formatNotionPage);
  } catch (error) {
    const notionError = error as NotionError;
    console.error('Error fetching projects by category:', notionError);
    throw new Error(`Failed to fetch projects: ${notionError.message}`);
  }
}

export async function getAllProjects(): Promise<FormattedPage[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID!,
    });

    return response.results.map(formatNotionPage);
  } catch (error) {
    const notionError = error as NotionError;
    console.error('Error fetching all projects:', notionError);
    throw new Error(`Failed to fetch projects: ${notionError.message}`);
  }
}

export function formatNotionPage(page: any): FormattedPage {
  const properties = page.properties;

  return {
    id: page.id,
    title: properties.Name.title[0]?.plain_text || '',
    description: properties.Description.rich_text[0]?.plain_text || '',
    category: properties.Category.select?.name || '',
    imageUrl: properties.ImageUrl.url || '',
    client: properties.Client.rich_text[0]?.plain_text || '',
    location: properties.Location.rich_text[0]?.plain_text || '',
    date: properties.Date.date?.start || '',
    content: properties.Content.rich_text[0]?.plain_text || '',
  };
} 