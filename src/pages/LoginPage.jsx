import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulación de autenticación
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (formData.email === "admin" && formData.password === "admin") {
        localStorage.setItem("isAuthenticated", "true");
        toast.success("Inicio de sesión exitoso");

        // Redirigir a la página anterior o al dashboard
        const from = location.state?.from?.pathname || "/create-article";
        navigate(from);
      } else {
        throw new Error("Credenciales inválidas");
      }
    } catch (err) {
      toast.error("Email o contraseña incorrectos");
    } finally {
      setLoading(false);
    }
    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión | NextCode Security</title>
        <meta name="description" content="Inicia sesión en NextCode Security" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Iniciar Sesión
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Ingresa tus credenciales para acceder
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 rounded-t-md focus:outline-none focus:ring-[#20A366] focus:border-[#20A366] focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 rounded-b-md focus:outline-none focus:ring-[#20A366] focus:border-[#20A366] focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#20A366] hover:bg-[#1a8a55] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#20A366] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
