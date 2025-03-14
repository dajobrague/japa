import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";

// Sample testimonial data - this could be moved to a separate data file in a real project
const testimonials = [
  {
    id: 1,
    quote: "JAPA's smart parking technology has transformed the parking experience in our downtown area. Businesses are reporting increased foot traffic, and citizens are thrilled with the convenience.",
    author: "Michael Rodriguez",
    title: "City Transportation Director, San Francisco",
    image: "/lovable-uploads/testimonial-1.jpg", // Replace with actual image path if available
    logo: "/lovable-uploads/location-pin.png", // Replace with actual client logo if available
  },
  {
    id: 2,
    quote: "The implementation of JAPA's parking solutions across our university campus has reduced parking-related complaints by 85% and improved overall satisfaction among students and faculty.",
    author: "Dr. Jennifer Lewis",
    title: "Campus Operations Manager, Berkeley University",
    image: "/lovable-uploads/testimonial-2.jpg", // Replace with actual image path if available
    logo: "/lovable-uploads/location-pin.png", // Replace with actual client logo if available
  },
  {
    id: 3,
    quote: "Our hospital's parking challenges were significant before JAPA. Now, patients and visitors can easily find parking, reducing stress during already difficult situations.",
    author: "Thomas Chen",
    title: "Healthcare Facilities Director, Memorial Hospital",
    image: "/lovable-uploads/testimonial-3.jpg", // Replace with actual image path if available
    logo: "/lovable-uploads/location-pin.png", // Replace with actual client logo if available
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-japa-orange/5 -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-japa-blue/5 -z-10" />
      <div className="absolute top-40 left-1/4 w-6 h-6 rounded-full bg-japa-orange/20 -z-10" />
      <div className="absolute bottom-32 right-1/4 w-10 h-10 rounded-full bg-japa-blue/20 -z-10" />
      
      <div className="container-wide">
        <AnimationWrapper animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-japa-orange/10 text-japa-orange text-xs md:text-sm font-medium px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-4">
              Client Success Stories
            </span>
            <h2 className="font-display font-bold text-japa-slate text-3xl sm:text-4xl md:text-5xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-japa-slate/70 text-lg md:text-xl max-w-3xl mx-auto">
              Discover how JAPA's smart parking solutions have transformed parking operations for cities, universities, and organizations.
            </p>
          </div>
        </AnimationWrapper>

        <div className="relative">
          <AnimationWrapper animation="fade-up" delay={100}>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Testimonial Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Quote size={40} className="text-japa-orange/20" />
                  </div>
                  
                  <div className="relative min-h-[200px] flex items-center">
                    {testimonials.map((testimonial, index) => (
                      <div 
                        key={testimonial.id}
                        className={`absolute transition-all duration-500 ${
                          index === activeIndex 
                            ? "opacity-100 translate-x-0" 
                            : "opacity-0 translate-x-8"
                        }`}
                      >
                        <blockquote className="text-lg md:text-xl text-japa-slate/80 italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div className="flex items-center">
                          <div className="mr-4">
                            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                              {testimonial.image && (
                                <img 
                                  src={testimonial.image} 
                                  alt={testimonial.author}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-japa-slate">
                              {testimonial.author}
                            </div>
                            <div className="text-sm text-japa-slate/60">
                              {testimonial.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation */}
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            index === activeIndex 
                              ? "bg-japa-orange w-6" 
                              : "bg-gray-300 hover:bg-japa-orange/50"
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={prevTestimonial}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-japa-slate hover:bg-japa-orange hover:text-white hover:border-japa-orange transition-all"
                        aria-label="Previous testimonial"
                      >
                        <ArrowLeft size={18} />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-japa-slate hover:bg-japa-orange hover:text-white hover:border-japa-orange transition-all"
                        aria-label="Next testimonial"
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Image side */}
                <div className="hidden md:block bg-japa-orange/10 overflow-hidden">
                  <div className="relative h-full">
                    {testimonials.map((testimonial, index) => (
                      <div 
                        key={testimonial.id}
                        className={`absolute inset-0 transition-all duration-500 ${
                          index === activeIndex 
                            ? "opacity-100 scale-100" 
                            : "opacity-0 scale-105"
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-japa-orange/10 to-japa-blue/10 mix-blend-multiply z-10" />
                        
                        {/* Client Logo */}
                        <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20">
                          <img 
                            src={testimonial.logo} 
                            alt="Client Logo" 
                            className="h-10 w-auto"
                          />
                        </div>
                        
                        {/* This would be replaced with actual client-related images */}
                        <div className="h-full w-full bg-cover bg-center">
                          <img 
                            src="https://images.unsplash.com/photo-1590674899484-13e8f7733f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                            alt="Smart parking solution"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimationWrapper>
          
          {/* Logos section */}
          <AnimationWrapper animation="fade-up" delay={200}>
            <div className="mt-16 text-center">
              <p className="text-japa-slate/50 text-sm uppercase font-medium mb-8">
                Trusted by leading organizations
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {/* These would be replaced with actual client logos */}
                <img src="/lovable-uploads/location-pin.png" alt="Client Logo" className="h-8 md:h-10 w-auto opacity-50 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/location-pin.png" alt="Client Logo" className="h-8 md:h-10 w-auto opacity-50 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/location-pin.png" alt="Client Logo" className="h-8 md:h-10 w-auto opacity-50 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/location-pin.png" alt="Client Logo" className="h-8 md:h-10 w-auto opacity-50 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/location-pin.png" alt="Client Logo" className="h-8 md:h-10 w-auto opacity-50 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 