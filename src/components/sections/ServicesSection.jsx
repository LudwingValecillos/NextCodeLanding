import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bgImage from "../../assets/images/fondoservicesection.jpg";
import image1 from "../../assets/images/landing.jpg";
import image2 from "../../assets/images/unnamed.jpg";
import image3 from "../../assets/images/paginacompleta.jpg";
import image4 from "../../assets/images/pagina informativa.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
      });
    }
  
    const currentSection = sectionRef.current; // Copiamos la referencia
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Se activa cuando el 20% de la sección es visible
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

  const services = [
    {
      title: "Landing Page",
      image: image1,
      description:
        "Sitio web profesional con diseño responsivo y características esenciales",
      features: [
        "Sitio web responsivo.",
        "1 página.",
        "Formulario de contacto.",
        "Optimización SEO básica.",
        "Ideal para marketing de productos o servicios.",
      ],
      color: "#CD7F32",
      delay: 0,
    },
    {
      title: "Landing Page + Publicidad",
      image: image2, // Agrega la imagen correspondiente
      description:
        "Landing Page optimizada junto con gestión publicitaria en redes sociales.",
      features: [
        "Incluye todo lo del plan Landing Page.",
        "Estrategia de publicidad en redes.",
        "Creación y gestión de anuncios en Facebook e Instagram.",
        "Diseño de creativos y copies optimizados.",
        "Optimización SEO y segmentación de audiencia.",
      ],
      color: "#FF9800",
      delay: 50,
    },
    {
      title: "Página web informativa",
      image: image4,
      description:
        "Sitio web avanzado con características adicionales y panel de administración",
      features: [
        "Incluye todo lo del plan anterior.",
        "Sitio web responsivo premium.",
        "Hasta 5 páginas.",
        "Optimización SEO avanzada.",
        "Ideal para mostrar información de una empresa.",
      ],
      color: "#B1B1B1",
      delay: 100,
    },
    {
      title: "Página web completa",
      image: image3,
      description:
        "Solución web completa con e-commerce y características personalizadas",
      features: [
        "Incluye todo lo del plan anterior.",
        "Sitio web personalizado.",
        "Páginas ilimitadas.",
        "Base de datos.",
        "Optimización SEO premium.",
        "Ideal para grandes empresas.",
      ],
      color: "#FFD700",
      delay: 200,
    },
  ];

  const handleMasInformacion = (plan) => {
    const numeroTelefono = "+5491127281099";
    const mensaje = `Hola, estoy interesado en el ${plan}, me darias mas informacion?`;

    // Utiliza la API de WhatsApp para enviar el mensaje
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  const handleTouchStart = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleTouchEnd = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 text-white relative overflow-hidden -mt-16"
      id="servicios"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 animate-subtle-zoom"
        style={{
          backgroundImage: `url(${bgImage})`,
          maxWidth: "100vw",
          overflow: "hidden",
        }}
      />
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        style={{ maxWidth: "100vw", overflow: "hidden" }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px] animate-subtle-zoom"
          style={{ maxWidth: "100vw", overflow: "hidden" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-16 hover:text-shadow-glow transition-all duration-300"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Ofrecemos planes diferentes para satisfacer tus necesidades web.
        </h2>

        {/* Desktop Flex */}
<div className="hidden md:flex  justify-center gap-2 lg:-mx-16">
  {services.map((service, index) => (
    <ServiceCard
      key={index}
      service={service}
      handleMasInformacion={handleMasInformacion}
    />
  ))}
</div>

        {/* Mobile Carousel - Simplified */}
        <div className="md:hidden -mx-4 sm:-mx-8 ">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={12}
            slidesPerView={1.2}
            centeredSlides={true}
            speed={400}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletActiveClass: "swiper-pagination-bullet-active bg-white",
              bulletClass: "swiper-pagination-bullet bg-white/30",
            }}
            autoplay={
              isVisible
                ? {
                    delay: 4000,
                    disableOnInteraction: false,
                  }
                : false
            }
            className="w-full pb-12 px-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            breakpoints={{
              320: {
                slidesPerView: 1.15,
                spaceBetween: 8,
              },
              375: {
                slidesPerView: 1.2,
                spaceBetween: 12,
              },
              425: {
                slidesPerView: 1.3,
                spaceBetween: 16,
              },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-xl bg-black/80 backdrop-blur-sm ">
                  {/* Imagen Principal */}
                  <div className="relative h-40 overflow-hidden ">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Contenido */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: service.color }}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-light">{service.title}</h3>
                    </div>

                    {/* Características */}
                    <ul className="space-y-1.5 mb-4">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text- text-white/90"
                        >
                          <svg
                            className="w-4 h-4 text-[#2980B9]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Botón */}
                    <button
                      className="w-full bg-[#20A366] text-white px-4 py-2 rounded-lg text-sm
                      transform transition-all duration-300 hover:bg-white hover:text-[#2980B9]
                      flex items-center justify-center gap-2"
                      onClick={() => handleMasInformacion(service.title)}
                    >
                      <span>Más información</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination !-bottom-2"></div>
          </Swiper>
        </div>

        {/* Advertising Banner */}
        <div
          className="mt-16 bg-gradient-to-r from-[#2980B9] to-[#20A366] rounded-xl p-6 
          transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#2980B9]/30
          border-2 border-white/30 hover:border-white/50"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Publicidad en Redes Sociales
                </h3>
                <p className="text-white">
                  Nuestros planes pueden incluir publicidad en redes o mejorar
                  la que ya tienes: creamos cuentas, diseñamos publicaciones y
                  optimizamos anuncios para maximizar resultados.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-white/90">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                <span>Facebook Ads</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                <span>Instagram Ads</span>
              </div>
            </div>
            <button
              onClick={() =>
                handleMasInformacion("Publicidad en Redes Sociales")
              }
              className="px-6 py-2 bg-white text-[#2980B9] rounded-lg font-medium
              transform transition-all duration-300 hover:scale-105 hover:shadow-lg
              flex items-center gap-2"
            >
              <span>Consultar</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ServiceCard Component
const ServiceCard = ({ service, handleMasInformacion }) => (
  <div
    className="relative group"
    data-aos="fade-up"
    data-aos-delay={service.delay}
    data-aos-duration="1000"
  >
    <div
  className="overflow-hidden rounded-xl shadow-2xl bg-black/80 backdrop-blur-sm 
  transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl 
  group-hover:shadow-[#2980B9]/20 border border-white/10 group-hover:border-white/30
  h-full flex flex-col w-full max-w-[20rem]"
>
      {/* Imagen Principal */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transform transition-all duration-700 
          group-hover:scale-110 group-hover:brightness-75"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/50 to-transparent 
          opacity-60 group-hover:opacity-80 transition-all duration-500"
        ></div>
      </div>

      {/* Contenido */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Icono y Título */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-2 rounded-lg transform transition-all duration-300 
            group-hover:scale-110 group-hover:rotate-6"
            style={{ backgroundColor: service.color }}
          >
            {service.icon}
          </div>
          <h3 className="text-xl md:text-2xl font-light group-hover:text-shadow-glow transition-all duration-300">
            {service.title}
          </h3>
        </div>

        {/* Características */}
        <ul className="space-y-2 mb-6 flex-grow">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-white/90 hover:text-white
              transform transition-all duration-300 hover:translate-x-2"
            >
              <svg
                className="w-5 h-5 mt-0.5 text-[#2980B9] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4"
                />
              </svg>
              <span className="text-sm lg:text-base">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Botón */}
        <button
          className="w-full bg-[#20A366] text-white px-6 py-3 rounded-lg text-sm 
          transform transition-all duration-500 
          hover:bg-white hover:text-[#2980B9] hover:scale-105 hover:shadow-lg
          group-hover:translate-y-0 flex items-center justify-center gap-2"
          onClick={() => handleMasInformacion(service.title)}
        >
          <span>Más información</span>
          <svg
            className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);


export default ServicesSection;
