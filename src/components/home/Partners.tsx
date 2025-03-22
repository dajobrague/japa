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
    logo: "/lovable-uploads/University-of-California-logo.png",
    alt: "University of California logo",
    category: "University",
  },
  {
    id: 2,
    name: "City of Austin",
    logo: "/lovable-uploads/Flag_of_Austin,_Texas.svg.png",
    alt: "City of Austin logo",
    category: "City",
  },
  {
    id: 3,
    name: "Gillette Stadium",
    logo: "/lovable-uploads/Gillette.jpeg",
    alt: "Gillette Stadium logo",
    category: "Venue",
  },
  {
    id: 4,
    name: "American Hospital Association",
    logo: "/lovable-uploads/american-hospital-association.svg",
    alt: "American Hospital Association logo",
    category: "Organization",
  },
  {
    id: 5,
    name: "CalPoly Pomona",
    logo: "/lovable-uploads/calpolypamona.jpg",
    alt: "CalPoly Pomona logo",
    category: "University",
  },
  {
    id: 6,
    name: "Paysafe",
    logo: "/lovable-uploads/paysafe-logo-240x240.png",
    alt: "Paysafe logo",
    category: "Industry",
  }
];

// Partner stats for highlight section
const partnerStats = [
  { value: "100+", label: "Universities" },
  { value: "75+", label: "Cities" },
  { value: "200+", label: "Organizations" },
  { value: "1M+", label: "Parking Spaces" }
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
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
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
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-64 h-64 bg-japa-orange/5 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-64 h-64 bg-japa-blue/5 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-japa-blue/3 rounded-full blur-3xl -z-10" />
      
      <div className="container-wide px-4 md:px-6">
        {/* Sección de título centrada */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <AnimationWrapper animation="fade-up" delay={100}>
            <Pill className="inline-flex mb-3">Our Partners</Pill>
            <h2 className="text-balance font-display font-bold text-japa-slate text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4 leading-tight mx-auto max-w-3xl">
              Trusted by <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-japa-orange to-japa-blue animate-gradient bg-size-200">Industry Leaders</span>
            </h2>
            <p className="text-japa-slate/80 text-lg md:text-xl mb-4 md:mb-6 max-w-2xl mx-auto">
              We're proud to collaborate with universities, cities, and organizations across the country 
              to transform parking management and create smarter urban environments.
            </p>
          </AnimationWrapper>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left side: Stats & CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <AnimationWrapper animation="fade-up">
              {/* Partner stats section */}
              <div className="grid grid-cols-2 gap-4 mb-8 md:mb-10">
                {partnerStats.map((stat, index) => (
                  <AnimationWrapper 
                    key={index} 
                    animation="fade-up" 
                    delay={100 * (index + 1)}
                  >
                    <div className="stat-card text-center p-4 md:p-5 rounded-xl bg-white shadow-md border border-gray-100 hover:border-japa-orange/20 relative overflow-hidden group">
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
              
              {/* Replacing the partnership button with a testimonial highlight */}
              <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-japa-orange/5 to-japa-blue/5 rounded-full -z-10 transform translate-x-16 -translate-y-20"></div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-japa-orange/15 text-japa-orange flex items-center justify-center text-lg font-bold">
                    UC
                  </div>
                  <div>
                    <h3 className="text-japa-slate font-semibold text-lg mb-1">
                      Partner Success Stories
                    </h3>
                    <div className="mb-3">
                      <p className="text-japa-slate/90 italic text-sm">
                        "JAPA's smart parking solution has transformed our campus parking experience, reducing search time by 45% and significantly improving student satisfaction."
                      </p>
                    </div>
                    <div className="text-xs text-japa-slate/70">
                      <span className="font-medium text-japa-slate">Robert Chen</span> - Transportation Director, UC Berkeley
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <h4 className="text-japa-slate font-medium text-sm mb-3">Why organizations choose JAPA:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-japa-orange/10 rounded-full text-xs text-japa-orange">Precision Sensors</span>
                    <span className="px-3 py-1 bg-japa-blue/10 rounded-full text-xs text-japa-blue">Data Analytics</span>
                    <span className="px-3 py-1 bg-green-100 rounded-full text-xs text-green-600">Easy Installation</span>
                    <span className="px-3 py-1 bg-japa-slate/10 rounded-full text-xs text-japa-slate">24/7 Support</span>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          
          {/* Right side: Enhanced Logo Showcase */}
          <div className="lg:col-span-7">
            <AnimationWrapper animation="fade-up" delay={300} className="relative">
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
