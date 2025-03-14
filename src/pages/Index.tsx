import React, { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Partners from "@/components/home/Partners";
import AppShowcase from "@/components/home/AppShowcase";
import Testimonials from "@/components/home/Testimonials";
import SectionTransition from "@/components/ui/SectionTransition";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <Hero />
      <SectionTransition animation="fade-up" threshold={0.1} id="features-section">
        <Features />
      </SectionTransition>
      <SectionTransition animation="slide-in-right" threshold={0.1} id="partners-section">
        <Partners />
      </SectionTransition>
      <SectionTransition animation="fade-in" threshold={0.1} id="app-showcase-section">
        <AppShowcase />
      </SectionTransition>
      <SectionTransition animation="slide-in-left" threshold={0.1} id="testimonials-section">
        <Testimonials />
      </SectionTransition>
    </PageLayout>
  );
};

export default Index;
