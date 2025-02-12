// app/components/Product.tsx
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-white">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-black border border-white text-white rounded-lg overflow-hidden shadow-lg p-4 transition-transform transform hover:scale-105"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300} 
              height={300} 
              className="w-full h-48 object-contain mb-4"
              unoptimized
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-red-500 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
