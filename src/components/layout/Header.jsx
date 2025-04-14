import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/articles";
  };

  return (
    <header className="bg-gray-900 text-white py-4 relative">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold" onClick={closeMobileMenu}>
            <span className="text-[#20A366]">Next</span>Code
          </Link>

          {/* Desktop Menu */}
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
            {localStorage.getItem("isAuthenticated") === "true" ? (
              <>
                <Link
                  to="/create-article"
                  className="hover:text-[#20A366] transition-colors"
                >
                  Crear Artículo
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-[#20A366] p-1 rounded-md hover:text-black transition-colors"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : null}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50" 
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden"
              onClick={closeMobileMenu}
            >
              <div 
                className="fixed top-0 right-0 w-64 h-full bg-gray-900 p-6 transform transition-transform duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col space-y-4 mt-16">
                  <Link
                    to="/articles"
                    className={`text-xl hover:text-[#20A366] transition-colors ${
                      location.pathname === "/articles" ? "text-[#20A366]" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Artículos
                  </Link>
                  <Link 
                    to="/" 
                    className="text-xl hover:text-[#20A366] transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Servicios
                  </Link>
                  <Link
                    to="/#contact"
                    className="text-xl hover:text-[#20A366] transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Contacto
                  </Link>
                  {localStorage.getItem("isAuthenticated") === "true" && (
                    <>
                      <Link
                        to="/create-article"
                        className="text-xl hover:text-[#20A366] transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Crear Artículo
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="text-xl bg-[#20A366] p-2 rounded-md hover:text-black transition-colors text-left"
                      >
                        Cerrar Sesión
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
