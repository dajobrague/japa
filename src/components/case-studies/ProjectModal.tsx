import React from 'react';
import { CaseStudy } from '@/types/caseStudies';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';

interface ProjectModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 bg-japa-slate/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-japa-gray/10 transition-colors z-10"
          onClick={onClose}
        >
          <X className="w-5 h-5 text-japa-slate" />
        </button>
        
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/90 to-transparent flex flex-col justify-end p-8">
            <div className="absolute top-4 left-4">
              <span className="inline-block bg-white/90 backdrop-blur-sm text-japa-slate text-xs font-medium px-3 py-1 rounded-full">
                {caseStudy.category}
              </span>
            </div>
            
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{caseStudy.title}</h2>
              <p className="text-white/90 md:text-lg mb-0">{caseStudy.description}</p>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-japa-gray/10 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-japa-blue">{caseStudy.stats.improvement}</p>
              <p className="text-sm text-japa-slate/70">Improvement</p>
            </div>
            <div className="bg-japa-gray/10 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-japa-blue">{caseStudy.stats.satisfaction}</p>
              <p className="text-sm text-japa-slate/70">Satisfaction</p>
            </div>
            <div className="bg-japa-gray/10 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-japa-blue">{caseStudy.stats.timeframe}</p>
              <p className="text-sm text-japa-slate/70">Timeframe</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-japa-slate mb-4">Client Testimonial</h3>
            {caseStudy.client.testimonial ? (
              <div className="bg-japa-gray/10 p-6 rounded-lg relative">
                <div className="mb-4">
                  <blockquote className="text-lg italic text-japa-slate/80">
                    "{caseStudy.client.testimonial.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-japa-blue/10 flex items-center justify-center text-japa-blue font-bold text-sm">
                    {caseStudy.client.testimonial.author.split(' ').map(word => word[0]).join('')}
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-japa-slate">{caseStudy.client.testimonial.author}</p>
                    <p className="text-sm text-japa-slate/70">{caseStudy.client.testimonial.position}, {caseStudy.client.name}</p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 text-japa-blue/10 text-6xl font-serif">"</div>
              </div>
            ) : (
              <p className="text-japa-slate/80">No testimonial available for this project.</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-japa-slate mb-4">Challenges</h3>
              <ul className="space-y-3">
                {caseStudy.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-japa-blue mt-0.5" />
                    <span className="text-japa-slate/80">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-japa-slate mb-4">Results</h3>
              <ul className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-japa-blue mt-0.5" />
                    <span className="text-japa-slate/80">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-japa-slate mb-4">Solution</h3>
            <p className="text-japa-slate/80 mb-4">{caseStudy.solution}</p>
            <h4 className="font-bold text-japa-slate mb-2">Implementation</h4>
            <p className="text-japa-slate/80 mb-4">{caseStudy.implementation}</p>
            <h4 className="font-bold text-japa-slate mb-2">Outcomes</h4>
            <p className="text-japa-slate/80">{caseStudy.outcomes}</p>
          </div>
          
          <div className="bg-japa-gray/10 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-japa-slate mb-3">Ready to achieve similar results?</h3>
            <p className="text-japa-slate/80 mb-4">Let's discuss how JAPA's smart parking solutions can address your specific challenges.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <AnimatedButton variant="primary" size="sm">
                Schedule a Consultation
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 