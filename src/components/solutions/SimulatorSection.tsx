import React from 'react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import Pill from '@/components/ui/Pill';
import ParkingSimulator from '@/components/simulator/ParkingSimulator';

const SimulatorSection: React.FC = () => {
  return (
    <section id="simulator" className="py-20 md:py-28 bg-gradient-to-b from-white to-japa-gray/30">
      <div className="container-wide">
        <AnimationWrapper animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Pill className="mb-4">Experience JAPA</Pill>
            <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-4">
              Interactive Smart Parking Simulator
            </h2>
            <p className="text-lg text-japa-slate/80">
              See how our solution transforms parking management with real-time data, analytics, 
              and violation tracking. Try different scenarios and times of day to experience the full capabilities.
            </p>
          </div>
        </AnimationWrapper>
        
        <AnimationWrapper animation="fade-up" delay={100} className="mb-16">
          <div className="bg-white p-1 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <ParkingSimulator />
          </div>
        </AnimationWrapper>

        {/* Testimonials and CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {/* Testimonials */}
          <AnimationWrapper animation="fade-up" delay={150} className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-japa-slate mb-6">What Our Clients Say</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-japa-blue/20 flex-shrink-0 flex items-center justify-center text-japa-blue font-bold text-lg">
                      UC
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-japa-slate font-medium">University of California</span>
                      </div>
                      <p className="text-japa-slate/80 italic">
                        "JAPA's smart parking solution has transformed our campus parking experience. Students and faculty can easily find available spots, and our parking management team has valuable insights into usage patterns."
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-japa-blue/20 flex-shrink-0 flex items-center justify-center text-japa-blue font-bold text-lg">
                      CP
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-japa-slate font-medium">City of Portland</span>
                      </div>
                      <p className="text-japa-slate/80 italic">
                        "Since implementing JAPA's sensors and analytics dashboard, we've seen a 30% reduction in traffic congestion around our busiest downtown areas. The data has been invaluable for urban planning."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a href="#" className="text-japa-blue hover:text-japa-darkBlue font-medium flex items-center justify-center sm:justify-start">
                  Read more success stories
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimationWrapper>

          {/* CTA Box */}
          <AnimationWrapper animation="fade-up" delay={200}>
            <div className="bg-japa-dark rounded-xl p-8 text-white shadow-lg relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 z-0"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24 z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Parking?</h3>
                <p className="mb-8 text-white/90">
                  Join the hundreds of organizations that have revolutionized their parking management with JAPA's smart solutions.
                </p>
              </div>
              
              <div className="space-y-4 relative z-10">
                <a href="#" className="block w-full bg-white text-japa-dark hover:bg-gray-100 transition-colors font-medium py-3 px-6 rounded-lg text-center">
                  Schedule a Demo
                </a>
                <a href="#" className="block w-full bg-transparent border border-white text-white hover:bg-white/10 transition-colors font-medium py-3 px-6 rounded-lg text-center">
                  Download Brochure
                </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection; 