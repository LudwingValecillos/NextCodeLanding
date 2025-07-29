/**
 * Devuelve la URL de la imagen sin modificar. La optimización de imágenes locales
 * se debe hacer manualmente o con una herramienta de build.
 * @param {string} url - URL original de la imagen
 * @returns {string} URL sin modificar
 */
export const optimizeImage = (url, options = {}) => {
  return url;
};

/**
 * Genera la misma URL para todas las versiones, ya que no se puede
 * generar diferentes tamaños dinámicamente para imágenes locales.
 * @param {string} url - URL original de la imagen
 * @returns {Object} URLs para diferentes etapas
 */
export const generateProgressiveImageVersions = (url) => {
  if (!url) return null;
  return {
    tiny: url,
    small: url,
    large: url,
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
 * Devuelve la misma URL para el placeholder.
 * @param {string} url - URL de la imagen
 * @returns {string} URL sin modificar
 */
export const createBlurPlaceholder = (url) => {
  return url;
};