import React from 'react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import Pill from '@/components/ui/Pill';
import ParkingSimulator from '@/components/simulator/ParkingSimulator';
import { useDemoForm } from '@/contexts/DemoFormContext';
import { ArrowRight } from 'lucide-react';

const SimulatorSection: React.FC = () => {
  const { openDemoForm } = useDemoForm();
  
  return (
    <section id="simulator" className="py-20 md:py-28 bg-gradient-to-b from-white to-japa-gray/30">
      <div className="container-wide">
        <AnimationWrapper animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Pill className="mb-4">Experience JAPA</Pill>
            <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-4">
              Interactive Smart Parking Simulator
            </h2>
            <p className="text-lg text-japa-slate/80">
              See how our solution transforms parking management with real-time data, analytics, 
              and violation tracking. Try different scenarios and times of day to experience the full capabilities.
            </p>
          </div>
        </AnimationWrapper>
        
        <AnimationWrapper animation="fade-up" delay={100} className="mb-16">
          <div className="bg-white p-1 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <ParkingSimulator />
          </div>
        </AnimationWrapper>

        {/* CTA Section - Now full width */}
        <AnimationWrapper animation="fade-up" delay={200} className="mt-16">
          <div className="bg-japa-dark rounded-xl p-8 md:p-10 text-white shadow-lg relative overflow-hidden h-full flex flex-col justify-between group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 z-0 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24 z-0 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-japa-blue/20 to-japa-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 group-hover:text-japa-orange transition-colors duration-300">Ready to Transform Your Parking?</h3>
              <p className="mb-8 text-white/90 text-lg md:text-xl">
                Join the hundreds of organizations that have revolutionized their parking management with JAPA's smart solutions.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto relative z-10">
                <button 
                  onClick={openDemoForm}
                  className="flex-1 bg-white text-japa-dark hover:bg-gray-100 transition-colors duration-300 font-medium py-3 px-6 rounded-lg text-center shadow-lg border-none group-hover:scale-105 transform transition-transform"
                >
                  Schedule a Demo
                </button>
                
                <a 
                  href="/solutions#features" 
                  className="flex-1 flex items-center justify-center bg-transparent border border-white text-white hover:bg-white/10 transition-all duration-300 font-medium py-3 px-6 rounded-lg text-center group-hover:border-white/70"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default SimulatorSection; 