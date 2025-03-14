
import React from "react";
import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "muted";
}

const Pill = ({ children, className, variant = "primary" }: PillProps) => {
  const variantClasses = {
    primary: "bg-japa-orange/10 text-japa-orange",
    secondary: "bg-japa-gray text-japa-slate",
    outline: "bg-transparent border border-japa-orange/50 text-japa-orange",
    muted: "bg-japa-slate/10 text-japa-slate",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-3 py-1 rounded-full",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Pill;
