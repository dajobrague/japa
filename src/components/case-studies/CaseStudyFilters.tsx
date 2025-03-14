import React from 'react';
import { CaseStudyCategory } from '@/types/caseStudies';
import AnimationWrapper from '@/components/ui/AnimationWrapper';

interface CaseStudyFiltersProps {
  categories: CaseStudyCategory[];
  activeCategory: CaseStudyCategory | 'All';
  setActiveCategory: (category: CaseStudyCategory | 'All') => void;
}

const CaseStudyFilters: React.FC<CaseStudyFiltersProps> = ({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}) => {
  return (
    <AnimationWrapper animation="fade-up">
      <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === 'All'
              ? 'bg-japa-blue text-white shadow-md'
              : 'bg-white text-japa-slate/70 hover:bg-japa-gray/20 border border-gray-200'
          }`}
          onClick={() => setActiveCategory('All')}
        >
          All Case Studies
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-japa-blue text-white shadow-md'
                : 'bg-white text-japa-slate/70 hover:bg-japa-gray/20 border border-gray-200'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </AnimationWrapper>
  );
};

export default CaseStudyFilters; 