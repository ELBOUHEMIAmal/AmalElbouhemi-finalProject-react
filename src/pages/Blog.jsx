import React from 'react';
import images from "../constants/images";
import dataProductsFeatures from "../json/featureProducts.json";
import dataBlog from '../json/blog.json'
import { FiChevronsRight } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";



const Blog = () => {
    const n = useNavigate();
   
    return (
        <div>
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
                        NEWS
                      </h1>
                    </div>
                  </div>
                        
                        
                      </div>
                    </div>
                  </div>
                  <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
        {dataBlog.map((blog) => (
            <div>
                <div className="relative mb-6">
              <img 
                src={images[blog.image]}
                alt="Fashion backpack with photos and accessories"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white px-3 py-1 text-sm font-medium rounded">
                {blog.author}
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h1>
              
              <div className="flex items-center text-sm text-gray-600 mb-6 space-x-2">
                <span>by</span>
                <h1  className="text-gray-600">fashe-theme Admin</h1>
                <span>|</span>
                <h1  className="text-gray-600">crafts street style</h1>
                <span>|</span>
                <h1  className="text-gray-600">1 Comments</h1>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
              </p>

              <button className="inline-flex items-center text-gray-600 hover:text-[#e65540] font-medium group">
                Continue Reading
                <FiChevronsRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </article>
            </div>
        ))}
        </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search all articles..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <CiSearch className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Featured Products */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Featured Products</h2>
              
              <div className="space-y-4">
                {dataProductsFeatures.map((product) => (
                  <div key={product.id} className="flex items-center space-x-3 group cursor-pointer">
                    <div className="flex-shrink-0" onClick={()=> n('/details/' + product.id)}>
                        
                      <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                        <div className="w-full h-full  flex items-center justify-center">
                          <div className="w-full h-full bg-white rounded opacity-80">
                            <img src={images[product.image]} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 onClick={()=> n('/details/' + product.id)} className="text-sm font-medium text-gray-900 group-hover:text-[#e65540] transition-colors">
                        {product.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        {product.price && (
                          
                        <span className="text-sm  text-gray-900">$
                          {product.price}
                        </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Blog;