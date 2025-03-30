import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import CaseStudyHero from '@/components/case-studies/CaseStudyHero';
import CaseStudyGrid from '@/components/case-studies/CaseStudyGrid';
import ProjectModal from '@/components/case-studies/ProjectModal';
import CaseStudyCTA from '@/components/case-studies/CaseStudyCTA';
import { caseStudies } from '@/data/caseStudiesData';
import { CaseStudy, CaseStudyCategory } from '@/types/caseStudies';

// Extract unique categories from projects
const categories = Array.from(
  new Set(caseStudies.map(study => study.category))
) as CaseStudyCategory[];

const Projects: React.FC = () => {
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
      <div className="bg-japa-gray/5 relative overflow-hidden pb-0">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-japa-blue/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-japa-orange/5 rounded-full blur-3xl -z-10"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern-light"></div>
        </div>
        
        <CaseStudyHero />
        
        <div className="container-wide mt-6 relative z-10">
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
        <ProjectModal 
          caseStudy={selectedCaseStudy} 
          onClose={handleCloseModal} 
        />
      )}
    </PageLayout>
  );
};

export default Projects;
