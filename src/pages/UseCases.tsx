import React, { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Pill from "@/components/ui/Pill";
import AnimationWrapper from "@/components/ui/AnimationWrapper";
import { Building, Building2, Car, Building as HospitalIcon, Plane, ArrowRight, CheckCircle2, BarChart2, Users, Clock, ChevronRight, Quote } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import CaseStudyModal from "@/components/usecases/CaseStudyModal";
import { useDemoForm } from "@/contexts/DemoFormContext";

const useCases = [
  {
    id: 1,
    title: "Universities",
    icon: <Building className="w-10 h-10 text-japa-blue" />,
    description: "Optimize campus parking resources, improve student and faculty experience, and enhance parking management efficiency.",
    benefits: [
      "Improved campus parking utilization",
      "Reduced congestion during peak hours",
      "Data-driven parking policy decisions",
      "Enhanced student and faculty satisfaction"
    ],
    stats: {
      reduction: "32%",
      satisfaction: "94%",
      roi: "14 months"
    },
    image: "/lovable-uploads/camilo-botia-k4vFDPJoDZk-unsplash.jpg",
    color: "from-blue-500/20 to-blue-600/30"
  },
  {
    id: 2,
    title: "City Centers",
    icon: <Building2 className="w-10 h-10 text-japa-blue" />,
    description: "Streamline urban parking, reduce congestion, and provide real-time availability data to city residents and visitors.",
    benefits: [
      "Reduced traffic from parking searches",
      "Increased turnover for businesses",
      "Data for urban planning decisions",
      "Improved city visitor experience"
    ],
    stats: {
      reduction: "28%",
      satisfaction: "89%",
      roi: "16 months"
    },
    image: "/city-parking.jpg",
    color: "from-green-500/20 to-green-600/30"
  },
  {
    id: 3,
    title: "Stadiums & Events",
    icon: <Car className="w-10 h-10 text-japa-blue" />,
    description: "Manage high-volume parking demands during events, optimize traffic flow, and enhance attendee experience.",
    benefits: [
      "Streamlined ingress/egress",
      "Real-time capacity monitoring",
      "Optimized resource allocation",
      "Improved event attendee satisfaction"
    ],
    stats: {
      reduction: "35%",
      satisfaction: "92%",
      roi: "12 months"
    },
    image: "/stadium-parking.jpg",
    color: "from-orange-500/20 to-orange-600/30"
  },
  {
    id: 4,
    title: "Healthcare Facilities",
    icon: <HospitalIcon className="w-10 h-10 text-japa-blue" />,
    description: "Provide patients and visitors with stress-free parking experiences while optimizing staff parking resources.",
    benefits: [
      "Reduced patient/visitor stress",
      "Optimized staff parking allocation",
      "Improved emergency vehicle access",
      "Data-driven facility planning"
    ],
    stats: {
      reduction: "29%",
      satisfaction: "91%",
      roi: "15 months"
    },
    image: "/healthcare-parking.jpg",
    color: "from-red-500/20 to-red-600/30"
  },
  {
    id: 5,
    title: "Airports",
    icon: <Plane className="w-10 h-10 text-japa-blue" />,
    description: "Manage large-scale parking operations efficiently while providing travelers with real-time availability information.",
    benefits: [
      "Maximized parking revenue",
      "Improved traveler experience",
      "Optimized shuttle services",
      "Enhanced operational efficiency"
    ],
    stats: {
      reduction: "31%",
      satisfaction: "88%",
      roi: "18 months"
    },
    image: "/airport-parking.jpg",
    color: "from-purple-500/20 to-purple-600/30"
  }
];

const testimonials = [
  {
    quote: "The JAPA platform helped us transform campus parking from a daily frustration to a seamless experience for our students and faculty.",
    author: "Dr. Sarah Johnson",
    position: "Campus Operations Director",
    organization: "Western State University",
    image: "/testimonial-1.jpg"
  },
  {
    quote: "Since implementing JAPA's smart parking solution, we've seen a dramatic reduction in parking-related traffic congestion in our downtown area.",
    author: "Michael Chen",
    position: "Urban Planning Director",
    organization: "City of Riverdale",
    image: "/testimonial-2.jpg"
  },
  {
    quote: "JAPA's technology has transformed how we manage parking for major events, significantly improving both operational efficiency and visitor satisfaction.",
    author: "Rebecca Torres",
    position: "Facilities Manager",
    organization: "Metropolitan Stadium",
    image: "/testimonial-3.jpg"
  }
];

const UseCases = () => {
  const [activeUseCase, setActiveUseCase] = useState(1);
  const [modalUseCase, setModalUseCase] = useState<number | null>(null);
  const { openDemoForm } = useDemoForm();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Open case study modal
  const openCaseStudyModal = (id: number) => {
    setModalUseCase(id);
  };

  // Close case study modal
  const closeCaseStudyModal = () => {
    setModalUseCase(null);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:py-28 overflow-hidden bg-gradient-to-br from-japa-gray/40 via-white to-japa-blue/5">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern-light"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimationWrapper animation="fade-right">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-japa-slate mb-6 leading-tight">
                  Smart Parking for <span className="text-japa-blue">Every Environment</span>
                </h1>
                <p className="text-lg md:text-xl text-japa-slate/80 max-w-xl mb-8 leading-relaxed">
                  JAPA's intelligent parking solutions adapt to the unique challenges of various environments, from university campuses to busy urban centers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <AnimatedButton 
                    variant="primary" 
                    size="lg"
                    onClick={openDemoForm}
                  >
                    Schedule a Consultation
                  </AnimatedButton>
                  <a href="#use-cases" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-japa-slate border border-gray-200 font-medium py-3 px-6 rounded-lg transition-colors">
                    Explore Applications <ChevronRight className="ml-1 w-4 h-4" />
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
                      <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/90 via-japa-slate/40 to-transparent group-hover:from-japa-blue/90 group-hover:via-japa-blue/40 transition-colors duration-300"></div>
                      <div className="absolute inset-0 p-4 flex flex-col items-start justify-end">
                        <div className="backdrop-blur-md bg-white/20 border border-white/30 p-1.5 px-2.5 rounded-lg shadow-lg flex items-center gap-1.5 mb-2 group-hover:bg-japa-blue/30 transition-all">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/90 via-japa-slate/40 to-transparent group-hover:from-japa-blue/90 group-hover:via-japa-blue/40 transition-colors duration-300"></div>
                      <div className="absolute inset-0 p-4 flex flex-col items-start justify-end">
                        <div className="backdrop-blur-md bg-white/20 border border-white/30 p-1.5 px-2.5 rounded-lg shadow-lg flex items-center gap-1.5 mb-2 group-hover:bg-japa-blue/30 transition-all">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/90 via-japa-slate/40 to-transparent group-hover:from-japa-blue/90 group-hover:via-japa-blue/40 transition-colors duration-300"></div>
                      <div className="absolute inset-0 p-4 flex flex-col items-start justify-end">
                        <div className="backdrop-blur-md bg-white/20 border border-white/30 p-1.5 px-2.5 rounded-lg shadow-lg flex items-center gap-1.5 mb-2 group-hover:bg-japa-blue/30 transition-all">
                          <HospitalIcon className="text-white w-4 h-4" />
                          <h3 className="font-medium text-white text-xs">Healthcare</h3>
                        </div>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300 ml-6 group">
                      <img 
                        src="/lovable-uploads/doug-bagg-FB406CKGL0Q-unsplash.jpg" 
                        alt="Airports" 
                        className="w-full h-36 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/90 via-japa-slate/40 to-transparent group-hover:from-japa-blue/90 group-hover:via-japa-blue/40 transition-colors duration-300"></div>
                      <div className="absolute inset-0 p-4 flex flex-col items-start justify-end">
                        <div className="backdrop-blur-md bg-white/20 border border-white/30 p-1.5 px-2.5 rounded-lg shadow-lg flex items-center gap-1.5 mb-2 group-hover:bg-japa-blue/30 transition-all">
                          <Plane className="text-white w-4 h-4" />
                          <h3 className="font-medium text-white text-xs">Airports</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-japa-blue/10 to-japa-blue/30 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute -z-10 -bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-japa-orange/10 to-japa-orange/30 rounded-full opacity-50 blur-xl"></div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Benefits Section - Now with orange background */}
      <section className="py-20 bg-japa-orange relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container-wide">
          <AnimationWrapper animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Pill variant="secondary" className="mb-4 bg-white text-japa-orange border border-white">Key Benefits</Pill>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Transform Your Parking Management
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Our smart parking solutions deliver measurable improvements across all environments and use cases.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper animation="fade-up" delay={50}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-white/20 hover:shadow-md transition-all h-full">
                <div className="bg-japa-orange/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                  <Clock className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-japa-slate mb-3">Reduced Search Time</h3>
                <p className="text-japa-slate/80">
                  Drivers save an average of 30% on parking search time with real-time availability information and navigation.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={100}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-white/20 hover:shadow-md transition-all h-full">
                <div className="bg-japa-orange/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                  <BarChart2 className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-japa-slate mb-3">Optimized Revenue</h3>
                <p className="text-japa-slate/80">
                  Optimize pricing and enforcement with data-driven insights, increasing parking revenue by up to 25%.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={150}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-white/20 hover:shadow-md transition-all h-full">
                <div className="bg-japa-orange/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                  <Users className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-japa-slate mb-3">Improved Experience</h3>
                <p className="text-japa-slate/80">
                  Create a better parking experience for users, with over 90% reporting increased satisfaction.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Use Cases Grid - Update the buttons to open modals */}
      <section id="use-cases" className="py-20 bg-gradient-to-b from-white to-japa-gray/30">
        <div className="container-wide">
          <AnimationWrapper animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Pill className="mb-4">Industry Applications</Pill>
              <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-5">
                Solutions for Every Environment
              </h2>
              <p className="text-lg text-japa-slate/80">
                Explore how JAPA's smart parking platform addresses the unique challenges of different industries and environments.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <AnimationWrapper 
                key={useCase.id} 
                animation="fade-up" 
                delay={50 * index}
              >
                <div 
                  className="relative overflow-hidden bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-japa-blue/30 transition-all duration-300 h-full group"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-japa-blue scale-x-0 group-hover:scale-x-100 transform-gpu origin-left transition-transform duration-300"></div>
                  
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="bg-japa-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5 group-hover:bg-japa-blue/20 transition-colors duration-300">
                      {useCase.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-japa-slate mb-3 group-hover:text-japa-blue transition-colors duration-300">{useCase.title}</h3>
                      <p className="text-japa-slate/80 mb-6">
                        {useCase.description}
                      </p>
                    
                    <div className="mt-auto">
                      <div className="mb-6 space-y-2">
                        {useCase.benefits.slice(0, 2).map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-japa-blue mt-0.5" />
                            <span className="text-sm text-japa-slate/80">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    
                      <button 
                        className="inline-flex items-center text-japa-blue font-medium"
                        onClick={() => openCaseStudyModal(useCase.id)}
                      >
                        View Details <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial - Replacing the Success Story section */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <AnimationWrapper animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Pill className="mb-4">Featured Testimonial</Pill>
              <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-5">
                Success Stories from Our Clients
              </h2>
              <p className="text-lg text-japa-slate/80">
                Hear from organizations that have transformed their parking management with JAPA's solutions.
              </p>
            </div>
          </AnimationWrapper>

          <div className="max-w-4xl mx-auto">
            <AnimationWrapper animation="fade-up">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative border border-japa-blue/20">
                <div className="absolute -top-6 -left-6 text-japa-blue opacity-20">
                  <Quote size={80} strokeWidth={1} />
                </div>
                
                <div className="flex items-start gap-6 flex-col md:flex-row">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-japa-blue/15 text-japa-blue font-bold text-xl flex items-center justify-center">
                      UC
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-japa-slate/90 text-lg md:text-xl italic mb-6">
                      "JAPA's smart parking solution has transformed our campus parking experience. Students and faculty can easily find available spots, and our parking management team has valuable insights into usage patterns. The installation was remarkably simple - we were up and running in days, not weeks."
                    </p>
                    
                    <div>
                      <h4 className="font-bold text-japa-slate">University of California</h4>
                      <p className="text-japa-slate/70 text-sm">Transportation Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Replace the CTA Section with the orange CTA design */}
      <section className="py-20 bg-japa-orange relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container-wide">
          <AnimationWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <Pill variant="secondary" className="mb-4 mx-auto bg-white text-japa-orange border border-white">Transform Your Parking</Pill>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="text-white font-extrabold">Parking Experience</span>?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Join hundreds of organizations that have optimized their parking operations with JAPA's smart parking solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={openDemoForm}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-japa-orange font-medium py-4 px-8 rounded-lg shadow-lg transition-all hover:scale-105 min-w-[200px]"
                >
                  Schedule Your Demo Today
                </button>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-4 px-8 rounded-lg transition-all hover:scale-105 min-w-[200px]"
                >
                  Contact Our Team
                </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
      
      {/* Case Study Modal */}
      {modalUseCase !== null && (
        <CaseStudyModal 
          useCase={useCases.find(uc => uc.id === modalUseCase)!} 
          onClose={closeCaseStudyModal} 
        />
      )}
    </PageLayout>
  );
};

export default UseCases;
