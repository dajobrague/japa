import React from 'react';
import { PressCategory } from '@/types/press';

interface PressFiltersProps {
  categories: PressCategory[];
  years: string[];
  activeCategory: PressCategory | 'All';
  activeYear: string;
  setActiveCategory: (category: PressCategory | 'All') => void;
  setActiveYear: (year: string) => void;
}

const PressFilters: React.FC<PressFiltersProps> = ({ 
  categories, 
  years,
  activeCategory, 
  activeYear,
  setActiveCategory, 
  setActiveYear 
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
      <div className="flex flex-wrap gap-2 justify-center md:mr-4">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
          ${activeCategory === 'All' 
            ? 'bg-japa-orange text-white' 
            : 'bg-gray-100 text-japa-slate hover:bg-gray-200'}`}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
            ${activeCategory === category 
              ? 'bg-japa-orange text-white' 
              : 'bg-gray-100 text-japa-slate hover:bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="flex items-center justify-center">
        <span className="text-sm text-japa-slate/70 mr-2">Year:</span>
        <select
          value={activeYear}
          onChange={(e) => setActiveYear(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-japa-orange/50"
        >
          <option value="All">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PressFilters; 