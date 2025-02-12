// app/products/[category]/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
}

const CategoryPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const pathname = usePathname();
  const category = decodeURIComponent(pathname.split("/").pop() || "");

  useEffect(() => {
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }
  }, [category]);

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-red-500 capitalize">{category}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black border border-white rounded-lg overflow-hidden shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-64 object-contain mb-4"
                unoptimized
              />
              <div>
                <h2 className="text-lg font-semibold mb-2 text-white">
                  {product.title.length > 50
                    ? product.title.slice(0, 50) + "..."
                    : product.title}
                </h2>
                <p className="text-red-400 font-bold text-xl mb-2">${product.price}</p>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
