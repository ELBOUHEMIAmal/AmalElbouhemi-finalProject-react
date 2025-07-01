import React from 'react';
import { useState, useEffect } from "react";
import images from '../constants/images';
import dataCarousel from '../json/data.json'
import dataCards from '../json/Cards.json'
import dataProductsFeatures from '../json/featureProducts.json'

const Home = () => {
   
// import dataCarousel from "../data/data.json"; // adjust path if needed

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [slidePercentage, setSlidePercentage] = useState(100);
  const updateVisibleSlides = () => {
    if (window.innerWidth < 768) {
      setVisibleSlides(1);
      setSlidePercentage(100);
    } else {
      setVisibleSlides(3);
      setSlidePercentage(100 / 3);
    }
  };
   useEffect(() => {
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const next2 = () => {
    if (currentSlide < dataProductsFeatures.length - visibleSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prev1 = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) {
        next();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, autoplay]);

  const next = () => {
    setCurrentSlide((currentSlide + 1) % dataCarousel.length);
  };

  const prev = () => {
    setCurrentSlide((currentSlide - 1 + dataCarousel.length) % dataCarousel.length);
  };

  const goTo = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
        <div
      className="relative overflow-hidden"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="relative h-[80vh] min-h-[500px] flex justify-center">
        {dataCarousel.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-800 ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gray-800">
              <img
                src={images[slide.image]}
                alt={slide.title}
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
              />
            </div>

            <div className="text-center container mx-auto px-6 h-full flex items-center justify-center">
              <div className={`max-w-2xl text-white transition-all duration-600 delay-300 ${currentSlide === index ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0 "}`}>
                <h2 className="text-xl md:text-2xl  mb-4">{slide.title}</h2>
                <p className="text-4xl md:text-5xl font-bold mb-8">{slide.subtitle}</p>
                <a
                  href={slide.buttonUrl}
                  className="inline-block bg-white hover:bg-[#e65540] text-black px-8 py-3 rounded-4xl text-lg font-semibold transition-colors"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#e65540] text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10 transition-all"
        >
          &lt;
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className=" absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#e65540] text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10 transition-all"
        >
          &gt;
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {dataCarousel.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`bg-amber-50 w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentSlide === index ? "bg-white w-4 md:w-6" : "bg-white/50"}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
     <div className="min-h-screen  py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataCards.map((card, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={images[card.image]}
                  alt={card.buttonText}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Button */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <button className="bg-white/50 backdrop-blur-sm hover:bg-[#e65540] hover:text-white text-gray-800 font-semibold py-3 px-8  ">
                    {card.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="py-[60px]">
        <h1 className="font-bold text-4xl text-center">FEATURES PRODUCTS</h1>
        <div className="bg-gray-100 px-4 py-12">
      <div className="relative overflow-hidden rounded-lg shadow-xl bg-white">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * slidePercentage}%)`,
            width: `${(dataProductsFeatures.length * 100) / visibleSlides}%`,
          }}
        >
          {dataProductsFeatures.map((product) => (
            <div
              key={product.id}
              className="w-full md:w-1/3 flex-shrink-0 px-2 py-4 group"
            >
              <div className="rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                {/* Image */}
                <div className="bg-gray-200 h-48 md:h-64 flex items-center justify-center relative">
                 <img
  src={product.image}
  alt={product.title}
  className="w-full h-full object-cover"
/>
                  {/* Button on hover */}
                  <button className="absolute bottom-4 px-4 py-2 bg-pink-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {product.buttonText}
                  </button>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <p className="text-pink-600 font-bold mt-auto">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prev}
          disabled={currentSlide === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 -ml-4 ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          disabled={currentSlide >= dataProductsFeatures.length - visibleSlides}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 -mr-4 ${
            currentSlide >= dataProductsFeatures.length - visibleSlides
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {dataProductsFeatures.map((product, index) => (
          <button
            key={product.id}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
    </div>
    </>
    
  );
}


export default Home;