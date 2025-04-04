import React, { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";

// Lazy load components
const HeroSection = lazy(() => import("./sections/HeroSection"));
const AboutSection = lazy(() => import("./sections/AboutSection"));
const ServicesSection = lazy(() => import("./sections/ServicesSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const FAQSection = lazy(() => import("./sections/FAQSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));
const WhatsAppButton = lazy(() => import("./WhatsAppButton"));
const NVRSection = lazy(() => import("./sections/NVRSection"));
const FeaturesSection = lazy(() => import("./sections/FeaturesSection"));

const SecurityLandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: window.innerWidth < 768, // Disable AOS on mobile for better performance
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="font-sans">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <NVRSection />
        <FeaturesSection />
        <ProjectsSection />
        <FAQSection />
        <ContactSection />
        <WhatsAppButton />
      </div>
    </AnimatePresence>
  );
};

export default SecurityLandingPage;
