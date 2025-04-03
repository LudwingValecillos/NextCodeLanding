import React from "react";
import {
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: DevicePhoneMobileIcon,
      title: "Se adapta a todos los dispositivos",
      description:
        "Tu web se va a ver impecable en cualquier pantalla, ya sea en el celu, la compu o la tablet. Nada de desajustes raros ni diseños desprolijos.",
    },
    {
      icon: RocketLaunchIcon,
      title: "Velocidad que vuela",
      description:
        "Nada peor que una web lenta. Optimizamos todo al máximo para que tu sitio cargue rapidísimo y no pierdas visitantes por la espera.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Máxima seguridad",
      description:
        "Tu sitio protegido contra cualquier amenaza digital. Tranquilidad total para vos y para tus usuarios.",
    },
    {
      icon: ChartBarIcon,
      title: "Tu web en lo más alto de Google",
      description:
        "Te ayudamos a posicionarte bien arriba en los resultados de búsqueda. Más visibilidad, más clientes, más éxito.",
    },
    {
      icon: CursorArrowRaysIcon,
      title: "Fácil y accesible para todos",
      description:
        "Diseñamos tu web para que cualquiera pueda navegarla sin complicaciones. Intuitiva, clara y sin enredos.",
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Siempre actualizada",
      description:
        "Nos encargamos de que tu sitio esté al día y funcione perfecto. Vos enfocate en tu negocio, nosotros en que tu web esté impecable.",
    },
  ];

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative">
      <div className="py-16 bg-gradient-to-b from-black to-gray-900 mb-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            ¿Por qué{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20A366] to-blue-400">
              elegirnos
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto text-center">
            Ofrecemos soluciones web completas que se adaptan a tus necesidades
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10
                         hover:bg-white/10 hover:border-white/20 transition-all duration-300
                         group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#20A366]/20 rounded-lg group-hover:bg-[#20A366]/30 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-[#20A366]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#20A366] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center" data-aos="fade-up">
            <p className="text-gray-300 mb-4">
              ¡Te invitamos a que nos contactes!
            </p>
            <button
              className="bg-[#20A366] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a8552] transition-all duration-300 group relative overflow-hidden"
              onClick={() => {
                const contactoDiv = document.getElementById("contacto");
                contactoDiv.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative z-10">¡Quiero mi web!</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
