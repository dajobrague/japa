import React, { useState, useEffect, useRef } from "react";
import AnimationWrapper from "../common/AnimationWrapper";
import Pill from "../ui/Pill";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, CheckCircle2 } from "lucide-react";
import AnimatedButton from "../common/AnimatedButton";
import { useDemoForm } from "@/contexts/DemoFormContext";

// Partner data with original names - TBD flag removed
const partnerLogos = [
  {
    id: 1,
    name: "University of California, Berkeley",
    logo: "/assets/images/ucb-logo-2000x2000.png",
    alt: "UC Berkeley logo",
    category: "University"
  },
  {
    id: 2,
    name: "University of California, Davis",
    logo: "/assets/images/UCDavis.png",
    alt: "UC Davis logo",
    category: "University"
  },
  {
    id: 3,
    name: "UC Davis Health",
    logo: "/assets/images/UCDavis_Health.png",
    alt: "UC Davis Health logo",
    category: "Healthcare"
  },
  {
    id: 4,
    name: "City of Vacaville",
    logo: "/assets/images/vacaville.gif",
    alt: "City of Vacaville logo",
    category: "City"
  },
  {
    id: 5,
    name: "City of Woodland",
    logo: "/assets/images/Woodland.png",
    alt: "City of Woodland logo",
    category: "City"
  },
  {
    id: 6,
    name: "City of Dana Point",
    logo: "/assets/images/DanaPoint.png",
    alt: "City of Dana Point logo",
    category: "City"
  },
  {
    id: 7,
    name: "Sacramento Municipal Utility District",
    logo: "/assets/images/Sacramento-Muni-Utility-District.png",
    alt: "Sacramento Municipal Utility District logo",
    category: "Organization"
  },
  {
    id: 8,
    name: "Gillette Stadium",
    logo: "/assets/images/Gillette (1).jpeg",
    alt: "Gillette Stadium logo",
    category: "Venue"
  },
  {
    id: 9,
    name: "Scottish Rite Children's Hospital",
    logo: "/assets/images/ScottishRiteHospital.png",
    alt: "Scottish Rite Children's Hospital logo",
    category: "Healthcare"
  },
  {
    id: 10,
    name: "Cal Poly Pomona University",
    logo: "/assets/images/calpolypamona (1).jpg",
    alt: "Cal Poly Pomona University logo",
    category: "University"
  },
  {
    id: 11,
    name: "NC State University",
    logo: "/assets/images/NCStateUniversity.jpg",
    alt: "NC State University logo",
    category: "University"
  },
  {
    id: 12,
    name: "University of California, San Francisco",
    logo: "/assets/images/UC-SanFrancisco.jpg",
    alt: "UC San Francisco logo",
    category: "University"
  },
  {
    id: 13,
    name: "Castro District",
    logo: "/assets/images/CastroDistrict.jpg",
    alt: "Castro District logo",
    category: "District"
  },
  {
    id: 14,
    name: "USC",
    logo: "/assets/images/USC.png",
    alt: "USC logo",
    category: "University"
  },
  {
    id: 15,
    name: "UCLA",
    logo: "/assets/images/UCLA 2.jpg",
    alt: "UCLA logo",
    category: "University"
  },
  {
    id: 16,
    name: "Columbus International Airport",
    logo: "/assets/images/Columbus Airport Pilot.webp",
    alt: "Columbus International Airport logo",
    category: "Airport"
  },
  {
    id: 17,
    name: "Siemens",
    logo: "/assets/images/siemens-logo-240x240.png",
    alt: "Siemens logo",
    category: "Industry"
  },
  {
    id: 18,
    name: "NWave",
    logo: "/assets/images/nwave-logo-2000x2000.png",
    alt: "NWave logo",
    category: "Industry"
  }
];

const Partners = () => {
  const [activePartner, setActivePartner] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const partnersPerSlide = 5; // Changed from 3 to 5 partners per slide
  const totalSlides = Math.ceil(partnerLogos.length / partnersPerSlide);
  const { openDemoForm } = useDemoForm();

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Navigation functions with continuous scroll
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Get partners for the current slide with continuous scroll
  const getPartnersForSlide = (slideIndex: number) => {
    const startIndex = slideIndex * partnersPerSlide;
    const partners = [];
    
    for (let i = 0; i < partnersPerSlide; i++) {
      const index = (startIndex + i) % partnerLogos.length;
      partners.push(partnerLogos[index]);
    }
    
    return partners;
  };

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
          
          .carousel-container {
            overflow: hidden;
            position: relative;
          }
          
          .carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
          }
          
          .carousel-slide {
            flex: 0 0 100%;
            width: 100%;
          }
          
          .carousel-indicator {
            transition: all 0.3s ease;
          }
          
          .carousel-indicator.active {
            width: 24px;
            background-color: #3b82f6;
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

        {/* Full-width Partner Carousel */}
        <div className="mb-12 md:mb-16">
          <AnimationWrapper animation="fade-up" delay={300} className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-japa-orange/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-japa-blue/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Enhanced partner carousel with modern design */}
            <div 
              className="relative rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100/50 overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-japa-orange/5 to-japa-blue/5 rounded-full -z-10 transform translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-bl from-japa-blue/5 to-japa-orange/5 rounded-full -z-10 transform -translate-x-20 translate-y-20"></div>
              
              {/* Carousel header */}
              <div className="bg-gradient-to-r from-japa-slate/5 to-japa-slate/10 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-japa-slate font-medium text-lg">Our Partners</h3>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={goToPrevSlide}
                    className="p-1.5 rounded-full bg-white/50 hover:bg-white/80 transition-colors text-japa-slate/70 hover:text-japa-blue"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={goToNextSlide}
                    className="p-1.5 rounded-full bg-white/50 hover:bg-white/80 transition-colors text-japa-slate/70 hover:text-japa-blue"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              
              {/* Carousel content */}
              <div className="p-6 md:p-8">
                <div className="carousel-container" ref={carouselRef}>
                  <div 
                    className="carousel-track" 
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div key={slideIndex} className="carousel-slide">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                          {getPartnersForSlide(slideIndex).map((partner, index) => (
                            <div 
                              key={`${partner.id}-${slideIndex}-${index}`} 
                              className="partner-logo relative group block"
                              onMouseEnter={() => setActivePartner(slideIndex * partnersPerSlide + index)}
                              onMouseLeave={() => setActivePartner(null)}
                            >
                              <div className="aspect-[3/2] rounded-lg overflow-hidden border border-gray-100 hover:border-japa-orange/30 transition-all duration-300 bg-white flex items-center justify-center p-4 relative">
                                {/* Logo overlay effect on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-japa-orange/5 to-japa-blue/5 transition-opacity duration-300 ${
                                  activePartner === (slideIndex * partnersPerSlide + index) ? 'opacity-100' : 'opacity-0'
                                }`}></div>
                                
                                {/* Category badge */}
                                <div className={`absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-japa-slate text-[10px] py-0.5 px-2 rounded-full shadow-sm transition-all duration-300 ${
                                  activePartner === (slideIndex * partnersPerSlide + index) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                }`}>
                                  {partner.category}
                                </div>
                                
                                {/* Logo image with optimized quality */}
                                <img 
                                  src={partner.logo} 
                                  alt={partner.alt}
                                  className="max-w-[80%] max-h-[60%] transition-all duration-300 group-hover:scale-110"
                                  onError={(e) => handleLogoError(e, (slideIndex * partnersPerSlide + index) % partnerLogos.length)}
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
                    ))}
                  </div>
                </div>
                
                {/* Carousel indicators */}
                <div className="flex justify-center items-center gap-2 mt-6">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-indicator h-2 rounded-full transition-all ${
                        index === currentSlide ? 'active' : 'w-2 bg-gray-300'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>

        {/* Partner Success Stories Section - Now below the carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimationWrapper animation="fade-up" delay={400}>
            {/* Partner success stories section */}
            <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100 relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-japa-orange/5 to-japa-blue/5 rounded-full -z-10 transform translate-x-16 -translate-y-20"></div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-japa-orange/15 text-japa-orange flex items-center justify-center text-lg font-bold">
                  UC
                </div>
                <div>
                  <h3 className="text-japa-slate font-semibold text-lg mb-3">
                    Partner Success Stories
                  </h3>
                  <div className="mb-4">
                    <p className="text-japa-slate/90 italic text-base leading-relaxed">
                      "The Data JAPA provides for my parking operation helps manage our inventory and our commuters are happier!"
                    </p>
                  </div>
                  <div className="text-sm text-japa-slate/70 mb-6">
                    <span className="font-medium text-japa-slate">Yasser Jabbari</span> - Parking Director, UC Riverside
                  </div>
                </div>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper animation="fade-up" delay={500}>
            {/* Why organizations choose JAPA section */}
            <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100 relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-japa-blue/5 to-japa-orange/5 rounded-full -z-10 transform translate-x-16 -translate-y-20"></div>
              
              <h3 className="text-japa-slate font-semibold text-lg mb-4">
                Why organizations choose JAPA
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/15 text-green-500 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  </div>
                  <div>
                    <h4 className="text-japa-slate font-medium">Precision Sensors</h4>
                    <p className="text-japa-slate/70 text-sm">Accurate real-time data for better decision making</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/15 text-green-500 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  </div>
                  <div>
                    <h4 className="text-japa-slate font-medium">Data Analytics</h4>
                    <p className="text-japa-slate/70 text-sm">Insights that drive operational efficiency</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/15 text-green-500 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  </div>
                  <div>
                    <h4 className="text-japa-slate font-medium">Easy Installation</h4>
                    <p className="text-japa-slate/70 text-sm">Minimal disruption to your operations</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper animation="fade-up" delay={600}>
            {/* Call to action section */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-japa-blue/10 to-japa-orange/10 shadow-md border border-gray-100 relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-japa-blue/5 to-japa-orange/5 rounded-full -z-10 transform translate-x-16 -translate-y-20"></div>
              
              <h3 className="text-japa-slate font-semibold text-lg mb-4">
                Ready to transform your parking operation?
              </h3>
              
              <p className="text-japa-slate/80 mb-6">
                Join our network of partners and discover how JAPA can help optimize your parking resources.
              </p>
              
              <div className="mt-auto">
                <button 
                  onClick={openDemoForm}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-japa-blue text-white rounded-lg hover:bg-japa-darkBlue transition-colors"
                >
                  Request a demo <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
