// Notion Press Service
// This service fetches press data from Notion and converts it to the format expected by the Press page

import { PressItem, PressCategory } from '@/types/press';

// Notion API configuration
const NOTION_TOKEN = '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';
const TABLE_BLOCK_ID = '1d376841-73f9-80e2-8ab3-c98d4feae0f0';

// Mock Notion data for fallback if API fails
const MOCK_NOTION_DATA: PressItem[] = [
  {
    id: 6001,
    title: "JapaParking Revolutionizes Urban Parking Solutions",
    category: "News Release",
    date: new Date().toISOString(),
    slug: "japaparking-revolutionizes-urban-parking-solutions",
    summary: "Innovative smart parking system reduces search time by 60% and decreases urban congestion in major metropolitan areas",
    content: "<p>Innovative smart parking system reduces search time by 60% and decreases urban congestion in major metropolitan areas</p>",
    image: "/assets/images/press/placeholder.png",
    source: {
      name: "JAPA Inc.",
      logo: "/assets/images/japa-logo.svg",
    },
    featured: true,
    tags: ["Parking", "Smart Technology", "Urban"],
    links: {
      pdf: "/assets/documents/press/press-release.pdf",
    }
  },
  {
    id: 6002,
    title: "AI-Powered Parking Management Platform Launches",
    category: "News Release",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
    slug: "ai-powered-parking-management-platform-launches",
    summary: "JapaParking's new AI algorithm predicts parking availability with 95% accuracy, transforming the way drivers find parking spots",
    content: "<p>JapaParking's new AI algorithm predicts parking availability with 95% accuracy, transforming the way drivers find parking spots</p>",
    image: "/assets/images/press/placeholder.png",
    source: {
      name: "JAPA Inc.",
      logo: "/assets/images/japa-logo.svg",
    },
    featured: true,
    tags: ["AI", "Parking", "Innovation"],
    links: {}
  },
  {
    id: 6003,
    title: "Environmental Award for Green Parking Solutions",
    category: "Award",
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 2 weeks ago
    slug: "environmental-award-green-parking-solutions",
    summary: "JAPA receives prestigious Environmental Innovation Award for reducing carbon emissions through efficient parking management",
    content: "<p>JAPA receives prestigious Environmental Innovation Award for reducing carbon emissions through efficient parking management</p>",
    image: "/assets/images/press/placeholder.png",
    source: {
      name: "JAPA Inc.",
      logo: "/assets/images/japa-logo.svg",
    },
    featured: false,
    tags: ["Award", "Sustainability", "Green Technology"],
    links: {}
  }
];

// Determine if we're in development or production
const isDev = import.meta.env.DEV || import.meta.env.MODE === 'development';

// API URL - Use direct API in production, use proxy server in development
// In development, use the current host with the proxy port
const getCurrentHost = () => {
  return window.location.protocol + '//' + window.location.hostname;
};

// Get API base URL dynamically
const getApiBaseUrl = (): string => {
  if (!isDev) {
    // Use direct API in production
    return 'https://api.notion.com/v1';
  }
  
  // Use proxy server in development (running on port 3001)
  const host = getCurrentHost();
  // We need to use the proxy server port 3001, not the current port
  return `${host}:3001/api/notion`;
};

// Helper function to generate a semi-unique ID
const generateId = (): number => {
  return Math.floor(Math.random() * 10000);
};

// Helper function to extract text from rich text objects
const extractText = (richTextArray: any[]): string => {
  if (!richTextArray || richTextArray.length === 0) {
    return '';
  }
  
  return richTextArray.map(rt => rt.plain_text).join('');
};

// Function to format table rows
const formatTableRow = (row: any) => {
  if (row.type !== 'table_row') {
    return null;
  }
  
  const cells = row.table_row.cells;
  const formattedCells = cells.map((cell: any) => {
    const cellText = cell.map((textObj: any) => extractText([textObj])).join(' ');
    return cellText || '';
  });
  
  return formattedCells;
};

// Function to fetch table rows from Notion
const fetchTableRows = async (): Promise<any[]> => {
  try {
    console.log('🔄 Notion Service: Fetching data from Notion API...');
    
    const API_BASE_URL = getApiBaseUrl();
    const url = `${API_BASE_URL}/blocks/${TABLE_BLOCK_ID}/children?page_size=100`;
    console.log('🔄 Notion Service: Request URL:', url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: isDev ? {} : {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28'
      }
    });

    console.log('🔄 Notion Service: API response status:', response.status, response.statusText);

    if (!response.ok) {
      throw new Error(`Notion API error: ${response.status}`);
    }

    const data = await response.json();
    console.log(`🔄 Notion Service: Received ${data.results?.length || 0} rows from Notion`);
    return data.results || [];
  } catch (error) {
    console.error('❌ Notion Service: Error fetching Notion data:', error);
    return [];
  }
};

// Convert Notion table data to PressItem format
const convertToPressItems = (rows: any[]): PressItem[] => {
  // Get headers from first row
  const headerRow = rows[0];
  if (!headerRow || headerRow.type !== 'table_row') {
    return [];
  }
  
  const headers = formatTableRow(headerRow) || [];
  
  // Map column indices to field names
  const titleIndex = headers.findIndex(h => h.includes('Title'));
  const descriptionIndex = headers.findIndex(h => h.includes('Description'));
  const imageIndex = headers.findIndex(h => h.includes('Image'));
  const attachmentsIndex = headers.findIndex(h => h.includes('Attachments'));
  
  // Skip header row and process data rows
  return rows.slice(1).map((row, index) => {
    const cells = formatTableRow(row);
    if (!cells) return null;
    
    // Determine category based on content
    let category: PressCategory = 'News Release';
    const titleLower = cells[titleIndex]?.toLowerCase() || '';
    if (titleLower.includes('award') || titleLower.includes('recognition')) {
      category = 'Award';
    } else if (titleLower.includes('media') || titleLower.includes('feature') || titleLower.includes('coverage')) {
      category = 'Media Coverage';
    } else if (titleLower.includes('update') || titleLower.includes('industry')) {
      category = 'Industry Update';
    }
    
    // Create a date (most recent items first)
    const today = new Date();
    const date = new Date(today);
    date.setDate(today.getDate() - (index * 7)); // Each item is one week apart
    
    // Create a basic HTML content from the description
    const description = cells[descriptionIndex] || '';
    const content = `<p>${description}</p>`;
    
    // Create a slug from the title
    const title = cells[titleIndex] || `Press Release ${index + 1}`;
    const slug = title.toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
    
    // Extract potential image URL from the image field
    let imageUrl = '/assets/images/press/default-press-image.jpg'; // Default image
    const imageText = cells[imageIndex] || '';
    if (imageText.includes('http')) {
      // If there's a URL in the image field, use it
      const urlMatch = imageText.match(/(https?:\/\/[^\s]+)/g);
      if (urlMatch && urlMatch[0]) {
        imageUrl = urlMatch[0];
      }
    } else if (imageText.toLowerCase().includes('placeholder')) {
      // Use our placeholder image for entries that specify a placeholder
      imageUrl = '/assets/images/press/placeholder.png';
    }
    
    // Extract tags from the title and description
    const allText = `${title} ${description}`;
    const tags: string[] = [];
    
    if (allText.toLowerCase().includes('parking')) tags.push('Parking');
    if (allText.toLowerCase().includes('smart')) tags.push('Smart Technology');
    if (allText.toLowerCase().includes('cities') || allText.toLowerCase().includes('urban')) tags.push('Urban');
    if (allText.toLowerCase().includes('ai') || allText.toLowerCase().includes('algorithm')) tags.push('AI');
    if (allText.toLowerCase().includes('data')) tags.push('Data');
    
    // If we don't have at least 2 tags, add some generic ones
    if (tags.length < 2) {
      if (!tags.includes('Smart Technology')) tags.push('Smart Technology');
      if (!tags.includes('Parking')) tags.push('Parking');
    }
    
    // Create the PressItem
    return {
      id: generateId(),
      title,
      category,
      date: date.toISOString(),
      slug,
      summary: description,
      content,
      image: imageUrl,
      source: {
        name: 'JAPA Inc.',
        logo: '/assets/images/japa-logo.svg',
      },
      featured: index < 2, // First two items are featured
      tags,
      links: {
        // Add links if available in the attachments field
        pdf: cells[attachmentsIndex]?.includes('Press Release') ? '/assets/documents/press/press-release.pdf' : undefined,
      }
    };
  }).filter(Boolean) as PressItem[];
};

// Main function to fetch press items from Notion
export const fetchNotionPressItems = async (): Promise<PressItem[]> => {
  try {
    console.log('🔄 Notion Service: Starting fetchNotionPressItems...');
    const rows = await fetchTableRows();
    
    // Check if we have valid data
    if (!rows || rows.length === 0) {
      console.log('⚠️ Notion Service: No data returned from API, using mock data');
      return MOCK_NOTION_DATA;
    }
    
    const items = convertToPressItems(rows);
    console.log(`🔄 Notion Service: Converted ${items.length} items from Notion data`);
    
    // If we couldn't convert any items, use mock data
    if (items.length === 0) {
      console.log('⚠️ Notion Service: No items could be converted, using mock data');
      return MOCK_NOTION_DATA;
    }
    
    return items;
  } catch (error) {
    console.error('❌ Notion Service: Error in fetchNotionPressItems:', error);
    console.log('⚠️ Notion Service: Using mock data due to API error');
    return MOCK_NOTION_DATA;
  }
};

// Function to merge Notion data with existing press data
export const mergeWithExistingPressData = async (existingItems: PressItem[]): Promise<PressItem[]> => {
  try {
    console.log('🔄 Notion Service: Starting mergeWithExistingPressData...');
    console.log(`🔄 Notion Service: Existing items: ${existingItems.length}`);
    
    const notionItems = await fetchNotionPressItems();
    console.log(`🔄 Notion Service: Notion items: ${notionItems.length}`);
    
    // Combine both sources, avoiding duplicates by title
    const combinedItems = [...existingItems];
    
    // Add Notion items that don't exist in the current data
    let newItemsCount = 0;
    notionItems.forEach(notionItem => {
      const exists = existingItems.some(item => 
        item.title.toLowerCase() === notionItem.title.toLowerCase()
      );
      
      if (!exists) {
        combinedItems.push(notionItem);
        newItemsCount++;
      }
    });
    
    console.log(`🔄 Notion Service: Added ${newItemsCount} new items from Notion`);
    
    // Sort by date (newest first)
    const sortedItems = combinedItems.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    console.log(`🔄 Notion Service: Returning ${sortedItems.length} combined items`);
    return sortedItems;
  } catch (error) {
    console.error('❌ Notion Service: Error merging press data:', error);
    return existingItems;
  }
}; 