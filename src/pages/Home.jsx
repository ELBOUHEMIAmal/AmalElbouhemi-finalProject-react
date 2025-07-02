import React from "react";
import { useState, useEffect } from "react";
import images from "../constants/images";
import dataCarousel from "../json/data.json";
import dataCards from "../json/Cards.json";
import dataProductsFeatures from "../json/featureProducts.json";
import dataBlog from '../json/blog.json'
import { useNavigate } from "react-router-dom";


const Home = () => {
      const n = useNavigate();
  
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

  const prev2 = () => {
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
    setCurrentSlide(
      (currentSlide - 1 + dataCarousel.length) % dataCarousel.length
    );
  };

  const goTo = (index) => {
    setCurrentSlide(index);
  };
   const features = [
    {
      title: "Free Delivery Worldwide",
      description: "Mirum est notare quam littera gothica"
    },
    {
      title: "30 Days Return",
      description: "Simply return it within 30 days for an exchange."
    },
    {
      title: "Store Opening",
      description: "Shop open from Monday to Sunday"
    }
  ];
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
              className={`absolute inset-0 transition-opacity duration-800 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
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
                <div
                  className={`max-w-2xl text-white transition-all duration-600 delay-300 ${
                    currentSlide === index
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0 "
                  }`}
                >
                  <h2 className="text-xl md:text-2xl  mb-4">{slide.title}</h2>
                  <p className="text-4xl md:text-5xl font-bold mb-8">
                    {slide.subtitle}
                  </p>
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
                className={`bg-amber-50 w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-white w-4 md:w-6" : "bg-white/50"
                }`}
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
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110  " onClick={()=> n('/shop/' + card.id)}
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
        <div className="bg-gray-100 px-4 py-12 ">
          <div className="relative overflow-hidden rounded-lg shadow-xl bg-white">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * slidePercentage}%)`,
                width: `${
                  (dataProductsFeatures.length * 100) / visibleSlides
                }%`,
              }}
            >
              {dataProductsFeatures.map((product) => (
                <div
                  key={product.id}
                  className="  flex-shrink-0 px-2 py-4 group "
                >
                  <div className="rounded-lg w-[22.5rem] overflow-hidden shadow-md h-full flex flex-col">
                    {/* Image */}
                    <div className="bg-gray-200 h-50 md:h-110 flex items-center justify-center relative">
                      <img
                        src={images[product.image]}
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
                      <p className="text-gray-600 mt-2">
                        {product.description}
                      </p>
                      <p className="text-pink-600 font-bold mt-auto">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Prev Button */}
            <button
              onClick={prev2}
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
              onClick={next2}
              disabled={
                currentSlide >= dataProductsFeatures.length - visibleSlides
              }
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

          
        </div>
      </div>
       <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Lookbook Banner */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={images.banner08}
                alt="Fashion Model"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-lg font-light mb-2 tracking-wide">The Beauty</p>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wider">
                    LOOK BOOK
                  </h1>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-3 text-sm font-medium tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                    VIEW COLLECTION
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Card */}
          <div className="flex flex-col items-center justify-center space-y-8">
            
            {/* Product Image */}
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
              <div className="text-center mb-6">
                <img
                  src={images.shopItem09}
                  alt="Sunglasses"
                  className="w-full h-48 object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              
              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-gray-800 font-medium mb-2">
                  Boxy2 T-Shirt with Roll Sleeve
                </h3>
                <p className="text-xl font-bold text-gray-900">€17.07</p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-800">
                    -2374
                  </div>
                  <div className="text-xs text-gray-500 mt-1">days</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-800">
                    -13
                  </div>
                  <div className="text-xs text-gray-500 mt-1">hrs</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-800">
                    -6
                  </div>
                  <div className="text-xs text-gray-500 mt-1">mins</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-800">
                    -59
                  </div>
                  <div className="text-xs text-gray-500 mt-1">secs</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className="bg-white py-16 px-4">
      <h1 className="font-bold text-4xl text-center">OUR BLOG</h1>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataBlog.map((blog) => (
            <div key={blog.id} className="group cursor-pointer pt-[20px]">
              
              <div className=" relative overflow-hidden  mb-6">
                <img
                  src={images[blog.image]}
                  alt={blog.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              <div className="space-y-4">
                
                <h3 className="text-xl font-semibold text-gray-900 leading-tight hover:text-[#e65540] transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500 font-light">
                  {blog.author}
                </p>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {blog.description}
                </p>

               

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
            @ FOLLOW US ON INSTAGRAM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8   pt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group text-center p-6 transition-all duration-300 border-gray-400 border-l-2"
            >
              <h1 className="text-xl font-normal text-gray-800 mb-2 group-hover:text-black transition-colors duration-300">
                {feature.title}
              </h1>
              <p className="text-gray-500 text-sm italic leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
    </div>
    </>
  );
};

export default Home;
