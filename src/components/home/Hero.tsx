import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowDown, Play, ChevronRight, Zap, DollarSign } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import AnimationWrapper from "../ui/AnimationWrapper";
import Pill from "../ui/Pill";
import { Link } from "react-router-dom";
import SimulatorModal from "../simulator/SimulatorModal";
import { useDemoForm } from "@/contexts/DemoFormContext";

const Hero = () => {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const { openDemoForm } = useDemoForm();
  const [scrollY, setScrollY] = useState(0);

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated stats with counter effect
  const [stats, setStats] = useState({
    spaces: 0,
    efficiency: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setStats(prev => {
          const newSpaces = Math.min(prev.spaces + 10000, 1000000);
          const newEfficiency = Math.min(prev.efficiency + 1, 40);
          const newSatisfaction = Math.min(prev.satisfaction + 1, 94);
          
          if (newSpaces === 1000000 && newEfficiency === 40 && newSatisfaction === 94) {
            clearInterval(interval);
          }
          
          return {
            spaces: newSpaces,
            efficiency: newEfficiency,
            satisfaction: newSatisfaction
          };
        });
      }, 30);
      
      return () => clearInterval(interval);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-12 md:py-20 overflow-hidden">
      {/* Add floating animation */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes pulse-subtle {
            0% {
              opacity: 0.8;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0.8;
            }
          }
          
          .animate-pulse-subtle {
            animation: pulse-subtle 4s ease-in-out infinite;
          }
          
          .parallax {
            will-change: transform;
          }
        `}
      </style>
      
      {/* Enhanced Decorative Elements with Parallax - Added more orange */}
      <div 
        className="absolute top-1/3 right-1/4 w-60 h-60 bg-japa-orange opacity-[0.04] rounded-full blur-2xl -z-10 parallax"
        style={{ transform: `translate(${scrollY * 0.03}px, ${scrollY * -0.02}px)` }}
      />
      <div 
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-japa-orange opacity-[0.04] rounded-full blur-2xl -z-10 parallax"
        style={{ transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.01}px)` }}
      />
      <div 
        className="absolute top-1/2 left-1/4 w-40 h-40 bg-japa-blue opacity-[0.02] rounded-full blur-2xl -z-10 parallax"
        style={{ transform: `translate(${scrollY * -0.02}px, ${scrollY * 0.04}px)` }}
      />
      
      <div className="container-wide px-4 md:px-6">
        {/* Hero Layout - Changed to side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16">
          {/* Replace ParkingVisualization with Console image */}
          <AnimationWrapper 
            animation="fade-up" 
            delay={200}
            className="w-full lg:w-3/5 mt-4 lg:mt-0 px-0"
          >
            <div className="relative">
              {/* Removed glow effects around visualization */}
              
              <div className="w-full mx-auto relative">
                {/* Removed tag badges */}
                
                <img 
                  src="/lovable-uploads/Console 1210.21.png" 
                  alt="JAPA Console" 
                  className="w-full h-auto object-contain rounded-lg shadow-sm max-h-[80vh]"
                />
              </div>
            </div>
          </AnimationWrapper>
          
          {/* Text Content - Now right-aligned on desktop */}
          <div className="w-full lg:w-2/5 space-y-6 md:space-y-8 text-center lg:text-left">
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
            
            {/* Key benefits highlight - NEW SECTION */}
            <AnimationWrapper animation="fade-up" delay={330}>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mt-2">
                <div className="flex items-center gap-2 bg-japa-orange/10 text-japa-orange font-medium px-4 py-2 rounded-lg">
                  <DollarSign size={18} strokeWidth={2.5} />
                  <span className="text-sm md:text-base font-bold">Cost Effective</span>
                </div>
                
                <div className="flex items-center gap-2 bg-japa-blue/10 text-japa-blue font-medium px-4 py-2 rounded-lg">
                  <Zap size={18} strokeWidth={2.5} />
                  <span className="text-sm md:text-base font-bold">Easy to Install</span>
                </div>
              </div>
            </AnimationWrapper>
            
            {/* Animated Stats */}
            <AnimationWrapper animation="fade-up" delay={350}>
              <div className="grid grid-cols-3 gap-2 lg:gap-4 py-2 my-2 lg:ml-0 mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 lg:p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white hover:scale-105">
                  <div className="text-japa-orange font-bold text-xl lg:text-2xl">
                    {stats.spaces.toLocaleString()}+
                  </div>
                  <div className="text-japa-slate/70 text-xs lg:text-sm">Parking Spaces</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 lg:p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white hover:scale-105">
                  <div className="text-japa-orange font-bold text-xl lg:text-2xl">
                    {stats.efficiency}%
                  </div>
                  <div className="text-japa-slate/70 text-xs lg:text-sm">More Efficient</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 lg:p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white hover:scale-105">
                  <div className="text-japa-orange font-bold text-xl lg:text-2xl">
                    {stats.satisfaction}%
                  </div>
                  <div className="text-japa-slate/70 text-xs lg:text-sm">Satisfaction</div>
                </div>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={400}>
              <div className="flex pt-2 md:pt-4">
                <AnimatedButton 
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  className="shadow-lg shadow-japa-orange/20 w-full group hover:scale-105 transition-transform"
                  onClick={openDemoForm}
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    Schedule a Demo
                  </span>
                </AnimatedButton>
              </div>
            </AnimationWrapper>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator - Fixed dot colors and positioned lower */}
        <AnimationWrapper 
          animation="fade-up" 
          delay={800}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-20"
        >
          <span className="text-sm text-japa-slate/60 font-medium px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm shadow-sm">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-japa-orange/30 rounded-full flex justify-center px-1 py-2">
            <div className="w-1.5 h-1.5 bg-japa-orange rounded-full animate-bounce"></div>
          </div>
        </AnimationWrapper>
      </div>
      
      {/* Kept the SimulatorModal component but it won't be triggered since we removed the button */}
      <SimulatorModal isOpen={isSimulatorOpen} onClose={() => setIsSimulatorOpen(false)} />
    </section>
  );
};

export default Hero;
