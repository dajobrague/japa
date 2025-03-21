import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PressHero from '@/components/press/PressHero';
import PressReleaseList from '@/components/press/PressReleaseList';
// import PressCTA from '@/components/press/PressCTA';
// import PressKitSection from '@/components/press/PressKitSection';
// import PressContactSection from '@/components/press/PressContactSection';
import PressFilters from '@/components/press/PressFilters';
import { pressReleases } from '@/data/pressData';
import { PressCategory, PressItem } from '@/types/press';
import PressCaseStudyCTA from '@/components/press/PressCaseStudyCTA';

// Extract unique categories from press releases
const categories = Array.from(
  new Set(pressReleases.map(item => item.category))
) as PressCategory[];

const Press: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PressCategory | 'All'>('All');
  const [activeYear, setActiveYear] = useState<string>('All');
  const [filteredReleases, setFilteredReleases] = useState<PressItem[]>(pressReleases);
  
  // Extract available years from press releases
  const years = Array.from(
    new Set(pressReleases.map(item => new Date(item.date).getFullYear().toString()))
  ).sort((a, b) => parseInt(b) - parseInt(a)); // Sort descending
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    // Filter press releases based on selected category and year
    let filtered = [...pressReleases];
    
    if (activeCategory !== 'All') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    if (activeYear !== 'All') {
      filtered = filtered.filter(item => 
        new Date(item.date).getFullYear().toString() === activeYear
      );
    }
    
    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    setFilteredReleases(filtered);
  }, [activeCategory, activeYear]);

  return (
    <PageLayout>
      <div className="pb-0">
        <PressHero />
        
        <div className="container mx-auto px-4 mt-16" id="press-releases">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-8 text-center">
              Press Releases & Media Coverage
            </h2>
            
            <PressFilters 
              categories={categories}
              years={years}
              activeCategory={activeCategory} 
              activeYear={activeYear}
              setActiveCategory={setActiveCategory}
              setActiveYear={setActiveYear}
            />
            
            <PressReleaseList pressReleases={filteredReleases} />
          </div>
          
          {/* Press kit section hidden for now but can be added later */}
          {/* <PressKitSection /> */}
        </div>
        
        <PressCaseStudyCTA />
      </div>
    </PageLayout>
  );
};

export default Press; 