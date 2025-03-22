import React from 'react';
import { Plus } from "lucide-react";
import { FeatureContent } from '@/types/solutions';

interface FeatureCardProps {
  feature: FeatureContent;
  onOpenModal: (id: string) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onOpenModal }) => {
  return (
    <div className="group bg-white/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100/30 hover:border-japa-orange/30 transition-all duration-300 h-full flex flex-col relative">
      {/* Top orange accent line - visible by default */}
      <div className="absolute top-0 left-0 w-full h-1 bg-japa-orange opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative h-64 overflow-hidden">
        <img 
          src={feature.bgImage} 
          alt={feature.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/60 to-japa-slate/10 group-hover:from-japa-orange/60 group-hover:to-japa-orange/20 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end">
          <div className="bg-white/70 backdrop-blur-sm p-3 rounded-full w-14 h-14 flex items-center justify-center shadow-md group-hover:bg-japa-orange/10 group-hover:border group-hover:border-japa-orange/30 transition-all duration-300">
            <div className="text-japa-orange">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-0 px-3 py-2 bg-japa-orange/70 backdrop-blur-sm rounded-lg transition-all duration-300">
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
            <span key={tagIndex} className="text-xs bg-japa-orange/10 text-japa-orange px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <button 
          onClick={() => onOpenModal(feature.id)}
          className="flex items-center justify-center gap-2 bg-japa-orange/10 hover:bg-japa-orange text-japa-orange hover:text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 w-full mt-auto"
        >
          View Details <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard; 