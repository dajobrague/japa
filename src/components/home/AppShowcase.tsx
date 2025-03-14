import React from "react";
import AnimationWrapper from "../ui/AnimationWrapper";
import AnimatedButton from "../ui/AnimatedButton";
import { useDemoForm } from "@/contexts/DemoFormContext";

const AppShowcase = () => {
  const { openDemoForm } = useDemoForm();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-japa-orange to-japa-orange/90 relative overflow-hidden text-white">
      {/* Add the floating animation */}
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
        `}
      </style>
    
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl -z-10" />
      
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          {/* Left side: App image with enhanced presentation */}
          <div className="lg:w-1/2 order-2 lg:order-1 relative flex justify-center">
            {/* Light beam effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl opacity-70 animate-pulse"></div>
            
            <AnimationWrapper animation="fade-up" delay={200} className="relative">
              <div className="relative mx-auto flex justify-center">
                {/* Glow effects */}
                <div className="absolute inset-0 -m-10 bg-gradient-to-tr from-white/30 to-transparent rounded-full blur-xl"></div>
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-2 h-full bg-white/30 blur-xl"></div>
                
                {/* Phone image with enhanced styling */}
                <div className="relative animate-float">
                  <img 
                    src="/lovable-uploads/Info Screen-white-.png" 
                    alt="JAPA Mobile App Interface"
                    className="w-full h-auto max-w-[320px] md:max-w-sm relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                  />
                  
                  {/* Reflection effect */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-white/10 blur-md rounded-full transform scale-x-75 -z-10"></div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          
          {/* Right side: Content with enhanced typography and spacing */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <AnimationWrapper animation="fade-up">
              <span className="inline-block bg-white/20 text-white text-xs md:text-sm font-medium px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-4 backdrop-blur-sm">
                Mobile Experience
              </span>
              <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
                Smart Parking <span className="text-white">In Your Pocket</span>
              </h2>
              <p className="text-white/90 text-lg mb-10 max-w-xl">
                The JAPA mobile app puts the power of our smart parking platform right in your hands. 
                Find available parking spaces in real-time, navigate directly to them, and even pay for 
                parking—all from one intuitive application.
              </p>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {/* Enhanced feature boxes */}
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-transform hover:translate-y-[-4px] group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 13L12 10L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Real-Time Availability</h3>
                  <p className="text-white/80 text-base">
                    Get up-to-the-minute parking availability data so you never waste time looking for a spot.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-transform hover:translate-y-[-4px] group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M8.5 14.5L5 18L8.5 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 18H13C17.4183 18 21 14.4183 21 10C21 5.58172 17.4183 2 13 2H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Turn-by-Turn Navigation</h3>
                  <p className="text-white/80 text-base">
                    Get guided directly to available parking spaces with our built-in navigation system.
                  </p>
                </div>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-5">
                <AnimatedButton 
                  variant="primary"
                  size="lg"
                  className="bg-white text-japa-orange hover:bg-white/90 border-none w-full sm:w-auto font-semibold shadow-lg"
                  onClick={openDemoForm}
                >
                  Schedule a Demo
                </AnimatedButton>
                <a 
                  href="/solutions" 
                  className="inline-flex items-center justify-center gap-2 text-white font-medium hover:text-white/80 border border-white/30 py-3 px-6 rounded-lg transition-all hover:bg-white/10 hover:border-white/50 group"
                >
                  Learn more about our solutions
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transition-transform group-hover:translate-x-1">
                    <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase; 