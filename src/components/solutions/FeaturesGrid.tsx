import React from 'react';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import Pill from '@/components/ui/Pill';
import FeatureCard from './FeatureCard';
import { FeatureContent } from '@/types/solutions';

interface FeaturesGridProps {
  features: FeatureContent[];
  onOpenModal: (id: string) => void;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features, onOpenModal }) => {
  return (
    <section id="solutions" className="py-12 md:py-16 relative overflow-hidden">
      {/* Add subtle orange decorative elements - made more transparent */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-japa-orange/3 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-japa-orange/3 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-wide">
        <AnimationWrapper animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <Pill className="mb-3 inline-flex">
              Complete Ecosystem
            </Pill>
            <h2 className="text-3xl md:text-4xl font-bold text-japa-slate mb-4">
              Smart Solutions for Every <span className="text-japa-orange">Parking Challenge</span>
            </h2>
            <p className="text-lg text-japa-slate/80">
              Our integrated suite of solutions addresses the entire parking ecosystem, from hardware sensors to user-facing mobile apps.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <AnimationWrapper key={feature.id} animation="fade-up" delay={50 * (index + 1)}>
              <FeatureCard 
                feature={feature} 
                onOpenModal={onOpenModal} 
              />
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid; 