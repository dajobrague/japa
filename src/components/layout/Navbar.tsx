import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import { cn } from "@/lib/utils";
import { useDemoForm } from "@/contexts/DemoFormContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Press", href: "/press" },
  { name: "FAQs", href: "/faqs" },
];

// Debounce helper function
const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openDemoForm } = useDemoForm();
  
  // Debounced scroll handler
  const handleScroll = useCallback(
    debounce(() => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }, 10),
    []
  );

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
    window.location.href = "https://console.parkjapa.com/";
  };

  // Function to open HubSpot meetings in a popup
  const handleContactClick = () => {
    openDemoForm();
  };

  return (
    <header 
      className={cn(
        "sticky w-full top-0 z-50 h-16",
        scrolled 
          ? "bg-white/80 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      )}
      style={{
        transition: "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
      }}
    >
      <div className="container-wide h-full flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 font-display font-bold text-xl text-japa-slate"
        >
          <img 
            src="/lovable-uploads/Logo-01.png" 
            alt="JAPA Logo" 
            className="h-5 md:h-6 w-auto"
          />
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
            icon={<LogIn size={16} />}
            className="bg-japa-orange text-white hover:bg-japa-orange/90"
            onClick={handleContactClick}
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
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed top-16 right-0 left-0 bg-white/90 backdrop-blur-sm shadow-md overflow-hidden transition-all duration-300 ease-in-out lg:hidden",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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
              size="sm"
              icon={<LogIn size={16} />}
              className="bg-japa-orange text-white hover:bg-japa-orange/90 w-full"
              onClick={handleContactClick}
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
