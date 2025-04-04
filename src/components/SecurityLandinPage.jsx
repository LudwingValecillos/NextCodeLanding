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

  const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
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
