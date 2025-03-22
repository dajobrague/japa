import React from 'react';
import { Check, ChevronRight, BarChart3, CalendarCheck } from 'lucide-react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { useDemoForm } from "@/contexts/DemoFormContext";

const SolutionsHero: React.FC = () => {
  const { openDemoForm } = useDemoForm();
  
  return (
    <section className="pt-24 pb-20 md:pt-28 md:pb-24 overflow-hidden relative">
      {/* Background pattern - keeping decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern-light"></div>
      </div>
      
      {/* Enhanced decorative elements with more orange */}
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-japa-orange opacity-[0.1] rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-japa-orange opacity-[0.1] rounded-full blur-2xl -z-10"></div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimationWrapper animation="fade-right">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-japa-slate mb-6 leading-tight">
                Transforming <span className="text-japa-orange">Parking</span> Into a Smart Experience
              </h1>
              <p className="text-lg md:text-xl text-japa-slate/80 max-w-xl mb-8 leading-relaxed">
                JAPA's comprehensive solutions turn traditional parking infrastructure into intelligent, data-driven systems that create seamless experiences for both operators and users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <AnimatedButton 
                  variant="primary" 
                  className="bg-japa-orange text-white hover:bg-japa-orange/90"
                  onClick={openDemoForm}
                >
                  <div className="flex items-center gap-2">
                    <CalendarCheck size={18} />
                    <span>Schedule a Demo</span>
                  </div>
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
            <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-japa-orange/20 overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-bl from-japa-orange/20 to-transparent w-40 h-40 rounded-bl-[100px]"></div>
              <h3 className="text-xl font-bold text-japa-slate mb-4 flex items-center">
                <span className="w-2 h-8 bg-japa-orange rounded-full mr-3"></span>
                Featured Solution
              </h3>
              <div className="bg-japa-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="text-japa-orange w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-japa-slate mb-3">Real-Time Analytics Dashboard</h4>
              <p className="text-japa-slate/80 mb-6">
                Our most popular solution gives you complete visibility into parking patterns with intuitive visualizations and actionable insights.
              </p>
              <ul className="space-y-2 mb-6">
                {["Occupancy heatmaps", "Peak time analysis", "Revenue optimization", "Violation tracking"].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-japa-orange w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-japa-slate/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => {
                  document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center text-japa-orange hover:text-japa-orange/80 font-medium"
              >
                Try interactive demo <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero; 