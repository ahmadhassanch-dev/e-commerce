// src/app/components/Navbar.tsx
"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white py-4 shadow-lg z-50">
    <div className="container mx-auto flex justify-between items-center px-4">
      <Link href="/">
        <h1 className="text-3xl font-bold text-red-600 cursor-pointer">Hassan`s</h1>
      </Link>
      <ul className="flex items-center space-x-8">
        <li>
          <Link href="/" className="hover:text-red-500 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-red-500 transition duration-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-red-500 transition duration-300">
            Contact
          </Link>
        </li>
        <li className="relative">
          <Link href="/cart" className="hover:text-red-500 transition duration-300">
            <ShoppingCart size={28} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  
  );
};

export default Navbar;
