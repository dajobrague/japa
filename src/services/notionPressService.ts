// Notion Press Service
// This service fetches press data from the Notion database

import { PressItem, PressCategory } from '@/types/press';

// Notion API configuration
const NOTION_API_BASE = '/api/notion';
const PRESS_DATABASE_ID = 'a27fd039f4b94d82a0ead9a45ffef625'; // From your Notion URL

// Helper function to extract plain text from Notion rich text
const extractPlainText = (richText: any[]): string => {
  if (!richText || !Array.isArray(richText)) return '';
  return richText.map(text => text.plain_text || '').join('');
};

// Helper function to extract date from Notion date property
const extractDate = (dateProperty: any): string => {
  if (!dateProperty || !dateProperty.date) return new Date().toISOString();
  return new Date(dateProperty.date.start).toISOString();
};

// Helper function to extract select property
const extractSelect = (selectProperty: any): string => {
  if (!selectProperty || !selectProperty.select) return '';
  return selectProperty.select.name || '';
};

// Helper function to extract URL from Notion files
const extractImageUrl = (filesProperty: any): string => {
  if (!filesProperty || !filesProperty.files || !Array.isArray(filesProperty.files)) {
    return '/assets/images/press/placeholder.png';
  }
  
  const firstFile = filesProperty.files[0];
  if (!firstFile) return '/assets/images/press/placeholder.png';
  
  // Handle both external and internal file types
  if (firstFile.type === 'external' && firstFile.external?.url) {
    return firstFile.external.url;
  } else if (firstFile.type === 'file' && firstFile.file?.url) {
    return firstFile.file.url;
  }
  
  return '/assets/images/press/placeholder.png';
};

// Transform Notion database results to PressItem format
const transformNotionToPressItem = (notionPage: any): PressItem | null => {
  try {
    const properties = notionPage.properties;
    
    // Extract required fields
    const title = extractPlainText(properties.Title?.title || properties.Name?.title || []);
    const category = extractSelect(properties.Category || properties.Type);
    const date = extractDate(properties.Date || properties['Published Date']);
    
    if (!title) {
      console.warn('Skipping Notion page without title:', notionPage.id);
      return null;
    }

    // Create slug from title
    const slug = title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    const pressItem: PressItem = {
      id: parseInt(notionPage.id.replace(/-/g, '').substring(0, 8), 16), // Convert ID to number
      title,
      category: (category || 'News Release') as PressCategory,
      date,
      slug,
      summary: extractPlainText(properties.Summary?.rich_text || properties.Description?.rich_text || []) || title,
      content: extractPlainText(properties.Content?.rich_text || []) || `<p>${title}</p>`,
      image: extractImageUrl(properties.Image || properties.Photo),
      source: {
        name: extractPlainText(properties.Source?.rich_text || []) || 'JAPA Inc.',
        logo: '/assets/images/japa-logo.svg',
      },
      featured: properties.Featured?.checkbox || false,
      tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      links: {
        pdf: extractPlainText(properties['PDF Link']?.rich_text || []) || undefined,
        externalArticle: extractPlainText(properties['External Link']?.rich_text || []) || undefined,
      }
    };

    return pressItem;
  } catch (error) {
    console.error('Error transforming Notion page to PressItem:', error, notionPage);
    return null;
  }
};

export const fetchNotionPressItems = async (): Promise<PressItem[]> => {
  try {
    console.log('🔄 Fetching press items from public Notion database...');
    
    // Import and use the public service
    const { fetchPublicNotionPressItems } = await import('./notionPublicService');
    return await fetchPublicNotionPressItems();

  } catch (error) {
    console.error('❌ Error fetching press items from Notion:', error);
    
    // Return empty array instead of mock data on error
    // This allows the UI to show a proper "no items" state
    return [];
  }
};

export const mergeWithExistingPressData = async (existingItems: PressItem[]): Promise<PressItem[]> => {
  try {
    const notionItems = await fetchNotionPressItems();
    
    // Combine Notion items with existing items, removing duplicates by slug
    const allItems = [...notionItems, ...existingItems];
    const uniqueItems = allItems.filter((item, index, self) => 
      index === self.findIndex(t => t.slug === item.slug)
    );
    
    // Sort by date (newest first)
    return uniqueItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('❌ Error merging press data:', error);
    return existingItems;
  }
}; 