import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import CaseStudyHero from '@/components/case-studies/CaseStudyHero';
import CaseStudyGrid from '@/components/case-studies/CaseStudyGrid';
import CaseStudyCTA from '@/components/case-studies/CaseStudyCTA';
import CaseStudyModal from '@/components/case-studies/CaseStudyModal';
import { caseStudies } from '@/data/caseStudiesData';
import { CaseStudy, CaseStudyCategory } from '@/types/caseStudies';

// Extract unique categories from case studies
const categories = Array.from(
  new Set(caseStudies.map(study => study.category))
) as CaseStudyCategory[];

const CaseStudies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CaseStudyCategory | 'All'>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelectCaseStudy = (id: number) => {
    const caseStudy = caseStudies.find(cs => cs.id === id);
    if (caseStudy) {
      setSelectedCaseStudy(caseStudy);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  };

  const handleCloseModal = () => {
    setSelectedCaseStudy(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

  return (
    <PageLayout>
      <div className="pb-24">
        <CaseStudyHero />
        
        <div className="container mx-auto px-4 mt-16">
          <CaseStudyGrid 
            caseStudies={caseStudies} 
            category={activeCategory} 
            onSelectCaseStudy={handleSelectCaseStudy}
            categories={categories}
            setActiveCategory={setActiveCategory}
          />
        </div>
        
        <CaseStudyCTA />
      </div>

      {selectedCaseStudy && (
        <CaseStudyModal 
          caseStudy={selectedCaseStudy} 
          onClose={handleCloseModal} 
        />
      )}
    </PageLayout>
  );
};

export default CaseStudies;
