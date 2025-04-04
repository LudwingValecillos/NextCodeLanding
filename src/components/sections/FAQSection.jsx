import React, { useState } from "react";
import faqImage from "../../assets/images/2.webp";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer:
        "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-3 semanas, mientras que uno más complejo puede tomar 1-2 meses.",
    },
    {
      question: "¿Qué tecnologías utilizan?",
      answer:
        "Utilizamos las últimas tecnologías web como React, Next.js, Node.js, y otras herramientas modernas para garantizar sitios web rápidos y seguros.",
    },
    {
      question: "¿Los sitios web son responsivos?",
      answer:
        "Sí, todos nuestros sitios web son completamente responsivos y se adaptan a todos los dispositivos: móviles, tablets y computadoras.",
    },
    {
      question: "¿Ofrecen mantenimiento después del desarrollo?",
      answer:
        "Sí, ofrecemos planes de mantenimiento y soporte técnico continuo para mantener tu sitio web actualizado y funcionando correctamente.",
    },
  ];

  return (
    <section
      className="py-16 bg-black relative overflow-hidden -mt-5 w-screen"
      style={{
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
        width: "100vw",
      }}
    >
      {/* Difumiado superior para transición desde Testimonios */}
      <div className="absolute -top-1 left-0 right-0 h-32 bg-gradient-to-t from-transparent via-black/50 to-black pointer-events-none z-10"></div>

      {/* Fondo con gradiente y elementos animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#20A366]/10 rounded-full blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#20A366]/10 rounded-full blur-3xl animate-pulse -bottom-48 -right-48"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 relative z-20">
        <div
          className="md:w-1/2 flex justify-center items-center hidden md:block"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-[#20A366]/20 rounded-lg transition-all duration-300 group-hover:bg-transparent"></div>
            <img
              src={faqImage}
              alt="Desarrollo web"
              className="rounded-lg shadow-2xl w-full transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 opacity-80"
            />
            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#20A366]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </div>

        <div className="md:w-1/2" data-aos="fade-left" data-aos-duration="1200">
          <h2
            className="text-white text-4xl font-light mb-12 transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-white/10 hover:border-[#20A366]/30"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#20A366]/10 transition-all duration-300"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <h3 className="text-white font-medium text-lg group-hover:text-[#20A366]">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 text-[#20A366] ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-48 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Difuminado inferior para transición hacia la siguiente sección */}
      <div className="absolute -bottom-1 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-10"></div>
    </section>
  );
};

export default FAQSection;
