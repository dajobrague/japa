import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink, Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp, ChevronRight, ChevronDown } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";

// Social media links with hover colors
const socialLinks = [
  { icon: <Twitter size={18} />, url: "#", name: "Twitter", hoverColor: "hover:bg-[#1DA1F2]" },
  { icon: <Linkedin size={18} />, url: "#", name: "LinkedIn", hoverColor: "hover:bg-[#0A66C2]" },
  { icon: <Facebook size={18} />, url: "#", name: "Facebook", hoverColor: "hover:bg-[#1877F2]" },
  { icon: <Instagram size={18} />, url: "#", name: "Instagram", hoverColor: "hover:bg-gradient-to-br from-[#FCAF45] via-[#E1306C] to-[#5851DB]" },
  { icon: <Github size={18} />, url: "#", name: "GitHub", hoverColor: "hover:bg-[#333333]" }
];

// Quick links for the footer
const quickLinks = [
  {
    title: "Platform",
    links: [
      { name: "Real-Time Data", url: "/solutions/real-time-data" },
      { name: "Mobile App", url: "/solutions/mobile-app" },
      { name: "Analytics Dashboard", url: "/solutions/analytics" },
      { name: "Integration API", url: "/solutions/api" },
      { name: "Pricing", url: "/pricing" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Careers", url: "/careers" },
      { name: "Press Kit", url: "/press" },
      { name: "Contact", url: "/contact" },
      { name: "Blog", url: "/blog" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", url: "/docs" },
      { name: "Case Studies", url: "/case-studies" },
      { name: "Webinars", url: "/webinars" },
      { name: "Support Center", url: "/support" },
      { name: "Status", url: "/status" }
    ]
  }
];

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (title: string) => {
    if (expandedSection === title) {
      setExpandedSection(null);
    } else {
      setExpandedSection(title);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-white border-t border-gray-100 relative">
      {/* Top accent line with JAPA gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-japa-orange via-japa-blue to-japa-slate"></div>
      
      <div className="container-wide px-4 md:px-6">
        {/* Main footer content */}
        <div className="py-10 md:py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Brand column with newsletter */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            <AnimationWrapper animation="fade-up">
              <Link to="/" className="inline-block" aria-label="JAPA Home">
                <div className="flex items-center">
                  <img 
                    src="/lovable-uploads/location-pin.png" 
                    alt="JAPA Logo" 
                    className="h-8 md:h-10 w-auto"
                  />
                  <div className="ml-3 font-display font-bold text-xl md:text-2xl text-japa-slate">
                    JAPA<span className="text-japa-orange">.</span>
                  </div>
                </div>
              </Link>
              
              <p className="text-japa-slate/70 text-sm md:text-base max-w-md">
                Transforming parking management for universities, cities, and organizations with smart, data-driven solutions.
              </p>
              
              {/* Newsletter - desktop only */}
              <div className="space-y-3 hidden md:block">
                <h4 className="font-display font-semibold text-japa-slate text-sm md:text-base">Stay Updated</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-3 py-2 text-sm text-japa-slate placeholder:text-japa-slate/50 bg-gray-50 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-japa-orange/30"
                  />
                  <button className="px-3 md:px-4 bg-japa-orange text-white text-sm font-medium rounded-r-lg transition-colors hover:bg-japa-orange/90 flex-shrink-0">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-japa-slate/60">
                  By subscribing, you agree to our Privacy Policy.
                </p>
              </div>
            </AnimationWrapper>
          </div>
          
          {/* Quick links section - Collapsible on mobile, grid on desktop */}
          <div className="lg:col-span-6">
            <div className="md:grid md:grid-cols-3 md:gap-6 space-y-4 md:space-y-0">
              {quickLinks.map((section, index) => (
                <div key={section.title}>
                  {/* Mobile collapsible section */}
                  <div className="md:hidden">
                    <button 
                      onClick={() => toggleSection(section.title)}
                      className="flex items-center justify-between w-full py-3 border-b border-gray-100 text-left"
                    >
                      <h4 className="font-display font-semibold text-japa-slate text-sm">
                        {section.title}
                      </h4>
                      {expandedSection === section.title ? 
                        <ChevronDown size={16} className="text-japa-slate/70" /> : 
                        <ChevronRight size={16} className="text-japa-slate/70" />
                      }
                    </button>
                    
                    {expandedSection === section.title && (
                      <ul className="py-2 space-y-2 pl-2 text-sm">
                        {section.links.map((link) => (
                          <li key={link.name}>
                            <Link 
                              to={link.url}
                              className="text-japa-slate/70 hover:text-japa-orange transition-colors duration-200 inline-block py-1"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                  {/* Desktop normal display */}
                  <div className="hidden md:block">
                    <h4 className="font-display font-semibold text-japa-slate mb-3 md:mb-4 text-sm md:text-base">
                      {section.title}
                    </h4>
                    <ul className="space-y-1 md:space-y-2 text-sm">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link 
                            to={link.url}
                            className="text-japa-slate/70 hover:text-japa-orange transition-colors duration-200 inline-block py-1"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact information */}
          <div className="lg:col-span-2">
            <AnimationWrapper animation="fade-up" delay={300}>
              <h4 className="font-display font-semibold text-japa-slate mb-3 md:mb-4 text-sm md:text-base">
                Contact Us
              </h4>
              
              <ul className="space-y-3 md:space-y-4 text-sm">
                <li>
                  <a 
                    href="mailto:info@japaparking.com" 
                    className="flex items-center gap-2 md:gap-3 text-japa-slate/70 hover:text-japa-orange transition-colors group"
                  >
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-japa-orange/10">
                      <Mail size={14} className="text-japa-orange" />
                    </div>
                    <span>info@japaparking.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+15551234567" 
                    className="flex items-center gap-2 md:gap-3 text-japa-slate/70 hover:text-japa-orange transition-colors group"
                  >
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-japa-orange/10">
                      <Phone size={14} className="text-japa-orange" />
                    </div>
                    <span>+1 (555) 123-4567</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2 md:gap-3 text-japa-slate/70 group">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <MapPin size={14} className="text-japa-orange" />
                    </div>
                    <span>
                      123 Innovation Drive<br />
                      Tech City, CA 91234
                    </span>
                  </div>
                </li>
              </ul>
            </AnimationWrapper>
          </div>
        </div>
        
        {/* Mobile Newsletter - Separated to save space */}
        <div className="md:hidden py-6 border-t border-gray-100">
          <h4 className="font-display font-semibold text-japa-slate text-sm mb-3">Subscribe to Updates</h4>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-grow px-3 py-2 text-sm text-japa-slate placeholder:text-japa-slate/50 bg-gray-50 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-japa-orange/30"
            />
            <button className="px-3 bg-japa-orange text-white text-sm font-medium rounded-r-lg transition-colors hover:bg-japa-orange/90 flex-shrink-0">
              Go
            </button>
          </div>
        </div>
        
        {/* Social links bar */}
        <div className="py-4 md:py-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6">
          <AnimationWrapper animation="fade-up">
            <div className="flex gap-2 md:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className={`w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 flex items-center justify-center text-japa-slate/80 transition-all duration-300 ${social.hoverColor} hover:text-white`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-up" delay={100}>
            <div className="flex items-center flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
              <Link to="/privacy" className="text-japa-slate/70 hover:text-japa-orange transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-japa-slate/70 hover:text-japa-orange transition-colors">
                Terms
              </Link>
              <Link to="/sitemap" className="text-japa-slate/70 hover:text-japa-orange transition-colors">
                Sitemap
              </Link>
            </div>
          </AnimationWrapper>
        </div>
        
        {/* Copyright and back to top */}
        <div className="py-4 md:py-6 border-t border-gray-100 flex flex-col-reverse sm:flex-row justify-between items-center">
          <AnimationWrapper animation="fade-up">
            <p className="text-xs md:text-sm text-japa-slate/60 mt-4 sm:mt-0 text-center sm:text-left">
              © {new Date().getFullYear()} JAPA Inc. All rights reserved.
            </p>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-up" delay={100}>
            <button
              onClick={scrollToTop}
              className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 hover:bg-japa-orange/10 text-japa-slate hover:text-japa-orange rounded-full flex items-center gap-1 md:gap-2 transition-all duration-300 group"
            >
              <span className="text-xs md:text-sm font-medium">Back to top</span>
              <ChevronUp size={14} className="transition-transform group-hover:-translate-y-1" />
            </button>
          </AnimationWrapper>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
