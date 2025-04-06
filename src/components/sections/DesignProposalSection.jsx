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
            Diseñamos tu sitio web sin costo inicial
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">Diseño Gratuito</h3>
              <p className="text-gray-300">
                Creamos una propuesta de diseño personalizada para tu sitio web
                sin ningún compromiso de pago inicial.
              </p>
            </div>

            <div
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="text-xl font-semibold mb-3">Revisión y Ajustes</h3>
              <p className="text-gray-300">
                Trabajamos contigo para perfeccionar el diseño hasta que estés
                completamente satisfecho.
              </p>
            </div>

            <div
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-3">Pago Seguro</h3>
              <p className="text-gray-300">
                Solo pagas cuando estés completamente satisfecho con el diseño
                propuesto.
              </p>
            </div>
          </div>

          <div className="mt-12" data-aos="fade-up" data-aos-delay="400">
            <p className="text-xl mb-8 text-gray-300">
              "No arriesgues tu inversión. Primero vemos si te gusta nuestro
              trabajo, luego decides si continuamos."
            </p>
            <a
              href="https://wa.me/5491173680952?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20el%20proceso%20de%20diseño%20gratuito"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Diseño Gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProposalSection;
