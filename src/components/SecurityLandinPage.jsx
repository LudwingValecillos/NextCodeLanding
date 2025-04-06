import React, { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";

// Lazy load components
const HeroSection = lazy(() => import("./sections/HeroSection"));
const AboutSection = lazy(() => import("./sections/AboutSection"));
const ServicesSection = lazy(() => import("./sections/ServicesSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const FAQSection = lazy(() => import("./sections/FAQSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));
const WhatsAppButton = lazy(() => import("./WhatsAppButton"));
const FeaturesAndBenefitsSection = lazy(() =>
  import("./sections/FeaturesAndBenefitsSection")
);
const DesignProposalSection = lazy(() =>
  import("./sections/DesignProposalSection")
);

// Logo Fallback
const LogoFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <img src={logo} alt="Logo" className="w-32 h-32 animate-pulse" />
  </div>
);

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
        <Suspense>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <DesignProposalSection />
          <FeaturesAndBenefitsSection />
          <ProjectsSection />
          <FAQSection />
          <ContactSection />
          <WhatsAppButton />
        </Suspense>
      </div>
    </AnimatePresence>
  );
};

export default SecurityLandingPage;
