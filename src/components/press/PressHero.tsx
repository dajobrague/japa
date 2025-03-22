import React from 'react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';

const PressHero = () => {
  return (
    <section className="relative pt-24 pb-16 md:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <AnimationWrapper animation="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-japa-slate mb-6 leading-tight">
            Latest News & <span className="text-japa-orange">Media Resources</span>
          </h1>
          <p className="text-lg md:text-xl text-japa-slate/80 max-w-2xl mx-auto leading-relaxed">
            Stay informed about JAPA's latest announcements, company news, and media resources.
          </p>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default PressHero; 