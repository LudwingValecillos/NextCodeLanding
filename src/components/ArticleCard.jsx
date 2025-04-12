import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg dark:shadow-gray-700/25">
      <img
        alt={article.title}
        src={article.image}
        className="h-56 w-full object-cover"
        onError={(e) => {
          e.target.src =
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
        }}
      />

      <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
        <time
          dateTime={article.date}
          className="block text-xs text-gray-500 dark:text-gray-400"
        >
          {article.date}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
            {article.title}
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          {article.content}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
