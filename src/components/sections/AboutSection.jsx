import React from "react";
import {
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import aboutImage1 from "../../assets/images/nvr.webp";
import aboutImage2 from "../../assets/images/nvr.webp";
import aboutImage from "../../assets/images/nvr.webp";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#20A366]/10 rounded-full blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-[#20A366]/10 rounded-full blur-3xl animate-pulse -bottom-48 -right-48"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Title and Description */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl lg:text-3xl font-bold text-white mb-3"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Desarrollo web profesional y eficiente
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto bg-[#20A366] rounded-lg p-4 mb-8 transform transition-all duration-300 hover:shadow-lg hover:shadow-[#20A366]/30"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-white text-center lg:text-xl">
              Creamos sitios web modernos y funcionales con las últimas
              tecnologías, garantizando un servicio profesional y eficiente.
              Ofrecemos diferentes planes según tus necesidades y presupuesto.
            </p>
          </motion.div>
        </motion.div>

        {/* First Feature: Technology */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row mb-8 max-w-5xl mx-auto"
        >
          {/* Image */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="w-full md:w-1/2 md:pr-6 mb-4 md:mb-0"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="rounded-lg overflow-hidden shadow-md relative">
              <img
                src={aboutImage1}
                alt="Tecnología Web"
                className="w-full object-cover"
                style={{ height: "280px" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#20A366] text-white text-center py-2 text-sm">
                Tecnología Moderna
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            className="w-full md:w-1/2 flex flex-col justify-center lg:text-2xl"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl lg:text-2xl font-semibold text-[#20A366] mb-4"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Tecnología de Vanguardia
            </motion.h3>

            <motion.ul variants={containerVariants} className="space-y-2">
              {[
                "Diseño responsivo moderno",
                "Optimización SEO avanzada",
                "Tecnologías actuales",
                "Rendimiento optimizado",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center text-white group"
                  data-aos="fade-left"
                  data-aos-delay={100 + index * 100}
                >
                  <ShieldCheckIcon className="w-5 h-5 mr-3 text-[#20A366] flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                  <span className="group-hover:text-[#20A366] transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Second Feature: Service */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse mb-8 max-w-5xl mx-auto lg:text-2xl"
        >
          {/* Image */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="w-full md:w-1/2 md:pl-6 mb-4 md:mb-0"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="rounded-lg overflow-hidden shadow-md relative">
              <img
                src={aboutImage2}
                alt="Equipo de Desarrollo"
                className="w-full object-cover"
                style={{ height: "280px" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#20A366] text-white text-center py-2 text-sm">
                Equipo Profesional
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            className="w-full md:w-1/2 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl lg:text-2xl font-semibold text-[#20A366] mb-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Servicio Profesional
            </motion.h3>

            <motion.ul variants={containerVariants} className="space-y-2">
              {[
                "Desarrollo personalizado",
                "Soporte técnico continuo",
                "Mantenimiento web regular",
                "Respuesta rápida",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: -10 }}
                  className="flex items-center text-white group"
                  data-aos="fade-right"
                  data-aos-delay={100 + index * 100}
                >
                  <SparklesIcon className="w-5 h-5 mr-3 text-[#20A366] flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                  <span className="group-hover:text-[#20A366] transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 bg-gray-800 rounded-lg p-4 shadow-md max-w-4xl mx-auto mt-8"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          {[
            {
              icon: <UserGroupIcon className="w-6 h-6 text-[#20A366]" />,
              value: "+500",
              label: "Proyectos",
              delay: 100,
            },
            {
              icon: <ClockIcon className="w-6 h-6 text-[#20A366]" />,
              value: "8 Años",
              label: "Experiencia",
              delay: 200,
            },
            {
              icon: <ShieldCheckIcon className="w-6 h-6 text-[#20A366]" />,
              value: "100%",
              label: "Satisfacción",
              delay: 300,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statsVariants}
              whileHover="hover"
              className="flex items-center gap-3 group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={stat.delay}
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-sm lg:text-base font-bold text-white group-hover:text-[#20A366] transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-xs lg:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#20A366] text-white rounded-lg text-lg font-semibold
            transform transition-all duration-300 hover:shadow-lg hover:shadow-[#20A366]/30
            flex items-center justify-center gap-2 group"
            onClick={() => {
              const contactoDiv = document.getElementById("contacto");
              contactoDiv.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Contáctanos</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
