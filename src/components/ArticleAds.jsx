import React, { useEffect } from "react";

const ArticleAds = ({ type = "mini" }) => {
  useEffect(() => {
    // Load Google AdSense script
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8297800214231113";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    // Add domain verification
    const meta = document.createElement("meta");
    meta.name = "google-adsense-platform-account";
    meta.content = "ca-pub-8297800214231113";
    document.head.appendChild(meta);

    const meta2 = document.createElement("meta");
    meta2.name = "google-adsense-platform-domain";
    meta2.content = "nextcode.com.ar";
    document.head.appendChild(meta2);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(meta);
      document.head.removeChild(meta2);
    };
  }, []);

  if (type === "sidebar") {
    return (
      <div className="hidden md:block fixed left-4 top-1/2 transform -translate-y-1/2 w-[160px] h-[600px] bg-gray-800 rounded-lg flex items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8297800214231113"
          data-ad-slot="YOUR_SIDEBAR_AD_SLOT"
          data-ad-format="auto"
          data-full-width-responsive="true"
          data-adtest="on"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
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
            data-ad-client="ca-pub-8297800214231113"
            data-ad-slot="YOUR_CONTENT_AD_SLOT"
            data-ad-format="auto"
            data-full-width-responsive="true"
            data-adtest="on"
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
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8297800214231113"
          data-ad-slot="YOUR_MINI_AD_SLOT"
          data-ad-format="auto"
          data-full-width-responsive="true"
          data-adtest="on"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>
  );
};

export default ArticleAds;
