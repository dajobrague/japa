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

  // Function to open HubSpot meetings in a popup
  const handleContactClick = () => {
    openDemoForm();
  };

  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      {/* Enhanced background with overlay pattern - transparent */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596394723269-e82ecea9db0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-5 -z-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-japa-orange/10 rounded-full blur-3xl -z-5 opacity-70" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-japa-blue/10 rounded-full blur-3xl -z-5 opacity-70" />
      
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <AnimationWrapper animation="fade-up">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-4">
                Ready to Transform Your <span className="text-japa-orange">Parking Experience</span>?
              </h2>
              <p className="text-lg text-japa-slate/80 max-w-2xl mx-auto">
                Join hundreds of organizations that have optimized their parking operations with JAPA's smart parking solutions.
              </p>
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-up" delay={200}>
            <div className="mb-6 md:mb-8">
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base inline-block text-left">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle size={18} className="text-japa-orange flex-shrink-0 mt-0.5" />
                    <span className="text-japa-slate/90">{benefit}</span>
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
                className="bg-japa-orange text-white hover:bg-japa-orange/90 border-none w-full sm:w-auto shadow-lg shadow-japa-orange/20"
                onClick={handleContactClick}
              >
                Schedule a Demo
              </AnimatedButton>
              <AnimatedButton 
                variant="outline"
                size="lg"
                icon={<Phone size={18} />}
                iconPosition="left"
                className="text-japa-orange border-japa-orange hover:bg-japa-orange/10 w-full sm:w-auto"
                onClick={handleContactClick}
              >
                Contact Sales
              </AnimatedButton>
            </div>
          </AnimationWrapper>
        </div>
      </div>
      
      {/* Bottom testimonial - Updated colors */}
      <div className="container-wide mt-12 md:mt-16">
        <AnimationWrapper animation="fade-up" delay={400}>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-japa-orange/20 flex items-center justify-center text-japa-orange font-bold text-xl">
                  JD
                </div>
              </div>
              <div>
                <p className="text-japa-slate/90 italic mb-4">
                  "JAPA's smart parking solution has transformed how we manage our campus parking. We've seen a 25% increase in parking turnover and significantly reduced enforcement costs."
                </p>
                <div>
                  <p className="font-semibold text-japa-slate">John Davis</p>
                  <p className="text-sm text-japa-slate/70">Transportation Director, University of California</p>
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default CallToAction;
