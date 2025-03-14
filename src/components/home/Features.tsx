import React, { useRef } from "react";
import { CheckCircle, Shield, BarChart, Zap, Globe, Smartphone, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";
import Pill from "../ui/Pill";
import { Link } from "react-router-dom";

// Feature data with additional details for enhanced cards
const features = [
  {
    icon: <CheckCircle className="h-6 w-6 text-japa-orange" />,
    title: "Real-Time Parking Data",
    description: "Convert every parking stall into a live data hub with 99%+ accurate sensors that deliver real-time availability information.",
    stat: "99%",
    statLabel: "Accuracy",
    link: "/solutions#real-time"
  },
  {
    icon: <BarChart className="h-6 w-6 text-japa-orange" />,
    title: "Analytics & Insights",
    description: "Gain valuable insights with historical data, occupancy trends, peak usage times, and customizable reports.",
    stat: "30%",
    statLabel: "Improved Efficiency",
    link: "/solutions#analytics"
  },
  {
    icon: <Shield className="h-6 w-6 text-japa-orange" />,
    title: "Violation Tracking",
    description: "Automatically detect parking violations with time-based monitoring, improving enforcement efficiency and turnover rates.",
    stat: "40%",
    statLabel: "Increased Revenue",
    link: "/solutions#violations"
  },
  {
    icon: <Zap className="h-6 w-6 text-japa-orange" />,
    title: "Seamless Integration",
    description: "Integrate with existing parking management systems, payment platforms, and campus apps for a unified experience.",
    stat: "15+",
    statLabel: "Compatible Systems",
    link: "/solutions#integration"
  },
  {
    icon: <Globe className="h-6 w-6 text-japa-orange" />,
    title: "Web Management Console",
    description: "Access a powerful, user-friendly dashboard to manage and monitor your entire parking ecosystem from anywhere.",
    stat: "24/7",
    statLabel: "Accessibility",
    link: "/solutions#console"
  },
  {
    icon: <Smartphone className="h-6 w-6 text-japa-orange" />,
    title: "Mobile Application",
    description: "Help commuters quickly find available parking with our intuitive mobile app, reducing congestion and frustration.",
    stat: "4.8",
    statLabel: "App Rating",
    link: "/solutions#mobile"
  }
];

const Features = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-japa-gray/30 relative overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-japa-orange/5 rounded-bl-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-japa-blue/5 rounded-tr-[100px] -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-[url('/grid-pattern.svg')] bg-repeat opacity-5 -z-10" />
      
      {/* Floating elements */}
      <div className="absolute top-[10%] right-[5%] w-16 h-16 bg-japa-orange/10 rounded-full blur-xl -z-10" />
      <div className="absolute bottom-[15%] left-[7%] w-20 h-20 bg-japa-blue/10 rounded-full blur-xl -z-10" />
      
      <div className="container-wide px-4 md:px-6">
        <AnimationWrapper animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
            <Pill className="mb-3 md:mb-4">Our Solutions</Pill>
            <h2 className="text-balance font-display font-bold text-japa-slate mb-4 md:mb-5 text-3xl sm:text-4xl md:text-5xl leading-tight">
              Comprehensive Smart <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-japa-orange to-japa-blue">Parking Solutions</span>
            </h2>
            <p className="text-japa-slate/80 text-base md:text-lg">
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
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-japa-slate pointer-events-auto focus:outline-none hover:bg-gray-50"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={scrollRight} 
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-japa-slate pointer-events-auto focus:outline-none hover:bg-gray-50"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          
          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory gap-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[calc(100vw-64px)] max-w-[280px] snap-center"
              >
                <div className="bg-white rounded-xl h-full p-5 transition-all duration-300 hover:shadow-xl border border-gray-100 relative overflow-hidden group">
                  {/* Background gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-japa-blue/5 to-japa-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Icon with enhanced styling */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-japa-orange/20 to-japa-orange/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  {/* Feature content */}
                  <h3 className="text-base font-display font-semibold mb-2 text-japa-slate group-hover:text-japa-orange transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-japa-slate/70 text-sm mb-4 line-clamp-3">
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
                    Learn more <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {features.map((_, index) => (
              <div 
                key={index} 
                className="w-1.5 h-1.5 rounded-full bg-japa-slate/20"
              ></div>
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
              <div className="bg-white rounded-xl h-full p-6 md:p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 relative overflow-hidden group">
                {/* Background gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-japa-blue/5 to-japa-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Icon with enhanced styling */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-tr from-japa-orange/20 to-japa-orange/10 flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Feature content */}
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2 md:mb-3 text-japa-slate group-hover:text-japa-orange transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-japa-slate/70 text-sm md:text-base mb-6 md:mb-8">
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
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </AnimationWrapper>
          ))}
        </div>
        
        {/* Added section CTA */}
        <AnimationWrapper animation="fade-up" delay={600}>
          <div className="mt-10 md:mt-12 lg:mt-16 text-center">
            <Link 
              to="/solutions" 
              className="bg-japa-slate hover:bg-japa-slate/90 text-white py-2.5 md:py-3 px-6 md:px-8 rounded-full inline-flex items-center text-sm md:text-base font-medium transition-all duration-300 hover:pl-6 hover:pr-10 shadow-lg"
            >
              Explore All Solutions
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Features;
