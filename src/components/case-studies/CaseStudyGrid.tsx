import React from 'react';
import { CaseStudy, CaseStudyCategory } from '@/types/caseStudies';
import CaseStudyCard from './CaseStudyCard';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import Pill from '@/components/ui/Pill';
import CaseStudyFilters from './CaseStudyFilters';

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
  category: CaseStudyCategory | 'All';
  onSelectCaseStudy: (id: number) => void;
  categories: CaseStudyCategory[];
  setActiveCategory: (category: CaseStudyCategory | 'All') => void;
}

const CaseStudyGrid: React.FC<CaseStudyGridProps> = ({ 
  caseStudies, 
  category,
  onSelectCaseStudy,
  categories,
  setActiveCategory
}) => {
  // Filter case studies by category if needed
  const filteredCaseStudies = category === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === category);

  return (
    <section id="projects" className="pt-8 pb-16">
      <div className="container-wide">
        <AnimationWrapper animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Pill className="mb-4">Industry Expertise</Pill>
            <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-5">
              {category === 'All' ? 'Success Stories Across Industries' : `${category} Success Stories`}
            </h2>
            <p className="text-lg text-japa-slate/80">
              {category === 'All' 
                ? 'Explore how organizations have transformed their parking operations with our smart solutions.' 
                : `Discover how we've helped ${category} clients solve complex parking challenges.`}
            </p>
          </div>
        </AnimationWrapper>

        <div className="mb-12">
          <CaseStudyFilters 
            categories={categories}
            activeCategory={category} 
            setActiveCategory={setActiveCategory} 
          />
        </div>

        <div className="space-y-8">
          {filteredCaseStudies.length > 0 ? (
            filteredCaseStudies.map((study, index) => (
              <AnimationWrapper 
                key={study.id} 
                animation="fade-up" 
                delay={10}
              >
                <CaseStudyCard 
                  caseStudy={study} 
                  onClick={onSelectCaseStudy} 
                />
              </AnimationWrapper>
            ))
          ) : (
            <AnimationWrapper animation="fade-up">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-xl font-bold text-japa-slate mb-2">No projects found</h3>
                <p className="text-japa-slate/80">We're constantly adding new success stories. Check back soon!</p>
              </div>
            </AnimationWrapper>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid; 