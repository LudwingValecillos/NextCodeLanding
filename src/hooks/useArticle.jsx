import { useState, useEffect, useCallback } from "react";
import { getArticleById, getRandomArticles } from "../articles/articles";
import { toast } from "react-hot-toast";

export const useArticle = (id) => {
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const fetchArticleData = useCallback(async () => {
    try {
      setLoading(true);
      const articleData = await getArticleById(id);
      if (articleData) {
        setArticle(articleData);
        const savedArticles = JSON.parse(localStorage.getItem("savedArticles") || "[]");
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
    fetchArticleData();
  }, [fetchArticleData]);

  return { article, relatedArticles, loading, isSaved, setIsSaved };
};
