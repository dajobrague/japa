export type PressCategory = 'Press Release' | 'News Release' | 'Media Coverage' | 'Award' | 'Industry Update' | 'Case Study';

export interface PressItem {
  id: number;
  title: string;
  category: PressCategory;
  date: string; // ISO date string
  slug: string;
  summary: string;
  content: string;
  image: string;
  source?: {
    name: string;
    logo?: string;
    url?: string;
  };
  featured: boolean;
  tags: string[];
  links?: {
    pdf?: string;
    externalArticle?: string;
    video?: string;
  };
}

export interface PressKit {
  id: number;
  title: string;
  description: string;
  assets: {
    logos?: {
      name: string;
      preview: string;
      download: string;
    }[];
    images?: {
      name: string;
      preview: string;
      download: string;
    }[];
    documents?: {
      name: string;
      description: string;
      download: string;
    }[];
  };
}

export interface PressContact {
  name: string;
  position: string;
  email: string;
  phone?: string;
  image?: string;
} 