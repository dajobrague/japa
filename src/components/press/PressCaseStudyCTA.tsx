import React from 'react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import AnimatedButton from '@/components/ui/AnimatedButton';

const PressCaseStudyCTA = () => {
  return (
    <section className="pt-20 pb-0 bg-japa-orange">
      <div className="container-wide">
        <div className="bg-japa-orange rounded-xl p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <AnimationWrapper animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Want to Learn More About JAPA?
                </h2>
                <p className="text-white/90 text-lg mb-10">
                  Discover how our smart parking solutions can transform your organization's parking operations.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton variant="secondary" size="lg" className="bg-white text-japa-orange hover:bg-white/90">
                  Schedule a Demo
                </AnimatedButton>
                <AnimatedButton variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Case Studies
                </AnimatedButton>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressCaseStudyCTA; 