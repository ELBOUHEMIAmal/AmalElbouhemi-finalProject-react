import React from "react";
import { useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import {
  FaGooglePlusG,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";
import Swal from 'sweetalert2'

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.includes('@')) {
      const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
Toast.fire({
  icon: "success",
  title: "Signed in successfully"
});
      setEmail("");
    }else {
        const Toast = Swal.mixin({
  toast: false,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
Toast.fire({
  icon: "error",
  title: "Signed failed"
});
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Get in Touch Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-black mb-6">
              GET IN TOUCH
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              <br />
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/shopify"
                className="hover:text-gray-700 transition-colors"
              >
                <RiFacebookFill size={20} />
              </a>
              <a
                href="https://x.com/shopify"
                className="hover:text-gray-700 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.pinterest.com/shopify/"
                className="hover:text-gray-700 transition-colors"
              >
                <FaPinterest size={20} />
              </a>
              <a
                href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
                className="hover:text-gray-700 transition-colors"
              >
                <FaGooglePlusG size={20} />
              </a>
              <a
                href="https://www.instagram.com/shopify/"
                className="hover:text-gray-700 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">
              CATEGORIES
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Dresses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Sunglasses
                </a>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">LINKS</h3>
            <ul className="space-y-3 flex flex-col">
              <Link
                to="/"
                className="text-pink-500 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base"
              >
                Shop
              </Link>
              <Link
                to="/sale"
                className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base"
              >
                Sale
              </Link>
              <Link
                to="/features"
                className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base"
              >
                Features
              </Link>
              <Link
                to="/blog"
                className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base"
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-pink-600 focus:text-pink-600  transition-colors font-light text-sm md:text-base"
              >
                Contact
              </Link>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">HELP</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold text-black mb-2">
                NEWSLETTER
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md lg:max-w-none">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black text-gray-700 placeholder-gray-500"
              />
              <button
                onClick={handleSubscribe}
                className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors rounded-none"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2022{" "}
            <span className="text-gray-700">Shopify Theme</span> Developed by{" "}
            <span className="text-gray-700">MassTechnologist</span> All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gray-600 text-white rounded-none hover:bg-black transition-colors flex items-center justify-center"
        aria-label="Back to top"
      >
      </button>
    </footer>
  );
};

export default Footer;
