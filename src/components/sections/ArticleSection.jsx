import React from "react";
import { Link } from "react-router-dom";

const ArticleSection = ({ articles }) => {
  return (
    <section className="mb-8 md:mb-12 min-h-[400px]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
          Artículos Recientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-gray-800 p-3 md:p-4 rounded-lg text-center min-h-[300px] flex flex-col"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="100%"
                  height="192"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {article.title}
              </h3>

              <p className="text-gray-400 mb-4 flex-grow">{article.excerpt}</p>

              <Link
                to={`/article/${article.id}`}
                className="inline-block bg-[#20A366] text-white px-4 py-2 rounded-lg hover:bg-[#1a8a55] transition-colors"
              >
                Leer más
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
