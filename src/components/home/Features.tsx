import React, { useRef, useState, useEffect } from "react";
import { CheckCircle, Shield, BarChart, Zap, Globe, Smartphone, ArrowRight, ChevronLeft, ChevronRight, X, Check, ChevronDown, Gauge, BarChart3, RefreshCw, Layers } from "lucide-react";
import AnimationWrapper from "../common/AnimationWrapper";
import Pill from "../ui/Pill";
import { Link } from "react-router-dom";
import AnimatedButton from "../common/AnimatedButton";
import { createPortal } from "react-dom";
import { useDemoForm } from "@/contexts/DemoFormContext";
import { features as featuresData, Feature } from "@/data/featuresData";
import { FeatureContent } from "@/types/solutions";
import { useAnimation } from '@/hooks/useAnimation';
import { COMPONENT_NAMES } from '@/constants/componentNames';
import FeatureCard from './FeatureCard';

// Definición de estructura de datos para el contenido detallado
interface DetailedContent {
  overview: string;
  benefits: string[];
  technicalDetails: string;
  useCases: {
    title: string;
    description: string;
  }[];
}

// Componente para el modal de características
interface SolutionModalProps {
  feature: Feature;
  onClose: () => void;
  isOpen: boolean;
}

const SolutionModal: React.FC<SolutionModalProps> = ({ feature, onClose, isOpen }) => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  
  useEffect(() => {
    if (isOpen) {
      // Add scroll event listener to hide indicator when user scrolls
      const modalContainer = document.querySelector('.modal-container');
      if (modalContainer) {
        const handleScroll = () => {
          if (modalContainer.scrollTop > 50) {
            setShowScrollIndicator(false);
          } else {
            setShowScrollIndicator(true);
          }
        };
        
        modalContainer.addEventListener('scroll', handleScroll);
        return () => modalContainer.removeEventListener('scroll', handleScroll);
      }
    }
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" 
         style={{
           backgroundColor: 'rgba(0, 0, 0, 0.5)',
           backdropFilter: 'blur(4px)'
         }}
         onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto modal-container relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with proper image handling */}
        <div className="h-40 md:h-56 relative rounded-t-2xl overflow-hidden">
          {/* Direct image element for better control */}
          <img 
            src={feature.modalImage || feature.bgImage} 
            alt={feature.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 rounded-t-2xl"></div>
          
          {/* Enhanced gradient overlay for better visibility of scroll indicator */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          
          {/* Close button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
          
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-4">
              <div className={`${feature.color} p-3 rounded-full flex items-center justify-center shadow-lg`}>
                {feature.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{feature.title}</h2>
            </div>
          </div>
        </div>

        {/* Scroll indicator - positioned at the bottom of the modal */}
        {showScrollIndicator && (
          <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center z-30">
            <div className="flex items-center bg-gradient-to-t from-japa-orange/90 to-japa-orange/60 px-4 py-2 rounded-full shadow-lg animate-bounce-soft">
              <span className="text-xs font-semibold text-white">
                Scroll for details
              </span>
              <ChevronDown className="w-5 h-5 text-white ml-1" />
            </div>
          </div>
        )}

        {/* Modal content with scrollable area */}
        <div className="p-6 md:p-8 pr-8 overflow-y-auto flex-grow"
            style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
          {/* Overview */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-japa-slate mb-3">Overview</h3>
            <p className="text-japa-slate/80 mb-6">{feature.detailedContent.overview}</p>
            
            <h3 className="text-xl font-bold text-japa-slate mb-3">Key Benefits</h3>
            <ul className="space-y-3 mb-6">
              {feature.detailedContent.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start bg-japa-orange/5 p-3 rounded-lg">
                  <Check className="text-japa-orange w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-japa-slate/90">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Feature illustration */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-md">
              <img 
                src={feature.bgImage} 
                alt={`${feature.title} illustration`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Technical Details */}
          <div className="mb-8 p-6 bg-japa-blue/5 rounded-xl border border-japa-blue/10">
            <h3 className="text-xl font-bold text-japa-slate mb-3">Technical Specifications</h3>
            <p className="text-japa-slate/80">{feature.detailedContent.technicalDetails}</p>
          </div>

          {/* Use Cases */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-japa-slate mb-4">Example Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {feature.detailedContent.useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-lg p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-japa-slate mb-2">{useCase.title}</h4>
                  <p className="text-japa-slate/80">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mb-8 flex flex-wrap gap-4">
            <div className="flex-1 min-w-[150px] bg-japa-orange/10 rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-japa-orange mb-1">{feature.stat}</div>
              <div className="text-sm text-japa-slate/70">{feature.statLabel}</div>
            </div>
            <div className="flex-1 min-w-[150px] bg-japa-blue/10 rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-japa-blue mb-1">24/7</div>
              <div className="text-sm text-japa-slate/70">Support Available</div>
            </div>
            <div className="flex-1 min-w-[150px] bg-green-100 rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">Easy</div>
              <div className="text-sm text-japa-slate/70">Installation</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <AnimatedButton 
              variant="primary" 
              size="lg"
              className="shadow-lg shadow-japa-orange/20"
            >
              Schedule a Demo
            </AnimatedButton>
            
            <Link to={feature.link}>
              <AnimatedButton 
                variant="outline" 
                size="lg"
                icon={<ArrowRight size={16} />}
              >
                Learn More
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const Features = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState<Feature | null>(featuresData[0]);
  const [activeDot, setActiveDot] = useState(0);
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const { ref: animationRef, style: animationStyle } = useAnimation({ delay: 100 });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: 'smooth' });
      setActiveDot(Math.max(0, activeDot - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: 'smooth' });
      setActiveDot(Math.min(featuresData.length - 1, activeDot + 1));
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

  const handleOpenModal = (id: string) => {
    setOpenModalId(id);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
  };

  const handleFeatureClick = (feature: Feature) => {
    setActiveFeature(feature);
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden -mt-8 md:-mt-4">
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
          
          @keyframes bounce-soft {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(8px);
            }
          }
          
          .animate-bounce-soft {
            animation: bounce-soft 1.5s infinite ease-in-out;
          }
          
          .feature-card {
            transition: all 0.4s ease;
          }
          
          .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
          }
          
          .card-shine {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              45deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.1) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            transform: translateX(-100%);
            transition: transform 0.6s;
          }
          
          .feature-card:hover .card-shine {
            transform: translateX(100%);
          }

          /* Hide header when modal is open */
          body.modal-open header {
            visibility: hidden;
          }
          
          /* Improved modal scrolling with custom scrollbar */
          .modal-container {
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
          }
          
          /* Custom scrollbar styling - invisible but functional */
          .modal-container::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
          
          .modal-container::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .modal-container::-webkit-scrollbar-thumb {
            background: transparent;
          }
          
          /* Firefox scrollbar styling */
          .modal-container {
            scrollbar-width: none;
            scrollbar-color: transparent transparent;
          }
          
          /* IE and Edge */
          .modal-container {
            -ms-overflow-style: none;
          }
        `}
      </style>
      
      {/* Floating elements with orange color for contrast with white background */}
      <div className="absolute top-[10%] right-[5%] w-32 h-32 bg-japa-orange/10 rounded-full blur-xl -z-10 animate-float"></div>
      <div className="absolute bottom-[15%] left-[7%] w-40 h-40 bg-japa-orange/10 rounded-full blur-xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[15%] w-24 h-24 bg-japa-blue/10 rounded-full blur-xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-wide px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4 md:mb-6 lg:mb-8" ref={animationRef} style={animationStyle}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 max-w-2xl mx-auto leading-tight text-japa-slate">
            Comprehensive Smart Parking Solutions
          </h2>
          <p className="text-japa-slate/80 text-lg md:text-xl max-w-xl mx-auto">
            Our integrated suite of parking technologies delivers real-time data, actionable insights, and enhanced user experiences.
          </p>
        </div>
        
        {/* Mobile Horizontal Scrolling View */}
        <div className="sm:hidden relative">
          {/* Scroll controls */}
          <div className="flex justify-between absolute -left-2 -right-2 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
            <button 
              onClick={scrollLeft} 
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-japa-orange pointer-events-auto focus:outline-none hover:bg-gray-50 transition-transform hover:scale-110 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollRight} 
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-japa-orange pointer-events-auto focus:outline-none hover:bg-gray-50 transition-transform hover:scale-110 active:scale-95"
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
                const itemWidth = scrollContainerRef.current.scrollWidth / featuresData.length;
                const activeDotIndex = Math.min(
                  featuresData.length - 1,
                  Math.floor((scrollPos + itemWidth / 2) / itemWidth)
                );
                setActiveDot(activeDotIndex);
              }
            }}
          >
            {featuresData.map((feature, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[calc(100vw-64px)] max-w-[280px] snap-center"
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  stat={feature.stat}
                  statLabel={feature.statLabel}
                  color={feature.color}
                  delay={index * 100}
                  onLearnMore={() => handleOpenModal(feature.id)}
                />
              </div>
            ))}
          </div>
          
          {/* Enhanced scroll indicator dots */}
          <div className="flex justify-center gap-2 mt-4">
            {featuresData.map((_, index) => (
              <button 
                key={index}
                onClick={() => scrollToIndex(index)} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeDot 
                    ? 'bg-japa-orange w-6' 
                    : 'bg-japa-orange/30 hover:bg-japa-orange/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Desktop Grid View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              stat={feature.stat}
              statLabel={feature.statLabel}
              color={feature.color}
              delay={index * 100}
              onLearnMore={() => handleOpenModal(feature.id)}
            />
          ))}
        </div>
      </div>
      
      {/* Modales para cada característica */}
      {featuresData.map((feature) => (
        <SolutionModal
          key={feature.id}
          feature={feature}
          isOpen={openModalId === feature.id}
          onClose={handleCloseModal}
        />
      ))}
    </section>
  );
};

Features.displayName = COMPONENT_NAMES.FEATURES;

export default Features;
