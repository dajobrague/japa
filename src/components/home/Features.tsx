import React, { useRef, useState } from "react";
import { CheckCircle, Shield, BarChart, Zap, Globe, Smartphone, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";
import Pill from "../ui/Pill";
import { Link } from "react-router-dom";
import AnimatedButton from "../ui/AnimatedButton";

// Feature data with additional details for enhanced cards
const features = [
  {
    icon: <CheckCircle className="h-6 w-6 text-japa-orange" />,
    title: "Real-Time Parking Data",
    description: "Convert every parking stall into a live data hub with 99%+ accurate sensors that deliver real-time availability information.",
    stat: "99%",
    statLabel: "Accuracy",
    link: "/solutions#real-time",
    color: "from-japa-orange/20 to-japa-orange/5"
  },
  {
    icon: <BarChart className="h-6 w-6 text-japa-orange" />,
    title: "Analytics & Insights",
    description: "Gain valuable insights with historical data, occupancy trends, peak usage times, and customizable reports.",
    stat: "30%",
    statLabel: "Improved Efficiency",
    link: "/solutions#analytics",
    color: "from-japa-blue/20 to-japa-blue/5"
  },
  {
    icon: <Shield className="h-6 w-6 text-japa-orange" />,
    title: "Violation Tracking",
    description: "Automatically detect parking violations with time-based monitoring, improving enforcement efficiency and turnover rates.",
    stat: "40%",
    statLabel: "Increased Revenue",
    link: "/solutions#violations",
    color: "from-japa-orange/20 to-japa-blue/5"
  },
  {
    icon: <Zap className="h-6 w-6 text-japa-orange" />,
    title: "Seamless Integration",
    description: "Integrate with existing parking management systems, payment platforms, and campus apps for a unified experience.",
    stat: "15+",
    statLabel: "Compatible Systems",
    link: "/solutions#integration",
    color: "from-japa-blue/20 to-japa-orange/5"
  },
  {
    icon: <Globe className="h-6 w-6 text-japa-orange" />,
    title: "Web Management Console",
    description: "Access a powerful, user-friendly dashboard to manage and monitor your entire parking ecosystem from anywhere.",
    stat: "24/7",
    statLabel: "Accessibility",
    link: "/solutions#console",
    color: "from-japa-orange/20 to-japa-orange/5"
  },
  {
    icon: <Smartphone className="h-6 w-6 text-japa-orange" />,
    title: "Mobile Application",
    description: "Help commuters quickly find available parking with our intuitive mobile app, reducing congestion and frustration.",
    stat: "4.8",
    statLabel: "App Rating",
    link: "/solutions#mobile",
    color: "from-japa-blue/20 to-japa-blue/5"
  }
];

const Features = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeDot, setActiveDot] = useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: 'smooth' });
      setActiveDot(Math.max(0, activeDot - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: 'smooth' });
      setActiveDot(Math.min(features.length - 1, activeDot + 1));
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const item = scrollContainerRef.current.children[index] as HTMLElement;
      if (item) {
        const scrollLeft = item.offsetLeft - scrollContainerRef.current.offsetLeft;
        scrollContainerRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        setActiveDot(index);
      }
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-japa-gray/30 relative overflow-hidden">
      {/* Add the floating animation */}
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
          
          @keyframes gradient-shift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient-shift 8s ease infinite;
          }
          
          .feature-card {
            transition: all 0.4s ease;
          }
          
          .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
          
          .card-glow {
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 0.5s ease;
          }
          
          .feature-card:hover .card-glow {
            opacity: 0.6;
          }
        `}
      </style>
    
      {/* Enhanced Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-japa-orange/5 rounded-bl-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-japa-blue/5 rounded-tr-[100px] -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-[url('/grid-pattern.svg')] bg-repeat opacity-5 -z-10" />
      
      {/* Floating elements */}
      <div className="absolute top-[10%] right-[5%] w-16 h-16 bg-japa-orange/10 rounded-full blur-xl -z-10 animate-float" />
      <div className="absolute bottom-[15%] left-[7%] w-20 h-20 bg-japa-blue/10 rounded-full blur-xl -z-10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[15%] w-12 h-12 bg-japa-orange/15 rounded-full blur-xl -z-10 animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container-wide px-4 md:px-6">
        <AnimationWrapper animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
            <Pill className="mb-3 md:mb-4 inline-flex">Our Solutions</Pill>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-2xl mx-auto leading-tight">
              Comprehensive Smart <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-japa-orange to-japa-blue animate-gradient">Parking Solutions</span>
            </h2>
            <p className="text-japa-slate/80 text-lg md:text-xl max-w-xl mx-auto">
              Our integrated suite of parking technologies delivers real-time data, actionable insights, and enhanced user experiences.
            </p>
          </div>
        </AnimationWrapper>
        
        {/* Mobile Horizontal Scrolling View */}
        <div className="sm:hidden relative">
          {/* Scroll controls */}
          <div className="flex justify-between absolute -left-2 -right-2 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
            <button 
              onClick={scrollLeft} 
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-japa-slate pointer-events-auto focus:outline-none hover:bg-gray-50 transition-transform hover:scale-110 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollRight} 
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-japa-slate pointer-events-auto focus:outline-none hover:bg-gray-50 transition-transform hover:scale-110 active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory gap-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={() => {
              if (scrollContainerRef.current) {
                const scrollPos = scrollContainerRef.current.scrollLeft;
                const itemWidth = scrollContainerRef.current.scrollWidth / features.length;
                const activeDotIndex = Math.min(
                  features.length - 1,
                  Math.floor((scrollPos + itemWidth / 2) / itemWidth)
                );
                setActiveDot(activeDotIndex);
              }
            }}
          >
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[calc(100vw-64px)] max-w-[280px] snap-center"
              >
                <div className="feature-card bg-white rounded-xl h-full p-5 border border-gray-100 relative overflow-hidden group">
                  {/* Background gradient that appears on hover */}
                  <div className={`card-glow absolute inset-0 bg-gradient-to-tr ${feature.color} -z-10`}></div>
                  
                  {/* Icon with enhanced styling */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  {/* Feature content */}
                  <h3 className="text-base font-display font-semibold mb-2 text-japa-slate group-hover:text-japa-orange transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-japa-slate/70 text-base md:text-lg mb-4 line-clamp-3">
                    {feature.description}
                  </p>
                  
                  {/* Feature stat highlight */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-lg font-bold text-japa-blue">
                      {feature.stat}
                    </div>
                    <div className="text-xs text-japa-slate/70">
                      {feature.statLabel}
                    </div>
                  </div>
                  
                  {/* Learn more link */}
                  <Link 
                    to={feature.link}
                    className="inline-flex items-center text-xs font-medium text-japa-orange hover:text-japa-blue transition-colors duration-200 group-hover:translate-x-1 transition-transform"
                  >
                    Learn more <ArrowRight size={14} className="ml-1 group-hover:ml-2 transition-all" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced scroll indicator dots */}
          <div className="flex justify-center gap-2 mt-4">
            {features.map((_, index) => (
              <button 
                key={index}
                onClick={() => scrollToIndex(index)} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeDot 
                    ? 'bg-japa-orange w-6' 
                    : 'bg-japa-slate/20 hover:bg-japa-slate/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Desktop Grid View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {features.map((feature, index) => (
            <AnimationWrapper 
              key={index} 
              animation="fade-up" 
              delay={100 * index} 
              className="h-full"
            >
              <div 
                className={`feature-card bg-white rounded-xl h-full p-6 md:p-8 border border-gray-100 relative overflow-hidden group ${activeFeature === index ? 'ring-2 ring-japa-orange/30 shadow-xl' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* Background gradient that appears on hover */}
                <div className={`card-glow absolute inset-0 bg-gradient-to-tr ${feature.color} -z-10`}></div>
                
                {/* Icon with enhanced styling */}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-tr ${feature.color} flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                {/* Feature content */}
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2 md:mb-3 text-japa-slate group-hover:text-japa-orange transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-japa-slate/70 text-base md:text-lg mb-6 md:mb-8">
                  {feature.description}
                </p>
                
                {/* Feature stat highlight */}
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <div className="text-xl md:text-2xl font-bold text-japa-blue">
                    {feature.stat}
                  </div>
                  <div className="text-xs md:text-sm text-japa-slate/70">
                    {feature.statLabel}
                  </div>
                </div>
                
                {/* Learn more link */}
                <Link 
                  to={feature.link}
                  className="inline-flex items-center text-xs md:text-sm font-medium text-japa-orange hover:text-japa-blue transition-colors duration-200 group-hover:translate-x-1 transition-transform"
                >
                  Learn more <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                </Link>
              </div>
            </AnimationWrapper>
          ))}
        </div>
        
        {/* Added section CTA */}
        <AnimationWrapper animation="fade-up" delay={600}>
          <div className="mt-10 md:mt-12 lg:mt-16 text-center">
            <AnimatedButton 
              variant="primary"
              icon={<ArrowRight size={16} />}
              className="group hover:scale-105 transition-transform shadow-lg shadow-japa-orange/10"
              onClick={() => window.location.href = '/solutions'}
            >
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                Explore All Solutions
              </span>
            </AnimatedButton>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Features;
