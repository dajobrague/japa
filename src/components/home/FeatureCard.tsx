import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useAnimation } from '@/hooks/useAnimation';
import { COMPONENT_NAMES } from '@/constants/componentNames';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  color: string;
  delay?: number;
  onLearnMore: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  stat,
  statLabel,
  color,
  delay = 0,
  onLearnMore,
}) => {
  const { ref: animationRef, style: animationStyle } = useAnimation({ delay });

  return (
    <div 
      className="feature-card bg-white rounded-3xl h-full p-6 md:p-8 border-none shadow-xl relative overflow-hidden group cursor-pointer"
      ref={animationRef}
      style={animationStyle}
    >
      {/* Shine effect on hover */}
      <div className="card-shine"></div>
      
      <div className="flex gap-4">
        {/* Icon with enhanced styling - circle with color background */}
        <div className={`flex-shrink-0 w-14 h-14 rounded-full ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
          {icon}
        </div>
        
        {/* Title next to icon */}
        <div>
          <h3 className="text-lg md:text-xl font-display font-semibold text-japa-slate group-hover:text-japa-orange transition-colors duration-300">
            {title}
          </h3>
          {/* Feature stat highlight */}
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-japa-orange/10 text-japa-orange mt-1">
            <div className="text-sm font-bold">
              {stat}
            </div>
            <div className="text-xs">
              {statLabel}
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature description */}
      <div className="mt-4 pb-4 border-b border-gray-100">
        <p className="text-japa-slate/70 text-base md:text-lg">
          {description}
        </p>
      </div>
      
      {/* Learn more button - redesigned */}
      <div className="mt-4 text-right">
        <button 
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-japa-blue/10 text-japa-blue text-sm font-medium hover:bg-japa-blue hover:text-white transition-all duration-200 hover:shadow-md"
          onClick={onLearnMore}
        >
          Learn more <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
        </button>
      </div>
    </div>
  );
};

FeatureCard.displayName = COMPONENT_NAMES.FEATURE_CARD;

export default FeatureCard; 