import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Componentes no cargados de forma perezosa (se necesitan en la carga inicial)
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// Carga perezosa (Lazy-loading) de las páginas
const SecurityLandingPage = lazy(() => import("./pages/SecurityLandinPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const ArticleDetailPage = lazy(() => import("./pages/ArticleDetailPage"));
const SavedArticlesPage = lazy(() => import("./pages/SavedArticlesPage"));
const CreateArticlePage = lazy(() => import("./pages/CreateArticlePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Un componente de carga simple para el fallback de Suspense
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1a202c', 
    color: 'white',
    fontSize: '1.5rem'
  }}>
    <img src="/logonextcode.png" alt="logo" />
    <p style={{ fontSize: '1.5rem', color: 'white' }}>Cargando...</p>
  </div>
);

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<SecurityLandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<Layout />}>
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/article/:id" element={<ArticleDetailPage />} />
            <Route path="/saved-articles" element={<SavedArticlesPage />} />
            <Route
              path="/create-article"
              element={
                <ProtectedRoute>
                  <CreateArticlePage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;