import { useEffect, useState } from 'react';

interface AnimationOptions {
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const useAnimation = (options: AnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, options.delay || 0);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold || 0.1,
      }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options.delay, options.threshold]);

  return {
    ref: setRef,
    isVisible,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `all ${options.duration || 0.5}s ease-out`,
    },
  };
}; 