import React from 'react';
import { Check, ChevronRight, BarChart3 } from 'lucide-react';
import Pill from '@/components/ui/Pill';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';

const SolutionsHero: React.FC = () => {
  return (
    <section className="pt-24 pb-20 md:py-28 overflow-hidden bg-gradient-to-br from-japa-gray/40 via-white to-japa-blue/5">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern-light"></div>
      </div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimationWrapper animation="fade-right">
            <div>
              <Pill className="mb-5">Our Solutions</Pill>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-japa-slate mb-6 leading-tight">
                Transforming <span className="text-japa-blue">Parking</span> Into a Smart Experience
              </h1>
              <p className="text-lg md:text-xl text-japa-slate/80 max-w-xl mb-8 leading-relaxed">
                JAPA's comprehensive solutions turn traditional parking infrastructure into intelligent, data-driven systems that create seamless experiences for both operators and users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <AnimatedButton 
                  variant="primary" 
                  onClick={() => {
                    document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Try Interactive Demo
                </AnimatedButton>
                <AnimatedButton 
                  variant="secondary" 
                  icon={<ChevronRight className="w-4 h-4" />}
                  onClick={() => {
                    document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Solutions
                </AnimatedButton>
              </div>
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-left" delay={200}>
            <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-bl from-japa-blue/10 to-transparent w-40 h-40 rounded-bl-[100px]"></div>
              <h3 className="text-xl font-bold text-japa-slate mb-4">Featured Solution</h3>
              <div className="bg-japa-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="text-japa-blue w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-japa-slate mb-3">Real-Time Analytics Dashboard</h4>
              <p className="text-japa-slate/80 mb-6">
                Our most popular solution gives you complete visibility into parking patterns with intuitive visualizations and actionable insights.
              </p>
              <ul className="space-y-2 mb-6">
                {["Occupancy heatmaps", "Peak time analysis", "Revenue optimization", "Violation tracking"].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-japa-slate/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#analytics" className="inline-flex items-center text-japa-blue hover:text-japa-darkBlue font-medium">
                Learn more about analytics <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero; 