// API Configuration
const API_URL = "https://api.jsonbin.io/v3/b/67fa16248a456b796687b61e";
const headers = {
  "X-Master-Key":
    "$2a$10$CWKBiU.yDWk3Urc0sN59/eBhcLdantq/kA9/J5fJr6RVcIUPKUo4G",
  "X-Access-Key":
    "$2a$10$awiDDQx/.7dYK5zuPe03FuJ.4GvJHHC0MxIrJjEZxD41C0x70amH.",
};

// Temporary test data
const testArticles = [
  {
    id: 1,
    title: "Seguridad en Aplicaciones Web Modernas",
    content:
      "Las aplicaciones web modernas enfrentan numerosos desafíos de seguridad. En este artículo exploramos las mejores prácticas y herramientas para mantener tus aplicaciones seguras.",
    author: "Ludwing Valecillos",
    date: "2024-03-15",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Seguridad Web",
    tags: ["OWASP", "Web Security", "Best Practices"],
    isFeatured: true,
    readTime: "8 min",
    excerpt:
      "Descubre las mejores prácticas para asegurar tus aplicaciones web modernas contra amenazas comunes y avanzadas.",
  },
  {
    id: 2,
    title: "Mejores Prácticas de Ciberseguridad",
    content:
      "La ciberseguridad es fundamental en el mundo digital actual. Descubre las estrategias más efectivas para proteger tu organización contra amenazas cibernéticas.",
    author: "Ludwing Valecillos",
    date: "2024-03-10",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Ciberseguridad",
    tags: ["Cybersecurity", "Threats", "Protection"],
    isFeatured: false,
    readTime: "10 min",
    excerpt:
      "Una guía completa sobre las mejores prácticas de ciberseguridad para empresas y organizaciones.",
  },
];

// Cache for articles
let cachedArticles = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Fetch all articles from JSONBin
export const fetchArticles = async () => {
  try {
    // Use cached articles if available and not expired
    const now = Date.now();
    if (cachedArticles && now - lastFetchTime < CACHE_DURATION) {
      return cachedArticles;
    }

    // If we're getting rate limited, use cached data
    if (lastFetchTime && now - lastFetchTime < 60000) {
      // 1 minute cooldown
      return cachedArticles || testArticles;
    }

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      mode: "cors",
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.warn("Rate limit exceeded, using cached data");
        lastFetchTime = now;
        return cachedArticles || testArticles;
      }
      console.warn("API request failed, using test data");
      return testArticles;
    }

    const data = await response.json();

    // Check if the response has the expected structure
    if (!data.record || !data.record.securityArticles) {
      console.warn("Invalid API response structure, using test data");
      return testArticles;
    }

    cachedArticles = data.record.securityArticles;
    lastFetchTime = now;
    return cachedArticles;
  } catch (error) {
    console.warn("Failed to fetch articles, using test data:", error);
    return cachedArticles || testArticles;
  }
};

// Update articles in JSONBin
export const updateArticles = async (articles) => {
  try {
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ securityArticles: articles }),
    });

    if (!response.ok) {
      throw new Error(`Error updating articles: ${response.statusText}`);
    }

    // Update cache
    cachedArticles = articles;
    return true;
  } catch (error) {
    console.error("Failed to update articles:", error);
    return false;
  }
};

// Get article by ID
export const getArticleById = async (id) => {
  const articles = await fetchArticles();
  return articles.find((article) => article.id === parseInt(id)) || null;
};

// Get latest articles
export const getLatestArticles = async (limit = 3) => {
  const articles = await fetchArticles();
  return [...articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

// Get random articles
export const getRandomArticles = async (limit = 5, excludeId = null) => {
  const articles = await fetchArticles();
  const filteredArticles = excludeId
    ? articles.filter((article) => article.id !== excludeId)
    : articles;

  const shuffled = [...filteredArticles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
};

// Get articles by category
export const getArticlesByCategory = async (category) => {
  const articles = await fetchArticles();
  return articles.filter((article) => article.category === category);
};

// Get featured articles
export const getFeaturedArticles = async () => {
  const articles = await fetchArticles();
  return articles.filter((article) => article.isFeatured);
};

// Create new article
export const createArticle = async (article) => {
  try {
    const articles = await fetchArticles();
    const newArticle = {
      ...article,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      isFeatured: false,
      readTime: "5 min",
      excerpt: article.content.substring(0, 150) + "...",
    };

    const updatedArticles = [...articles, newArticle];

    // Update JSONBin
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ securityArticles: updatedArticles }),
    });

    if (!response.ok) {
      throw new Error(`Error creating article: ${response.statusText}`);
    }

    // Update cache
    cachedArticles = updatedArticles;
    return newArticle;
  } catch (error) {
    console.error("Failed to create article:", error);
    throw error;
  }
};

// Update existing article
export const updateArticle = async (id, updatedData) => {
  const articles = await fetchArticles();
  const index = articles.findIndex((article) => article.id === parseInt(id));

  if (index === -1) return null;

  const updatedArticle = {
    ...articles[index],
    ...updatedData,
  };

  const updatedArticles = [
    ...articles.slice(0, index),
    updatedArticle,
    ...articles.slice(index + 1),
  ];

  const success = await updateArticles(updatedArticles);

  if (success) {
    return updatedArticle;
  }
  return null;
};

// Delete article
export const deleteArticle = async (id) => {
  const articles = await fetchArticles();
  const updatedArticles = articles.filter(
    (article) => article.id !== parseInt(id)
  );

  const success = await updateArticles(updatedArticles);
  return success;
};

// Export all functions
const articlesAPI = {
  fetchArticles,
  getArticleById,
  getLatestArticles,
  getRandomArticles,
  getArticlesByCategory,
  getFeaturedArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};

export default articlesAPI;
