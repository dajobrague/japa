import React from "react";
import { ArrowRight, Phone, Calendar, CheckCircle } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import AnimationWrapper from "../ui/AnimationWrapper";
import { useDemoForm } from "@/contexts/DemoFormContext";

// Benefits list for enhanced CTA
const benefits = [
  "Reduce parking management costs by up to 30%",
  "Increase parking revenue with improved turnover",
  "Enhance user experience and reduce frustration",
  "Gain powerful data insights and analytics"
];

const CallToAction = () => {
  const { openDemoForm } = useDemoForm();

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-japa-slate to-japa-slate/90 -z-10" />
      
      {/* Enhanced background with overlay pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596394723269-e82ecea9db0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-10 -z-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-japa-orange/30 rounded-full blur-3xl -z-5 opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-japa-blue/30 rounded-full blur-3xl -z-5 opacity-20" />
      
      <div className="container-wide px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left side: Call to action content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <AnimationWrapper animation="fade-up">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 text-xs md:text-sm font-medium px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-4 md:mb-6">
                Start Your Smart Parking Journey
              </span>
              <h2 className="text-balance font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 leading-tight">
                Ready to Transform Your <span className="text-japa-orange">Parking Experience?</span>
              </h2>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={100}>
              <p className="text-white/80 text-lg md:text-xl mb-6 md:mb-8">
                Join universities and cities nationwide that have optimized their parking operations, improved user satisfaction, and increased revenue with JAPA's smart solutions.
              </p>
            </AnimationWrapper>
            
            {/* Benefits list */}
            <AnimationWrapper animation="fade-up" delay={200}>
              <div className="mb-8 md:mb-10">
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle size={18} className="text-japa-orange flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AnimatedButton 
                  variant="primary"
                  size="lg"
                  icon={<Calendar size={18} />}
                  iconPosition="left"
                  className="bg-japa-orange hover:bg-japa-orange/90 text-white border-none w-full sm:w-auto"
                  onClick={openDemoForm}
                >
                  Schedule a Demo
                </AnimatedButton>
                <AnimatedButton 
                  variant="outline"
                  size="lg"
                  icon={<Phone size={18} />}
                  iconPosition="left"
                  className="text-white border-white/30 hover:bg-white/10 w-full sm:w-auto"
                >
                  Contact Sales
                </AnimatedButton>
              </div>
            </AnimationWrapper>
          </div>
          
          {/* Right side: Enhanced App screenshot with features */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <AnimationWrapper animation="fade-up" delay={400} className="relative">
              {/* Phone mockup with enhanced design */}
              <div className="relative mx-auto max-w-[250px] md:max-w-xs">
                {/* Phone frame */}
                <div className="absolute inset-0 bg-black rounded-[30px] md:rounded-[40px] shadow-2xl z-0"></div>
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-5 md:h-6 bg-black rounded-b-xl z-20"></div>
                
                {/* Main screen */}
                <div className="relative rounded-[28px] md:rounded-[36px] overflow-hidden border-[6px] md:border-[8px] border-black z-10 shadow-lg">
                  <img 
                    src="/lovable-uploads/3a4411ad-837f-4bfb-a54b-b1f8ab1d80b8.png" 
                    alt="JAPA Mobile App Screenshot" 
                    className="w-full h-auto"
                  />
                  
                  {/* Feature highlights */}
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 shadow-lg text-[10px] md:text-xs font-medium text-japa-slate flex items-center animate-pulse">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 mr-1 md:mr-2"></div>
                    Live Parking Data
                  </div>
                  
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 shadow-lg text-[10px] md:text-xs font-medium text-japa-slate">
                    <div className="flex items-center gap-1 md:gap-2">
                      <span className="text-japa-blue font-semibold">3</span> Available Spots
                    </div>
                  </div>
                </div>
                
                {/* Floating highlight bubbles */}
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
        </div>
        
        {/* Bottom testimonial */}
        <AnimationWrapper animation="fade-up" delay={500}>
          <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto">
            <div className="text-white/90 italic text-sm md:text-base">
              "JAPA's smart parking solution has transformed our campus parking experience. Students and faculty save time, and we've optimized our parking resources."
            </div>
            <div className="mt-2 md:mt-3 text-white/70 text-xs md:text-sm">
              — Dr. Sarah Johnson, University Transportation Director
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default CallToAction;
