import React from "react";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";

const ArticleFooter = ({ onBack, onShare, onBookmark, isSaved }) => {
  return (
    <footer className="min-h-[80px] bg-gray-900 text-white py-8 md:py-5 border-t border-gray-700 rounded-b-3xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm md:text-base min-w-[100px]"
          >
            <FaArrowLeft />
            <span>Volver</span>
          </button>
          <div className="flex items-center space-x-4 min-w-[100px] justify-end">
            <button
              onClick={onShare}
              className="text-gray-400 hover:text-white w-8 h-8 flex items-center justify-center"
              title="Compartir"
              aria-label="Compartir artículo"
            >
              <FaShare size={18} />
            </button>
            <button
              onClick={onBookmark}
              className={`text-gray-400 hover:text-white w-8 h-8 flex items-center justify-center ${
                isSaved ? "text-[#20A366]" : ""
              }`}
              title={isSaved ? "Eliminar de guardados" : "Guardar artículo"}
              aria-label={
                isSaved ? "Eliminar de guardados" : "Guardar artículo"
              }
            >
              <FaBookmark size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ArticleFooter;
