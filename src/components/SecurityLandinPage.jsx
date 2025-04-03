import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import FAQSection from "./sections/FAQSection";
import ContactSection from "./sections/ContactSection";
import WhatsAppButton from "./WhatsAppButton";
import NVRSection from "./sections/NVRSection";
import FeaturesSection from "./sections/FeaturesSection";

const SecurityLandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
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
