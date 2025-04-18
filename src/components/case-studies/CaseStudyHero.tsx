import React from 'react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import Pill from '@/components/ui/Pill';
import { ChevronRight } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { useDemoForm } from '@/contexts/DemoFormContext';

const CaseStudyHero = () => {
  const { openDemoForm } = useDemoForm();
  
  return (
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-14 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern-light"></div>
      </div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimationWrapper animation="fade-right">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-japa-slate mb-6 leading-tight">
                Real Results from <span className="text-japa-blue">Real Clients</span>
              </h1>
              <p className="text-lg md:text-xl text-japa-slate/80 max-w-xl mb-8 leading-relaxed">
                Explore how our smart parking solutions have delivered measurable improvements for organizations across various sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <AnimatedButton 
                  variant="primary" 
                  size="lg"
                  onClick={openDemoForm}
                >
                  Schedule a Demo
                </AnimatedButton>
                <AnimatedButton 
                  variant="secondary" 
                  size="lg"
                  icon={<ChevronRight className="w-4 h-4" />}
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Projects
                </AnimatedButton>
              </div>
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-left" delay={100}>
            <div className="relative mt-10 lg:mt-0">
              <div className="relative bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <blockquote className="text-lg italic text-japa-slate/80">
                    "The Data JAPA provides for my parking operation helps manage our inventory and our commuters are happier!"
                  </blockquote>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-japa-blue/10 flex items-center justify-center text-japa-blue font-bold">YJ</div>
                  <div className="ml-3">
                    <p className="font-bold text-japa-slate">Yasser Jabbari</p>
                    <p className="text-sm text-japa-slate/70">Parking Director, UC Riverside</p>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-japa-blue/10 rounded-full"></div>
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-japa-orange/10 rounded-full"></div>
              </div>

              <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-japa-blue/10 to-japa-blue/30 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-japa-orange/10 to-japa-orange/30 rounded-full opacity-50 blur-xl"></div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero; 