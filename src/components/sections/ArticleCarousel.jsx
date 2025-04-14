import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Article from "../ArticleCard";
import { getRandomArticles } from "../../articles/articles";

const ArticleCarousel = () => {
  const sectionRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [swiperError, setSwiperError] = useState(false);

  useEffect(() => {
    // Properly cleanup Swiper instance if it exists
    return () => {
      if (swiperInstance) {
        swiperInstance.destroy?.(true, true);
      }
    };
  }, [swiperInstance]);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const featuredArticles = await getRandomArticles(5);
        setArticles(featuredArticles || []);
      } catch (err) {
        console.error("Error loading featured articles:", err);
        setError("Error al cargar los artículos destacados");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  useEffect(() => {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        disable: false, // Always enable on mobile
      });
    }

    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // No need to manually initialize Swiper; it's handled automatically
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleTouchStart = () => {
    if (swiperInstance?.autoplay) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleTouchEnd = () => {
    if (swiperInstance?.autoplay) {
      swiperInstance.autoplay.start();
    }
  };

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#20A366]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-black">No hay artículos destacados disponibles</p>
      </div>
    );
  }

  if (swiperError) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-red-500">Error al cargar el carrusel</p>
      </div>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #1a1a1a, #000000)",
      }}
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <style global="true">{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 8px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #20a366 !important;
          transform: scale(1.2) !important;
        }
        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem !important;
        }
        .swiper-slide {
          height: auto !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0 16px !important;
        }
        @media (max-width: 640px) {
          .swiper-slide {
            padding: 0 8px !important;
          }
        }
      `}</style>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px] animate-subtle-zoom"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 text-center"
          data-aos="fade-down"
        >
          Artículos{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20A366] to-blue-400">
            Destacados
          </span>
        </h2>
        <p
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto text-center mb-4 md:mb-6"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Descubre nuestros artículos más recientes
        </p>
        <a
          href="/articles"
          className="text-white text-center block mb-6 md:mb-8"
        >
          <span className="inline-block text-white font-bold bg-[#20A366] rounded-xl px-4 py-2 hover:bg-[#20A366] transition-all duration-300 cursor-pointer hover:scale-105">
            Ver todos los artículos
          </span>
        </a>
        {/* Desktop & Mobile Carousel */}
        <div className="w-full">
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Pagination]}
            spaceBetween={32}
            slidesPerView={3.5}
            centeredSlides={false}
            speed={800}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-[#20A366]",
              bulletClass:
                "swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !opacity-100",
            }}
            className="w-full pb-20"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onError={() => setSwiperError(true)}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: true,
              },
              375: {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: true,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 40,
                centeredSlides: false,
              },
            }}
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id} className="flex justify-center">
                <Article article={article} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination !bottom-0 !mt-20 flex justify-center items-center"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ArticleCarousel;