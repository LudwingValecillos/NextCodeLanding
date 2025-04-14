/**
 * Optimiza una URL de imagen de Unsplash para mejor rendimiento
 * @param {string} url - URL original de la imagen
 * @param {Object} options - Opciones de optimización
 * @param {number} options.width - Ancho deseado
 * @param {number} options.quality - Calidad (0-100)
 * @param {boolean} options.webp - Convertir a WebP
 * @returns {string} URL optimizada
 */
export const optimizeImage = (url, options = {}) => {
  if (!url) return "";

  const { width = 800, quality = 50, webp = true } = options;

  // If it's already an optimized URL, return as is
  if (url.includes("?w=") || url.includes("&w=")) {
    return url;
  }

  // Add optimization parameters
  const optimizedUrl = new URL(url);
  optimizedUrl.searchParams.set("w", width);
  optimizedUrl.searchParams.set("q", quality);
  if (webp) {
    optimizedUrl.searchParams.set("fm", "webp");
  }

  return optimizedUrl.toString();
};

/**
 * Genera diferentes versiones de una imagen para carga progresiva
 * @param {string} url - URL original de la imagen
 * @returns {Object} URLs optimizadas para diferentes etapas
 */
export const generateProgressiveImageVersions = (url) => {
  if (!url) return null;

  const baseUrl = new URL(url);

  // Versión tiny (muy pequeña para placeholder)
  const tinyUrl = new URL(url);
  tinyUrl.searchParams.set("w", "20");
  tinyUrl.searchParams.set("q", "20");
  tinyUrl.searchParams.set("fm", "webp");

  // Versión small (baja calidad)
  const smallUrl = new URL(url);
  smallUrl.searchParams.set("w", "400");
  smallUrl.searchParams.set("q", "50");
  smallUrl.searchParams.set("fm", "webp");

  // Versión large (alta calidad)
  const largeUrl = new URL(url);
  largeUrl.searchParams.set("w", "1200");
  largeUrl.searchParams.set("q", "80");
  largeUrl.searchParams.set("fm", "webp");

  return {
    tiny: tinyUrl.toString(),
    small: smallUrl.toString(),
    large: largeUrl.toString(),
  };
};

/**
 * Preloads an image and returns a promise
 * @param {string} url - URL de la imagen a precargar
 * @returns {Promise} Promise que se resuelve cuando la imagen está cargada
 */
export const preloadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
};

/**
 * Crea un placeholder de imagen con efecto de blur
 * @param {string} url - URL de la imagen
 * @returns {string} URL del placeholder con efecto de blur
 */
export const createBlurPlaceholder = (url) => {
  if (!url) return "";
  const placeholderUrl = new URL(url);
  placeholderUrl.searchParams.set("w", "20");
  placeholderUrl.searchParams.set("q", "20");
  placeholderUrl.searchParams.set("fm", "webp");
  return placeholderUrl.toString();
};
