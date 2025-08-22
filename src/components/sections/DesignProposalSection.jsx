import React from "react";

const DesignProposalSection = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden"
      id="proceso-diseno"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-8"
            data-aos="fade-down"
          >
            Diseñamos tu sitio web con pago flexible
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">50% Inicial</h3>
              <p className="text-gray-300">
                Pagas solo el 50% para iniciar el proyecto y comenzamos a trabajar
                inmediatamente en tu sitio web.
              </p>
            </div>

            <div
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="text-xl font-semibold mb-3">Desarrollo y Revisión</h3>
              <p className="text-gray-300">
                Desarrollamos tu sitio web y trabajamos contigo para perfeccionar
                cada detalle hasta que estés completamente satisfecho.
              </p>
            </div>

            <div
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-3">50% al Finalizar</h3>
              <p className="text-gray-300">
                Pagas el 50% restante solo cuando el proyecto esté completamente
                terminado y estés satisfecho con el resultado final.
              </p>
            </div>
          </div>

          <div className="mt-12" data-aos="fade-up" data-aos-delay="400">
            <p className="text-xl mb-8 text-gray-300">
              "Invertimos en tu confianza. Pagas solo el 50% inicial y el resto
              cuando estés completamente satisfecho con el resultado."
            </p>
            <a
              href="https://wa.me/5491173680952?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20el%20proceso%20de%20pago%20flexible%20(50%%20inicial%20y%2050%%20al%20finalizar)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Iniciar Proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProposalSection;
