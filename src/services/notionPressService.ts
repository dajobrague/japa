// Notion Press Service
// This service provides mock press data for the Press page

import { PressItem, PressCategory } from '@/types/press';

// Mock Notion data
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
    tags: ["AI", "Parking", "Technology"],
    links: {
      pdf: "/assets/documents/press/press-release.pdf",
    }
  }
];

export const fetchNotionPressItems = async (): Promise<PressItem[]> => {
  // Return mock data instead of fetching from Notion
  return MOCK_NOTION_DATA;
};

export const mergeWithExistingPressData = async (existingItems: PressItem[]): Promise<PressItem[]> => {
  // Return mock data instead of merging with existing data
  return MOCK_NOTION_DATA;
}; 