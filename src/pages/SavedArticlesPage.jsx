import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { getArticleById } from "../services/articleService";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const SavedArticlesPage = () => {
  const [savedArticles, setSavedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadSavedArticles = async () => {
      try {
        const savedIds = JSON.parse(
          localStorage.getItem("savedArticles") || "[]"
        );
        const articles = await Promise.all(
          savedIds.map((id) => getArticleById(id))
        );
        setSavedArticles(articles.filter(Boolean));
      } catch (error) {
        console.error("Error loading saved articles:", error);
        toast.error("Error al cargar los artículos guardados");
      } finally {
        setLoading(false);
      }
    };

    loadSavedArticles();
  }, []);

  const handleRemoveArticle = (articleId) => {
    const updatedSavedArticles = savedArticles.filter(
      (article) => article.id !== articleId
    );
    setSavedArticles(updatedSavedArticles);
    localStorage.setItem(
      "savedArticles",
      JSON.stringify(updatedSavedArticles.map((article) => article.id))
    );
    toast.success("Artículo eliminado de guardados");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#20A366]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <Helmet>
        <title>Artículos Guardados - Security Blog</title>
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Artículos Guardados</h1>

        {savedArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              No tienes artículos guardados aún
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedArticles.map((article) => (
              <div
                key={article.id}
                className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                  <p className="text-gray-400 mb-4">
                    {article.content.substring(0, 100)}...
                  </p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => navigate(`/article/${article.id}`)}
                      className="text-[#20A366] hover:text-[#1a8a55]"
                    >
                      Leer más
                    </button>
                    <button
                      onClick={() => handleRemoveArticle(article.id)}
                      className="text-red-500 hover:text-red-600"
                      title="Eliminar de guardados"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedArticlesPage;
