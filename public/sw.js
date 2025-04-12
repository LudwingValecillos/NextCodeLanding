const CACHE_NAME = "image-cache-v2";
const IMAGE_CACHE_NAME = "images-v2";
const STATIC_CACHE_NAME = "static-v2";

// URLs de recursos estáticos a precargar
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/fonts/Inter-Bold.woff2",
  "/fonts/Inter-Regular.woff2",
  "/images/placeholder.jpg",
];

// Instalación del Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      caches
        .open(STATIC_CACHE_NAME)
        .then((cache) => cache.addAll(PRECACHE_URLS)),
      caches.open(IMAGE_CACHE_NAME).then((cache) => cache.addAll([])),
    ])
  );
  self.skipWaiting();
});

// Estrategia de caché para imágenes
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Estrategia para imágenes
  if (url.pathname.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i)) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
          // Actualizar caché en segundo plano
          fetch(event.request).then((response) => {
            if (response.ok) {
              cache.put(event.request, response.clone());
            }
          });
          return cachedResponse;
        }

        const response = await fetch(event.request);
        if (response.ok) {
          cache.put(event.request, response.clone());
        }
        return response;
      })
    );
  }

  // Estrategia para recursos estáticos
  else if (PRECACHE_URLS.includes(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});

// Limpiar caché antiguo
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(
            (name) =>
              name !== CACHE_NAME &&
              name !== IMAGE_CACHE_NAME &&
              name !== STATIC_CACHE_NAME
          )
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});
