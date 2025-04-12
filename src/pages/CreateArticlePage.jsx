import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-hot-toast";
import { createArticle } from "../articles/articles";

const CreateArticlePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    image: "",
    author: "",
  });
  const [loading, setLoading] = useState(false);
  const [createdArticle, setCreatedArticle] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContentChange = (content) => {
    setFormData((prev) => ({
      ...prev,
      content,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newArticle = {
        title: formData.title,
        content: formData.content,
        category: formData.category,
        tags: formData.tags.split(",").map((tag) => tag.trim()),
        image: formData.image,
        author: formData.author,
      };

      const created = await createArticle(newArticle);
      setCreatedArticle(created);
      toast.success("Artículo creado exitosamente");

      // Limpiar el formulario
      setFormData({
        title: "",
        content: "",
        category: "",
        tags: "",
        image: "",
        author: "",
      });
    } catch (err) {
      console.error("Error creating article:", err);
      toast.error("Error al crear el artículo");
    } finally {
      setLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "link",
    "image",
  ];

  return (
    <>
      <Helmet>
        <title>Crear Artículo | NextCode Security</title>
        <meta
          name="description"
          content="Crea un nuevo artículo para NextCode Security"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {createdArticle ? (
              <div className="bg-gray-800 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Artículo Creado
                </h2>
                <p className="text-gray-400 mb-4">
                  Copia el siguiente objeto para agregarlo al archivo
                  articles.js:
                </p>
                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-gray-300">
                  {JSON.stringify(createdArticle, null, 2)}
                </pre>
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    onClick={() => setCreatedArticle(null)}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Crear Otro Artículo
                  </button>
                  <button
                    onClick={() => navigate("/articles")}
                    className="px-4 py-2 bg-[#20A366] text-white rounded-lg hover:bg-[#1a8a55] transition-colors"
                  >
                    Ver Artículos
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-white mb-2">
                    Título del Artículo
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20A366]"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Contenido</label>
                  <div className="bg-gray-800/50 rounded-xl p-6">
                    <ReactQuill
                      theme="snow"
                      value={formData.content}
                      onChange={handleContentChange}
                      modules={modules}
                      formats={formats}
                      className="bg-white rounded-lg"
                      style={{
                        height: "500px",
                        backgroundColor: "white",
                        color: "black",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-white mb-2">
                    Categoría
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20A366]"
                  >
                    <option value="">Selecciona una categoría</option>
                    <option value="Seguridad">Seguridad</option>
                    <option value="Desarrollo">Desarrollo</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Cloud">Cloud</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="tags" className="block text-white mb-2">
                    Etiquetas (separadas por comas)
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20A366]"
                  />
                </div>

                <div>
                  <label htmlFor="image" className="block text-white mb-2">
                    URL de la Imagen
                  </label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20A366]"
                  />
                </div>

                <div>
                  <label htmlFor="author" className="block text-white mb-2">
                    Autor
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20A366]"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading || !formData.content.trim()}
                    className="px-6 py-3 bg-[#20A366] text-white rounded-lg hover:bg-[#1a8a55] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Guardando..." : "Guardar Artículo"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateArticlePage;
