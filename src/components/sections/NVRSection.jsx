import React from "react";
import nvrImage from "../../assets/images/presenciadigital.png";
import nvrImage2 from "../../assets/images/presenciadigital.png";
import { motion } from "framer-motion";

const NVRSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-blue-700/10 rounded-full blur-3xl animate-pulse -bottom-48 -right-48"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido del lado izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-5xl font-light text-white mb-4 hover:text-blue-400 transition-colors duration-300">
                ¿Por qué elegir nuestro servicio de desarrollo web?
              </h2>
              <p className="text-white lg:text-xl leading-relaxed hover:text-blue-200 transition-colors duration-300">
                Ofrecemos soluciones web modernas y eficientes utilizando las
                últimas tecnologías. Nuestro equipo de desarrolladores expertos
                crea sitios web personalizados que se adaptan perfectamente a
                las necesidades de tu negocio.
              </p>
            </motion.div>

            {/* Ventajas del desarrollo web */}
            <motion.div
              className="bg-blue-900/30 rounded-2xl p-8 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 cursor-pointer border border-blue-500/20"
              whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            >
              <h3 className="text-3xl font-light text-white mb-8 hover:text-blue-300 transition-colors duration-300">
                Nuestras Ventajas
              </h3>
              <ul className="space-y-4">
                {[
                  "Diseño moderno y responsivo",
                  "Optimización SEO para mejor visibilidad",
                  "Rendimiento y velocidad optimizados",
                  "Soporte técnico continuo y mantenimiento",
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-blue-400 text-2xl group-hover:text-blue-300 transform group-hover:scale-125 transition-all duration-300">
                      ✓
                    </span>
                    <span className="text-white lg:text-lg group-hover:text-blue-200 transition-colors duration-300">
                      {text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Para quién es recomendable */}
            <motion.div
              className="bg-blue-900/20 rounded-2xl p-8 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 cursor-pointer border border-blue-500/20"
              whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-2xl lg:text-3xl font-light text-white mb-4 hover:text-blue-300 transition-colors duration-300">
                ¿Para quién es ideal nuestro servicio?
              </h3>
              <p className="text-white text-xl hover:text-blue-200 transition-colors duration-300">
                Perfecto para empresas, emprendedores y profesionales que buscan
                establecer una presencia web sólida y profesional.
              </p>
            </motion.div>
          </motion.div>

          {/* Imagen del lado derecho */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundImage: `url(${nvrImage2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <motion.img
                src={nvrImage}
                alt="Desarrollo Web"
                className="w-full h-auto object-cover rounded-2xl bg-black/80"
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
              />

              {/* Indicadores tecnológicos animados */}
              <motion.div
                className="absolute top-4 right-4 flex items-center space-x-3"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-white bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  Diseño Responsivo
                </span>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 flex items-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-white bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  Optimización SEO
                </span>
              </motion.div>

              {/* Nuevos indicadores */}
              <motion.div
                className="absolute top-4 left-4 flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <span className="w-3 h-3 bg-purple-400 rounded-full animate-ping"></span>
                <span className="text-sm font-medium text-white bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  Soporte 24/7
                </span>
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4 flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-white bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  Tecnologías Modernas
                </span>
              </motion.div>
            </motion.div>

            {/* Efectos decorativos */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NVRSection;
