import React, { useState } from 'react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import { useDemoForm } from "@/contexts/DemoFormContext";
import AnimatedButton from '../ui/AnimatedButton';
import { ArrowRight, MessageSquare, Quote, Star } from 'lucide-react';
import Pill from "../ui/Pill";

// Testimonial data
const testimonials = [
  {
    id: 1,
    initials: "UC",
    name: "University of California",
    position: "Transportation Director",
    text: "JAPA's smart parking solution has transformed our campus parking experience. Students and faculty can easily find available spots, and our parking management team has valuable insights into usage patterns.",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    initials: "CP", 
    name: "City of Portland",
    position: "Parking Operations Manager",
    text: "Since implementing JAPA's sensors and analytics dashboard, we've seen a 30% reduction in traffic congestion around our busiest downtown areas. The data has been invaluable for urban planning.",
    rating: 5,
    featured: false
  },
  {
    id: 3,
    initials: "MH",
    name: "Memorial Hospital",
    position: "Facilities Manager",
    text: "Our hospital's parking challenges were significant before JAPA. Now, patients and visitors can easily find parking, reducing stress during already difficult situations.",
    rating: 5,
    featured: false
  },
  {
    id: 4,
    initials: "NCU",
    name: "North Central University",
    position: "Campus Operations Director",
    text: "We've been able to optimize our parking resources and significantly improve the campus experience for everyone. The installation was remarkably simple, and the cost savings have exceeded our expectations.",
    rating: 5,
    featured: false
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openDemoForm } = useDemoForm();
  
  // Featured testimonial (for displaying separately)
  const featuredTestimonial = testimonials.find(t => t.featured) || testimonials[0];
  
  // Other testimonials (for the carousel)
  const otherTestimonials = testimonials.filter(t => t.id !== featuredTestimonial.id);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? otherTestimonials.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === otherTestimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-japa-orange/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-japa-orange/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container-wide px-4 md:px-6">
        <AnimationWrapper animation="fade-up" delay={100}>
          <Pill className="mb-4">
            Client Success Stories
          </Pill>
        </AnimationWrapper>
        
        <AnimationWrapper animation="fade-up" delay={200}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8 text-japa-slate">
            Hear From Our <span className="text-japa-orange">Satisfied Clients</span>
          </h2>
        </AnimationWrapper>
        
        {/* Featured testimonial */}
        <AnimationWrapper animation="fade-up" delay={300}>
          <div className="relative max-w-4xl mx-auto mb-10">
            <div className="absolute -top-6 -left-6 text-japa-orange opacity-20">
              <Quote size={80} />
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 md:p-10 relative border border-japa-orange/10">
              <div className="flex items-start gap-6 flex-col md:flex-row">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-japa-orange/15 text-japa-orange font-bold text-xl flex items-center justify-center">
                    {featuredTestimonial.initials}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center mb-1 text-japa-orange">
                    {Array.from({ length: featuredTestimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-japa-slate/90 text-lg md:text-xl italic mb-6">
                    "{featuredTestimonial.text}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-japa-slate">{featuredTestimonial.name}</h4>
                    <p className="text-japa-slate/70 text-sm">{featuredTestimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>
        
        {/* Carousel of other testimonials */}
        <AnimationWrapper animation="fade-up" delay={400}>
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                otherTestimonials[activeIndex],
                otherTestimonials[(activeIndex + 1) % otherTestimonials.length],
                otherTestimonials[(activeIndex + 2) % otherTestimonials.length],
              ].map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-japa-orange/15 text-japa-orange font-bold text-sm flex items-center justify-center mr-3">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-medium text-japa-slate text-sm">{testimonial.name}</h4>
                      <p className="text-japa-slate/70 text-xs">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-2 text-japa-orange">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-japa-slate/80 text-sm">
                    "{testimonial.text.length > 120 
                      ? `${testimonial.text.substring(0, 120)}...` 
                      : testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
            
            {/* Carousel controls */}
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-japa-orange/20 flex items-center justify-center text-japa-orange/70 transition-colors hover:bg-japa-orange/10 hover:text-japa-orange"
              >
                <ArrowRight size={20} className="transform rotate-180" />
              </button>
              
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-japa-orange/20 flex items-center justify-center text-japa-orange/70 transition-colors hover:bg-japa-orange/10 hover:text-japa-orange"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Testimonials; 