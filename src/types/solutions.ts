import { ReactNode } from 'react';

export type FeatureContent = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  tags: string[];
  bgImage: string;
  detailedContent: {
    overview: string;
    benefits: string[];
    technicalDetails: string;
    useCases: {
      title: string;
      description: string;
    }[];
  };
};

export type FAQItem = {
  question: string;
  answer: string;
}; 