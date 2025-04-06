import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { sendEmail } from "../../services/brevoService";
import profile from "../../assets/images/PERFIL.jpg";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await sendEmail(formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      className="py-20 relative overflow-hidden min-h-screen flex items-center"
      id="contacto"
    >
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,163,102,0.1)_1px,transparent_1px)] bg-[length:24px_24px] opacity-20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#20A366]/20 rounded-full blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#20A366]/20 rounded-full blur-3xl animate-pulse -bottom-48 -right-48"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div
            className="text-center mb-12"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contáctanos
            </h2>
            <p className="text-gray-300 text-lg">
              Estamos aquí para hacer realidad tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            

            {/* Form Section */}
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10"
              data-aos="fade-up"
              data-aos-delay="200"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Nombre
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                      focus:ring-2 focus:ring-[#20A366] focus:border-transparent text-white
                      transition-all duration-300 hover:border-white/30"
                      required
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                      focus:ring-2 focus:ring-[#20A366] focus:border-transparent text-white
                      transition-all duration-300 hover:border-white/30"
                      required
                    />
                  </motion.div>
                </div>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Teléfono
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                    focus:ring-2 focus:ring-[#20A366] focus:border-transparent text-white
                    transition-all duration-300 hover:border-white/30"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Mensaje
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                    focus:ring-2 focus:ring-[#20A366] focus:border-transparent text-white
                    transition-all duration-300 hover:border-white/30 resize-none"
                    required
                  ></motion.textarea>
                </motion.div>
                {status.error && (
                  <div className="text-red-500 text-sm">{status.error}</div>
                )}
                {status.success && (
                  <div className="text-green-500 text-sm">
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto
                    contigo pronto.
                  </div>
                )}
                <motion.div
                  className="flex justify-center"
                  variants={itemVariants}
                >
                  <motion.button
                    type="submit"
                    disabled={status.loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status.loading ? "Enviando..." : "Enviar Mensaje"}
                  </motion.button>
                </motion.div>
              </form>

              {/* Instagram Link */}
              <motion.div
                className="mt-8 text-center"
                variants={itemVariants}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a
                  href="https://www.instagram.com/nextcode01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-[#20A366] transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </motion.div>
                  <span className="group-hover:underline">
                    Síguenos en Instagram
                  </span>
                </a>
              </motion.div>
            </motion.div>
            {/* Profile Section */}
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10"
              data-aos="fade-right"
              data-aos-delay="200"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-[#20A366]">
                  <img
                    src={profile}
                    alt="Desarrollador Full Stack"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ludwing Valecillos
                </h3>
                <p className="text-[#20A366] font-semibold mb-4">
                  Desarrollador Full Stack
                </p>
                <p className="text-gray-300 mb-6">
                  Apasionado desarrollador web con experiencia en la creación de
                  aplicaciones modernas y escalables. Especializado en
                  tecnologías frontend y backend, con un enfoque en la
                  experiencia del usuario y el rendimiento. Comprometido con la
                  entrega de soluciones tecnológicas innovadoras que impulsen el
                  éxito de los proyectos.
                </p>
                <a
                  href="https://www.linkedin.com/in/ludwingvalecillos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-[#20A366] transition-all duration-300 group"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="group-hover:underline">
                    Conectar en LinkedIn
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
