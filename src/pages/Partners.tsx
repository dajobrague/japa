import React, { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Pill from "@/components/ui/Pill";
import AnimationWrapper from "@/components/ui/AnimationWrapper";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { ArrowRight, CheckCircle2, ChevronRight, Globe, Shield, UserPlus } from "lucide-react";

// Partner categories
type PartnerCategory = 'Education' | 'Municipal' | 'Healthcare' | 'Technology' | 'Industry' | 'Aviation' | 'Events' | 'Research' | 'All';

// Partners data with enhanced structure
const partners = [
  {
    id: 1,
    name: "University of California",
    category: "Education",
    description: "Implementing smart parking solutions across multiple UC campuses to optimize student and faculty parking resources.",
    logo: "https://placehold.co/200x100/e0f2fe/0369a1?text=UC+Logo&font=open-sans",
    featured: true,
    color: "from-blue-500/20 to-blue-600/30",
    benefits: [
      "35% improvement in campus parking utilization",
      "Reduced search time for students and faculty",
      "Integrated with university mobile app"
    ]
  },
  {
    id: 2,
    name: "City of Austin",
    category: "Municipal",
    description: "Collaborating on smart city initiatives to reduce congestion and improve parking efficiency in downtown areas.",
    logo: "https://placehold.co/200x100/e0f2fe/0369a1?text=Austin+Logo&font=open-sans",
    featured: true,
    color: "from-green-500/20 to-green-600/30",
    benefits: [
      "42% reduction in parking-related traffic",
      "Increased revenue for local businesses",
      "Data-driven policy recommendations"
    ]
  },
  {
    id: 3,
    name: "American Hospital Association",
    category: "Healthcare",
    description: "Working with leading healthcare facilities to optimize patient and staff parking experiences.",
    logo: "https://placehold.co/200x100/e0f2fe/0369a1?text=AHA+Logo&font=open-sans",
    featured: true,
    color: "from-red-500/20 to-red-600/30",
    benefits: [
      "Priority parking for patients and visitors",
      "Staff parking optimization by shift",
      "Emergency access management"
    ]
  },
  {
    id: 4,
    name: "Smart City Alliance",
    category: "Technology",
    description: "Partnering to develop integrated urban mobility solutions that include parking as a key component.",
    logo: "https://placehold.co/200x100/e0f2fe/0369a1?text=SCA+Logo&font=open-sans",
    featured: false,
    color: "from-purple-500/20 to-purple-600/30",
    benefits: [
      "Cross-platform data integration",
      "Smart city standardization efforts",
      "Innovation in urban mobility"
    ]
  },
  {
    id: 5,
    name: "National Parking Association",
    category: "Industry",
    description: "Collaborating on industry standards and best practices for smart parking implementation.",
    logo: "https://placehold.co/200x100/e0f2fe/0369a1?text=NPA+Logo&font=open-sans",
    featured: false,
    color: "from-yellow-500/20 to-yellow-600/30",
    benefits: [
      "Industry best practices development",
      "Certification program collaboration",
      "Nationwide deployment standards"
    ]
  },
  {
    id: 6,
    name: "International Airport Council",
    category: "Aviation",
    description: "Working with airports worldwide to optimize parking operations and improve traveler experiences.",
    logo: "https://placehold.co/200x100/e0f2fe/0369a1?text=IAC+Logo&font=open-sans",
    featured: false,
    color: "from-sky-500/20 to-sky-600/30",
    benefits: [
      "Optimized short and long-term parking",
      "Shuttle service coordination",
      "Traveler satisfaction improvement"
    ]
  },
  {
    id: 7,
    name: "Event Management Solutions",
    category: "Events",
    description: "Developing specialized parking solutions for stadiums, arenas, and large-scale event venues.",
    logo: "https://placehold.co/200x100/e0f2fe/0369a1?text=EMS+Logo&font=open-sans",
    featured: false,
    color: "from-orange-500/20 to-orange-600/30",
    benefits: [
      "Faster venue entry and exit",
      "Real-time capacity management",
      "Event staff coordination tools"
    ]
  },
  {
    id: 8,
    name: "Urban Planning Institute",
    category: "Research",
    description: "Collaborating on research initiatives to study the impact of smart parking on urban development.",
    logo: "https://placehold.co/200x100/e0f2fe/0369a1?text=UPI+Logo&font=open-sans",
    featured: false,
    color: "from-indigo-500/20 to-indigo-600/30",
    benefits: [
      "Data-driven research on urban mobility",
      "Academic publications and case studies",
      "Policy recommendation development"
    ]
  }
];

// Partner testimonials
const testimonials = [
  {
    quote: "Partnering with JAPA has transformed our campus parking experience. We've seen a 35% improvement in utilization and significantly higher satisfaction rates.",
    author: "Dr. Catherine Reynolds",
    position: "Campus Operations Director",
    organization: "University of California, Berkeley",
    image: "https://placehold.co/100/e0f2fe/0369a1?text=CR&font=open-sans"
  },
  {
    quote: "The collaboration with JAPA has been exceptional. Their team truly understands municipal challenges and has been instrumental in developing our smart city framework.",
    author: "Jennifer Michaels",
    position: "Director of Urban Planning",
    organization: "City of Austin",
    image: "https://placehold.co/100/e0f2fe/0369a1?text=JM&font=open-sans"
  }
];

// Partner stats
const partnerStats = [
  { value: "50+", label: "Universities" },
  { value: "35+", label: "Cities" },
  { value: "100+", label: "Organizations" },
  { value: "25K+", label: "Parking Stalls" }
];

const Partners = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for selected category filter
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory>('All');

  // Filter partners based on selected category
  const filteredPartners = selectedCategory === 'All' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  // Extract unique categories from partners data
  const categories = ['All', ...Array.from(new Set(partners.map(partner => partner.category)))] as PartnerCategory[];

  return (
    <PageLayout>
      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-20 md:py-28 overflow-hidden bg-gradient-to-br from-japa-gray/40 via-white to-japa-blue/5">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern-light"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimationWrapper animation="fade-right">
              <div>
                <Pill className="mb-5">Our Partners</Pill>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-japa-slate mb-6 leading-tight">
                  Collaboration Drives <span className="text-japa-blue">Innovation</span>
                </h1>
                <p className="text-lg md:text-xl text-japa-slate/80 max-w-xl mb-8 leading-relaxed">
                  JAPA's strong partnerships with industry leaders, educational institutions, and technology innovators help us deliver exceptional smart parking solutions.
                </p>
                
                {/* Partner stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8">
                  {partnerStats.map((stat, index) => (
                    <AnimationWrapper 
                      key={index} 
                      animation="fade-up" 
                      delay={100 * (index + 1)}
                    >
                      <div className="text-center p-3 rounded-lg bg-white shadow-sm border border-gray-100">
                        <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-japa-blue to-japa-blue/80 bg-clip-text text-transparent mb-1">
                          {stat.value}
                        </div>
                        <div className="text-japa-slate/70 text-xs md:text-sm">
                          {stat.label}
                        </div>
                      </div>
                    </AnimationWrapper>
                  ))}
                </div>
                
                <AnimatedButton variant="primary" size="lg">
                  Become a Partner
                </AnimatedButton>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-left" delay={150}>
              <div className="relative mt-10 lg:mt-0">
                {/* Featured partner testimonial */}
                <div className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100 z-10">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-japa-slate/70">Trusted Partner</span>
                  </div>

                  <div className="mb-6">
                    <blockquote className="text-lg italic text-japa-slate/80">
                      "{testimonials[0].quote}"
                    </blockquote>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-japa-blue/10 flex items-center justify-center text-japa-blue font-bold">
                      {testimonials[0].author.split(' ').map(word => word[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <p className="font-bold text-japa-slate">{testimonials[0].author}</p>
                      <p className="text-sm text-japa-slate/70">{testimonials[0].position}, {testimonials[0].organization}</p>
                    </div>
                  </div>
                </div>
                
                {/* Second testimonial (smaller, peeking out) */}
                <div className="absolute -bottom-6 -right-6 w-3/4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block">
                  <div className="mb-3">
                    <blockquote className="text-sm italic text-japa-slate/80">
                      "{testimonials[1].quote.substring(0, 100)}..."
                    </blockquote>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-japa-orange/10 flex items-center justify-center text-japa-orange font-bold text-xs">
                      {testimonials[1].author.split(' ').map(word => word[0]).join('')}
                    </div>
                    <div className="ml-2">
                      <p className="font-bold text-japa-slate text-sm">{testimonials[1].author}</p>
                      <p className="text-xs text-japa-slate/70">{testimonials[1].organization}</p>
                    </div>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-japa-blue/10 to-japa-blue/30 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute -z-10 -bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-japa-orange/10 to-japa-orange/30 rounded-full opacity-50 blur-xl"></div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-16">
        <div className="container-wide">
          <AnimationWrapper animation="fade-up">
            <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-japa-blue text-white shadow-md'
                      : 'bg-white text-japa-slate/70 hover:bg-japa-gray/20 border border-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'All' ? 'All Partners' : `${category} Partners`}
                </button>
              ))}
            </div>
          </AnimationWrapper>
          
          {/* Featured Partners (only show when All is selected) */}
          {selectedCategory === 'All' && (
            <div className="mb-16">
              <AnimationWrapper animation="fade-up">
                <div className="mb-8 text-center">
                  <Pill className="mb-3">Featured Partners</Pill>
                  <h2 className="text-3xl font-bold text-japa-slate">Our Featured Collaborations</h2>
                </div>
              </AnimationWrapper>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {partners.filter(p => p.featured).map((partner, index) => (
                  <AnimationWrapper 
                    key={partner.id} 
                    animation="fade-up" 
                    delay={index * 75}
                  >
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full flex flex-col transition-all hover:shadow-lg hover:translate-y-[-5px]">
                      <div className={`h-2 bg-gradient-to-r ${partner.color}`}></div>
                      <div className="p-6">
                        <div className="h-16 flex items-center mb-4">
                          <img 
                            src={partner.logo} 
                            alt={partner.name} 
                            className="max-h-full max-w-full"
                          />
                        </div>
                        <Pill variant="secondary" className="mb-3 self-start">{partner.category}</Pill>
                        <h3 className="text-xl font-bold text-japa-slate mb-3">{partner.name}</h3>
                        <p className="text-japa-slate/80 text-sm mb-6">
                          {partner.description}
                        </p>
                        
                        <div className="mt-auto space-y-2 mb-4">
                          {partner.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-japa-blue mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-japa-slate/80">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        
                        <a href="#" className="inline-flex items-center text-japa-blue hover:text-japa-darkBlue font-medium text-sm group">
                          Learn more 
                          <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </AnimationWrapper>
                ))}
              </div>
            </div>
          )}
          
          {/* Partners Grid */}
          <div>
            <AnimationWrapper animation="fade-up">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-japa-slate">
                  {selectedCategory === 'All' ? 'All Partners' : `${selectedCategory} Partners`}
                </h2>
                <p className="text-japa-slate/80 max-w-3xl mx-auto mt-3">
                  {selectedCategory === 'All' 
                    ? 'Explore our diverse network of partners across multiple sectors.' 
                    : `Our ${selectedCategory} partners help us develop specialized solutions for this sector.`}
                </p>
              </div>
            </AnimationWrapper>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPartners
                .filter(p => selectedCategory !== 'All' || !p.featured)
                .map((partner, index) => (
                <AnimationWrapper 
                  key={partner.id} 
                  animation="fade-up" 
                  delay={index * 50}
                >
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group h-full flex flex-col">
                    <div className="h-16 flex items-center justify-center mb-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-h-full"
                      />
                    </div>
                    <Pill variant="secondary" className="mb-3 self-start">{partner.category}</Pill>
                    <h3 className="text-lg font-bold text-japa-slate mb-3 group-hover:text-japa-blue transition-colors">{partner.name}</h3>
                    <p className="text-japa-slate/80 text-sm mb-6 flex-grow">
                      {partner.description}
                    </p>
                    <a href="#" className="text-japa-blue hover:text-japa-darkBlue font-medium text-sm inline-flex items-center mt-auto group">
                      Learn more
                      <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Become a Partner Section */}
      <section className="py-20 bg-japa-dark relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-japa-blue/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-japa-orange/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <AnimationWrapper animation="fade-right">
                <Pill className="bg-white/10 text-white mb-5">Partnership Program</Pill>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Become a JAPA Partner
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-xl">
                  Join our network of innovative partners and help shape the future of smart parking technology. We collaborate with organizations across multiple sectors to create tailored solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="bg-white/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Globe className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Global Network</h3>
                    <p className="text-white/80 text-sm">
                      Join our worldwide network of innovators shaping the future of smart parking.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="bg-white/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Shield className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Industry Leadership</h3>
                    <p className="text-white/80 text-sm">
                      Establish your organization as a leader in smart urban technology.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="bg-white/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <UserPlus className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Custom Solutions</h3>
                    <p className="text-white/80 text-sm">
                      Work with our team to develop solutions tailored to your specific needs.
                    </p>
                  </div>
                </div>
                
                <AnimatedButton 
                  variant="outline" 
                  size="lg"
                  className="bg-white text-japa-blue hover:bg-white/90"
                >
                  Contact Us About Partnership
                </AnimatedButton>
              </AnimationWrapper>
            </div>
            
            <div className="lg:col-span-5">
              <AnimationWrapper animation="fade-up" delay={150}>
                <div className="bg-white rounded-xl shadow-xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-japa-blue/10 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 h-16 w-16 bg-japa-orange/10 rounded-full -ml-8 -mb-8"></div>
                  
                  <h3 className="text-2xl font-bold text-japa-slate mb-6">Partnership Inquiry</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-japa-slate mb-1">Organization</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-japa-blue focus:border-japa-blue outline-none transition-all"
                        placeholder="Your organization name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-japa-slate mb-1">Contact Person</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-japa-blue focus:border-japa-blue outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-japa-slate mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-japa-blue focus:border-japa-blue outline-none transition-all"
                        placeholder="Your email address"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-japa-slate mb-1">Partnership Interest</label>
                      <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-japa-blue focus:border-japa-blue outline-none transition-all">
                        <option value="">Select an option</option>
                        <option value="technology">Technology Partner</option>
                        <option value="implementation">Implementation Partner</option>
                        <option value="research">Research Partner</option>
                        <option value="education">Education Partner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-japa-slate mb-1">Message</label>
                      <textarea 
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-japa-blue focus:border-japa-blue outline-none transition-all"
                        rows={3}
                        placeholder="Tell us about your partnership interests"
                      ></textarea>
                    </div>
                    
                    <AnimatedButton 
                      variant="primary" 
                      size="md"
                      className="w-full"
                    >
                      Submit Inquiry
                    </AnimatedButton>
                  </form>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Partners;
