import React, { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Pill from "@/components/ui/Pill";
import AnimationWrapper from "@/components/ui/AnimationWrapper";
import { 
  Gauge, 
  BarChart3, 
  Shield, 
  RefreshCw, 
  Layers, 
  Smartphone, 
  CheckCircle2, 
  Clock, 
  Users,
  Search,
  Calendar,
  Zap,
  ArrowRight,
  ParkingCircle,
  Car,
  ChevronRight,
  Building,
  Building2,
  Building as HospitalIcon,
  Briefcase
} from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { useDemoForm } from "@/contexts/DemoFormContext";

// Solution categories based on JAPA's capabilities
const solutionCategories = [
  {
    id: "real-time-data",
    title: "Real-Time Parking Data",
    description: "Convert parking spaces into smart data hubs with accurate occupancy detection and availability information in real-time.",
    icon: <Gauge className="w-10 h-10 text-japa-orange" />,
    capabilities: [
      "Live occupancy detection with 99% accuracy",
      "Instant availability updates across all platforms",
      "Space-by-space monitoring capabilities",
      "Customizable data collection parameters"
    ],
    bgImage: "/lovable-uploads/aerial-parking-lot.jpg",
    stats: {
      key: "Availability Accuracy",
      value: "99%"
    }
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    description: "Gain actionable insights into parking behavior with comprehensive analytics and customizable reports.",
    icon: <BarChart3 className="w-10 h-10 text-japa-orange" />,
    capabilities: [
      "Occupancy patterns and peak usage times",
      "Historical trend analysis and forecasting",
      "Custom report generation and scheduling",
      "Data export capabilities for integration"
    ],
    bgImage: "/lovable-uploads/camilo-botia-k4vFDPJoDZk-unsplash.jpg",
    stats: {
      key: "Data Points Processed",
      value: "1M+"
    }
  },
  {
    id: "violation-tracking",
    title: "Violation Management",
    description: "Automate parking enforcement with precise time monitoring and violation detection, increasing compliance.",
    icon: <Shield className="w-10 h-10 text-japa-orange" />,
    capabilities: [
      "Automated time-limit violation detection",
      "Real-time alerts to enforcement personnel",
      "Customizable enforcement parameters",
      "Detailed violation reporting and analytics"
    ],
    bgImage: "/lovable-uploads/k-mitch-hodge-iTlM3NiAl0M-unsplash.jpg",
    stats: {
      key: "Enforcement Efficiency",
      value: "+40%"
    }
  },
  {
    id: "hardware",
    title: "Wireless Sensor Technology",
    description: "Deploy cutting-edge wireless sensors with simple installation, minimal maintenance, and maximum reliability.",
    icon: <RefreshCw className="w-10 h-10 text-japa-orange" />,
    capabilities: [
      "5-minute installation with no drilling or cutting",
      "Fully wireless operation with secure communications",
      "5+ year battery life with minimal maintenance",
      "Weather-resistant design for all environments"
    ],
    bgImage: "/lovable-uploads/NWA-004. 4bat. Embedded sensor expl.png",
    stats: {
      key: "Battery Life",
      value: "5+ Years"
    }
  },
  {
    id: "management",
    title: "Management Console",
    description: "Control your entire parking operation from a comprehensive, user-friendly management dashboard.",
    icon: <Layers className="w-10 h-10 text-japa-orange" />,
    capabilities: [
      "Real-time monitoring and control dashboard",
      "Role-based access control for team management",
      "System health monitoring and diagnostics",
      "Configuration and customization options"
    ],
    bgImage: "/lovable-uploads/graham-ruttan-b3LF7JHQmms-unsplash.jpg",
    stats: {
      key: "Management Efficiency",
      value: "+35%"
    }
  },
  {
    id: "mobile-app",
    title: "Mobile Application",
    description: "Empower drivers with a feature-rich mobile app for finding, navigating to, and paying for parking spaces.",
    icon: <Smartphone className="w-10 h-10 text-japa-orange" />,
    capabilities: [
      "Real-time parking space availability",
      "Turn-by-turn navigation to available spots",
      "In-app payment processing and history",
      "Time expiration notifications and extensions"
    ],
    bgImage: "/lovable-uploads/PerSpace-dark-.png",
    stats: {
      key: "Search Time Reduction",
      value: "30%"
    }
  }
];

// Core benefits of JAPA's solutions
const coreBenefits = [
  {
    title: "Find Parking Faster",
    description: "Eliminate the frustration of circling for parking with real-time availability information and guidance.",
    icon: <Search className="text-white w-8 h-8" />,
    stat: "Reduced search time by 30%"
  },
  {
    title: "Optimize Parking Resources",
    description: "Maximize the utilization of your parking assets through data-driven management and planning.",
    icon: <Calendar className="text-white w-8 h-8" />,
    stat: "25% improved space utilization"
  },
  {
    title: "Streamline Operations",
    description: "Automate parking monitoring and enforcement to reduce operational costs and increase efficiency.",
    icon: <Zap className="text-white w-8 h-8" />,
    stat: "40% more efficient operations"
  },
  {
    title: "Enhance User Experience",
    description: "Create a seamless parking experience for users that increases satisfaction and loyalty.",
    icon: <Users className="text-white w-8 h-8" />,
    stat: "90%+ user satisfaction"
  }
];

// Smart Parking Capabilities
const parkingCapabilities = [
  {
    title: "Space-Level Detection",
    description: "Monitor individual spaces with precision sensors that detect vehicle presence with 99% accuracy.",
    icon: <ParkingCircle className="w-6 h-6 text-japa-orange" />
  },
  {
    title: "Real-Time Updates",
    description: "Receive and distribute parking availability information with near-zero latency (≤2 seconds).",
    icon: <Clock className="w-6 h-6 text-japa-orange" />
  },
  {
    title: "Automated Enforcement",
    description: "Detect parking violations automatically and alert enforcement personnel in real-time.",
    icon: <Shield className="w-6 h-6 text-japa-orange" />
  },
  {
    title: "Data Analytics",
    description: "Transform raw parking data into actionable insights with advanced analytics tools.",
    icon: <BarChart3 className="w-6 h-6 text-japa-orange" />
  },
  {
    title: "Mobile Integration",
    description: "Connect drivers directly to available parking through intuitive mobile applications.",
    icon: <Smartphone className="w-6 h-6 text-japa-orange" />
  },
  {
    title: "Simple Deployment",
    description: "Install and activate sensors in minutes with no surface cutting or wiring required.",
    icon: <RefreshCw className="w-6 h-6 text-japa-orange" />
  }
];

const UseCases = () => {
  const { openDemoForm } = useDemoForm();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      {/* Hero Section - Original design with minor updates */}
      <section className="relative pt-24 pb-20 md:py-28 overflow-hidden bg-gradient-to-br from-japa-orange/20 via-white to-japa-orange/5">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern-light"></div>
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-japa-orange opacity-10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-japa-orange opacity-10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimationWrapper animation="fade-right">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-japa-slate mb-6 leading-tight">
                  Smart Parking for <span className="text-japa-orange">Every Environment</span>
                </h1>
                <p className="text-lg md:text-xl text-japa-slate/80 max-w-xl mb-8 leading-relaxed">
                  JAPA's intelligent parking solutions adapt to the unique challenges of various environments, from university campuses to busy urban centers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <AnimatedButton 
                    variant="primary" 
                    size="lg"
                    className="bg-japa-orange text-white hover:bg-japa-orange/90"
                    onClick={openDemoForm}
                  >
                    Schedule a Demo
                  </AnimatedButton>
                  <a href="#solutions" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-japa-slate border border-gray-200 font-medium py-3 px-6 rounded-lg transition-colors">
                    Explore Solutions <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-left" delay={100}>
              <div className="relative mt-10 lg:mt-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300 group">
                      <img 
                        src="/lovable-uploads/camilo-botia-k4vFDPJoDZk-unsplash.jpg" 
                        alt="Universities" 
                        className="w-full h-36 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/90 via-japa-slate/40 to-transparent group-hover:from-japa-orange/90 group-hover:via-japa-orange/40 transition-colors duration-300"></div>
                      <div className="absolute inset-0 p-4 flex flex-col items-start justify-end">
                        <div className="backdrop-blur-md bg-white/20 border border-white/30 p-1.5 px-2.5 rounded-lg shadow-lg flex items-center gap-1.5 mb-2 group-hover:bg-japa-orange/30 transition-all">
                          <Building className="text-white w-4 h-4" />
                          <h3 className="font-medium text-white text-xs">Universities</h3>
                        </div>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300 ml-6 group">
                      <img 
                        src="/lovable-uploads/k-mitch-hodge-iTlM3NiAl0M-unsplash.jpg" 
                        alt="City Centers" 
                        className="w-full h-36 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/90 via-japa-slate/40 to-transparent group-hover:from-japa-orange/90 group-hover:via-japa-orange/40 transition-colors duration-300"></div>
                      <div className="absolute inset-0 p-4 flex flex-col items-start justify-end">
                        <div className="backdrop-blur-md bg-white/20 border border-white/30 p-1.5 px-2.5 rounded-lg shadow-lg flex items-center gap-1.5 mb-2 group-hover:bg-japa-orange/30 transition-all">
                          <Building2 className="text-white w-4 h-4" />
                          <h3 className="font-medium text-white text-xs">City Centers</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-10">
                    <div className="relative overflow-hidden rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300 group">
                      <img 
                        src="/lovable-uploads/graham-ruttan-b3LF7JHQmms-unsplash.jpg" 
                        alt="Healthcare" 
                        className="w-full h-36 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/90 via-japa-slate/40 to-transparent group-hover:from-japa-orange/90 group-hover:via-japa-orange/40 transition-colors duration-300"></div>
                      <div className="absolute inset-0 p-4 flex flex-col items-start justify-end">
                        <div className="backdrop-blur-md bg-white/20 border border-white/30 p-1.5 px-2.5 rounded-lg shadow-lg flex items-center gap-1.5 mb-2 group-hover:bg-japa-orange/30 transition-all">
                          <HospitalIcon className="text-white w-4 h-4" />
                          <h3 className="font-medium text-white text-xs">Healthcare</h3>
                        </div>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300 ml-6 group">
                      <img 
                        src="/lovable-uploads/willian-justen-de-vasconcellos-cdWjBaLnpPU-unsplash.jpg" 
                        alt="Corporate Campuses" 
                        className="w-full h-36 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/90 via-japa-slate/40 to-transparent group-hover:from-japa-orange/90 group-hover:via-japa-orange/40 transition-colors duration-300"></div>
                      <div className="absolute inset-0 p-4 flex flex-col items-start justify-end">
                        <div className="backdrop-blur-md bg-white/20 border border-white/30 p-1.5 px-2.5 rounded-lg shadow-lg flex items-center gap-1.5 mb-2 group-hover:bg-japa-orange/30 transition-all">
                          <Briefcase className="text-white w-4 h-4" />
                          <h3 className="font-medium text-white text-xs">Corporate Campuses</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-japa-orange/10 to-japa-orange/30 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute -z-10 -bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-japa-orange/10 to-japa-orange/30 rounded-full opacity-50 blur-xl"></div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Core Benefits Section with Orange Background */}
      <section className="py-20 bg-japa-orange relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container-wide">
          <AnimationWrapper animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Pill variant="secondary" className="mb-4 bg-white text-japa-orange border-white">Core Benefits</Pill>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                What Our Solutions Deliver
              </h2>
              <p className="text-white/90 text-lg mb-6">
                JAPA's comprehensive solution stack delivers tangible benefits across all parking environments.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreBenefits.map((benefit, index) => (
              <AnimationWrapper key={index} animation="fade-up" delay={50 * index}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-white/20 hover:shadow-md transition-all h-full">
                  <div className="bg-japa-orange/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                    <div className="text-japa-orange">
                      {React.cloneElement(benefit.icon, { className: "text-japa-orange w-8 h-8" })}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-japa-slate mb-3">{benefit.title}</h3>
                  <p className="text-japa-slate/80 mb-4">
                    {benefit.description}
                  </p>
                  <div className="text-sm font-semibold text-japa-orange bg-japa-orange/10 py-1 px-3 rounded-full inline-block">
                    {benefit.stat}
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Categories Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container-wide">
          <AnimationWrapper animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Pill className="mb-4">Complete Solution Ecosystem</Pill>
              <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-5">
                Our Comprehensive <span className="text-japa-orange">Solution Categories</span>
              </h2>
              <p className="text-lg text-japa-slate/80">
                Each component of JAPA's ecosystem addresses specific parking challenges while seamlessly integrating with the entire platform.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutionCategories.map((solution, index) => (
              <AnimationWrapper 
                key={solution.id} 
                animation="fade-up" 
                delay={50 * index}
              >
                <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-japa-orange/30 transition-all duration-300 h-full flex flex-col relative">
                  {/* Top orange accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-japa-orange opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={solution.bgImage} 
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/80 to-japa-slate/10 group-hover:from-japa-orange/80 group-hover:to-japa-orange/20 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full w-14 h-14 flex items-center justify-center shadow-md group-hover:bg-japa-orange/10 group-hover:border group-hover:border-japa-orange/30 transition-all duration-300">
                        <div className="text-japa-orange">
                          {solution.icon}
                        </div>
                      </div>
                      <div className="bg-japa-orange/90 backdrop-blur-sm py-1 px-3 rounded-lg text-white text-sm font-medium">
                        {solution.stats.value}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-japa-slate mb-2 group-hover:text-japa-orange transition-colors duration-300">{solution.title}</h3>
                    <p className="text-japa-slate/80 mb-4">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2 mb-2">
                      {solution.capabilities.map((capability, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-japa-orange mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-japa-slate/80">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Integration and Compatibility Section */}
      <section className="py-20 bg-japa-gray/20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="fade-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-6">
                  Works With Your <span className="text-japa-orange">Existing Systems</span>
                </h2>
                <p className="text-japa-slate/80 text-lg mb-8">
                  JAPA's solutions are designed to integrate seamlessly with your current parking infrastructure and management systems.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-japa-orange/10 p-3 rounded-full flex-shrink-0 mt-1">
                      <RefreshCw className="w-6 h-6 text-japa-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-japa-slate mb-1">Open API Architecture</h3>
                      <p className="text-japa-slate/70">Our system communicates with existing parking hardware and software using standard protocols and open APIs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-japa-orange/10 p-3 rounded-full flex-shrink-0 mt-1">
                      <Car className="w-6 h-6 text-japa-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-japa-slate mb-1">Hardware Agnostic</h3>
                      <p className="text-japa-slate/70">Compatible with existing gates, payment kiosks, access control systems, and other parking infrastructure.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-japa-orange/10 p-3 rounded-full flex-shrink-0 mt-1">
                      <Layers className="w-6 h-6 text-japa-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-japa-slate mb-1">Modular Implementation</h3>
                      <p className="text-japa-slate/70">Deploy the parts of our solution you need now, with the ability to expand functionality over time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-left" delay={100}>
              <div className="relative">
                <img 
                  src="/lovable-uploads/sensor-1080x720.png" 
                  alt="JAPA Integration Capabilities" 
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute -left-5 -bottom-5 -z-10 w-64 h-64 bg-japa-orange/10 rounded-full blur-xl"></div>
                <div className="absolute -right-5 -top-5 -z-10 w-64 h-64 bg-japa-orange/10 rounded-full blur-xl"></div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-japa-orange relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container-wide">
          <AnimationWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="text-white font-extrabold">Parking Operations</span>?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Discover how JAPA's solutions can address your specific parking challenges with a personalized demo.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={openDemoForm}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-japa-orange font-medium py-4 px-8 rounded-lg shadow-lg transition-all hover:scale-105 min-w-[200px]"
                >
                  Schedule Your Demo Today
                </button>
                <a 
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-4 px-8 rounded-lg transition-all hover:scale-105 min-w-[200px]"
                >
                  Explore All Solutions
                </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </PageLayout>
  );
};

export default UseCases;
