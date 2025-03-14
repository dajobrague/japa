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
      <div className="absolute inset-0 bg-gradient-to-br from-japa-orange to-japa-orange/90 -z-10" />
      
      {/* Enhanced background with overlay pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596394723269-e82ecea9db0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-5 -z-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl -z-5 opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/30 rounded-full blur-3xl -z-5 opacity-20" />
      
      <div className="container-wide px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Call to action content */}
          <div className="max-w-3xl mx-auto text-center">
            <AnimationWrapper animation="fade-up">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-medium px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-4 md:mb-6">
                Start Your Smart Parking Journey
              </span>
              <h2 className="text-balance font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 leading-tight">
                Ready to Transform Your <span className="text-white">Parking Experience?</span>
              </h2>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={100}>
              <p className="text-white text-lg md:text-xl mb-6 md:mb-8">
                Join universities and cities nationwide that have optimized their parking operations, improved user satisfaction, and increased revenue with JAPA's smart solutions.
              </p>
            </AnimationWrapper>
            
            {/* Benefits list */}
            <AnimationWrapper animation="fade-up" delay={200}>
              <div className="mb-8 md:mb-10">
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base inline-block text-left">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle size={18} className="text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton 
                  variant="primary"
                  size="lg"
                  icon={<Calendar size={18} />}
                  iconPosition="left"
                  className="bg-white text-japa-orange hover:bg-white/90 border-none w-full sm:w-auto"
                  onClick={openDemoForm}
                >
                  Schedule a Demo
                </AnimatedButton>
                <AnimatedButton 
                  variant="outline"
                  size="lg"
                  icon={<Phone size={18} />}
                  iconPosition="left"
                  className="text-white border-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Contact Sales
                </AnimatedButton>
              </div>
            </AnimationWrapper>
          </div>
        </div>
        
        {/* Bottom testimonial */}
        <AnimationWrapper animation="fade-up" delay={400}>
          <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto">
            <div className="text-white italic text-sm md:text-base">
              "JAPA's smart parking solution has transformed our campus parking experience. Students and faculty save time, and we've optimized our parking resources."
            </div>
            <div className="mt-2 md:mt-3 text-white/80 text-xs md:text-sm">
              — Dr. Sarah Johnson, University Transportation Director
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default CallToAction;
