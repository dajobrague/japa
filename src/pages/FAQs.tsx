import React, { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Pill from "@/components/ui/Pill";
import AnimationWrapper from "@/components/ui/AnimationWrapper";
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";

// Carousel images from other pages
const carouselImages = [
  {
    src: "/lovable-uploads/aerial-parking-lot.jpg",
    alt: "Smart Parking Aerial View"
  },
  {
    src: "/lovable-uploads/camilo-botia-k4vFDPJoDZk-unsplash.jpg",
    alt: "University Parking Solution"
  },
  {
    src: "/lovable-uploads/k-mitch-hodge-iTlM3NiAl0M-unsplash.jpg",
    alt: "City Center Parking"
  },
  {
    src: "/lovable-uploads/willian-justen-de-vasconcellos-cdWjBaLnpPU-unsplash.jpg",
    alt: "Stadium Parking System"
  },
  {
    src: "/lovable-uploads/graham-ruttan-b3LF7JHQmms-unsplash.jpg",
    alt: "Healthcare Facility Parking"
  }
];

// FAQ Data
const faqData = [
  {
    category: "General",
    icon: <HelpCircle className="w-5 h-5" />,
    items: [
      {
        question: "What is JAPA's smart parking solution?",
        answer: "JAPA provides a comprehensive smart parking system that includes high-precision sensors, analytics, violation tracking, and both management and user interfaces. Our solution converts traditional parking infrastructure into intelligent, data-driven systems that benefit both operators and users."
      },
      {
        question: "How does the JAPA system work?",
        answer: "Our system uses IoT sensors to detect vehicle presence in parking spots. This data is transmitted to our cloud-based platform, where it's processed and made available through our management console for operators and our mobile app for users. The system provides real-time parking availability, analytics, and violation tracking capabilities."
      },
      {
        question: "How accurate are your sensors?",
        answer: "JAPA's sensors boast accuracy rates of 99%+ in detecting vehicle presence. Our proprietary technology is designed to work in all weather conditions and has been tested extensively in various environments."
      }
    ]
  },
  {
    category: "Implementation",
    icon: <HelpCircle className="w-5 h-5" />,
    items: [
      {
        question: "How long does installation typically take?",
        answer: "Installation time varies based on the size and complexity of the parking facility. A typical university campus implementation with 1,000 spots can be completed in 2-4 weeks. Our team works efficiently to minimize disruption to your operations during installation."
      },
      {
        question: "Do I need to replace my existing parking infrastructure?",
        answer: "No. JAPA's solution is designed to integrate with existing parking infrastructure. Our sensors can be installed on existing parking spots, and our software can integrate with many existing parking management systems through our API."
      },
      {
        question: "What maintenance is required?",
        answer: "Our sensors are designed for minimal maintenance with a battery life of 5-7 years. The system continuously self-monitors and alerts administrators of any issues that require attention. Software updates are delivered automatically to ensure you always have the latest features and security enhancements."
      }
    ]
  },
  {
    category: "Features & Benefits",
    icon: <HelpCircle className="w-5 h-5" />,
    items: [
      {
        question: "How does JAPA help with parking violations?",
        answer: "JAPA's system can automatically detect time-limit violations by tracking how long a vehicle has occupied a spot. It can also identify unauthorized parking in reserved areas. This information can be sent to enforcement personnel in real-time, improving efficiency and ensuring fair use of parking resources."
      },
      {
        question: "What analytics and reporting features are included?",
        answer: "Our platform provides comprehensive analytics including daily peak occupancy times, average stay durations, turnover rates, violation patterns, and historical trends. Custom reports can be scheduled or generated on-demand, and data can be exported in various formats for further analysis."
      },
      {
        question: "How does the mobile app benefit users?",
        answer: "Our mobile app provides real-time information on parking availability, helping users quickly find open spots. This reduces time spent searching for parking, decreases frustration, and can lower emissions from circling vehicles. The app can also provide navigation to available spots and payment options where applicable."
      }
    ]
  },
  {
    category: "Technical & Support",
    icon: <HelpCircle className="w-5 h-5" />,
    items: [
      {
        question: "Is the system secure?",
        answer: "Yes, security is a top priority. JAPA uses encryption for all data transmission, secure cloud storage, and follows industry best practices for data protection. We regularly conduct security audits and updates to ensure the system remains secure."
      },
      {
        question: "What kind of support does JAPA provide?",
        answer: "JAPA offers comprehensive support including 24/7 technical assistance, regular maintenance checks, software updates, and dedicated account management. Our support team is experienced in parking management and can provide both technical assistance and strategic advice."
      },
      {
        question: "Can JAPA integrate with our existing systems?",
        answer: "Yes, JAPA is designed with integration in mind. We offer API access that allows for integration with various parking management systems, payment platforms, and other smart city technologies. Our team can work with you to ensure smooth integration with your existing infrastructure."
      }
    ]
  }
];

const FAQs = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State to track which FAQ items are open
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  
  // State to track which category groups are expanded
  const [expandedCategories, setExpandedCategories] = useState<Record<number, boolean>>(
    // Initialize all categories as collapsed by default
    faqData.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
  );
  
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState("");

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

  // Toggle FAQ item open/closed
  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  // Toggle category expansion
  const toggleCategory = (categoryIndex: number) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex]
    }));
  };

  // Filter FAQs based on search query
  const filteredFAQs = searchQuery.trim() === "" 
    ? faqData 
    : faqData.map(category => ({
        ...category,
        items: category.items.filter(item => 
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.items.length > 0);

  // When searching, expand all categories with matching results
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const newExpandedCategories = { ...expandedCategories };
      filteredFAQs.forEach((_, index) => {
        newExpandedCategories[index] = true;
      });
      setExpandedCategories(newExpandedCategories);
    }
  }, [searchQuery, filteredFAQs]);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:py-28 overflow-hidden bg-gradient-to-br from-japa-gray/40 via-white to-japa-blue/5">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern-light"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <AnimationWrapper animation="fade-right">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-japa-slate mb-6 leading-tight">
                  Frequently Asked <span className="text-japa-blue">Questions</span>
                </h1>
                <p className="text-lg md:text-xl text-japa-slate/80 max-w-xl mb-8 leading-relaxed">
                  Find answers to common questions about JAPA's smart parking solutions, implementation process, and benefits.
                </p>
                
                {/* Search box */}
                <div className="relative max-w-xl mb-8">
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-3 px-5 pl-12 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-japa-blue/30 focus:border-japa-blue/50 transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-japa-blue/70 w-5 h-5" />
                </div>
              </AnimationWrapper>
            </div>
            
            <div className="lg:col-span-5">
              <AnimationWrapper animation="fade-left" delay={150}>
                <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px] shadow-lg">
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
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/60 to-transparent"></div>
                    </div>
                  ))}
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                    <p className="text-white/90 text-sm md:text-base font-medium">
                      Smart solutions for modern parking challenges
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

      {/* FAQ Categories and Accordion */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Category sidebar */}
            <div className="lg:col-span-3">
              <AnimationWrapper animation="fade-right">
                <div className="sticky top-32 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-4 border-b border-gray-100 bg-japa-gray/20">
                    <h3 className="font-bold text-japa-slate">Categories</h3>
                  </div>
                  <div className="p-2">
                    {filteredFAQs.map((category, index) => (
                      <a 
                        key={index}
                        href={`#category-${index}`}
                        className="flex items-center p-3 rounded-lg hover:bg-japa-blue/5 transition-colors group"
                      >
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-japa-blue/10 text-japa-blue group-hover:bg-japa-blue group-hover:text-white transition-colors mr-3">
                          {category.icon}
                        </span>
                        <span className="text-japa-slate group-hover:text-japa-blue transition-colors">
                          {category.category}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimationWrapper>
            </div>
            
            {/* FAQ accordions */}
            <div className="lg:col-span-9">
              {filteredFAQs.length === 0 ? (
                <AnimationWrapper animation="fade-up">
                  <div className="text-center py-12">
                    <div className="mx-auto w-16 h-16 rounded-full bg-japa-blue/10 flex items-center justify-center mb-4">
                      <HelpCircle className="w-8 h-8 text-japa-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-japa-slate mb-2">No matching questions found</h3>
                    <p className="text-japa-slate/80 mb-6">Try adjusting your search terms or browse all categories</p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-japa-blue text-white hover:bg-japa-blue/90 transition-colors"
                    >
                      Clear Search
                    </button>
                  </div>
                </AnimationWrapper>
              ) : (
                <>
                  {filteredFAQs.map((category, categoryIndex) => (
                    <div key={categoryIndex} id={`category-${categoryIndex}`} className="mb-12">
                      <AnimationWrapper animation="fade-up" delay={categoryIndex * 50}>
                        <div 
                          className="flex items-center justify-between mb-6 cursor-pointer"
                          onClick={() => toggleCategory(categoryIndex)}
                        >
                          <div className="flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-japa-blue/10 text-japa-blue mr-4">
                              {category.icon}
                            </span>
                            <h2 className="text-2xl font-bold text-japa-slate">
                              {category.category}
                            </h2>
                          </div>
                          <span className={`p-2 rounded-full ${
                            expandedCategories[categoryIndex]
                              ? "bg-japa-blue text-white"
                              : "bg-japa-blue/10 text-japa-blue"
                          }`}>
                            {expandedCategories[categoryIndex] ? 
                              <ChevronUp size={16} /> : 
                              <ChevronDown size={16} />
                            }
                          </span>
                        </div>
                        
                        <div className={`space-y-4 overflow-hidden transition-all duration-500 ${
                          expandedCategories[categoryIndex] 
                            ? "max-h-[5000px] opacity-100" 
                            : "max-h-0 opacity-0"
                        }`}>
                          {category.items.map((item, itemIndex) => {
                            const key = `${categoryIndex}-${itemIndex}`;
                            const isOpen = openItems[key] || false;
                            
                            return (
                              <div 
                                key={itemIndex}
                                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all hover:border-japa-blue/20"
                              >
                                <button
                                  className={`flex items-center justify-between w-full p-6 text-left transition-colors ${
                                    isOpen 
                                      ? "bg-japa-blue/5 text-japa-blue" 
                                      : "bg-white hover:bg-gray-50 text-japa-slate"
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(categoryIndex, itemIndex);
                                  }}
                                  aria-expanded={isOpen}
                                >
                                  <span className="font-medium">{item.question}</span>
                                  <span className={`ml-4 p-2 rounded-full ${
                                    isOpen
                                      ? "bg-japa-blue text-white"
                                      : "bg-japa-blue/10 text-japa-blue"
                                  }`}>
                                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                  </span>
                                </button>
                                <div 
                                  className={`transition-all duration-300 ${
                                    isOpen 
                                      ? "max-h-[500px] opacity-100 border-t border-gray-100" 
                                      : "max-h-0 opacity-0"
                                  }`}
                                >
                                  <div className="p-6 text-japa-slate/80 leading-relaxed">
                                    {item.answer}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </AnimationWrapper>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-japa-orange relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimationWrapper animation="fade-up">
              <div className="inline-block rounded-full bg-white/20 p-3 mb-6">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Our team is here to help. Contact us for personalized assistance with your specific parking challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-japa-orange hover:bg-white/90"
                >
                  Contact Our Team
                </AnimatedButton>
                <AnimatedButton 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10"
                >
                  Schedule a Demo
                </AnimatedButton>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQs;
