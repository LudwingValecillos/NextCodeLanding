import React from "react";

const ArticleAds = ({ type = "mini" }) => {
  if (type === "sidebar") {
    return (
      <div className="hidden md:block fixed left-4 top-1/2 transform -translate-y-1/2 w-[160px] h-[600px] bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="text-gray-400 text-center">
          <p>Espacio publicitario</p>
          <p className="text-sm">160x600</p>
        </div>
      </div>
    );
  }

  if (type === "google") {
    return (
      <div className="bg-gray-800 p-3 md:p-4 rounded-lg text-center">
        <p className="text-gray-400 mb-2 text-sm md:text-base">Publicidad</p>
        <div className="h-[250px] bg-gray-700 rounded-lg flex items-center justify-center">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXX"
            data-ad-slot="XXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 p-3 md:p-4 rounded-lg text-center">
      <p className="text-gray-400 mb-2 text-sm md:text-base">Publicidad</p>
      <div className="h-[90px] bg-gray-700 rounded-lg flex items-center justify-center">
        <p className="text-gray-400 text-sm md:text-base">300x90</p>
      </div>
    </div>
  );
};

export default ArticleAds;
