import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PressHero from '@/components/press/PressHero';
import PressReleaseList from '@/components/press/PressReleaseList';
import AnimationWrapper from '@/components/common/AnimationWrapper';
import PressFilters from '@/components/press/PressFilters';
import { fetchNotionPressItems } from '@/services/notionPressService';
import { PressCategory, PressItem } from '@/types/press';
import PressCaseStudyCTA from '@/components/press/PressCaseStudyCTA';

const Press: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PressCategory | 'All'>('All');
  const [activeYear, setActiveYear] = useState<string>('All');
  const [filteredReleases, setFilteredReleases] = useState<PressItem[]>([]);
  const [pressReleases, setPressReleases] = useState<PressItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<PressCategory[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  // Load data from Notion when component mounts
  useEffect(() => {
    const loadNotionData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('📢 Press page: Starting to load Notion data...');
        
        const notionData = await fetchNotionPressItems();
        console.log('📢 Press page: Notion data loaded:', notionData.length, 'items');
        
        if (notionData.length === 0) {
          setError('No press releases found. Please try again later.');
          return;
        }
        
        setPressReleases(notionData);
        
        // Update categories and years based on the data
        const cats = Array.from(
          new Set(notionData.map(item => item.category))
        ) as PressCategory[];
        setCategories(cats);
        console.log('📢 Press page: Categories updated:', cats);
        
        const yrs = Array.from(
          new Set(notionData.map(item => new Date(item.date).getFullYear().toString()))
        ).sort((a, b) => parseInt(b) - parseInt(a)); // Sort descending
        setYears(yrs);
        console.log('📢 Press page: Years updated:', yrs);
      } catch (error) {
        console.error('❌ Error loading Notion data:', error);
        setError('Failed to load press releases. Please try again later.');
        setPressReleases([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadNotionData();
  }, []);
  
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
  }, [activeCategory, activeYear, pressReleases]);

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
            
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block w-8 h-8 border-t-2 border-japa-blue rounded-full animate-spin"></div>
                <p className="mt-4 text-japa-slate/70">Loading press releases...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-4 px-4 py-2 bg-japa-blue text-white rounded-lg hover:bg-japa-blue/90 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : filteredReleases.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-japa-slate/70">No press releases found for the selected filters.</p>
              </div>
            ) : (
              <PressReleaseList pressReleases={filteredReleases} />
            )}
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