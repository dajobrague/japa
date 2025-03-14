import React, { useState } from "react";
import { ArrowRight, ArrowDown, Play, ChevronRight } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import AnimationWrapper from "../ui/AnimationWrapper";
import Pill from "../ui/Pill";
import { Link } from "react-router-dom";
import SimulatorModal from "../simulator/SimulatorModal";
import { useDemoForm } from "@/contexts/DemoFormContext";
import { ParkingVisualization } from "../../parking-visualization/components/parking-visualization";

const Hero = () => {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const { openDemoForm } = useDemoForm();

  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-japa-paleOrange/30 -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1621950614805-1b59f36954a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5 -z-10" />
      
      {/* Enhanced Decorative Elements - Drastically reduced opacity and removed animation */}
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-japa-orange opacity-[0.02] rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-japa-orange opacity-[0.02] rounded-full blur-2xl -z-10" />
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-japa-blue opacity-[0.02] rounded-full blur-2xl -z-10" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5 -z-10"></div>
      
      <div className="container-wide px-4 md:px-6">
        {/* Hero Layout - Changed to side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Text Content - Now left-aligned on desktop */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
            <AnimationWrapper animation="fade-up" delay={100}>
              <Pill className="mb-4 md:mb-6 inline-flex">
                Transforming Parking Management
              </Pill>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={200}>
              <h1 className="text-balance font-display font-bold text-japa-slate text-4xl sm:text-5xl md:text-6xl">
                Parking.
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-japa-orange to-japa-blue"> Made Intelligent.</span>
              </h1>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={300}>
              <p className="text-japa-slate/80 text-base md:text-lg lg:text-xl max-w-xl lg:mx-0 mx-auto">
                JAPA delivers real-time parking availability, powerful analytics, and seamless integrations that transform how universities and cities manage their parking assets.
              </p>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center pt-2 md:pt-4">
                <AnimatedButton 
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  className="shadow-lg shadow-japa-orange/20 w-full sm:w-auto"
                  onClick={openDemoForm}
                >
                  Schedule a Demo
                </AnimatedButton>
                
                <AnimatedButton 
                  variant="secondary"
                  size="lg"
                  icon={<Play size={18} />}
                  iconPosition="left"
                  onClick={() => setIsSimulatorOpen(true)}
                  className="w-full sm:w-auto"
                >
                  Try Interactive Simulator
                </AnimatedButton>
              </div>
            </AnimationWrapper>
            
            {/* Added social proof element */}
            <AnimationWrapper animation="fade-up" delay={500}>
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200/50 flex flex-col sm:flex-row items-center gap-3 md:gap-4 lg:justify-start justify-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img 
                        src={`/placeholder-avatar-${i}.png`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=User+${i}&background=random`;
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs md:text-sm text-japa-slate/80 mt-2 sm:mt-0">
                  <span className="font-semibold text-japa-slate">Trusted by 200+</span> parking managers
                </div>
              </div>
            </AnimationWrapper>
          </div>
          
          {/* Replace Hero Image with ParkingVisualization component */}
          <AnimationWrapper 
            animation="fade-up" 
            delay={300}
            className="w-full lg:w-1/2 mt-8 lg:mt-0 px-4 md:px-0"
          >
            <div className="max-w-xl mx-auto lg:max-w-none">
              <ParkingVisualization className="w-full max-w-full shadow-xl" />
            </div>
          </AnimationWrapper>
        </div>
        
        {/* Scroll Indicator */}
        <AnimationWrapper 
          animation="fade-up" 
          delay={800}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-sm text-japa-slate/60 font-medium">Scroll to explore</span>
          <ArrowDown size={20} className="text-japa-orange animate-bounce" />
        </AnimationWrapper>
      </div>
      
      {/* Simulator Modal */}
      <SimulatorModal isOpen={isSimulatorOpen} onClose={() => setIsSimulatorOpen(false)} />
    </section>
  );
};

export default Hero;
