import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticleById, getRandomArticles } from "../articles/articles";
import ArticleCard from "../components/ArticleCard";
import { Helmet } from "react-helmet-async";
import { marked } from "marked";
import { toast } from "react-hot-toast";
import ArticleHeader from "../components/ArticleHeader";
import ArticleContent from "../components/ArticleContent";
import ArticleFooter from "../components/ArticleFooter";
import ArticleAds from "../components/ArticleAds";
import { optimizeImage } from "../utils/imageOptimizer";

const ArticleDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const fetchArticle = useCallback(async () => {
    try {
      setLoading(true);
      const articleData = await getArticleById(id);
      if (articleData) {
        setArticle(articleData);
        const savedArticles = JSON.parse(
          localStorage.getItem("savedArticles") || "[]"
        );
        setIsSaved(savedArticles.includes(String(id)));
        const related = await getRandomArticles(3, articleData.id);
        setRelatedArticles(related);
      }
    } catch (error) {
      console.error("Error fetching article:", error);
      toast.error("Error al cargar el artículo");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {})
          .catch((err) => {});
      });
    }

    // Preload image
    if (article?.image) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = article.image;
      link.fetchpriority = "high";
      document.head.appendChild(link);

      // Also preload the optimized versions
      const optimizedUrl = optimizeImage(article.image, {
        width: 800,
        quality: 50,
        webp: true,
      });
      const link2 = document.createElement("link");
      link2.rel = "preload";
      link2.as = "image";
      link2.href = optimizedUrl;
      link2.fetchpriority = "high";
      document.head.appendChild(link2);
    }
  }, [article?.image]);

  const htmlContent = useMemo(() => {
    return article ? marked.parse(article.content) : "";
  }, [article]);

  const generateMetaDescription = useCallback((article) => {
    const maxChars = 160;
    const excerpt = article.content.substring(0, maxChars);
    return `${excerpt}${excerpt.length >= maxChars ? "..." : ""} - ${
      article.title
    } | NextCode`;
  }, []);

  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator
        .share({
          title: article?.title,
          text: article?.content?.substring(0, 100),
          url: window.location.href,
        })
        .then(() => toast.success("Artículo compartido"))
        .catch(() => toast.error("Error al compartir"));
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => toast.success("Enlace copiado al portapapeles"))
        .catch(() => toast.error("Error al copiar el enlace"));
    }
  }, [article]);

  const handleBookmark = useCallback(() => {
    try {
      const savedArticles = JSON.parse(
        localStorage.getItem("savedArticles") || "[]"
      );
      if (isSaved) {
        const updatedSavedArticles = savedArticles.filter(
          (savedId) => savedId !== String(id)
        );
        localStorage.setItem(
          "savedArticles",
          JSON.stringify(updatedSavedArticles)
        );
        setIsSaved(false);
        toast.success("Artículo eliminado de guardados");
      } else {
        savedArticles.push(String(id));
        localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
        setIsSaved(true);
        toast.success("Artículo guardado");
      }
    } catch (error) {
      console.error("Error managing bookmarks:", error);
      toast.error("Error al guardar el artículo");
    }
  }, [id, isSaved]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 py-8 md:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Skeleton loading for header */}
            <div className="mb-8 md:mb-12">
              <div className="h-8 w-32 bg-gray-800 rounded-full mb-4"></div>
              <div className="h-12 w-3/4 bg-gray-800 rounded-lg mb-6"></div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-800"></div>
                <div className="h-8 w-32 bg-gray-800 rounded-lg"></div>
              </div>
            </div>

            {/* Skeleton loading for content */}
            <div className="space-y-6">
              <div className="h-[250px] md:h-[400px] bg-gray-800 rounded-xl"></div>
              <div className="space-y-4">
                <div className="h-4 w-full bg-gray-800 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-800 rounded"></div>
                <div className="h-4 w-4/6 bg-gray-800 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <h1 className="text-2xl text-white">Artículo no encontrado</h1>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | NextCode Security</title>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/Inter-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preload hero image */}
        <link
          rel="preload"
          as="image"
          href={article.image}
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href={optimizeImage(article.image, { width: 800, quality: 50 })}
          fetchpriority="high"
        />
        <meta name="description" content={generateMetaDescription(article)} />
        <meta name="keywords" content={article.tags.join(", ")} />
        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={generateMetaDescription(article)}
        />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={article.author} />
        <meta property="article:section" content={article.category} />
        <meta property="article:tag" content={article.tags.join(", ")} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            image: article.image,
            author: {
              "@type": "Person",
              name: article.author,
            },
            publisher: {
              "@type": "Organization",
              name: "NextCode Security",
              logo: {
                "@type": "ImageObject",
                url: "/logo.png",
              },
            },
            datePublished: article.date,
            dateModified: article.date,
            description: generateMetaDescription(article),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": window.location.href,
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-8 md:py-20">
        <div className="container mx-auto px-4">
          <ArticleAds type="sidebar" />
          <ArticleAds type="sidebar" position="right" />

          <div className=" mx-auto">
            <ArticleHeader article={article} onBack={() => navigate(-1)} />

            <ArticleAds type="mini" />
            <ArticleContent article={article} htmlContent={htmlContent} />
            <ArticleAds type="mini" />

            <section className="my-8 ">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 md:px-4 md:py-2 bg-gray-800 text-gray-300 rounded-full text-xs md:text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </section>

            <ArticleAds type="google" />
            <ArticleAds type="mini" />

            <section className="mb-4 lg:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white my-6 md:mb-8">
                Artículos Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard
                    key={relatedArticle.id}
                    article={relatedArticle}
                  />
                ))}
              </div>
            </section>

            <ArticleFooter
              onBack={() => navigate(-1)}
              onShare={handleShare}
              onBookmark={handleBookmark}
              isSaved={isSaved}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetailPage;
