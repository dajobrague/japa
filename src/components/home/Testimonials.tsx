import React, { useState } from 'react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import { useDemoForm } from "@/contexts/DemoFormContext";
import AnimatedButton from '../ui/AnimatedButton';
import { ArrowRight, MessageSquare, Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    initials: "UC",
    name: "University of California",
    text: "JAPA's smart parking solution has transformed our campus parking experience. Students and faculty can easily find available spots, and our parking management team has valuable insights into usage patterns.",
    rating: 5
  },
  {
    id: 2,
    initials: "CP", 
    name: "City of Portland",
    text: "Since implementing JAPA's sensors and analytics dashboard, we've seen a 30% reduction in traffic congestion around our busiest downtown areas. The data has been invaluable for urban planning.",
    rating: 5
  },
  {
    id: 3,
    initials: "MH",
    name: "Memorial Hospital",
    text: "Our hospital's parking challenges were significant before JAPA. Now, patients and visitors can easily find parking, reducing stress during already difficult situations.",
    rating: 5
  }
];

const Testimonials = () => {
  const { openDemoForm } = useDemoForm();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-japa-gray/30 relative overflow-hidden">
      {/* Add animations */}
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
          
          @keyframes pulse-gentle {
            0% {
              opacity: 0.7;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
            }
            100% {
              opacity: 0.7;
              transform: scale(1);
            }
          }
          
          .animate-pulse-gentle {
            animation: pulse-gentle 6s ease-in-out infinite;
          }
          
          .testimonial-card {
            transition: all 0.4s ease;
          }
          
          .testimonial-card:hover {
            transform: translateY(-6px);
          }
          
          .quote-icon {
            transition: all 0.3s ease;
          }
          
          .testimonial-card:hover .quote-icon {
            transform: translateY(-5px) rotate(10deg);
            opacity: 1;
          }
        `}
      </style>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-japa-orange/5 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-japa-blue/5 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-japa-orange/10 rounded-full blur-xl -z-10 animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container-wide">
        <AnimationWrapper animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-japa-orange/10 text-japa-orange text-xs md:text-sm font-medium px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-4 backdrop-blur-sm">
              Client Success Stories
            </span>
            <h2 className="font-display font-bold text-japa-slate text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">
              What Our <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-japa-orange to-japa-blue animate-gradient bg-size-200">Clients Say</span>
            </h2>
            <p className="text-japa-slate/70 text-lg md:text-xl">
              Discover how JAPA's smart parking solutions have transformed parking operations for cities, universities, and organizations.
            </p>
          </div>
        </AnimationWrapper>
        
        {/* Testimonials and CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Testimonials */}
          <AnimationWrapper animation="fade-up" delay={150} className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full flex flex-col justify-between relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 text-japa-orange/10 opacity-20">
                <Quote size={200} className="transform rotate-180" />
              </div>
            
              <div>
                <div className="flex items-center mb-8">
                  <MessageSquare className="text-japa-orange mr-2" />
                  <h3 className="text-2xl font-bold text-japa-slate">Success Stories</h3>
                </div>
                
                <div className="space-y-8">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={testimonial.id} 
                      className={`testimonial-card flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                        activeTestimonial === index 
                          ? 'bg-gradient-to-r from-japa-orange/5 to-japa-blue/5 border border-japa-orange/10' 
                          : 'hover:bg-gray-50/80'
                      }`}
                      onMouseEnter={() => setActiveTestimonial(index)}
                    >
                      <div className="w-12 h-12 rounded-full bg-japa-blue/20 flex-shrink-0 flex items-center justify-center text-japa-blue font-bold text-lg transition-transform hover:scale-110">
                        {testimonial.initials}
                      </div>
                      <div className="relative">
                        <Quote size={20} className={`absolute -top-2 -left-2 text-japa-orange/70 quote-icon ${activeTestimonial === index ? 'opacity-100' : 'opacity-60'}`} />
                        <div className="flex items-center mb-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg key={star} className={`w-5 h-5 ${star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-2 text-japa-slate font-medium">{testimonial.name}</span>
                        </div>
                        <p className="text-japa-slate/80 italic relative">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a href="/case-studies" className="text-japa-blue hover:text-japa-darkBlue font-medium flex items-center justify-center sm:justify-start group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Read more success stories</span>
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </AnimationWrapper>

          {/* CTA Box */}
          <AnimationWrapper animation="fade-up" delay={200}>
            <div className="bg-japa-dark rounded-xl p-8 text-white shadow-lg relative overflow-hidden h-full flex flex-col justify-between group hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 z-0 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24 z-0 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-japa-blue/20 to-japa-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-japa-orange transition-colors duration-300">Ready to Transform Your Parking?</h3>
                <p className="mb-8 text-white/90">
                  Join the hundreds of organizations that have revolutionized their parking management with JAPA's smart solutions.
                </p>
              </div>
              
              <div className="space-y-4 relative z-10">
                <AnimatedButton 
                  variant="primary"
                  size="lg"
                  className="block w-full bg-white text-japa-dark hover:bg-gray-100 transition-colors duration-300 font-medium py-3 px-6 rounded-lg text-center shadow-lg border-none group-hover:scale-105 transform transition-transform"
                  onClick={openDemoForm}
                >
                  Schedule a Demo
                </AnimatedButton>
                
                <a 
                  href="/solutions" 
                  className="flex items-center justify-center w-full bg-transparent border border-white text-white hover:bg-white/10 transition-all duration-300 font-medium py-3 px-6 rounded-lg text-center group-hover:border-white/70"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 