import React, { useState, useEffect } from "react";
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
          const newSpaces = Math.min(prev.spaces + 232, 25000);
          const newEfficiency = Math.min(prev.efficiency + 1, 40);
          const newSatisfaction = Math.min(prev.satisfaction + 1, 94);
          
          if (newSpaces === 25000 && newEfficiency === 40 && newSatisfaction === 94) {
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
    <section className="relative pt-24 pb-20 md:py-28 overflow-hidden bg-gradient-to-br from-japa-gray/40 via-white to-japa-blue/5">
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
      
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern-light"></div>
      </div>
      
      {/* Enhanced Background Elements with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-japa-paleOrange/30 -z-10" />
      <div 
        className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1621950614805-1b59f36954a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5 -z-10 parallax" 
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      
      {/* Enhanced Decorative Elements with Parallax */}
      <div 
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-japa-orange opacity-[0.02] rounded-full blur-2xl -z-10 parallax"
        style={{ transform: `translate(${scrollY * 0.03}px, ${scrollY * -0.02}px)` }}
      />
      <div 
        className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-japa-orange opacity-[0.02] rounded-full blur-2xl -z-10 parallax"
        style={{ transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.01}px)` }}
      />
      <div 
        className="absolute top-1/2 left-1/4 w-40 h-40 bg-japa-blue opacity-[0.02] rounded-full blur-2xl -z-10 parallax"
        style={{ transform: `translate(${scrollY * -0.02}px, ${scrollY * 0.04}px)` }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5 -z-10 parallax"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      ></div>
      
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
                  <div className="text-japa-blue font-bold text-xl lg:text-2xl">
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
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center pt-2 md:pt-4">
                <AnimatedButton 
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  className="shadow-lg shadow-japa-orange/20 w-full sm:w-auto group hover:scale-105 transition-transform"
                  onClick={openDemoForm}
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    Schedule a Demo
                  </span>
                </AnimatedButton>
                
                <AnimatedButton 
                  variant="secondary"
                  size="lg"
                  icon={<Play size={18} />}
                  iconPosition="left"
                  onClick={() => setIsSimulatorOpen(true)}
                  className="w-full sm:w-auto group hover:bg-japa-slate/10 transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    Try Interactive Simulator
                  </span>
                </AnimatedButton>
              </div>
            </AnimationWrapper>
            
            {/* Enhanced social proof element */}
            <AnimationWrapper animation="fade-up" delay={500}>
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200/50 flex flex-col sm:flex-row items-center gap-3 md:gap-4 lg:justify-start justify-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden shadow-md transition-transform hover:scale-110 hover:z-10">
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
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-japa-orange/10 flex items-center justify-center text-japa-orange text-xs md:text-sm font-bold shadow-md">
                    +196
                  </div>
                </div>
                <div className="text-xs md:text-sm text-japa-slate/80 mt-2 sm:mt-0">
                  <span className="font-semibold text-japa-slate">Trusted by 200+</span> parking managers
                </div>
              </div>
            </AnimationWrapper>
          </div>
          
          {/* ParkingVisualization with enhanced styling */}
          <AnimationWrapper 
            animation="fade-up" 
            delay={300}
            className="w-full lg:w-1/2 mt-8 lg:mt-0 px-4 md:px-0"
          >
            <div className="relative">
              {/* Glow effects around visualization */}
              <div className="absolute inset-0 -m-6 bg-gradient-to-tr from-japa-orange/20 to-japa-blue/20 rounded-3xl blur-xl opacity-70"></div>
              
              <div className="max-w-xl mx-auto lg:max-w-none relative animate-float">
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-white text-japa-blue text-[10px] md:text-xs font-bold rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-md transform rotate-6 z-20 animate-pulse-subtle">
                  <div className="text-center">
                    <div className="text-base md:text-xl">Live</div>
                    <div className="text-[8px] md:text-[10px]">Data</div>
                  </div>
                </div>
                
                <ParkingVisualization className="w-full max-w-full shadow-xl rounded-xl border border-white/30 backdrop-blur-sm" />
              </div>
            </div>
          </AnimationWrapper>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <AnimationWrapper 
          animation="fade-up" 
          delay={800}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-sm text-japa-slate/60 font-medium px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm shadow-sm">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-japa-orange/30 rounded-full flex justify-center px-1 py-2">
            <div className="w-1.5 h-1.5 bg-japa-orange rounded-full animate-bounce"></div>
          </div>
        </AnimationWrapper>
      </div>
      
      {/* Simulator Modal */}
      <SimulatorModal isOpen={isSimulatorOpen} onClose={() => setIsSimulatorOpen(false)} />
    </section>
  );
};

export default Hero;
