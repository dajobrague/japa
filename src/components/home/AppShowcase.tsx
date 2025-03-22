import React from "react";
import AnimationWrapper from "../ui/AnimationWrapper";
import AnimatedButton from "../ui/AnimatedButton";
import { useDemoForm } from "@/contexts/DemoFormContext";
import Pill from "../ui/Pill";

const AppShowcase = () => {
  const { openDemoForm } = useDemoForm();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-japa-orange to-japa-orange/90 relative overflow-hidden text-white z-10">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />
      
      <div className="container-wide px-4 md:px-6">
        {/* Centered title section at top */}
        <div className="text-center mb-12 md:mb-16">
          <AnimationWrapper animation="fade-up">
            <Pill className="inline-flex bg-white/20 text-white border-none backdrop-blur-sm mb-4">
              Mobile Experience
            </Pill>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight max-w-3xl mx-auto">
              Smart Parking <span className="text-white">In Your Pocket</span>
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              The JAPA mobile app puts the power of our smart parking platform right in your hands. 
              Find available parking spaces in real-time, navigate directly to them, and even pay for 
              parking—all from one intuitive application.
            </p>
          </AnimationWrapper>
        </div>
        
        {/* Redesigned layout with better integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
          {/* Left side - Feature cards (4 columns on large screens) */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <AnimationWrapper animation="fade-up" delay={100}>
              <div className="space-y-5">
                {/* Feature card 1 */}
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 transition-all hover:bg-white/15">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 13L12 10L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Real-Time Availability</h3>
                      <p className="text-white/80 text-sm">
                        Get up-to-the-minute parking availability data so you never waste time looking for a spot.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Feature card 2 */}
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 transition-all hover:bg-white/15">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M8.5 14.5L5 18L8.5 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 18H13C17.4183 18 21 14.4183 21 10C21 5.58172 17.4183 2 13 2H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Turn-by-Turn Navigation</h3>
                      <p className="text-white/80 text-sm">
                        Get guided directly to available parking spaces with our built-in navigation system.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Feature card 3 (additional feature) */}
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 transition-all hover:bg-white/15">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M5.5 19.5C5.5 18.8096 5.97061 18.0625 6.80921 17.4973C7.64288 16.9359 8.77394 16.5 10 16.5M18.5 19.5C18.5 18.8096 18.0294 18.0625 17.1908 17.4973C16.3571 16.9359 15.2261 16.5 14 16.5M14 13.5C14 12.1193 13.1046 11 12 11C10.8954 11 10 12.1193 10 13.5C10 14.8807 10.8954 16 12 16C13.1046 16 14 14.8807 14 13.5ZM14 13.5H10M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Payment Integration</h3>
                      <p className="text-white/80 text-sm">
                        Pay for parking directly through the app with multiple payment options available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          
          {/* Center - Phone image (4 columns on large screens) */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center mb-10 lg:mb-0">
            <AnimationWrapper animation="fade-up" delay={150}>
              <div className="relative">
                <img 
                  src="/lovable-uploads/PerSpace-dark-.png" 
                  alt="JAPA Mobile App Interface"
                  className="w-full h-auto max-w-[280px] md:max-w-[320px] relative z-10 rounded-xl"
                />
              </div>
            </AnimationWrapper>
          </div>
          
          {/* Right side - Additional features and CTA (4 columns on large screens) */}
          <div className="lg:col-span-4 order-3">
            <AnimationWrapper animation="fade-up" delay={200}>
              <div className="space-y-5 mb-8">
                {/* Feature card 4 */}
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 transition-all hover:bg-white/15">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Time Reminders</h3>
                      <p className="text-white/80 text-sm">
                        Get notifications before your parking time expires to avoid tickets.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Feature card 5 */}
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 transition-all hover:bg-white/15">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M9 20L3 17V7L9 4M9 20L15 17M9 20V4M15 17L21 20V10L15 7M15 17V7M9 4L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Multi-Campus Support</h3>
                      <p className="text-white/80 text-sm">
                        Use the same app across different universities and cities with JAPA integration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton 
                  variant="primary"
                  size="md"
                  className="bg-white text-japa-orange hover:bg-white/90 border-none font-medium shadow-lg"
                  onClick={openDemoForm}
                >
                  Schedule a Demo
                </AnimatedButton>
                <a 
                  href="/solutions" 
                  className="inline-flex items-center justify-center gap-2 text-white font-medium border border-white/30 py-2.5 px-5 rounded-lg transition-all hover:bg-white/10 hover:border-white/50 text-sm"
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
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