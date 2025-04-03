import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../../assets/images/fondohero.avif";
import image2 from "../../assets/images/2.webp";
import logo from "../../assets/images/sinfondoaa.png";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-0 md:py-0">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          maxWidth: "100vw",
          overflow: "hidden",
        }}
      />

      {/* Gradient Overlays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"
        style={{ maxWidth: "100vw", overflow: "hidden" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80"
        style={{ maxWidth: "100vw", overflow: "hidden" }}
      />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px] animate-subtle-zoom"
        ></motion.div>
      </div>

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10 w-full max-w-full pt-0"
      >
        <div className="flex justify-center items-center lg:justify-normal mt-0">
          <img
            src={logo}
            alt=""
            data-aos="fade-up"
            className="w-64 sm:w-80 max-w-full h-auto"
            style={{ maxWidth: "100%" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={itemVariants}
            className="text-white order-2 lg:order-1"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <p
                className="text-white"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                Desarrollo Web{" "}
              </p>
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#20A366] to-blue-400"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                Profesional
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              Creamos sitios web modernos y funcionales que impulsan tu negocio
              al siguiente nivel.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#20A366] text-white rounded-lg text-lg font-semibold
                transform transition-all duration-300 hover:shadow-lg hover:shadow-[#20A366]/30
                flex items-center justify-center gap-2 group relative overflow-hidden"
                onClick={() => {
                  const contactoDiv = document.getElementById("contacto");
                  contactoDiv.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="relative z-10">Comenzar Proyecto</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 border-2 border-white text-black hover:text-white rounded-lg text-lg font-semibold
                transform transition-all duration-300 hover:bg-white/10
                flex items-center justify-center gap-2 group"
                onClick={() => {
                  const contactoDiv = document.getElementById("servicios");
                  contactoDiv.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Ver planes</span>
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

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 mb-5 font-bold"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {[
                { icon: "💻", text: "Diseño Responsivo" },
                { icon: "🚀", text: "Rendimiento Óptimo" },
                { icon: "🎨", text: "UI/UX Moderno" },
                { icon: "🔍", text: "SEO Optimizado" },
                { icon: "📱", text: "Apps Web" },
                { icon: "🤖", text: "Tecnologías Actuales" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-lg
                    transform transition-all duration-300 hover:bg-white/10"
                  data-aos="fade-up"
                  data-aos-delay={600 + index * 100}
                >
                  <span className="text-xl sm:text-2xl">{feature.icon}</span>
                  <span className="text-sm sm:text-base text-white/90">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Animation */}
          <motion.div
            variants={itemVariants}
            className="relative order-1 lg:order-2 mb-8 lg:mb-0 hidden lg:block"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={image2}
                alt="Seguridad Inteligente"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent " />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/70 text-sm">Más información</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <svg
              className="w-6 h-6 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;

// Necesitarás agregar estos estilos en tu archivo CSS global
/*
@keyframes subtle-zoom {
  0% { transform: scale(1.05); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1.05); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-subtle-zoom {
  animation: subtle-zoom 15s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

.text-shadow-glow {
  text-shadow: 0 0 15px rgba(255,255,255,0.5);
}
*/
