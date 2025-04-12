import React, { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import Article from "../components/ArticleCard";
import {
  articles,
  getArticleById,
  getLatestArticles,
} from "../articles/articles";

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
          <ArticleCarousel articles={getLatestArticles()} />

          <ContactSection />
          <WhatsAppButton />
        </Suspense>
      </div>
    </AnimatePresence>
  );
};

export default SecurityLandingPage;
