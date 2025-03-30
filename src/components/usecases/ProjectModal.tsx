import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

// Define the type for the use case data
interface UseCaseData {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  stats: {
    reduction: string;
    satisfaction: string;
    roi: string;
  };
  image: string;
  color: string;
}

interface ProjectModalProps {
  useCase: UseCaseData;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ useCase, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left side - Image and stats */}
          <div className="relative rounded-tl-2xl lg:rounded-l-2xl overflow-hidden">
            <img 
              src={useCase.image} 
              alt={useCase.title} 
              className="w-full h-full max-h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-japa-slate/80 to-transparent flex flex-col justify-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">{useCase.title} Success</h3>
                <p className="text-white/90 mb-4">Transforming parking operations through smart technology</p>
                <div className="flex gap-8 text-white">
                  <div>
                    <p className="text-3xl font-bold">{useCase.stats.reduction}</p>
                    <p className="text-sm opacity-80">Congestion Reduction</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{useCase.stats.satisfaction}</p>
                    <p className="text-sm opacity-80">User Satisfaction</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{useCase.stats.roi}</p>
                    <p className="text-sm opacity-80">ROI Timeline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="p-8 flex flex-col">
            <h2 className="text-3xl font-bold text-japa-slate mb-6">{useCase.title} Project</h2>
            
            <p className="text-japa-slate/80 mb-6">
              {useCase.description}
            </p>
            
            <h3 className="text-xl font-bold text-japa-slate mb-4">Key Outcomes</h3>
            
            <div className="space-y-4 flex-grow">
              <div className="flex gap-3">
                <div className="bg-japa-blue/10 p-2 rounded-full h-9 w-9 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-japa-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-japa-slate text-sm mb-0.5">Improved Resource Utilization</h4>
                  <p className="text-japa-slate/80 text-sm">Optimized parking space usage throughout the day, increasing effective capacity by 15%.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-japa-blue/10 p-2 rounded-full h-9 w-9 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-japa-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-japa-slate text-sm mb-0.5">Reduced Search Time</h4>
                  <p className="text-japa-slate/80 text-sm">Users find parking {useCase.stats.reduction} faster, improving experience and reducing emissions.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-japa-blue/10 p-2 rounded-full h-9 w-9 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-japa-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-japa-slate text-sm mb-0.5">Data-Driven Decision Making</h4>
                  <p className="text-japa-slate/80 text-sm">Analytics platform provided key insights for operational improvements and future planning.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-japa-blue/10 p-2 rounded-full h-9 w-9 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-japa-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-japa-slate text-sm mb-0.5">Enhanced User Experience</h4>
                  <p className="text-japa-slate/80 text-sm">Improved satisfaction scores by providing reliable and easy-to-access parking information.</p>
                </div>
              </div>
            </div>
            
            {/* Additional benefits */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-japa-slate mb-4">Solution Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {useCase.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-japa-blue mt-0.5" />
                    <span className="text-sm text-japa-slate/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 