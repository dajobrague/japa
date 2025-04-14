import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: 
    | "fade-up" 
    | "fade-down" 
    | "fade-left" 
    | "fade-right" 
    | "zoom-in" 
    | "zoom-out";
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const AnimationWrapper = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimationWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Map animation types to classes
  const animationClasses = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-down": "opacity-0 -translate-y-8",
    "fade-left": "opacity-0 translate-x-8",
    "fade-right": "opacity-0 -translate-x-8",
    "zoom-in": "opacity-0 scale-95",
    "zoom-out": "opacity-0 scale-105",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is visible in the viewport
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // If once is true, unobserve after animation is triggered
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          // If not once, hide again when out of viewport
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, once, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-400 ease-out-expo",
        animationClasses[animation],
        isVisible && "opacity-100 translate-x-0 translate-y-0 scale-100",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;
