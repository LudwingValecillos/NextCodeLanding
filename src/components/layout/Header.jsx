import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-[#20A366]">Next</span>Code
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/articles"
              className={`hover:text-[#20A366] transition-colors ${
                location.pathname === "/articles" ? "text-[#20A366]" : ""
              }`}
            >
              Artículos
            </Link>
            <Link to="/" className="hover:text-[#20A366] transition-colors">
              Servicios
            </Link>
            <Link
              to="/#contact"
              className="hover:text-[#20A366] transition-colors"
            >
              Contacto
            </Link>
            {localStorage.getItem("isAuthenticated") == "true" ? 
            <>
              <Link
                to="/create-article"
                className="hover:text-[#20A366] transition-colors"
              >
                Crear Artículo
              </Link>
              <button onClick={() => {
                localStorage.removeItem("isAuthenticated");
                window.location.href = "/articles";
              }} className="bg-[#20A366] p-1 rounded-md hover:text-black transition-colors">
                Cerrar Sesión
              </button>
              </>
            : "" }
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
