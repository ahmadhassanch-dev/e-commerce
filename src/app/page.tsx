import Product from "./components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-20 bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority>
            
          </Image>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Welcome to Hassan`s Store
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover the best electronics, jewelry, and clothing.
          </p>
          <a
            href="#products"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="mt-8">
        <Product />
      </div>
    </div>
  );
}
