// Mock data for articles
const mockArticles = [
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
  {
    id: 3,
    title: "Desarrollo Seguro: Guía Completa",
    content:
      "El desarrollo seguro es esencial para crear aplicaciones robustas. Aprende sobre los principios fundamentales y las herramientas necesarias para implementar seguridad desde el inicio.",
    author: "Ludwing Valecillos",
    date: "2024-03-05",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Desarrollo Seguro",
    tags: ["Secure Development", "SDLC", "Security"],
    isFeatured: false,
    readTime: "12 min",
    excerpt:
      "Todo lo que necesitas saber sobre desarrollo seguro y cómo implementarlo en tu ciclo de desarrollo.",
  },
  {
    id: 4,
    title: "Hacking Ético: Fundamentos y Prácticas",
    content:
      "El hacking ético es una herramienta poderosa para mejorar la seguridad. Conoce los principios éticos y las técnicas utilizadas por los profesionales de seguridad.",
    author: "Ludwing Valecillos",
    date: "2024-02-28",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Hacking Ético",
    tags: ["Ethical Hacking", "Penetration Testing", "Security Assessment"],
    isFeatured: false,
    readTime: "15 min",
    excerpt:
      "Una introducción al hacking ético y su importancia en la seguridad informática moderna.",
  },
  {
    id: 5,
    title: "Cumplimiento de Normativas de Seguridad",
    content:
      "El cumplimiento de normativas es crucial para las organizaciones. Explora las principales regulaciones y cómo implementarlas efectivamente.",
    author: "Ludwing Valecillos",
    date: "2024-02-20",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Compliance",
    tags: ["GDPR", "Compliance", "Regulations"],
    isFeatured: false,
    readTime: "9 min",
    excerpt:
      "Guía práctica para entender y cumplir con las principales normativas de seguridad.",
  },
];

// Get all articles
export const getAllArticles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockArticles);
    }, 500);
  });
};

// Get featured article
export const getFeaturedArticle = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const featured = mockArticles.find((article) => article.isFeatured);
      resolve(featured || null);
    }, 500);
  });
};

// Get article by ID
export const getArticleById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const article = mockArticles.find(
        (article) => article.id === parseInt(id)
      );
      resolve(article || null);
    }, 500);
  });
};

// Get all tags
export const getAllTags = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tags = [
        ...new Set(mockArticles.flatMap((article) => article.tags)),
      ];
      resolve(tags);
    }, 500);
  });
};

// Save article
export const saveArticle = async (article) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newArticle = {
        ...article,
        id: mockArticles.length + 1,
        date: new Date().toISOString().split("T")[0],
      };
      mockArticles.push(newArticle);
      resolve(newArticle);
    }, 500);
  });
};
