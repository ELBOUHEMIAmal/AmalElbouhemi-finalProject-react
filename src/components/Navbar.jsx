import React, { useState } from 'react';
import { RiFacebookFill } from "react-icons/ri";
import { FaGooglePlusG, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
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
      <div className="px-4 md:px-6 py-4  fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
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
              <FaRegUserCircle/>
            </button>
            <div className="relative">
              <button className="p-1 md:p-2 hover:bg-gray-100 rounded-full transition-colors">
                <CiShoppingCart/>
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
                <MdOutlineClose />
              ) : (
                <CiMenuBurger/>

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