import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import SecurityLandingPage from "./pages/SecurityLandinPage";
import ArticlesPage from "./pages/ArticlesPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SecurityLandingPage />} />
      <Route
        path="/articles"
        element={
          <Layout>
            <ArticlesPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
