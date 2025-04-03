import React from "react";
import {
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const FeaturesSection = () => {
  const features = [
    {
      icon: DevicePhoneMobileIcon,
      title: "Se ve genial en todos lados",
      description:
        "Tu web va a verse increíble tanto en el celu como en la compu. ¡Nada de diseños rotos o desprolijos!",
    },
    {
      icon: RocketLaunchIcon,
      title: "Rapidez ante todo",
      description:
        "¿Web lenta? ¡Ni en pedo! Optimizamos todo para que tu sitio vuele y tus visitantes no se desesperen esperando.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Seguridad a full",
      description:
        "Dormí tranquilo, che. Tu sitio está protegido con la mejor seguridad contra cualquier amenaza digital.",
    },
    {
      icon: ChartBarIcon,
      title: "Primeros en Google",
      description:
        "Te ayudamos a aparecer en los primeros resultados de búsqueda. ¡Chau a estar en la página 20 de Google!",
    },
    {
      icon: CursorArrowRaysIcon,
      title: "Fácil de usar",
      description:
        "Hacemos que tu web sea tan simple de navegar que hasta tu abuela podría usarla sin drama.",
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Siempre al día",
      description:
        "Nos encargamos de mantener todo actualizado y funcionando de 10. Vos concentrate en tu negocio, que del sitio nos ocupamos nosotros.",
    },
  ];

  return (
    <section className="relative">
      <div className="py-16 bg-gradient-to-b from-black to-gray-900 mb-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-2xl text-gray-100 max-w-2xl mx-auto">
              Mirá todo lo que podemos hacer por tu negocio. ¡La web que siempre
              quisiste está a un click!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(32,163,102,0.3)] border border-white/20"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#20A366]/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#20A366]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/15 to-black pointer-events-none"></div>
    </section>
  );
};

export default FeaturesSection;
