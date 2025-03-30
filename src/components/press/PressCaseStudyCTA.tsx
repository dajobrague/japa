import React from 'react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { useDemoForm } from '@/contexts/DemoFormContext';

const PressCaseStudyCTA = () => {
  const { openDemoForm } = useDemoForm();

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
                <AnimatedButton 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-japa-orange hover:bg-white/90"
                  onClick={openDemoForm}
                >
                  Schedule a Demo
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