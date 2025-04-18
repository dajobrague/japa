import React from 'react';
import AnimationWrapper from '../common/AnimationWrapper';
import Pill from '../ui/Pill';
import AnimatedButton from "../common/AnimatedButton";
import { ArrowRight } from "lucide-react";
import { useDemoForm } from "@/contexts/DemoFormContext";

const IllustrationSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-japa-orange/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-japa-blue/5 rounded-full blur-3xl -z-10" />
      
      {/* Reduced top margin to make more room for the larger image */}
      <div className="container-wide px-0 md:px-0">
        <div className="text-center mb-6 md:mb-8 px-4 md:px-6">
          <AnimationWrapper animation="fade-up" delay={100}>
            <Pill className="inline-flex mb-3">JAPA Overview</Pill>
            <h2 className="text-balance font-display font-bold text-japa-slate text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4 leading-tight mx-auto max-w-3xl">
              Comprehensive <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-japa-orange to-japa-blue animate-gradient bg-size-200">Smart Parking</span> Platform
            </h2>
            <p className="text-japa-slate/80 text-lg md:text-xl mb-4 md:mb-6 max-w-2xl mx-auto">
              Our integrated solution provides real-time data and insights to transform your parking operations
            </p>
          </AnimationWrapper>
        </div>
        
        <AnimationWrapper animation="fade-up" delay={200}>
          {/* Full-width container with no constraints */}
          <div className="relative w-full mx-auto">
            {/* Enhanced shadow effect */}
            <div className="absolute inset-0 rounded-none md:rounded-xl shadow-2xl opacity-20 transform translate-y-4 scale-95 blur-md"></div>
            
            {/* Illustration container with subtle hover effect - made full-width on mobile */}
            <div className="relative rounded-none md:rounded-xl overflow-hidden border-x-0 md:border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              {/* Responsive image handling - much larger fixed height */}
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] overflow-hidden">
                <img 
                  src="/assets/images/illustrations/JAPA_ILLUSTRATION.png" 
                  alt="JAPA Smart Parking Platform Illustration" 
                  className="w-full h-full object-contain object-center scale-125 md:scale-130 lg:scale-140"
                  style={{ maxHeight: 'calc(100vh - 300px)' }} // Dynamic max height based on viewport
                />
                
                {/* Subtle gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-30"></div>
              </div>
              
              {/* Caption for the illustration - adjusted positioning */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg py-2 px-4 shadow-md border border-gray-100 hidden md:block">
                  <span className="text-japa-slate text-sm font-medium">Integrated Parking Ecosystem</span>
                </div>
                
                <div className="bg-japa-orange/90 backdrop-blur-sm rounded-lg py-2 px-4 shadow-md border border-japa-orange/20 hidden md:block">
                  <span className="text-white text-sm font-medium">IoT Sensors & Analytics</span>
                </div>
              </div>
            </div>
            
            {/* Floating badges for different screen sizes - adjusted positioning for larger container */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-full p-4 shadow-lg border border-gray-100 hidden lg:block transform rotate-12">
              <div className="bg-japa-blue/10 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-japa-blue">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
                </svg>
              </div>
            </div>
            
            <div className="absolute -top-8 -left-8 bg-white rounded-full p-4 shadow-lg border border-gray-100 hidden lg:block transform -rotate-12">
              <div className="bg-japa-orange/10 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-japa-orange">
                  <path d="M18 6H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"></path>
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <circle cx="10" cy="13" r="2"></circle>
                  <path d="M14 13h2"></path>
                  <path d="M14 13h2"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Mobile caption - visible only on small screens */}
          <div className="mt-6 text-center md:hidden px-4">
            <span className="inline-block bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-japa-slate font-medium">
              Integrated Smart Parking Platform
            </span>
          </div>
        </AnimationWrapper>
      </div>
      
      {/* Add subtle animated dots pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] -z-20"></div>
    </section>
  );
};

export default IllustrationSection; 