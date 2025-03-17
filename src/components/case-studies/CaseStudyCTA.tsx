import React from 'react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { BarChart, Users, Clock } from 'lucide-react';

const CaseStudyCTA = () => {
  return (
    <section className="pt-20 pb-0 bg-japa-orange">
      <div className="container-wide">
        <div className="bg-japa-orange rounded-xl p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <AnimationWrapper animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-white/90 text-lg mb-10">
                  Join the growing list of organizations that have transformed their parking operations with JAPA's intelligent solutions.
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
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton variant="secondary" size="lg" className="bg-white text-japa-orange hover:bg-white/90">
                  Schedule a Demo
                </AnimatedButton>
                <AnimatedButton variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Download Case Studies
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