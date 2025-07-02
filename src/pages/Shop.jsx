import React from 'react';
import  { useState } from 'react';
import dataProductsFeatures from "../json/featureProducts.json";
import { AiOutlineShoppingCart, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiFilter, BiGridAlt } from 'react-icons/bi';
import { FiList } from 'react-icons/fi';
import images from "../constants/images";
import {  useParams, useNavigate } from "react-router-dom";



const Shop = () => {
        const n = useNavigate();
        const { id } = useParams();
    const shop = dataProductsFeatures.find((e) => e.id == id);

      const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
   const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [addedItems, setAddedItems] = useState(new Set());





 const ProductCard = ({ product }) => (
    
    <>
        <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
        
      {/* Sale Badge */}
      {product.sale && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
          SALE
        </div>
      )}

      {/* Product Image */}
      <div className="relative overflow-hidden "  >
        <img
          src={images[product.image]}
          alt={product.name}
          className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-105" onClick={()=> n('/details/' + product.id)}
        />
        
        

        {/* Add to Cart Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
                        onClick={() => addToCart(product)}
                        disabled={addedItems.has(product.id)}
                        className={`w-full py-2 px-4 rounded font-semibold transition-all duration-200 ${
                          addedItems.has(product.id)
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-800 text-white hover:bg-gray-700'
                        }`}
                      >
                        {addedItems.has(product.id) ? (
                          <span className="flex items-center justify-center">
                            <Check size={16} className="mr-2" />
                            Added to Cart!
                          </span>
                        ) : (
                          '🛒 Add to Cart'
                        )}
                      </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-[#e65540]"  onClick={()=> n('/details/' + product.id)}>{product.title}</h3>
        
     
        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-lg text-gray-900">
            €{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              €{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className=" ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="relative h-64 mt-8">
        <img 
          src={images.banner}
          alt="Products background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider">
            PRODUCTS
          </h1>
        </div>
      </div>
            
            {/* Controls */}
            
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <BiFilter className="w-4 h-4 mr-2" />
                Filters
              </h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-700 mb-3">Categories</h4>
                <div className="space-y-2">
                  {['Best Seller (8 items)', 'Featured (8 items)', 'Men (8 items)', 'Women (8 items)'].map((category) => (
                    <label key={category} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              
              

              <div>
                <h4 className="font-bold text-gray-700 mb-3">Colors</h4>
                <div className="flex flex-col gap-2">
                  {['Black', 'gray', 'red'].map((color) => (
                      <label key={color} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">{color}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold pt-2 text-gray-700 mb-3">Sizes</h4>
                <div className="flex flex-col gap-2">
                  {['S', 'L', 'M', 'XL', 'XXL'].map((size) => (
                      <label key={size} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">{size}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold pt-2 text-gray-700 mb-3">Prices</h4>
                <div className="flex flex-col gap-2">
                  {['0-20', '20-40'].map((price) => (
                      <label key={price} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">{price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {dataProductsFeatures.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
