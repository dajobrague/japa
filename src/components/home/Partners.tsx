import React from "react";
import AnimationWrapper from "../ui/AnimationWrapper";
import Pill from "../ui/Pill";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";

// Enhanced partner data with categories
const partnerLogos = [
  {
    id: 1,
    name: "University of California",
    logo: "https://placehold.co/200x80/f8fafc/64748b?text=UC+Logo&font=open-sans",
    alt: "University of California logo",
    category: "University",
  },
  {
    id: 2,
    name: "City of Austin",
    logo: "https://placehold.co/200x80/f8fafc/64748b?text=Austin+Logo&font=open-sans",
    alt: "City of Austin logo",
    category: "City",
  },
  {
    id: 3,
    name: "Smart City Alliance",
    logo: "https://placehold.co/200x80/f8fafc/64748b?text=SCA+Logo&font=open-sans",
    alt: "Smart City Alliance logo",
    category: "Organization",
  },
  {
    id: 4,
    name: "American Hospital Association",
    logo: "https://placehold.co/200x80/f8fafc/64748b?text=AHA+Logo&font=open-sans",
    alt: "American Hospital Association logo",
    category: "Organization",
  },
  {
    id: 5,
    name: "National Parking Association",
    logo: "https://placehold.co/200x80/f8fafc/64748b?text=NPA+Logo&font=open-sans",
    alt: "National Parking Association logo",
    category: "Organization",
  },
  {
    id: 6,
    name: "Event Management Solutions",
    logo: "https://placehold.co/200x80/f8fafc/64748b?text=EMS+Logo&font=open-sans",
    alt: "Event Management Solutions logo",
    category: "Industry",
  }
];

// Partner stats for highlight section
const partnerStats = [
  { value: "50+", label: "Universities" },
  { value: "35+", label: "Cities" },
  { value: "100+", label: "Organizations" },
  { value: "25K+", label: "Parking Stalls" }
];

const Partners = () => {
  return (
    <section className="py-14 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-japa-gray/30 to-white -z-10" />
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-64 h-64 bg-japa-orange/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-64 h-64 bg-japa-blue/5 rounded-full blur-3xl -z-10" />
      
      <div className="container-wide px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left side: Content */}
          <div>
            <AnimationWrapper animation="fade-up">
              <Pill className="mb-3 md:mb-4">Our Partners</Pill>
              <h2 className="text-balance font-display font-bold text-japa-slate text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 leading-tight">
                Trusted by <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-japa-orange to-japa-blue">Industry Leaders</span>
              </h2>
              <p className="text-japa-slate/80 text-lg md:text-xl mb-6 md:mb-8 max-w-lg">
                We're proud to collaborate with universities, cities, and organizations across the country 
                to transform parking management and create smarter urban environments.
              </p>
              
              {/* Partner stats section */}
              <div className="grid grid-cols-2 gap-3 md:gap-6 mb-8 md:mb-10">
                {partnerStats.map((stat, index) => (
                  <AnimationWrapper 
                    key={index} 
                    animation="fade-up" 
                    delay={100 * (index + 1)}
                  >
                    <div className="text-center p-3 rounded-lg bg-white shadow-sm border border-gray-100">
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-japa-orange to-japa-blue mb-1">
                        {stat.value}
                      </div>
                      <div className="text-japa-slate/70 text-xs md:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </AnimationWrapper>
                ))}
              </div>
              
              <AnimatedButton
                variant="text"
                icon={<ArrowRight size={16} />}
                onClick={() => window.location.href = '/partners'}
              >
                View all our partnerships
              </AnimatedButton>
            </AnimationWrapper>
          </div>
          
          {/* Right side: Logo grid with enhanced styling */}
          <AnimationWrapper animation="fade-left" delay={300}>
            <div className="relative p-4 md:p-6 rounded-xl md:rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-japa-orange/5 rounded-full -z-10 transform translate-x-12 -translate-y-12 md:translate-x-16 md:-translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-japa-blue/5 rounded-full -z-10 transform -translate-x-12 translate-y-12 md:-translate-x-16 md:translate-y-16"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 items-center justify-items-center">
                {partnerLogos.map((partner, index) => (
                  <div 
                    key={partner.id} 
                    className="w-full flex flex-col items-center justify-center group bg-white rounded-lg p-3 md:p-4 h-[80px] md:h-[100px] transition-all duration-300 hover:shadow-md relative"
                  >
                    {/* Category tag */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-japa-slate text-white text-[10px] md:text-xs py-0.5 px-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {partner.category}
                    </div>
                    
                    <img 
                      src={partner.logo} 
                      alt={partner.alt}
                      className="max-w-full max-h-[45px] md:max-h-[60px] opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                    />
                    <div className="mt-1 md:mt-2 text-center text-[10px] md:text-xs text-japa-slate/50 opacity-0 group-hover:opacity-100 transition-opacity">
                      {partner.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
