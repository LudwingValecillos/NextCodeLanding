export const securityArticles = [
  {
    id: 1,
    title: "Seguridad en la Nube: Mejores Prácticas",
    title_en: "Cloud Security: Best Practices",
    content:
      "La seguridad en la nube es fundamental para proteger los datos y aplicaciones...",
    content_en:
      "Cloud security is essential to protect data and applications...",
    date: "2024-04-11",
    author: "Equipo de Seguridad",
    author_en: "Security Team",
    category: "Cloud Security",
    tags: ["cloud", "seguridad", "mejores prácticas"],
    tags_en: ["cloud", "security", "best practices"],
    image: "/assets/articles/cloud-security.jpg",
  },
  {
    id: 2,
    title: "Protección contra Ransomware",
    title_en: "Ransomware Protection",
    content:
      "El ransomware sigue siendo una de las mayores amenazas para las empresas...",
    content_en:
      "Ransomware remains one of the biggest threats to businesses...",
    date: "2024-04-10",
    author: "Equipo de Seguridad",
    author_en: "Security Team",
    category: "Ciberseguridad",
    tags: ["ransomware", "protección", "ciberseguridad"],
    tags_en: ["ransomware", "protection", "cybersecurity"],
    image: "/assets/articles/ransomware-protection.jpg",
  },
  {
    id:  3,
    title: "Protección contra Ransomware",
    title_en: "Ransomware Protection",
    content:
      "El ransomware sigue siendo una de las mayores amenazas para las empresas...",
    content_en:
      "Ransomware remains one of the biggest threats to businesses...",
    date: "2024-04-10",
    author: "Equipo de Seguridad",
    author_en: "Security Team",
    category: "Ciberseguridad",
    tags: ["ransomware", "protección", "ciberseguridad"],
    tags_en: ["ransomware", "protection", "cybersecurity"],
    image: "/assets/articles/ransomware-protection.jpg",
  },
  {
    id: 4,
    title: "Protección contra Ransomware",
    title_en: "Ransomware Protection",
    content:
      "El ransomware sigue siendo una de las mayores amenazas para las empresas...",
    content_en:
      "Ransomware remains one of the biggest threats to businesses...",
    date: "2024-04-10",
    author: "Equipo de Seguridad",
    author_en: "Security Team",
    category: "Ciberseguridad",
    tags: ["ransomware", "protección", "ciberseguridad"],
    tags_en: ["ransomware", "protection", "cybersecurity"],
    image: "/assets/articles/ransomware-protection.jpg",
  },
  {
    id: 5,
    title: "Protección contra Ransomware",
    title_en: "Ransomware Protection",
    content:
      "El ransomware sigue siendo una de las mayores amenazas para las empresas...",
    content_en:
      "Ransomware remains one of the biggest threats to businesses...",
    date: "2024-04-10",
    author: "Equipo de Seguridad",
    author_en: "Security Team",
    category: "Ciberseguridad",
    tags: ["ransomware", "protección", "ciberseguridad"],
    tags_en: ["ransomware", "protection", "cybersecurity"],
    image: "/assets/articles/ransomware-protection.jpg",
  },
  {
    id: 6,
    title: "Protección contra Ransomware",
    title_en: "Ransomware Protection",
    content:
      "El ransomware sigue siendo una de las mayores amenazas para las empresas...",
    content_en:
      "Ransomware remains one of the biggest threats to businesses...",
    date: "2024-04-10",
    author: "Equipo de Seguridad",
    author_en: "Security Team",
    category: "Ciberseguridad",
    tags: ["ransomware", "protección", "ciberseguridad"],
    tags_en: ["ransomware", "protection", "cybersecurity"],
    image: "/assets/articles/ransomware-protection.jpg",
  },
  {
    id: 7,
    title: "Protección contra Ransomware",
    title_en: "Ransomware Protection",
    content:
      "El ransomware sigue siendo una de las mayores amenazas para las empresas...",
    content_en:
      "Ransomware remains one of the biggest threats to businesses...",
    date: "2024-04-10",
    author: "Equipo de Seguridad",
    author_en: "Security Team",
    category: "Ciberseguridad",
    tags: ["ransomware", "protección", "ciberseguridad"],
    tags_en: ["ransomware", "protection", "cybersecurity"],
    image: "/assets/articles/ransomware-protection.jpg",
  },
];

export const getArticleById = (id) => {
  return securityArticles.find((article) => article.id === id);
};

export const getArticlesByCategory = (category) => {
  return securityArticles.filter((article) => article.category === category);
};

export const getLatestArticles = (limit = 5) => {
  return securityArticles
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};
