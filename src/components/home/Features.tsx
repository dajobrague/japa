import React, { useRef, useState, useEffect } from "react";
import { CheckCircle, Shield, BarChart, Zap, Globe, Smartphone, ArrowRight, ChevronLeft, ChevronRight, X, Check, ChevronDown } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";
import Pill from "../ui/Pill";
import { Link } from "react-router-dom";
import AnimatedButton from "../ui/AnimatedButton";
import { createPortal } from "react-dom";

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

// Feature data with additional details for enhanced cards
const features = [
  {
    id: "real-time",
    icon: <CheckCircle className="h-6 w-6 text-white" />,
    title: "Real-Time Parking Data",
    description: "Convert every parking stall into a live data hub with 99%+ accurate sensors that deliver real-time availability information.",
    stat: "99%",
    statLabel: "Accuracy",
    link: "/solutions#real-time",
    color: "bg-japa-blue",
    bgImage: "/lovable-uploads/image.png",
    modalImage: "/lovable-uploads/image.png",
    detailedContent: {
      overview: "Our real-time parking data solution transforms traditional parking spaces into smart, connected data hubs that continuously monitor occupancy status with incredible precision.",
      benefits: [
        "Reduce time spent searching for parking by up to 30%",
        "Minimize traffic congestion in parking areas",
        "Enable data-driven parking management decisions",
        "Improve customer satisfaction with reliable parking information"
      ],
      technicalDetails: "Each parking stall is equipped with our proprietary wireless sensor technology that detects vehicle presence with 99% accuracy. Sensors communicate via a secure mesh network to our cloud platform, where data is processed and distributed in near real-time (≤2 second latency).",
      useCases: [
        {
          title: "University Campus",
          description: "Helping students and faculty quickly locate available parking during peak hours, reducing tardiness and frustration."
        },
        {
          title: "Shopping Centers",
          description: "Guiding shoppers to available spaces near their preferred entrances, improving retail experience and increasing visitor time in stores."
        }
      ]
    }
  },
  {
    id: "analytics",
    icon: <BarChart className="h-6 w-6 text-white" />,
    title: "Analytics & Insights",
    description: "Gain valuable insights with historical data, occupancy trends, peak usage times, and customizable reports.",
    stat: "30%",
    statLabel: "Improved Efficiency",
    link: "/solutions#analytics",
    color: "bg-japa-slate",
    bgImage: "/lovable-uploads/analytics_image.png",
    modalImage: "/lovable-uploads/analytics_image.png",
    detailedContent: {
      overview: "Our analytics platform transforms raw parking data into meaningful insights that help operators optimize space utilization, improve revenue, and plan for future needs.",
      benefits: [
        "Identify peak usage patterns to optimize staffing and resources",
        "Discover underutilized parking areas to maximize property value",
        "Generate detailed reports for stakeholders and planning committees",
        "Make data-driven decisions about pricing and time restrictions"
      ],
      technicalDetails: "The analytics dashboard processes millions of data points using advanced machine learning algorithms to identify patterns and anomalies. Users can generate custom reports with just a few clicks, or schedule automated reports to be delivered to key stakeholders.",
      useCases: [
        {
          title: "Municipal Government",
          description: "Analyzing parking patterns to adjust pricing strategies for different zones and times of day, resulting in more efficient utilization."
        },
        {
          title: "Airport Parking",
          description: "Tracking seasonal and daily usage trends to optimize shuttle services and predict capacity needs during peak travel periods."
        }
      ]
    }
  },
  {
    id: "violations",
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Violation Tracking",
    description: "Automatically detect parking violations with time-based monitoring, improving enforcement efficiency and turnover rates.",
    stat: "40%",
    statLabel: "Increased Revenue",
    link: "/solutions#violations",
    color: "bg-japa-blue",
    bgImage: "/lovable-uploads/violation_image.png",
    modalImage: "/lovable-uploads/violation_image.png",
    detailedContent: {
      overview: "Our violation tracking system automatically monitors parking duration in time-limited spaces, generating alerts for enforcement personnel when violations occur.",
      benefits: [
        "Increase parking turnover in high-demand areas",
        "Improve enforcement efficiency with targeted alerts",
        "Reduce labor costs associated with manual monitoring",
        "Create fair and consistent enforcement processes"
      ],
      technicalDetails: "Using the same sensors that detect occupancy, our system precisely tracks vehicle duration in each space. When a vehicle exceeds the allowed time, the system automatically generates an alert that can be sent to enforcement personnel via mobile app, text, or integrated directly with existing enforcement systems.",
      useCases: [
        {
          title: "Downtown Business District",
          description: "Ensuring fair access to limited parking spaces in front of retail businesses, increasing customer turnover and revenue."
        },
        {
          title: "Hospital Visitor Parking",
          description: "Monitoring short-term spaces to ensure availability for patients while maintaining longer-term options for visitors and staff."
        }
      ]
    }
  },
  {
    id: "integration",
    icon: <Zap className="h-6 w-6 text-white" />,
    title: "Seamless Integration",
    description: "Integrate with existing parking management systems, payment platforms, and campus apps for a unified experience.",
    stat: "15+",
    statLabel: "Compatible Systems",
    link: "/solutions#integration",
    color: "bg-japa-slate",
    bgImage: "/lovable-uploads/JAPA_ILLUSTRATION.png",
    modalImage: "/lovable-uploads/JAPA_ILLUSTRATION.png",
    detailedContent: {
      overview: "Our hardware and integration solutions are designed for seamless deployment in any environment, with minimal disruption to existing infrastructure and operations.",
      benefits: [
        "Works with existing parking management systems",
        "Minimal maintenance with long-life battery technology",
        "Withstands extreme weather conditions and heavy traffic",
        "Simple installation with no wiring or pavement cutting required"
      ],
      technicalDetails: "JAPA sensors feature IP68-rated waterproof enclosures, 5+ year battery life, and are installed in minutes using industrial-grade adhesive. The open API architecture allows for integration with payment systems, enforcement software, mobile apps, and other smart city technologies.",
      useCases: [
        {
          title: "Ski Resort",
          description: "Deploying sensors in harsh winter environments with snow and ice, maintaining accurate detection throughout seasonal extremes."
        },
        {
          title: "Metropolitan Transit Authority",
          description: "Integrating with existing payment and permit systems at park-and-ride facilities to create a unified management platform."
        }
      ]
    }
  },
  {
    id: "console",
    icon: <Globe className="h-6 w-6 text-white" />,
    title: "Web Management Console",
    description: "Access a powerful, user-friendly dashboard to manage and monitor your entire parking ecosystem from anywhere.",
    stat: "24/7",
    statLabel: "Accessibility",
    link: "/solutions#console",
    color: "bg-japa-blue",
    bgImage: "/lovable-uploads/Console 1210.21.png",
    modalImage: "/lovable-uploads/Console 1210.21.png",
    detailedContent: {
      overview: "Our management console serves as the central command center for parking operations, providing administrators with complete control and visibility over their parking assets.",
      benefits: [
        "Intuitive interface requires minimal training",
        "Customizable dashboards for different user roles",
        "Real-time monitoring of system health and performance",
        "Centralized management of multiple parking locations"
      ],
      technicalDetails: "The web-based console is built on a responsive framework that works on any device. Role-based access control ensures users only see the information relevant to their responsibilities. The system automatically monitors sensor health, connectivity, and data quality, alerting administrators to any issues that require attention.",
      useCases: [
        {
          title: "Corporate Campus",
          description: "Providing facility managers with a complete view of parking utilization across multiple buildings and lots for employee and visitor management."
        },
        {
          title: "Event Venue",
          description: "Enabling staff to monitor parking capacity in real-time during large events, directing traffic flow and preventing congestion."
        }
      ]
    }
  },
  {
    id: "mobile",
    icon: <Smartphone className="h-6 w-6 text-white" />,
    title: "Commuter Mobile App",
    description: "Help commuters quickly find available parking with our intuitive mobile app, reducing congestion and frustration.",
    stat: "4.8",
    statLabel: "App Rating",
    link: "/solutions#mobile",
    color: "bg-japa-slate",
    bgImage: "/lovable-uploads/Info Screen-white-.png",
    modalImage: "/lovable-uploads/Info Screen-white-.png",
    detailedContent: {
      overview: "Our mobile app puts real-time parking information directly in the hands of drivers, helping them quickly find available spaces and navigate to their destination.",
      benefits: [
        "Reduces time and frustration finding parking",
        "Provides turn-by-turn directions to available spaces",
        "Remembers parking location for easy return navigation",
        "Supports payment integration where available"
      ],
      technicalDetails: "Available for both iOS and Android, the app uses GPS and Bluetooth technology to provide precise navigation to available parking spaces. Users can filter by price, time limits, or special features (e.g., EV charging, handicap accessible). The app can be white-labeled for municipalities and organizations.",
      useCases: [
        {
          title: "Urban Navigation",
          description: "Helping city visitors find affordable parking near their destinations without circling blocks multiple times."
        },
        {
          title: "Commuter Planning",
          description: "Allowing daily commuters to check parking availability before leaving home, adjusting departure times or routes accordingly."
        }
      ]
    }
  }
];

// Componente para el modal de características
interface SolutionModalProps {
  feature: (typeof features)[0];
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
                src={feature.id === "real-time" ? "/lovable-uploads/image.png" : 
                     feature.id === "analytics" ? "/lovable-uploads/analytics_image.png" : 
                     feature.id === "violations" ? "/lovable-uploads/violation_image.png" : 
                     feature.id === "integration" ? "/lovable-uploads/JAPA_ILLUSTRATION.png" : 
                     feature.id === "console" ? "/lovable-uploads/Console 1210.21.png" : 
                     feature.id === "mobile" ? "/lovable-uploads/Info Screen-white-.png" : 
                     feature.bgImage} 
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
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [openModalId, setOpenModalId] = useState<string | null>(null);

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

  const handleOpenModal = (id: string) => {
    setOpenModalId(id);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    // Add class to hide header
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = '';
    // Remove class that hides header
    document.body.classList.remove('modal-open');
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
            width: 0px; /* Make scrollbar width zero */
            background: transparent; /* Make scrollbar transparent */
          }
          
          .modal-container::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .modal-container::-webkit-scrollbar-thumb {
            background: transparent;
          }
          
          /* Firefox scrollbar styling */
          .modal-container {
            scrollbar-width: none; /* Hide scrollbar in Firefox */
            scrollbar-color: transparent transparent;
          }
          
          /* IE and Edge */
          .modal-container {
            -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
          }
        `}
      </style>
      
      {/* Floating elements with orange color for contrast with white background */}
      <div className="absolute top-[10%] right-[5%] w-32 h-32 bg-japa-orange/10 rounded-full blur-xl -z-10 animate-float"></div>
      <div className="absolute bottom-[15%] left-[7%] w-40 h-40 bg-japa-orange/10 rounded-full blur-xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[15%] w-24 h-24 bg-japa-blue/10 rounded-full blur-xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-wide px-4 md:px-6 relative z-10">
        <AnimationWrapper animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-4 md:mb-6 lg:mb-8">
            <Pill className="mb-3 md:mb-4 inline-flex bg-japa-orange text-white border-none">Our Solutions</Pill>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 max-w-2xl mx-auto leading-tight text-japa-slate">
              Comprehensive Smart Parking Solutions
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
                <div 
                  className="feature-card bg-white rounded-3xl h-full p-5 border-none shadow-xl relative overflow-hidden group cursor-pointer"
                  onClick={() => handleOpenModal(feature.id)}
                >
                  {/* Shine effect on hover */}
                  <div className="card-shine"></div>
                  
                  {/* Icon with enhanced styling - circle with color background */}
                  <div className={`w-14 h-14 rounded-full ${feature.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  {/* Feature content */}
                  <h3 className="text-base font-display font-semibold mb-2 text-japa-slate group-hover:text-japa-orange transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-japa-slate/70 text-base mb-4 line-clamp-3">
                    {feature.description}
                  </p>
                  
                  {/* Feature stat highlight - pill style */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-japa-orange/10 text-japa-orange mb-3">
                    <div className="text-sm font-bold">
                      {feature.stat}
                    </div>
                    <div className="text-xs">
                      {feature.statLabel}
                    </div>
                  </div>
                  
                  {/* Learn more button - redesigned */}
                  <button 
                    className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-japa-blue/10 text-japa-blue text-xs font-medium hover:bg-japa-blue hover:text-white transition-all duration-200 w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(feature.id);
                    }}
                  >
                    Learn more <ArrowRight size={14} className="ml-1 group-hover:ml-2 transition-all" />
                  </button>
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
                    : 'bg-japa-orange/30 hover:bg-japa-orange/60'
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
                className={`feature-card bg-white rounded-3xl h-full p-6 md:p-8 border-none shadow-xl relative overflow-hidden group cursor-pointer ${activeFeature === index ? 'ring-2 ring-white/30 shadow-2xl' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
                onClick={() => handleOpenModal(feature.id)}
              >
                {/* Shine effect on hover */}
                <div className="card-shine"></div>
                
                <div className="flex gap-4">
                  {/* Icon with enhanced styling - circle with color background */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-full ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    {feature.icon}
                  </div>
                  
                  {/* Title next to icon */}
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-semibold text-japa-slate group-hover:text-japa-orange transition-colors duration-300">
                      {feature.title}
                    </h3>
                    {/* Feature stat highlight */}
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-japa-orange/10 text-japa-orange mt-1">
                      <div className="text-sm font-bold">
                        {feature.stat}
                      </div>
                      <div className="text-xs">
                        {feature.statLabel}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Feature description */}
                <div className="mt-4 pb-4 border-b border-gray-100">
                  <p className="text-japa-slate/70 text-base md:text-lg">
                    {feature.description}
                  </p>
                </div>
                
                {/* Learn more button - redesigned */}
                <div className="mt-4 text-right">
                  <button 
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-japa-blue/10 text-japa-blue text-sm font-medium hover:bg-japa-blue hover:text-white transition-all duration-200 hover:shadow-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(feature.id);
                    }}
                  >
                    Learn more <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                  </button>
                </div>
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
              className="group hover:scale-105 transition-transform shadow-lg shadow-japa-orange/20 bg-japa-orange text-white border-none"
              onClick={() => window.location.href = '/solutions'}
            >
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                Explore All Solutions
              </span>
            </AnimatedButton>
          </div>
        </AnimationWrapper>
      </div>
      
      {/* Modales para cada característica */}
      {features.map((feature) => (
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

export default Features;
