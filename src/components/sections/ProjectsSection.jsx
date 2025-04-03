import React, { useEffect } from "react";
import image from "../../assets/images/projectsection.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

// Importa framer-motion solo si está instalado
let motion;
try {
  motion = require("framer-motion");
} catch (e) {
  // Si framer-motion no está disponible, creamos un objeto de reemplazo
  motion = {
    section: "section",
    div: "div",
    h2: "h2",
    p: "p",
    svg: "svg",
    blockquote: "blockquote",
  };
}

const ProjectsSection = () => {
  useEffect(() => {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
      });
    }
  }, []);

  const testimonials = [
    {
      name: "María S.",
      rating: 5,
      text: "El sitio web que desarrollaron para mi negocio superó todas mis expectativas. El diseño es moderno y la funcionalidad es excelente.",
      position: "Dueña de Negocio",
      plan: "Landing Page",
    },
    {
      name: "Roberto L.",
      rating: 5,
      text: "Excelente servicio y profesionalismo. Mi e-commerce funciona perfectamente y las ventas han aumentado significativamente.",
      position: "Emprendedor",
      plan: "Landing Page",
    },
    {
      name: "Ana C.",
      rating: 5,
      text: "Muy satisfecha con el resultado. El sitio es rápido, responsivo y el soporte técnico es excepcional.",
      position: "Cliente Corporativo",
      plan: "Página Web",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 transition-transform duration-200 hover:scale-110 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section
      className="py-16 relative overflow-hidden -mt-16"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      {/* Difuminado superior para transición desde Features */}
      <div className="absolute -top-1 left-0 right-0 h-32 bg-gradient-to-t from-transparent via-black/50 to-black pointer-events-none z-10 "></div>

      <div className="absolute inset-0 bg-black/70 transition-opacity duration-500"></div>

      <div className="container mx-auto px-4 relative z-20 k">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-light text-blue-200 mb-4 transition-all duration-300 hover:scale-105 hover:text-blue-200"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Testimonios de clientes satisfechos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/15 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/20 h-full flex flex-col 
                         transition-all duration-300 hover:scale-103 hover:bg-white/20 hover:shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-medium text-white mb-1 transition-colors duration-300 hover:text-blue-300">
                  {testimonial.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-blue-300 text-sm transition-all duration-300 hover:text-blue-200 hover:scale-105">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-400 text-sm transition-all duration-300 hover:text-gray-200 hover:scale-105">
                    {testimonial.plan}
                  </p>
                </div>
                <div
                  className="flex mt-3 transition-opacity duration-500"
                  data-aos="fade-up"
                >
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <div
                className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent my-4 w-full 
                              transition-all duration-500 hover:via-blue-400"
              ></div>

              <blockquote className="relative flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 w-8 h-8 text-blue-400 opacity-50
                             transition-all duration-300 hover:scale-110 hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p
                  className="text-white relative z-10 pl-6 text-lg leading-relaxed
                              transition-all duration-300 hover:text-shadow-sm"
                  data-aos="fade-bottom"
                >
                  {testimonial.text}
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Difuminado inferior para transición hacia FAQ */}
      <div className="absolute -bottom-1 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-10"></div>
    </section>
  );
};

export default ProjectsSection;