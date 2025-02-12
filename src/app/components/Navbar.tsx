// app/components/Navbar.tsx
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-red-600">Hassan`s</div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-red-600 transition duration-300">
              Home
            </Link>

            <div className="group relative">
              <Link
                href="/products"
                className="hover:text-red-600 transition duration-300"
              >
                Categories
              </Link>
              <ul className="dropdown_menu absolute left-0 w-32 bg-black text-white  rounded-lg overflow-hidden shadow-lg hidden group-hover:block">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="py-2 px-4 hover:bg-red-600"
                  >
                    <Link href={`/products/${category}`}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/about" className="hover:text-red-600 transition duration-300">
              About
            </Link>
            <Link href="#" className="hover:text-red-600 transition duration-300">
              Cart
            </Link>
            <Link href="#" className="hover:text-red-600 transition duration-300">
              Contact
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
