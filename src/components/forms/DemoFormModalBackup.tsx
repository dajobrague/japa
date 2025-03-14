import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import AnimatedButton from "@/components/ui/AnimatedButton";

// Form data type sin usar zod
interface DemoFormValues {
  name: string;
  email: string;
  company: string;
  phone: string;
  role: string;
  message: string;
}

interface DemoFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoFormModalBackup: React.FC<DemoFormModalProps> = ({ isOpen, onClose }) => {
  // Estado para manejar el formulario sin react-hook-form/zod
  const [formData, setFormData] = useState<DemoFormValues>({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof DemoFormValues, string>>>({});

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Función para validar el formulario
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof DemoFormValues, string>> = {};
    
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    if (!formData.company) {
      newErrors.company = "Company name is required.";
    }
    
    if (!formData.role) {
      newErrors.role = "Please select your role.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your backend
      // For now, we'll just close the modal after a brief delay to simulate submission
      setTimeout(() => {
        onClose();
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          role: "",
          message: "",
        });
      }, 1000);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value }));
  };

  if (!isOpen) return null;

  // Close modal when clicking outside content area
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md md:max-w-lg overflow-auto mx-4 max-h-[95vh]">
        {/* Modal header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-japa-slate">Schedule a Demo</h3>
          <button 
            onClick={onClose}
            className="text-japa-slate/60 hover:text-japa-slate transition-colors p-2 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Modal content */}
        <div className="p-5">
          <p className="text-japa-slate/80 mb-6">
            Fill out the form below to schedule a personalized demo of our smart parking solutions. Our team will reach out to you shortly.
          </p>
          
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-japa-slate">Full Name</label>
              <Input 
                name="name"
                placeholder="John Doe" 
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>
            
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-japa-slate">Work Email</label>
              <Input 
                name="email"
                type="email" 
                placeholder="john@company.com" 
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
            
            {/* Two column layout for Company and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Company Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-japa-slate">Company</label>
                <Input 
                  name="company"
                  placeholder="Company Name" 
                  value={formData.company}
                  onChange={handleChange}
                />
                {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
              </div>
              
              {/* Phone Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-japa-slate">Phone (Optional)</label>
                <Input 
                  name="phone"
                  type="tel" 
                  placeholder="(123) 456-7890" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            {/* Role Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-japa-slate">Your Role</label>
              <Select onValueChange={handleRoleChange} value={formData.role}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="parking_operator">Parking Operator</SelectItem>
                  <SelectItem value="municipal_manager">Municipal Manager</SelectItem>
                  <SelectItem value="property_manager">Property Manager</SelectItem>
                  <SelectItem value="transportation_director">Transportation Director</SelectItem>
                  <SelectItem value="technology_officer">Technology Officer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
            </div>
            
            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-japa-slate">Message (Optional)</label>
              <Textarea 
                name="message"
                placeholder="Tell us about your needs or ask any questions..." 
                className="min-h-[100px]"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            {/* Submit Button */}
            <div className="pt-2">
              <AnimatedButton 
                variant="primary"
                size="lg"
                fullWidth
                className="mt-2"
                type="submit"
              >
                Schedule My Demo
              </AnimatedButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoFormModalBackup; 