import React, { useEffect } from "react";
import { X } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  phone: z.string().optional(),
  role: z.string().min(1, { message: "Please select your role." }),
  message: z.string().optional(),
});

// Form data type
type DemoFormValues = z.infer<typeof formSchema>;

interface DemoFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoFormModal: React.FC<DemoFormModalProps> = ({ isOpen, onClose }) => {
  // Initialize form
  const form = useForm<DemoFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      role: "",
      message: "",
    },
  });

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

  // Form submission handler
  const onSubmit = (data: DemoFormValues) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    // For now, we'll just close the modal after a brief delay to simulate submission
    setTimeout(() => {
      onClose();
      form.reset();
    }, 1000);
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
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-japa-slate">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-japa-slate">Work Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Two column layout for Company and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Company Field */}
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-japa-slate">Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Phone Field */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-japa-slate">Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(123) 456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Role Field */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-japa-slate">Your Role</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="parking_operator">Parking Operator</SelectItem>
                        <SelectItem value="municipal_manager">Municipal Manager</SelectItem>
                        <SelectItem value="property_manager">Property Manager</SelectItem>
                        <SelectItem value="transportation_director">Transportation Director</SelectItem>
                        <SelectItem value="technology_officer">Technology Officer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-japa-slate">Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your needs or ask any questions..." 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Submit Button */}
              <div className="pt-2">
                <AnimatedButton 
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="mt-2"
                  onClick={form.handleSubmit(onSubmit)}
                >
                  Schedule My Demo
                </AnimatedButton>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default DemoFormModal; 