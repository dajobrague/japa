import React, { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Pill from "@/components/ui/Pill";
import AnimationWrapper from "@/components/ui/AnimationWrapper";
import { Building, Building2, Car, Building as HospitalIcon, Plane, ArrowRight, CheckCircle2, BarChart2, Users, Clock, ChevronRight } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";

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
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <Pill className="mb-5">Industry Applications</Pill>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-japa-slate mb-6 leading-tight">
                  Smart Parking for <span className="text-japa-blue">Every Environment</span>
                </h1>
                <p className="text-lg md:text-xl text-japa-slate/80 max-w-xl mb-8 leading-relaxed">
                  JAPA's intelligent parking solutions adapt to the unique challenges of various environments, from university campuses to busy urban centers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <AnimatedButton variant="primary" size="lg">
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
          <div className="container-wide">
            <AnimationWrapper animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Pill className="mb-4">Key Benefits</Pill>
              <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-5">
                Transform Your Parking Management
              </h2>
              <p className="text-lg text-japa-slate/80">
                Our smart parking solutions deliver measurable improvements across all environments and use cases.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper animation="fade-up" delay={50}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
                <div className="bg-japa-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                  <Clock className="text-japa-blue w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-japa-slate mb-3">Reduced Search Time</h3>
                <p className="text-japa-slate/80">
                  Drivers save an average of 30% on parking search time with real-time availability information and navigation.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={100}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
                <div className="bg-japa-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                  <BarChart2 className="text-japa-blue w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-japa-slate mb-3">Optimized Revenue</h3>
                <p className="text-japa-slate/80">
                  Optimize pricing and enforcement with data-driven insights, increasing parking revenue by up to 25%.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={150}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
                <div className="bg-japa-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                  <Users className="text-japa-blue w-8 h-8" />
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

      {/* Use Cases Grid - Enhanced */}
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
                  className="relative overflow-hidden bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-japa-blue/30 transition-all duration-300 h-full group cursor-pointer"
                  onClick={() => setActiveUseCase(useCase.id)}
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
                    
                      <button className="inline-flex items-center text-japa-blue font-medium">
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

      {/* Featured Use Case */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <AnimationWrapper animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Pill className="mb-4">Success Story</Pill>
              <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-5">
                {useCases.find(uc => uc.id === activeUseCase)?.title} Case Study
              </h2>
              <p className="text-lg text-japa-slate/80">
                Learn how one organization transformed their parking operations with JAPA's smart solutions.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="fade-right">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={useCases.find(uc => uc.id === activeUseCase)?.image || "/university-parking.jpg"} 
                  alt={useCases.find(uc => uc.id === activeUseCase)?.title} 
                  className="w-full h-[400px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/80 to-transparent flex flex-col justify-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{useCases.find(uc => uc.id === activeUseCase)?.title} Success</h3>
                    <p className="text-white/90 mb-4">Transforming parking operations through smart technology</p>
                    <div className="flex gap-8 text-white">
                      <div>
                        <p className="text-3xl font-bold">{useCases.find(uc => uc.id === activeUseCase)?.stats.reduction}</p>
                        <p className="text-sm opacity-80">Congestion Reduction</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold">{useCases.find(uc => uc.id === activeUseCase)?.stats.satisfaction}</p>
                        <p className="text-sm opacity-80">User Satisfaction</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold">{useCases.find(uc => uc.id === activeUseCase)?.stats.roi}</p>
                        <p className="text-sm opacity-80">ROI Timeline</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-left">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-[400px] flex flex-col">
                <h3 className="text-xl font-bold text-japa-slate mb-4">Key Outcomes</h3>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex gap-3">
                    <div className="bg-japa-blue/10 p-2 rounded-full h-9 w-9 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-japa-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-japa-slate text-sm mb-0.5">Improved Resource Utilization</h4>
                      <p className="text-japa-slate/80 text-xs">Optimized parking space usage throughout the day, increasing effective capacity by 15%.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-japa-blue/10 p-2 rounded-full h-9 w-9 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-japa-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-japa-slate text-sm mb-0.5">Reduced Search Time</h4>
                      <p className="text-japa-slate/80 text-xs">Users find parking {useCases.find(uc => uc.id === activeUseCase)?.stats.reduction} faster, improving experience and reducing emissions.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-japa-blue/10 p-2 rounded-full h-9 w-9 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-japa-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-japa-slate text-sm mb-0.5">Data-Driven Decision Making</h4>
                      <p className="text-japa-slate/80 text-xs">Analytics platform provided key insights for operational improvements and future planning.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-japa-blue/10 p-2 rounded-full h-9 w-9 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-japa-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-japa-slate text-sm mb-0.5">Enhanced User Experience</h4>
                      <p className="text-japa-slate/80 text-xs">Improved satisfaction scores by providing reliable and easy-to-access parking information.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <AnimatedButton variant="primary" size="sm" className="w-full">
                    View Full Case Study
                      </AnimatedButton>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-japa-gray/30 to-white">
        <div className="container-wide">
          <AnimationWrapper animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Pill className="mb-4">Testimonials</Pill>
              <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-5">
                What Our Clients Say
              </h2>
              <p className="text-lg text-japa-slate/80">
                Hear from organizations that have transformed their parking operations with JAPA's solutions.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimationWrapper key={index} animation="fade-up" delay={50 * index}>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full flex flex-col">
                  <div className="flex-grow">
                    <svg className="w-8 h-8 text-japa-blue/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-japa-slate/80 italic mb-6">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/150";
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-japa-slate">{testimonial.author}</p>
                      <p className="text-sm text-japa-slate/70">{testimonial.position}, {testimonial.organization}</p>
                    </div>
                    </div>
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="bg-japa-dark rounded-xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 z-0"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24 z-0"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <AnimationWrapper animation="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Parking Operations?
                </h2>
                <p className="text-white/90 text-lg mb-10">
                  Join hundreds of forward-thinking organizations that have revolutionized their parking management with JAPA's intelligent solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AnimatedButton variant="primary" size="lg">
                    Schedule a Demo
                  </AnimatedButton>
                  <AnimatedButton variant="outline" size="lg">
                    Download Case Studies
                  </AnimatedButton>
                </div>
              </AnimationWrapper>
            </div>
          </div>
    </div>
      </section>
    </PageLayout>
  );
};

export default UseCases;
