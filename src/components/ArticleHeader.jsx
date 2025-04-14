import React from "react";

const ArticleHeader = ({ article, onBack }) => {
  return (
    <header className="mb-8 md:mb-12">
      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-6">
        <span className="px-4 py-2 bg-[#20A366] text-white rounded-full text-sm w-fit">
          {article.category}
        </span>
        <time dateTime={article.date} className="text-gray-400">
          {new Date(article.date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
      <h1
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
        style={{
          fontDisplay: "swap",
          fontFeatureSettings: '"liga" 1, "calt" 1',
          fontVariationSettings: '"opsz" 32',
          letterSpacing: "-0.025em",
          lineHeight: "1.1",
        }}
      >
        {article.title}
      </h1>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-700 flex items-center justify-center">
          <span className="text-white font-bold">
            {article.author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-white font-medium">{article.author}</p>
          <p className="text-gray-400 text-sm">Autor</p>
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;
