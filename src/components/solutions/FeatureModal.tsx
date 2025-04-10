import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { FeatureContent } from '@/types/solutions';
import { useDemoForm } from '@/contexts/DemoFormContext';

interface FeatureModalProps {
  feature: FeatureContent;
  onClose: () => void;
}

const FeatureModal: React.FC<FeatureModalProps> = ({ feature, onClose }) => {
  const { openDemoForm } = useDemoForm();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Modal content */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="relative mb-8 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-japa-blue/10 p-4 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-japa-slate">{feature.title}</h2>
            </div>
            <p className="text-lg text-japa-slate/80">{feature.description}</p>
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-japa-slate mb-3">Overview</h3>
            <p className="text-japa-slate/80 mb-6">{feature.detailedContent.overview}</p>
            
            <h3 className="text-xl font-bold text-japa-slate mb-3">Key Benefits</h3>
            <ul className="space-y-2 mb-6">
              {feature.detailedContent.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-japa-slate/90">{benefit}</span>
                </li>
              ))}
            </ul>
            
            {/* Feature illustration */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-md">
              <img 
                src={feature.bgImage} 
                alt={`${feature.title} illustration`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Technical Details */}
          <div className="mb-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-bold text-japa-slate mb-3">Technical Specifications</h3>
            <p className="text-japa-slate/80">{feature.detailedContent.technicalDetails}</p>
          </div>

          {/* Use Cases */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-japa-slate mb-4">Example Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {feature.detailedContent.useCases.map((useCase, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-5 shadow-sm">
                  <h4 className="font-bold text-japa-slate mb-2">{useCase.title}</h4>
                  <p className="text-japa-slate/80 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button 
              onClick={openDemoForm}
              className="inline-flex items-center justify-center bg-japa-blue hover:bg-japa-darkBlue text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureModal; 