import React, { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import { getLatestArticles } from "../articles/articles";

// Add preload links for critical resources
const preloadLinks = [
  { href: "/assets/images/fondohero.avif", as: "image", type: "image/avif" },
  { href: "/assets/images/sinfondoaa.png", as: "image", type: "image/png" },
  { href: "aos/dist/aos.css", as: "style" },
];

// Lazy load components
const HeroSection = lazy(() => import("../components/sections/HeroSection"));
const AboutSection = lazy(() => import("../components/sections/AboutSection"));
const ServicesSection = lazy(() =>
  import("../components/sections/ServicesSection")
);
const ProjectsSection = lazy(() =>
  import("../components/sections/ProjectsSection")
);
const FAQSection = lazy(() => import("../components/sections/FAQSection"));
const ContactSection = lazy(() =>
  import("../components/sections/ContactSection")
);
const WhatsAppButton = lazy(() => import("../components/WhatsAppButton"));
const ArticleCarousel = lazy(() =>
  import("../components/sections/ArticleCarousel")
);
const FeaturesAndBenefitsSection = lazy(() =>
  import("../components/sections/FeaturesAndBenefitsSection")
);
const DesignProposalSection = lazy(() =>
  import("../components/sections/DesignProposalSection")
);

const SecurityLandingPage = () => {
  useEffect(() => {
    // Initialize AOS with optimized settings
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 100,
      disable: window.innerWidth < 768, // Disable on mobile
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="font-sans">
        {/* Add preload links */}
        {preloadLinks.map((link, index) => (
          <link
            key={index}
            rel="preload"
            href={link.href}
            as={link.as}
            type={link.type}
          />
        ))}
        <Suspense
          fallback={
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#20A366]"></div>
            </div>
          }
        >
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <DesignProposalSection />
          <FeaturesAndBenefitsSection />
          <ProjectsSection />
          <FAQSection />
          <ArticleCarousel articles={getLatestArticles()} />
          <ContactSection />
          <WhatsAppButton />
        </Suspense>
      </div>
    </AnimatePresence>
  );
};

export default SecurityLandingPage;
