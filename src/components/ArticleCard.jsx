import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { marked } from "marked";
import { optimizeImage } from "../utils/imageOptimizer";


const ArticleCard = ({ article }) => {
  // Memoizar el texto plano del contenido
  const plainText = useMemo(() => {
    if (!article.content) return "";

    try {
      let htmlContent = article.content;
      if (
        article.content.includes("#") ||
        article.content.includes("*") ||
        article.content.includes("[")
      ) {
        htmlContent = marked.parse(article.content);
      }

      const temp = document.createElement("div");
      temp.innerHTML = htmlContent;
      let text = temp.textContent || temp.innerText || "";
      text = text.replace(/\s+/g, " ").trim();
      return text.length > 150 ? text.substring(0, 150) + "..." : text;
    } catch (error) {
      console.error("Error processing content:", error);
      return "Error al procesar el contenido";
    }
  }, [article.content]);

  // Memoizar la fecha formateada
  const formattedDate = useMemo(() => {
    return new Date(article.date).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [article.date]);

  // Memoizar las URLs de las imágenes optimizadas
  const optimizedImage = useMemo(() => {
    return optimizeImage(article.image, {
      width: 400,
      quality: 50,
      webp: true,
    });
  }, [article.image]);

  const fallbackImage = useMemo(() => {
    return optimizeImage(
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      { width: 400, quality: 50, webp: true }
    );
  }, []);

  return (
    <article className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link to={`/article/${article.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            alt={article.title}
            src={optimizedImage}
            className="h-full w-full object-cover"
            width="100%"
            height="192"
            loading="lazy"
            decoding="async"
            style={{ aspectRatio: "16/9" }}
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70" />
        </div>

        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <time
              dateTime={article.date}
              className="text-xs sm:text-sm text-gray-400"
            >
              {formattedDate}
            </time>
            <span className="px-2 sm:px-3 py-1 text-xs bg-[#20A366]/20 text-[#20A366] rounded-full">
              {article.category}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 line-clamp-2">
            {article.title}
          </h3>

          <div className="mb-3 sm:mb-4">
            <div className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3">
              {plainText}
            </div>
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-medium">
                  {article.author.charAt(0)}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-gray-400">
                {article.author}
              </span>
            </div>
            <span className="text-[#20A366] text-xs sm:text-sm">
              Leer más →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default React.memo(ArticleCard);
