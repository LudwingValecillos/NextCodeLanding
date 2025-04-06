import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsSection = () => {
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

  const projects = [
    {
      title: "Soporte Magnético 360° BONERUY X68",
      description:
        "Landing page para una empresa especializada en venta de soportes magnéticos.",
      image: "https://i.imgur.com/c9sFFM9.png",
      link: "https://symphonious-sunburst-afc60e.netlify.app/",
      github: null,
      color: "#7B68F1",
    },
    {
      title: "M-Store",
      description:
        "Landing page para una empresa especializada en la instalación de cámaras de seguridad.",
      image: "https://i.imgur.com/oeqnQZp.png",
      link: "https://m-security1.netlify.app/",
      github: null,
      color: "#20A366",
    },
    {
      title: "Mis Rutinas Online",
      description:
        "Plataforma web para profesionales fitness y de salud, con un sistema de gestión de clientes, rutinas de entrenamiento y seguimiento de progresos.",
      image: "https://i.imgur.com/BRLMfoX.png",
      link: "https://misrutinasonline.com/",
      github: null,
      color: "#2980B9",
    },
    {
      title: "Lo de nacho carniceria",
      description:
        "Plataforma web para una carniceria, con un sistema de gestión de productos, ventas y seguimiento de progresos.",
      image: "https://i.imgur.com/4NxmcOb.png",
      link: "https://lodenachocarniceria.com/",
      github: null,
      color: "#8E44AD",
    },
    {
      title: "Centro cultural",
      description:
        "Plataforma que permite a los usuarios comprar tickets para eventos con asientos numerados, acceder a convenciones y reservar stands para emprendedores.",
      image: "https://i.imgur.com/yt6yiEH.png",
      link: "https://passwave.onrender.com/",
      github: null,
      color: "#E67E22",
    },
    {
      title: "HomeBankig",
      description:
        "Una plataforma segura para gestionar cuentas bancarias, realizar transferencias, pedir prestamos administrar tarjetas y relaizar pagos con ella.",
      image: "https://i.imgur.com/AXxErHB.png",
      link: "https://homebankig-frontend.onrender.com/",
      github: null,
      color: "#16A085",
    },
    {
      title: "Supermercado",
      description:
        "Creé una plataforma de comercio electrónico para un supermercado con una API de más de 200 productos, páginas de detalles de productos, un sistema de carrito y una pasarela de pago integrada.",
      image: "https://i.imgur.com/YaipjNn.png",
      link: "https://ludwingvalecillos.github.io/E-comerceMarketShop/",
      github: null,
      color: "#C0392B",
    },
  ];

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
          className="text-3xl md:text-4xl font-bold text-white mb-6 text-center"
          data-aos="fade-down"
        >
          Nuestros{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20A366] to-blue-400">
            Proyectos
          </span>
        </h2>
        <p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto text-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Descubre algunos de nuestros trabajos más destacados
        </p>

        {/* Desktop & Mobile Carousel */}
        <div className="-mx-4 sm:-mx-8 md:-mx-12 lg:-mx-24">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
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
                spaceBetween: 12,
                centeredSlides: true,
              },
              375: {
                slidesPerView: 1.2,
                spaceBetween: 16,
                centeredSlides: true,
              },
              425: {
                slidesPerView: 1.3,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: false,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <ProjectCard project={project} index={index} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination !-bottom-2"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

// ProjectCard Component
const ProjectCard = ({ project, index }) => (
  <div
    className="relative group w-full"
    data-aos="fade-up"
    data-aos-delay={index * 100}
    data-aos-duration="1000"
  >
    <div className="overflow-hidden rounded-xl shadow-2xl bg-black/80 backdrop-blur-sm transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#20A366]/20 border border-white/10 group-hover:border-white/30 h-full w-full">
      {/* Imagen Principal */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: project.color }}
          ></div>
          <h3 className="text-xl font-light text-white">{project.title}</h3>
        </div>

        <p className="text-gray-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Botones */}
        <div className="flex items-center justify-between">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#20A366] hover:text-white transition-colors duration-300"
            >
              Ver Proyecto →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsSection;
