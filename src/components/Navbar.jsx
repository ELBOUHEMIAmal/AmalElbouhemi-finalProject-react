import React, { useState } from 'react';
import { RiFacebookFill } from "react-icons/ri";
import { FaGooglePlusG, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Top bar */}
      <div className="hidden lg:flex justify-between items-center px-6 py-2 text-sm text-gray-500 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          {/* Social Icons */}
          <div className="flex space-x-3">
            <a href="https://www.facebook.com/shopify" className="hover:text-gray-700 transition-colors"><RiFacebookFill size={20}/></a>
            <a href="https://x.com/shopify" className="hover:text-gray-700 transition-colors"><FaTwitter size={20}/></a>
            <a href="https://www.pinterest.com/shopify/" className="hover:text-gray-700 transition-colors"><FaPinterest  size={20}/></a>
            <a href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html" className="hover:text-gray-700 transition-colors"><FaGooglePlusG  size={20}/></a>
            <a href="https://www.instagram.com/shopify/" className="hover:text-gray-700 transition-colors"><FaInstagram  size={20}/></a>
          </div>
        </div>
        
        <div className="text-center flex-1">
          <span>Free shipping for standard order over $100</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span>fashe@example.com</span>
          <select className="bg-transparent border-none text-sm focus:outline-none">
            <option  >USD</option>
            <option >EUR</option>
            <option >GBP</option>
          </select>
        </div>
      </div>

      {/* Main navbar */}
      <div className="px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-black">
              Fashe<span className="text-pink-500">.</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex items-center space-x-4 md:space-x-6 lg:space-x-8">
                <Link to="/" className="text-pink-500 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                Home
                </Link>
                <Link to="/shop" className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                Shop
                </Link>
                <Link to="/sale" className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                Sale
                </Link>
                <Link to="/features" className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                Features
                </Link>
                <Link to="/blog" className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                Blog
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                About
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                Contact
                </Link>
        
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="p-1 md:p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <div className="relative">
              <button className="p-1 md:p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5-5a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                2
              </span>
            </div>
            
            {/* More menu button for very small screens */}
            <button 
              className="sm:hidden p-1 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
                   <Link to="/" className="text-pink-500 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                Home
                </Link>
                <Link to="/shop" className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                Shop
                </Link>
                <Link to="/sale" className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                Sale
                </Link>
                <Link to="/features" className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                Features
                </Link>
                <Link to="/blog" className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                Blog
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                About
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base">
                Contact
                </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;