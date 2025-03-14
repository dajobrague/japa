import React, { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Partners from "@/components/home/Partners";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <Hero />
      <Features />
      <Partners />
      <Testimonials />
      <CallToAction />
    </PageLayout>
  );
};

export default Index;
