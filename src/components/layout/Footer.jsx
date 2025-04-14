import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/sinfondoaa.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 min-h-[200px] md:min-h-[300px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="NextCode Security"
                className="h-12 w-auto"
                width="48"
                height="48"
                loading="eager"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Servicios de creacion de sitios web, blogs, tiendas online,
              marketing digital, etc.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">contacto@nextcode.com</li>
              <li className="text-gray-400">+1 234 567 890</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} NextCode Security. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
