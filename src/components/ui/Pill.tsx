import React from "react";
import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "muted";
  centered?: boolean;
}

const Pill = ({ 
  children, 
  className, 
  variant = "primary", 
  centered = true  // Hacer centrado por defecto
}: PillProps) => {
  const variantClasses = {
    primary: "bg-japa-orange/10 text-japa-orange",
    secondary: "bg-japa-gray text-japa-slate",
    outline: "bg-transparent border border-japa-orange/50 text-japa-orange",
    muted: "bg-japa-slate/10 text-japa-slate",
  };

  return (
    <div className={cn(
      "w-full flex",
      centered ? "justify-center" : "justify-start"
    )}>
      <span
        className={cn(
          "inline-flex items-center text-sm font-medium px-5 py-2 rounded-full", // Aumentado tamaño de texto y padding
          variantClasses[variant],
          className
        )}
      >
        {children}
      </span>
    </div>
  );
};

export default Pill;
