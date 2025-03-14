import React from 'react';
import { ArrowRight } from "lucide-react";
import { FeatureContent } from '@/types/solutions';

interface FeatureCardProps {
  feature: FeatureContent;
  onOpenModal: (id: string) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onOpenModal }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-japa-blue/20 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={feature.bgImage} 
          alt={feature.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/70 to-japa-slate/10 group-hover:from-japa-slate/80 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end">
          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full w-14 h-14 flex items-center justify-center shadow-md">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-0 px-3 py-2 bg-japa-blue/80 backdrop-blur-sm rounded-lg">
            {feature.title}
          </h3>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-japa-slate/80 mb-6 flex-grow">
          {feature.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {feature.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="text-xs bg-japa-blue/10 text-japa-blue px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <button 
          onClick={() => onOpenModal(feature.id)}
          className="inline-flex items-center text-japa-blue hover:text-japa-darkBlue font-medium group-hover:underline mt-auto"
        >
          Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard; 