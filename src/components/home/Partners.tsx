import React, { useState } from "react";
import AnimationWrapper from "../ui/AnimationWrapper";
import Pill from "../ui/Pill";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";

// Enhanced partner data with more realistic info
const partnerLogos = [
  {
    id: 1,
    name: "University of California",
    logo: "/partners/university-logo.svg",
    alt: "University of California logo",
    category: "University",
  },
  {
    id: 2,
    name: "City of Austin",
    logo: "/partners/city-logo.svg",
    alt: "City of Austin logo",
    category: "City",
  },
  {
    id: 3,
    name: "Smart City Alliance",
    logo: "/partners/organization-logo.svg",
    alt: "Smart City Alliance logo",
    category: "Organization",
  },
  {
    id: 4,
    name: "American Hospital Association",
    logo: "/partners/hospital-logo.svg",
    alt: "American Hospital Association logo",
    category: "Organization",
  },
  {
    id: 5,
    name: "National Parking Association",
    logo: "/partners/association-logo.svg",
    alt: "National Parking Association logo",
    category: "Organization",
  },
  {
    id: 6,
    name: "Event Management Solutions",
    logo: "/partners/industry-logo.svg",
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
  const [activePartner, setActivePartner] = useState<number | null>(null);

  // Fallback for logo images that might not exist in current assets folder
  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement, Event>, index: number) => {
    // Replace with a dynamically colored placeholder based on category
    const target = e.target as HTMLImageElement;
    const colors = ["#f97316", "#3b82f6", "#10b981", "#6366f1", "#8b5cf6", "#ec4899"];
    const partner = partnerLogos[index];
    
    // Set to a placeholder with the partner initial and name
    target.onerror = null; // Prevent infinite loop
    target.src = `https://placehold.co/300x150/${colors[index % colors.length].replace('#', '')}/ffffff?text=${partner.name.split(' ').map(word => word[0]).join('')}`;
  };

  return (
    <section className="py-14 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Add the animations */}
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
          
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
          
          .animate-shimmer {
            background-size: 200% 100%;
            animation: shimmer 8s linear infinite;
          }
          
          .partner-logo {
            transition: all 0.3s ease;
          }
          
          .partner-logo:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          }
          
          .stat-card {
            transition: all 0.3s ease;
          }
          
          .stat-card:hover {
            transform: translateY(-5px);
          }
        `}
      </style>
    
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-japa-gray/30 to-white -z-10" />
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-64 h-64 bg-japa-orange/5 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-64 h-64 bg-japa-blue/5 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-japa-blue/3 rounded-full blur-3xl -z-10" />
      
      <div className="container-wide px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left side: Content */}
          <div>
            <AnimationWrapper animation="fade-up">
              <Pill className="mb-3 md:mb-4">Our Partners</Pill>
              <h2 className="text-balance font-display font-bold text-japa-slate text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 leading-tight">
                Trusted by <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-japa-orange to-japa-blue animate-gradient bg-size-200">Industry Leaders</span>
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
                    <div className="stat-card text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:border-japa-orange/20 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-japa-orange/5 via-japa-blue/5 to-japa-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer -z-10"></div>
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
                className="group"
                onClick={() => window.location.href = '/partners'}
              >
                <span className="group-hover:translate-x-1 transition-transform inline-block">
                  View all our partnerships
                </span>
              </AnimatedButton>
            </AnimationWrapper>
          </div>
          
          {/* Right side: Enhanced Logo Showcase */}
          <AnimationWrapper animation="fade-left" delay={300} className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-japa-orange/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-japa-blue/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Enhanced logo showcase with glossy effect and more professional layout */}
            <div className="relative rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100/50 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-japa-orange/5 to-japa-blue/5 rounded-full -z-10 transform translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-bl from-japa-blue/5 to-japa-orange/5 rounded-full -z-10 transform -translate-x-20 translate-y-20"></div>
              
              {/* Featured partners title */}
              <div className="bg-gradient-to-r from-japa-slate/5 to-japa-slate/10 px-6 py-4 border-b border-gray-100">
                <h3 className="text-japa-slate font-medium text-lg">Featured Partners</h3>
              </div>
              
              {/* Logo grid with improved styling */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {partnerLogos.map((partner, index) => (
                    <div 
                      key={partner.id} 
                      className="partner-logo relative group"
                      onMouseEnter={() => setActivePartner(index)}
                      onMouseLeave={() => setActivePartner(null)}
                    >
                      <div className="aspect-[3/2] rounded-lg overflow-hidden border border-gray-100 hover:border-japa-orange/30 transition-all duration-300 bg-white flex items-center justify-center p-4 relative">
                        {/* Logo overlay effect on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-japa-orange/5 to-japa-blue/5 transition-opacity duration-300 ${
                          activePartner === index ? 'opacity-100' : 'opacity-0'
                        }`}></div>
                        
                        {/* Category badge */}
                        <div className={`absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-japa-slate text-[10px] py-0.5 px-2 rounded-full shadow-sm transition-all duration-300 ${
                          activePartner === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}>
                          {partner.category}
                        </div>
                        
                        {/* Logo image with optimized quality */}
                        <img 
                          src={partner.logo} 
                          alt={partner.alt}
                          className="max-w-[80%] max-h-[60%] transition-all duration-300 group-hover:scale-110"
                          onError={(e) => handleLogoError(e, index)}
                        />
                      </div>
                      
                      {/* Partner name */}
                      <div className="mt-2 text-center">
                        <p className="text-japa-slate/80 text-sm font-medium truncate">{partner.name}</p>
                      </div>
                      
                      {/* View details button on hover */}
                      <div className={`absolute inset-x-0 bottom-0 flex justify-center transition-all duration-300 ${
                        activePartner === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}>
                        <a href="#" className="text-japa-orange text-xs flex items-center gap-1 hover:underline">
                          View details <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom action area */}
              <div className="bg-gradient-to-r from-japa-slate/5 to-japa-slate/10 px-6 py-4 border-t border-gray-100 text-center">
                <a href="/partners" className="text-japa-blue hover:text-japa-orange text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-1 group">
                  <span>Become a partner</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
