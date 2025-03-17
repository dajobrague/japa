import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Press", href: "/press" },
  { name: "FAQs", href: "/faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if the current path matches the link's href
  const isActive = (href: string) => {
    // Special case for home page
    if (href === "/" && location.pathname === "/") {
      return true;
    }
    // For other pages, check if the pathname starts with the href (for nested routes)
    return href !== "/" && location.pathname.startsWith(href);
  };

  // Función para abrir el login en el sitio original
  const handleLoginClick = () => {
    window.open("https://parkjapa.com/login", "_blank");
  };

  return (
    <header 
      className={cn(
        "sticky w-full top-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-3 bg-white shadow-sm" 
          : "py-5 bg-white"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 font-display font-bold text-xl text-japa-slate"
        >
          <img 
            src="/lovable-uploads/location-pin.png" 
            alt="JAPA Logo" 
            className="h-8 md:h-10 w-auto"
          />
          <span>JAPA<span className="text-japa-orange">.</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-japa-slate/80 hover:text-japa-orange transition-colors duration-200 text-sm font-medium relative pb-1",
                isActive(link.href) && "text-japa-orange after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-japa-orange"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Log In Button */}
          <AnimatedButton 
            variant="outline" 
            size="sm"
            icon={<LogIn size={16} />}
            iconPosition="left"
            onClick={handleLoginClick}
            className="text-japa-slate border-japa-slate/30 hover:text-japa-orange hover:border-japa-orange"
          >
            Log In
          </AnimatedButton>
          
          {/* Contact Button */}
          <AnimatedButton 
            variant="primary" 
            size="sm"
          >
            Contact Us
          </AnimatedButton>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-japa-slate hover:text-japa-orange transition-colors p-1"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation - Part of document flow */}
      <div 
        className={cn(
          "bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out lg:hidden",
          isOpen ? "max-h-[500px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-2 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-japa-slate hover:text-japa-orange transition-colors duration-200 text-base font-medium py-2 border-b border-gray-100",
                isActive(link.href) && "text-japa-orange"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Log in button (Mobile) */}
          <div className="mt-4 mb-2">
            <AnimatedButton 
              variant="outline" 
              fullWidth
              icon={<LogIn size={16} />}
              iconPosition="left"
              onClick={handleLoginClick}
              className="text-japa-slate border-japa-slate/30"
            >
              Log In
            </AnimatedButton>
          </div>
          
          <div className="mt-2">
            <AnimatedButton 
              variant="primary" 
              fullWidth
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </AnimatedButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
