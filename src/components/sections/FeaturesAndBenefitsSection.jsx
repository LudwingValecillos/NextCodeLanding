import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../assets/images/presenciadigital.png";

const FeaturesAndBenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
      });
    }

    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const features = [
    {
      title: "Diseño Responsivo",
      description:
        "Sitios web que se adaptan perfectamente a cualquier dispositivo, desde móviles hasta pantallas de escritorio.",
      icon: "📱",
      color: "#20A366",
    },
    {
      title: "Optimización SEO",
      description:
        "Implementamos las mejores prácticas de SEO para mejorar tu visibilidad en los motores de búsqueda.",
      icon: "🔍",
      color: "#2980B9",
    },
    {
      title: "Rendimiento Óptimo",
      description:
        "Sitios web rápidos y eficientes, optimizados para ofrecer la mejor experiencia de usuario.",
      icon: "⚡",
      color: "#E74C3C",
    },
    {
      title: "Diseño Moderno",
      description:
        "Interfaces atractivas y actuales que reflejan la identidad de tu marca y cautivan a tus visitantes.",
      icon: "🎨",
      color: "#8E44AD",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #1a1a1a, #000000)",
      }}
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px] animate-subtle-zoom"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 text-center"
          data-aos="fade-down"
        >
          Características y{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20A366] to-blue-400">
            Beneficios
          </span>
        </h2>
        <p
          className="text-base md:text-lg text-gray-300 mb-8 md:mb-16 max-w-2xl mx-auto text-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Creamos sitios web que destacan y generan resultados
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#20A366]/20 border border-white/10 hover:border-white/30"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6" data-aos="fade-right">
            <h3 className="text-xl md:text-2xl font-semibold">
              Beneficios para tu Negocio
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              Nuestros sitios web están diseñados para:
            </p>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#20A366]">✓</span>
                <span className="text-sm md:text-base">
                  Aumentar la visibilidad de tu marca en línea
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#20A366]">✓</span>
                <span className="text-sm md:text-base">
                  Mejorar la experiencia de usuario
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#20A366]">✓</span>
                <span className="text-sm md:text-base">
                  Generar más leads y conversiones
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#20A366]">✓</span>
                <span className="text-sm md:text-base">
                  Optimizar el rendimiento y la velocidad
                </span>
              </li>
            </ul>
          </div>
          <div className="relative mt-8 md:mt-0" data-aos="fade-left">
            <div className="aspect-video bg-gradient-to-br from-[#20A366]/20 to-blue-500/20 rounded-xl overflow-hidden">
              <img
                src={image}
                alt="Web Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndBenefitsSection;
