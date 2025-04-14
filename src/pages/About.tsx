import React, { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Pill from "@/components/ui/Pill";
import AnimationWrapper from "@/components/ui/AnimationWrapper";
import { ArrowRight, Award, CheckCircle2, Clock, Globe, MapPin, MessageSquare, Smile, Users } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";

// Carousel images from other pages
const carouselImages = [
  {
    src: "/assets/images/features/image.png",
    alt: "Real-Time Parking Data"
  },
  {
    src: "/assets/images/features/analytics_image.png",
    alt: "Analytics & Insights"
  },
  {
    src: "/assets/images/features/violation_image.png",
    alt: "Violation Tracking"
  },
  {
    src: "/assets/images/illustrations/JAPA_ILLUSTRATION.png",
    alt: "Seamless Integration"
  },
  {
    src: "/assets/images/features/Console 1210.21.png",
    alt: "Web Management Console"
  }
];

const milestones = [
  {
    year: "2016",
    title: "University Project",
    description: "JAPA began as an innovative project at a leading university, aimed at solving campus parking challenges."
  },
  {
    year: "2017",
    title: "First Prototype",
    description: "Development of the first sensor prototype and initial testing in a small-scale university environment."
  },
  {
    year: "2018",
    title: "Company Formation",
    description: "JAPA officially incorporated as a company focused on smart parking solutions for educational institutions."
  },
  {
    year: "2019",
    title: "First Major Deployment",
    description: "Successfully implemented our first large-scale solution at a major university campus."
  },
  {
    year: "2020",
    title: "Expansion to Cities",
    description: "Expanded our solutions beyond universities to include municipal applications in urban centers."
  },
  {
    year: "2021",
    title: "Advanced Analytics",
    description: "Launched enhanced analytics platform with predictive capabilities and comprehensive reporting."
  },
  {
    year: "2022",
    title: "Mobile App Launch",
    description: "Released our user-focused mobile application to help commuters find parking in real-time."
  },
  {
    year: "2023",
    title: "Market Leadership",
    description: "Established as the leading provider of cost-effective smart parking solutions in the U.S."
  }
];

const values = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Innovation",
    description: "We continuously pursue innovative solutions to parking challenges, leveraging the latest technologies to create more efficient systems."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Sustainability",
    description: "Our solutions are designed to reduce emissions from parking searches, supporting more sustainable urban environments."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Operational Excellence",
    description: "We are committed to delivering solutions that improve operational efficiency for parking managers and facility operators."
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "User Experience",
    description: "We prioritize the end-user experience, making parking less stressful and more convenient for everyone."
  }
];

const teamMembers = [
  {
    name: "Mathew Magno",
    position: "CEO & Co-founder",
    image: "/assets/images/team/LinkedIn_Matt.jpeg",
    bio: "Driving JAPA's vision to transform parking management through innovative smart solutions."
  },
  {
    name: "Charles Chen",
    position: "CTO & Co-founder",
    image: "/assets/images/team/LinkedIn_Charles.jpeg",
    bio: "Leading the technological innovation and engineering excellence at JAPA."
  },
  {
    name: "Kevin Burnham",
    position: "Project Manager",
    image: "/assets/images/team/LinkedIn_Kevin.jpeg",
    bio: "Ensuring seamless delivery and implementation of JAPA's smart parking solutions."
  },
  {
    name: "Mariana Arcaya",
    position: "Sales Manager",
    image: "/assets/images/team/LinkedIn_Mariana.jpeg",
    bio: "Growing JAPA's market presence and building strong client partnerships."
  },
  {
    name: "Tammy Nguyen",
    position: "Engineering Lead",
    image: "/assets/images/team/LinkedIn_Tammy.jpeg",
    bio: "Developing cutting-edge sensor technology and IoT infrastructure for smart parking systems."
  },
  {
    name: "D.J. Stephan",
    position: "CRO",
    image: "/assets/images/team/LinkedIn_DJ.jpeg",
    bio: "Optimizing revenue generation strategies and driving business growth for JAPA."
  }
];

const stats = [
  { value: "500+", label: "Parking Facilities", icon: <MapPin className="w-5 h-5" /> },
  { value: "1M+", label: "Parking Spaces", icon: <Globe className="w-5 h-5" /> },
  { value: "85+", label: "Client Organizations", icon: <Users className="w-5 h-5" /> },
  { value: "94%", label: "Customer Satisfaction", icon: <MessageSquare className="w-5 h-5" /> }
];

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image carousel rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-20 md:py-28 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern-light"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <AnimationWrapper animation="fade-right">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-japa-slate mb-6 leading-tight">
                  Parking. <span className="text-japa-blue">Made Intelligent.</span>
                </h1>
                <p className="text-lg md:text-xl text-japa-slate/80 max-w-xl mb-8 leading-relaxed">
                  JAPA is transforming parking through smart technology, creating more efficient, sustainable, and user-friendly parking experiences for all.
                </p>
              </AnimationWrapper>
            </div>
            
            <div className="lg:col-span-7">
              <AnimationWrapper animation="fade-left" delay={150}>
                <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px] lg:h-[450px] shadow-lg">
                  {/* Image Carousel */}
                  {carouselImages.map((image, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-contain bg-gray-50" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/60 to-transparent"></div>
                    </div>
                  ))}
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                    <p className="text-white/90 text-sm md:text-base font-medium">
                      {carouselImages[currentImageIndex].alt}
                    </p>
                  </div>
                  
                  {/* Carousel Indicators */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-20">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-white w-4' 
                            : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Pill className="mx-auto">Our Story</Pill>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <AnimationWrapper animation="fade-right">
                <div className="sticky top-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-6">
                    From Campus Project to Industry Leader
                  </h2>
                  <p className="text-japa-slate/80 mb-6">
                    JAPA started as a university project, tackling one of the biggest daily frustrations: finding parking. What began as a simple idea has evolved into a powerful smart parking platform serving universities, cities, stadiums, healthcare facilities, and more across the United States.
                  </p>
                  <p className="text-japa-slate/80 mb-6">
                    Our name, JAPA, stands for Just A Parking App, but we've become much more than that. We provide cutting-edge parking management software that optimizes parking operations, enhances enforcement, and improves the overall parking experience for both operators and drivers.
                  </p>
                  <p className="text-japa-slate/80 mb-8">
                    Today, JAPA is a leader in cost-effective, easy-to-implement smart parking solutions, helping organizations maximize efficiency, increase revenue, and reduce congestion, all while making parking stress-free.
                  </p>
                  <AnimatedButton variant="primary">
                    Learn More About Our Solutions
                  </AnimatedButton>
                </div>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-7">
              <AnimationWrapper animation="fade-left">
                <div className="relative ml-6 md:ml-12 pb-8">
                  {/* Timeline vertical line */}
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-japa-blue via-japa-blue/70 to-japa-blue/30 rounded-full"></div>
                  
                  <div className="space-y-12 md:space-y-16">
                    {milestones.map((milestone, index) => (
                      <AnimationWrapper 
                        key={index} 
                        animation="fade-left" 
                        delay={100 * index}
                        className="relative ml-8 md:ml-12"
                      >
                        <div className="absolute -left-11 md:-left-14 mt-1.5 w-9 h-9 rounded-full border-4 border-japa-blue/20 bg-white flex items-center justify-center shadow-md">
                          <div className="w-3 h-3 rounded-full bg-japa-blue"></div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                          <span className="inline-block px-3 py-1 bg-japa-blue/10 text-japa-blue rounded-full text-sm font-medium mb-3">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-bold text-japa-slate mb-2">{milestone.title}</h3>
                          <p className="text-japa-slate/80">{milestone.description}</p>
                        </div>
                      </AnimationWrapper>
                    ))}
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-japa-orange">
        <div className="container-wide">
          <AnimationWrapper animation="fade-up" className="text-center mb-16">
            <Pill className="mb-4 bg-white text-japa-orange border-white">Our Values</Pill>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Guiding Principles</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              At JAPA, our core values guide everything we do, from product development to customer service.
            </p>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimationWrapper 
                key={index} 
                animation="fade-up" 
                delay={index * 100}
              >
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-white h-full group hover:border-white/20">
                  <div className="bg-japa-orange/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-japa-orange group-hover:bg-japa-orange group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-japa-slate mb-3">{value.title}</h3>
                  <p className="text-japa-slate/80">{value.description}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <AnimationWrapper animation="fade-up" className="text-center mb-16">
            <Pill className="mb-4">Our Team</Pill>
            <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-6">Meet the JAPA Leadership</h2>
            <p className="text-lg text-japa-slate/80 max-w-2xl mx-auto">
              Our passionate team of experts is dedicated to transforming the parking industry through innovative technology.
            </p>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimationWrapper 
                key={index} 
                animation="fade-up" 
                delay={index * 100}
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group border border-gray-100">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white text-sm">{member.bio}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-japa-slate mb-1">{member.name}</h3>
                    <p className="text-sm text-japa-blue">{member.position}</p>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
