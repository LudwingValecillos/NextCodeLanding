import React, { useState, useEffect } from "react";
import {
  generateProgressiveImageVersions,
  preloadImage,
  createBlurPlaceholder,
} from "../utils/imageOptimizer";


const ArticleContent = ({ article, htmlContent }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showHighQuality, setShowHighQuality] = useState(false);
  const [imageVersions, setImageVersions] = useState(null);

  // Generar versiones de la imagen al montar el componente
  useEffect(() => {
    if (article?.image) {
      const versions = generateProgressiveImageVersions(article.image);
      setImageVersions(versions);

      // Precargar la versión pequeña inmediatamente
      Promise.all([preloadImage(versions.tiny), preloadImage(versions.small)])
        .then(() => {
          setImageLoaded(true);
          // Precargar la versión grande después de que las pequeñas estén listas
          return preloadImage(versions.large);
        })
        .then(() => setShowHighQuality(true))
        .catch(console.error);
    }
  }, [article?.image]);

  if (!imageVersions) {
    return (
      <div className="relative w-full h-[400px] bg-gray-800 animate-pulse rounded-xl" />
    );
  }

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-xl">
        {/* Placeholder con efecto de blur */}
        {!imageLoaded && (
          <img
            src={createBlurPlaceholder(article.image)}
            alt=""
            className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
            loading="eager"
            fetchpriority="high"
            width="100%"
            height="100%"
            decoding="async"
            style={{ aspectRatio: "16/9" }}
          />
        )}

        {/* Imagen de baja calidad */}
        {imageLoaded && !showHighQuality && (
          <img
            src={imageVersions.small}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
            width="100%"
            height="100%"
            decoding="async"
            style={{ aspectRatio: "16/9" }}
          />
        )}

        {/* Imagen de alta calidad */}
        {showHighQuality && (
          <img
            src={imageVersions.large}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
            width="100%"
            height="100%"
            decoding="async"
            style={{ aspectRatio: "16/9" }}
          />
        )}
      </div>

      {/* Contenido del artículo */}
      <div className="mt-8 prose prose-invert max-w-none min-h-[200px]">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
};

export default ArticleContent;
