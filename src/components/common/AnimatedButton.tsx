
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const AnimatedButton = ({
  children,
  className,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
}: AnimatedButtonProps) => {
  // Base classes
  const baseClasses = "relative overflow-hidden rounded-full font-medium transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  // Variant classes
  const variantClasses = {
    primary: "bg-japa-orange hover:bg-japa-darkBlue text-white focus:ring-japa-orange hover:-translate-y-1 hover:shadow-lg",
    secondary: "bg-white hover:bg-japa-paleOrange text-japa-slate border border-gray-200 focus:ring-japa-orange hover:-translate-y-1 hover:shadow-lg",
    outline: "bg-transparent hover:bg-japa-orange/10 text-japa-orange border border-japa-orange focus:ring-japa-orange hover:-translate-y-1",
    text: "bg-transparent hover:bg-japa-orange/10 text-japa-orange focus:ring-japa-orange",
  };
  
  return (
    <button
      onClick={onClick}
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && "w-full",
        "group",
        className
      )}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && iconPosition === "left" && <span className="transition-transform duration-300 group-hover:-translate-x-1">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-r from-japa-orange via-japa-orange to-japa-lightBlue opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
    </button>
  );
};

export default AnimatedButton;
