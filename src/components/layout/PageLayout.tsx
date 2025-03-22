import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import LoadingScreen from '../ui/LoadingScreen';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageLayout provides a consistent layout structure for all pages
 * including the Navbar and Footer with appropriate spacing and transitions
 */
const PageLayout: React.FC<PageLayoutProps> = ({ children, className = '' }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  
  // Check if current page is homepage or solutions page
  const isHomePage = location.pathname === '/' || location.pathname === '/index';
  const isSolutionsPage = location.pathname === '/solutions';
  const isUseCasesPage = location.pathname === '/use-cases';
  const isCaseStudiesPage = location.pathname === '/case-studies';
  const isAboutPage = location.pathname === '/about';
  const isPressPage = location.pathname === '/press';
  const isFAQsPage = location.pathname === '/faqs';
  const hasGlobalBackground = isHomePage || isSolutionsPage || isUseCasesPage || isCaseStudiesPage || isAboutPage || isPressPage || isFAQsPage;

  useEffect(() => {
    setIsVisible(true);
    
    const handleStart = () => {
      setIsLoading(true);
      setIsVisible(false);
    };
    
    const handleComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
        setIsVisible(true);
      }, 300); // Short delay for smoother transitions
    };
    
    // Cleanup function will be called on unmount
    return () => {
      // No cleanup needed for location-based navigation
    };
  }, []);

  // Handle route changes for page transitions
  useEffect(() => {
    setIsVisible(false);
    setIsLoading(true);
    
    setTimeout(() => {
      window.scrollTo(0, 0);
      setIsLoading(false);
      setIsVisible(true);
    }, 300);
    
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const id = href.slice(1);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .page-transition {
            transition: opacity 0.5s ease, transform 0.5s ease;
          }
          
          .page-transition-enter {
            opacity: 0;
            transform: translateY(10px);
          }
          
          .page-transition-enter-active {
            opacity: 1;
            transform: translateY(0);
            animation: fadeIn 0.5s ease forwards;
          }
          
          .loading-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(to right, #f97316, #3b82f6);
            z-index: 9999;
            transition: width 0.3s ease;
          }
          
          .loading-spinner {
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top: 3px solid #f97316;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      
      {/* Enhanced Loading Screen */}
      <LoadingScreen isLoading={isLoading} />
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="loading-bar w-full" style={{ width: isLoading ? '100%' : '0%' }}></div>
      )}
      
      <Navbar />
      
      <main 
        className={`flex-grow page-transition ${className} ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'} ${hasGlobalBackground ? 'global-background-page relative' : ''}`}
        style={{ transition: 'opacity 0.5s ease, transform 0.5s ease' }}
      >
        {/* Global background gradient - Redesigned with higher z-index and more visible gradient */}
        {hasGlobalBackground && (
          <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Main gradient background - visible throughout the entire page */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-japa-orange/5 to-white"></div>
            
            {/* Secondary gradients for depth and visual interest */}
            <div className="absolute inset-0 bg-gradient-to-tr from-japa-orange/10 via-transparent to-japa-blue/5"></div>
            
            {/* Subtle patterns and texture */}
            <div className="absolute inset-0 bg-grid-pattern-light opacity-10"></div>
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
            
            {/* Optional: Debug outline to see section boundaries - remove in production */}
            {false && (
              <style>
                {`
                  section {
                    outline: 1px dashed rgba(249, 115, 22, 0.2);
                  }
                `}
              </style>
            )}
          </div>
        )}
        <div className={`${hasGlobalBackground ? 'relative z-10' : ''}`}>
          {children}
        </div>
      </main>
      
      <Footer />
      
      {/* Back to top button */}
      <BackToTopButton />
    </div>
  );
};

// Back to top button component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-japa-orange text-white shadow-lg transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
};

export default PageLayout; 