import React from 'react';
import { CaseStudy } from '@/types/caseStudies';
import { ArrowRight } from 'lucide-react';
import Pill from '@/components/ui/Pill';
import AnimatedButton from '@/components/ui/AnimatedButton';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onClick: (id: number) => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, onClick }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
          <div className="relative h-64 mb-4 lg:mb-0 overflow-hidden rounded-lg">
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title} 
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color || 'from-japa-blue/20 to-japa-blue/30'} opacity-60`}></div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <Pill variant="secondary" className="mb-3">{caseStudy.category}</Pill>
          <h3 className="text-xl md:text-2xl font-bold text-japa-slate mb-3 line-clamp-2">{caseStudy.title}</h3>
          <p className="text-japa-slate/80 mb-6 line-clamp-3">
            {caseStudy.description}
          </p>
          
          <div className="mb-6">
            <h4 className="font-medium text-japa-slate mb-3">Key Results:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {caseStudy.results.slice(0, 4).map((result, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-japa-blue rounded-full"></span>
                  <span className="text-japa-slate/80">{result}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-japa-slate/70">
              <span className="font-medium text-japa-blue">{caseStudy.stats.improvement}</span> improvement
              <span className="mx-2">•</span>
              <span className="font-medium text-japa-blue">{caseStudy.stats.timeframe}</span> timeframe
            </div>
            
            <AnimatedButton 
              variant="primary" 
              size="sm"
              icon={<ArrowRight size={16} />}
              onClick={() => onClick(caseStudy.id)}
            >
              Read Details
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard; 