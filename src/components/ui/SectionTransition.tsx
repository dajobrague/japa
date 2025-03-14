import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface SectionTransitionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'zoom-in' | 'none';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  id?: string;
}

/**
 * SectionTransition component provides animated transitions for sections
 * when they enter the viewport while scrolling
 */
const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = '',
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when intersection status changes
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, no need to observe anymore
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  // Determine animation styles based on type
  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return 'opacity-0 translate-y-10';
        case 'fade-in':
          return 'opacity-0';
        case 'slide-in-right':
          return 'opacity-0 translate-x-10';
        case 'slide-in-left':
          return 'opacity-0 -translate-x-10';
        case 'zoom-in':
          return 'opacity-0 scale-95';
        case 'none':
          return '';
        default:
          return 'opacity-0 translate-y-10';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`transition-all ${className}`}
      style={{
        transform: 'translateZ(0)', // Hardware acceleration
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${delay}ms`,
      }}
      data-animate={animation}
      data-visible={isVisible}
    >
      <div className={`${getAnimationStyles()}`} style={{ transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms` }}>
        {children}
      </div>
    </div>
  );
};

export default SectionTransition; 