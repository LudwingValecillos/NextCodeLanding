import React from "react";
import bgImage from "../../assets/images/fondoservicesection.jpg";
import image1 from "../../assets/images/landing.jpg";
import image3 from "../../assets/images/paginacompleta.jpg";
import image4 from "../../assets/images/pagina informativa.png";

const ServicesSection = () => {
  const services = [
    {
      title: "Landing Page",
      image: image1,
      description:
        "Sitio web profesional con diseño responsivo y características esenciales",
      features: [
        "Sitio web responsivo.",
        "1 pagina",
        "Formulario de contacto.",
        "Optimización SEO básica.",
        "Ideal para marketing de productos o servicios.",
      ],
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M12 13L2 18l10 5 10-5-10-5z" />
          <circle cx="12" cy="12" r="8" fill="#CD7F32" />
          <path d="M12 12L12 16" stroke="#1A1D23" stroke-width="2" />
        </svg>
      ),
      color: "#CD7F32",
      delay: 0,
    },
    {
      title: "Página web informativa",
      image: image4,
      description:
        "Sitio web avanzado con características adicionales y panel de administración",
      features: [
        "Diseño: Sitio web responsivo premium.",
        "Páginas: Hasta 10 páginas.",
        "Características: Panel de administración.",
        "SEO: Optimización avanzada.",
        "Ideal para: Empresas medianas.",
      ],
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M12 13L2 18l10 5 10-5-10-5z" />
          <circle cx="12" cy="12" r="8" fill="#B1B1B1" />
          <path d="M12 12L12 16" stroke="#1A1D23" stroke-width="2" />
          <path d="M12 12L16 12" stroke="#1A1D23" stroke-width="2" />
        </svg>
      ),
      color: "#B1B1B1",
      delay: 100,
    },
    {
      title: "Página web completa",
      image: image3,
      description:
        "Solución web completa con e-commerce y características personalizadas",
      features: [
        "Diseño: Sitio web personalizado.",
        "Páginas: Ilimitadas.",
        "Características: E-commerce completo.",
        "SEO: Optimización premium.",
        "Ideal para: Grandes empresas.",
      ],
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M12 13L2 18l10 5 10-5-10-5z" />
          <circle cx="12" cy="12" r="8" fill="#FFD700" />
          <path d="M12 12L12 16" stroke="#1A1D23" stroke-width="2" />
          <path d="M12 12L16 12" stroke="#1A1D23" stroke-width="2" />
          <path d="M12 12L8 12" stroke="#1A1D23" stroke-width="2" />
        </svg>
      ),
      color: "#FFD700",
      delay: 200,
    },
  ];
  const handleMasInformacion = (plan) => {
    const numeroTelefono = "+5491123900395";
    const mensaje = `Hola, estoy interesado en el ${plan}, me darias mas informacion?.`;

    // Utiliza la API de WhatsApp para enviar el mensaje
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      className="py-20 text-white relative overflow-hidden"
      id="servicios"
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

      <div className="container mx-auto px-4 relative z-10 w-full max-w-full">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-16 hover:text-shadow-glow transition-all duration-300"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Ofrecemos tres planes diferentes para satisfacer tus necesidades web.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group w-full max-w-full"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              data-aos-duration="1000"
            >
              <div
                className="relative overflow-hidden rounded-xl shadow-2xl bg-black/80 backdrop-blur-sm 
                transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl 
                group-hover:shadow-[#2980B9]/20 border border-white/10 group-hover:border-white/30
                w-full max-w-full"
              >
                {/* Imagen Principal */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-all duration-700 
                    group-hover:scale-110 group-hover:brightness-75"
                    style={{ maxWidth: "100%" }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/50 to-transparent 
                    opacity-60 group-hover:opacity-80 transition-all duration-500"
                  ></div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  {/* Icono y Título */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 bg-[#2980B9] border-red-100 border-2 rounded-lg transform transition-all duration-300 
                      group-hover:scale-110 group-hover:rotate-6 `}
                      style={{ backgroundColor: service.color }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-light group-hover:text-shadow-glow transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Características */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2  text-white
                        transform transition-all duration-300 hover:translate-x-2 group-hover:text-white lg:text-lg"
                      >
                        <svg
                          className="w-10 h-10 text-[#2980B9]"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
