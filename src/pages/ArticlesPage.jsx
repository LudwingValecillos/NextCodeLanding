import React, { useState } from "react";
import { securityArticles } from "../articles/articles.js";
import ArticleCard from "../components/ArticleCard";

const ArticlesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Calcular artículos para la página actual
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = securityArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Calcular número total de páginas
  const totalPages = Math.ceil(securityArticles.length / articlesPerPage);

  // Generar números de página
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Artículos de Seguridad
        </h1>
        <p className="text-xl text-gray-300 text-center mb-12">
          Explora nuestros artículos más recientes sobre ciberseguridad
        </p>

        {/* Grid de Artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Paginación */}
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white disabled:opacity-50"
          >
            Anterior
          </button>

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === number
                  ? "bg-[#20A366] text-white"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
