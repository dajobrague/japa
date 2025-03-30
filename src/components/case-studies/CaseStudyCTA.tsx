import React from 'react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { BarChart, Users, Clock, ArrowDown } from 'lucide-react';
import { useDemoForm } from '@/contexts/DemoFormContext';

const CaseStudyCTA = () => {
  const { openDemoForm } = useDemoForm();

  return (
    <section className="pt-20 pb-0 bg-japa-orange">
      <div className="container-wide">
        <div className="bg-japa-orange rounded-xl p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <AnimationWrapper animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                  Ready to See Similar Results <span className="text-white font-extrabold">for Your Organization?</span>
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Explore how our smart parking solutions can enhance your parking operations, improve user satisfaction, and increase revenue.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="bg-white/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <BarChart className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Improved Efficiency</h3>
                  <p className="text-white/80 text-sm">
                    On average, our clients see a 35% improvement in parking utilization.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="bg-white/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Happier Users</h3>
                  <p className="text-white/80 text-sm">
                    Our solutions consistently deliver 90%+ satisfaction ratings among end users.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="bg-white/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Quick ROI</h3>
                  <p className="text-white/80 text-sm">
                    Most clients achieve full return on investment within 12-18 months.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <AnimatedButton 
                  variant="primary" 
                  size="lg"
                  className="bg-white text-japa-orange hover:bg-white/90 border-none"
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

export default CaseStudyCTA; 