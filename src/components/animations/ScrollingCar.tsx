
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Car } from "lucide-react";

const ScrollingCar = () => {
  const carRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isParked, setIsParked] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!carRef.current) return;
      
      // Calculate scroll percentage - how far we've scrolled through the document
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScrollPosition = window.scrollY;
      const percentage = (currentScrollPosition / scrollHeight) * 100;
      
      setScrollPercentage(percentage);
      
      // Set parked state when we're near the bottom (> 85%)
      // Reduced from 95% to 85% to stop earlier and align with the parking spots
      setIsParked(percentage > 85);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div 
      ref={carRef}
      className={cn(
        "fixed z-50 transition-all duration-300 ease-out",
        isParked ? "animate-pulse" : ""
      )}
      style={{ 
        // Start below navbar (adjust 15vh to ensure it's below navbar)
        // Stop at around 45vh to align with the parking spots at the top of footer
        top: `${Math.min(Math.max(scrollPercentage, 15), isParked ? 45 : 86)}vh`,
        transform: `rotate(${isParked ? '90deg' : '0deg'})`,
        right: '1px', // Positioned 1px from the right edge (5px closer than before)
      }}
    >
      <div className="relative">
        {/* Car using Lucide icon with custom styling */}
        <div className="w-14 h-8 relative">
          <Car 
            size={36} 
            className="text-japa-orange fill-japa-orange/30" 
            strokeWidth={2} 
          />
          
          {/* Headlight effect */}
          <div className="absolute top-[13px] right-[30px] w-2 h-2 bg-yellow-200 rounded-full shadow-yellow-100"></div>
          
          {/* Tail light effect */}
          <div className="absolute top-[13px] left-[4px] w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
        
        {/* Motion effect */}
        {!isParked && (
          <div className="absolute right-[-5px] top-[13px] w-3 h-2 bg-white/10 blur-sm rounded-full"></div>
        )}
      </div>
      
      {/* Parking spot when parked */}
      {isParked && (
        <div className="absolute top-[10px] left-[-10px] w-16 h-8 border-2 border-dashed border-white/30 rounded-md -z-10"></div>
      )}
    </div>
  );
};

export default ScrollingCar;
