export type CaseStudyCategory = 'University' | 'City Center' | 'Stadium' | 'Healthcare' | 'Airport';

export interface CaseStudy {
  id: number;
  title: string;
  category: CaseStudyCategory;
  slug: string;
  description: string;
  image: string;
  results: string[];
  stats: {
    improvement: string;
    timeframe: string;
    satisfaction: string;
  };
  client: {
    name: string;
    logo?: string;
    testimonial?: {
      quote: string;
      author: string;
      position: string;
    };
  };
  challenges: string[];
  solution: string;
  implementation: string;
  outcomes: string;
  color: string;
  detailsUrl?: string;
} 