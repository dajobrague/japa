import React, { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/home/Hero";
import VideoSection from "@/components/home/VideoSection";
import Features from "@/components/home/Features";
import Partners from "@/components/home/Partners";
import AppShowcase from "@/components/home/AppShowcase";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import SectionTransition from "@/components/ui/SectionTransition";
import IllustrationSection from "@/components/home/IllustrationSection";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Video URL from parkjapa.com
  const videoUrl = "https://www.parkjapa.com/public/japavid.mp4";

  return (
    <PageLayout>
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. JAPA Illustration Graphic */}
      <SectionTransition animation="fade-in" threshold={0.1} id="illustration-section">
        <IllustrationSection />
      </SectionTransition>
      
      {/* 3. Our Solutions (Features) */}
      <SectionTransition animation="fade-up" threshold={0.1} id="features-section">
        <Features />
      </SectionTransition>
      
      {/* 4. Video Section */}
      <SectionTransition animation="fade-up" threshold={0.1} id="video-section">
        <VideoSection videoUrl={videoUrl} />
      </SectionTransition>
      
      {/* 5. Partners Section */}
      <SectionTransition animation="slide-in-right" threshold={0.1} id="partners-section">
        <Partners />
      </SectionTransition>
      
      {/* 6. Mobile Experience (AppShowcase) */}
      <SectionTransition animation="fade-in" threshold={0.1} id="app-showcase-section">
        <AppShowcase />
      </SectionTransition>
      
      {/* 7. Success Stories (Testimonials) */}
      <SectionTransition animation="slide-in-left" threshold={0.1} id="testimonials-section">
        <Testimonials />
      </SectionTransition>
      
      {/* 8. Call to Action */}
      <SectionTransition animation="fade-up" threshold={0.1} id="cta-section">
        <CallToAction />
      </SectionTransition>
    </PageLayout>
  );
};

export default Index;
