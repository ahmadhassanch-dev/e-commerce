// src/app/cart/page.tsx
"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white text-center">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-white">
          <p className="text-2xl mb-4">Your cart is empty.</p>
          <Link href="/">
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full transition duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-black border border-gray-800 text-white rounded-lg shadow-lg overflow-hidden mb-6"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="object-contain"
                  unoptimized
                />
                <div className="flex-1 p-4">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-red-500 font-bold">${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-white font-semibold bg-black rounded border border-white p-2  hover:text-red-800 mt-2 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black border border-gray-800 text-white rounded-lg shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="text-lg mb-2">
              Total Items: <span className="font-bold">{cart.length}</span>
            </p>
            <p className="text-lg mb-4">
              Total Price: <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </p>
            <button
              onClick={clearCart}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full transition duration-300"
            >
              Clear Cart
            </button>
            <Link href={"/checkout"}>
            <button
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full transition duration-300"
              >
              Checkout
            </button>
                </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
