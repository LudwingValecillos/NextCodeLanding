import React, { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import loading from "../assets/images/logo.png";

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

  const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center">
      <img src={loading} alt="Loading" className="w-40 h-40" />
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      <div className="font-sans">
        <Suspense fallback={<LoadingFallback />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <NVRSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ContactSection />
        </Suspense>
        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>
      </div>
    </AnimatePresence>
  );
};

export default SecurityLandingPage;
