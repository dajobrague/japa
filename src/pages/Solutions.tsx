import React, { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import FeaturesGrid from "@/components/solutions/FeaturesGrid";
import FeatureModal from "@/components/solutions/FeatureModal";
import ImageSlider from "@/components/solutions/ImageSlider";
import { featuresData } from "@/data/solutionsData";
import { FeatureContent } from "@/types/solutions";
import { Quote } from "lucide-react";
import AnimationWrapper from "@/components/ui/AnimationWrapper";
import { useDemoForm } from "@/contexts/DemoFormContext";
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ChevronRight, ChevronDown, Filter, X, ExternalLink, CalendarCheck } from 'lucide-react';

// Define the sensor images for the slider
const sensorImages = [
  {
    src: "/lovable-uploads/sensor12.png",
    alt: "JAPA Sensor Installation - Secondary View"
  },
  {
    src: "/lovable-uploads/NWA-004. 4bat. Embedded sensor expl.png",
    alt: "JAPA Embedded Sensor Exploded View"
  },
  {
    src: "/lovable-uploads/4279DBC0-BEF5-494C-BEEC-F54801983C32_1_105_c.jpeg",
    alt: "JAPA Sensor Installation - New View 1"
  },
  {
    src: "/lovable-uploads/IMG_5475.jpg",
    alt: "JAPA Sensor Installation - New View 2"
  }
];

const Solutions = () => {
  // State to manage which modal is open
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeFeature, setActiveFeature] = useState<FeatureContent | null>(null);
  const { openDemoForm } = useDemoForm();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock/unlock body scroll when modal is open/closed
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeModal]);

  // Set the active feature when modal ID changes
  useEffect(() => {
    if (activeModal) {
      const feature = featuresData.find(f => f.id === activeModal) || null;
      setActiveFeature(feature);
    } else {
      setActiveFeature(null);
    }
  }, [activeModal]);

  // Handler for opening the modal
  const handleOpenModal = (id: string) => {
    setActiveModal(id);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <PageLayout>
      <SolutionsHero />
      
      {/* Testimonial Section - Updated with orange background */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 bg-japa-orange relative overflow-hidden">
        {/* Decorative elements for orange background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container-wide">
          <AnimationWrapper animation="fade-up">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto relative border border-white/20">
              <div className="absolute -top-6 -left-6 text-japa-orange opacity-20">
                <Quote size={80} strokeWidth={1} />
              </div>
              
              <div className="flex items-start gap-6 flex-col md:flex-row">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-japa-orange/15 text-japa-orange font-bold text-xl flex items-center justify-center">
                    UC
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-japa-slate/90 text-lg md:text-xl italic mb-6">
                    "JAPA's smart parking solution has transformed our campus parking experience. Students and faculty can easily find available spots, and our parking management team has valuable insights into usage patterns. The installation was remarkably simple - we were up and running in days, not weeks."
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-japa-slate">University of California</h4>
                    <p className="text-japa-slate/70 text-sm">Transportation Director</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
      
      <FeaturesGrid features={featuresData} onOpenModal={handleOpenModal} />
      
      {/* Easy Installation Section - Updated to work with global background */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-transparent">
        {/* Decorative elements - reduced opacity further to allow global background to show through */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-japa-orange/3 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-japa-blue/3 rounded-full blur-3xl -z-10"></div>
        
        <div className="container-wide bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="fade-right">
              {/* Image Slider with transparent background */}
              <ImageSlider images={sensorImages} interval={4000} />
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-left">
              <div className="bg-transparent">
                <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-6">
                  Quick & Easy <span className="text-japa-orange font-extrabold">Installation</span>
                </h2>
                <p className="text-japa-slate/80 text-lg mb-6">
                  Our solution is designed for minimal disruption to your operations. Our sensors install in minutes without requiring expensive infrastructure changes or surface cutting.
                </p>
                
                <div className="space-y-5 mb-8">
                  {/* Installation Benefits - Enhanced with better shadows and borders */}
                  <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-md border border-japa-orange/10 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-japa-orange/20 flex items-center justify-center flex-shrink-0 text-japa-orange font-bold shadow-sm">1</div>
                    <div>
                      <h3 className="font-bold text-japa-slate mb-1">No Drilling or Cutting Required</h3>
                      <p className="text-japa-slate/70">Our sensors attach securely to the surface with industrial-grade adhesive.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-md border border-japa-orange/10 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-japa-orange/20 flex items-center justify-center flex-shrink-0 text-japa-orange font-bold shadow-sm">2</div>
                    <div>
                      <h3 className="font-bold text-japa-slate mb-1">Wireless Installation</h3>
                      <p className="text-japa-slate/70">No wiring needed - sensors communicate wirelessly with our secure gateway.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-md border border-japa-orange/10 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-japa-orange/20 flex items-center justify-center flex-shrink-0 text-japa-orange font-bold shadow-sm">3</div>
                    <div>
                      <h3 className="font-bold text-japa-slate mb-1">Minimal Maintenance</h3>
                      <p className="text-japa-slate/70">5+ year battery life with weather-resistant design for all conditions.</p>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={openDemoForm}
                  className="inline-flex items-center justify-center gap-2 bg-japa-orange hover:bg-japa-orange/90 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all hover:scale-105 w-full"
                >
                  Schedule Your Demo Today
                </button>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section - Keeping solid orange background */}
      <section className="py-12 md:py-16 bg-japa-orange relative overflow-hidden">
        {/* Decorative elements - Updated for orange background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container-wide">
          <AnimationWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="text-white font-extrabold">Parking Experience</span>?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Join hundreds of organizations that have optimized their parking operations with JAPA's smart parking solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={openDemoForm}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-japa-orange font-medium py-4 px-8 rounded-lg shadow-lg transition-all hover:scale-105 min-w-[200px]"
                >
                  Schedule Your Demo Today
                </button>
                <button 
                  onClick={openDemoForm}
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-4 px-8 rounded-lg transition-all hover:scale-105 min-w-[200px]"
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
      
      {/* Feature Modal */}
      {activeFeature && (
        <FeatureModal feature={activeFeature} onClose={handleCloseModal} />
      )}
    </PageLayout>
  );
};

export default Solutions;
