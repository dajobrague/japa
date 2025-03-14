import React from "react";
import AnimationWrapper from "../ui/AnimationWrapper";
import AnimatedButton from "../ui/AnimatedButton";
import { useDemoForm } from "@/contexts/DemoFormContext";

const AppShowcase = () => {
  const { openDemoForm } = useDemoForm();

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-japa-orange/5 rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-japa-blue/5 rounded-full -z-10" />
      
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          {/* Left side: App image */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <AnimationWrapper animation="fade-up" delay={200} className="relative">
              <div className="relative mx-auto max-w-[280px] md:max-w-sm shadow-xl">
                <img 
                  src="/lovable-uploads/Info Screen-white-.png" 
                  alt="JAPA Mobile App Interface"
                  className="w-full h-auto rounded-3xl"
                />
                
                {/* App stats badges */}
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-6 bg-japa-blue/90 text-white text-[10px] md:text-xs font-bold rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-lg transform rotate-6 z-20">
                  <div className="text-center">
                    <div className="text-base md:text-xl">4.8</div>
                    <div className="text-[8px] md:text-[10px]">App Store</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 bg-japa-orange/90 text-white text-[10px] md:text-xs font-bold rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-lg transform -rotate-12 z-20">
                  <div className="text-center">
                    <div className="text-base md:text-xl">99%</div>
                    <div className="text-[8px] md:text-[10px]">Accuracy</div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          
          {/* Right side: Content */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <AnimationWrapper animation="fade-up">
              <span className="inline-block bg-japa-orange/10 text-japa-orange text-xs md:text-sm font-medium px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-4">
                Mobile Experience
              </span>
              <h2 className="font-display font-bold text-japa-slate text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
                Smart Parking <span className="text-japa-orange">In Your Pocket</span>
              </h2>
              <p className="text-japa-slate/80 text-lg mb-8">
                The JAPA mobile app puts the power of our smart parking platform right in your hands. 
                Find available parking spaces in real-time, navigate directly to them, and even pay for 
                parking—all from one intuitive application.
              </p>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-japa-blue/10 rounded-lg flex items-center justify-center mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-japa-blue">
                      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 13L12 10L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-japa-slate mb-2">Real-Time Availability</h3>
                  <p className="text-japa-slate/70 text-sm">
                    Get up-to-the-minute parking availability data so you never waste time looking for a spot.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-japa-orange/10 rounded-lg flex items-center justify-center mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-japa-orange">
                      <path d="M8.5 14.5L5 18L8.5 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 18H13C17.4183 18 21 14.4183 21 10C21 5.58172 17.4183 2 13 2H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-japa-slate mb-2">Turn-by-Turn Navigation</h3>
                  <p className="text-japa-slate/70 text-sm">
                    Get guided directly to available parking spaces with our built-in navigation system.
                  </p>
                </div>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton 
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={openDemoForm}
                >
                  Schedule a Demo
                </AnimatedButton>
                <a 
                  href="/solutions" 
                  className="inline-flex items-center justify-center gap-2 text-japa-blue font-medium hover:text-japa-orange transition-colors">
                  Learn more about our solutions
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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