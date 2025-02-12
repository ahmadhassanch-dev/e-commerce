import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-red-600">Hassan`s</div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-red-600 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-red-600 transition duration-300">
              About
            </Link>
            <Link  href="#" className="hover:text-red-600 hover:-translate-y-1 transition-transform duration-300 ease-in-out">
             Products
            </Link>
            <Link href="/cart" className="hover:text-red-600 transition duration-300">
              Cart
            </Link>
            <Link href="/contact" className="hover:text-red-600 transition duration-300">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Hassan`s. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
