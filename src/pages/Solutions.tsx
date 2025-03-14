import React, { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import FeaturesGrid from "@/components/solutions/FeaturesGrid";
import SimulatorSection from "@/components/solutions/SimulatorSection";
import FAQSection from "@/components/solutions/FAQSection";
import FeatureModal from "@/components/solutions/FeatureModal";
import { featuresData, faqData } from "@/data/solutionsData";
import { FeatureContent } from "@/types/solutions";

const Solutions = () => {
  // State to manage which modal is open
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeFeature, setActiveFeature] = useState<FeatureContent | null>(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock/unlock body scroll when modal is open/closed
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeModal]);

  // Set the active feature when modal ID changes
  useEffect(() => {
    if (activeModal) {
      const feature = featuresData.find(f => f.id === activeModal) || null;
      setActiveFeature(feature);
    } else {
      setActiveFeature(null);
    }
  }, [activeModal]);

  // Handler for opening the modal
  const handleOpenModal = (id: string) => {
    setActiveModal(id);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <PageLayout>
      <SolutionsHero />
      <FeaturesGrid features={featuresData} onOpenModal={handleOpenModal} />
      <SimulatorSection />
      <FAQSection faqItems={faqData} />
      
      {/* Feature Modal */}
      {activeFeature && (
        <FeatureModal feature={activeFeature} onClose={handleCloseModal} />
      )}
    </PageLayout>
  );
};

export default Solutions;
