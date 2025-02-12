import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 pt-20 space-y-12">
      {/* Page Header */}
      <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>

      {/* About Me Section */}
      <section className="bg-black text-white p-6 rounded-2xl shadow-md">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-8 mb-4">
          Hi, I`m <span className="font-semibold">Ahmad Hassan</span>, a passionate web developer and TypeScript teacher based in Faisalabad, Pakistan. 
          With experience in <span className="font-semibold">Next.js, TypeScript, Python, and LangChain (Langraph)</span>, I am constantly exploring the evolving world of web technologies and AI-focused projects.
        </p>
        <p className="text-lg leading-8 mb-4">
          Teaching is not just a profession for me; it`s a passion. I love sharing my knowledge of TypeScript with aspiring developers, helping them build robust and scalable applications. 
          My journey in coding started at a young age, and since then, I`ve been on a mission to master modern tech stacks and contribute to the developer community.
        </p>
        <p className="text-lg leading-8 mb-4">
          Besides coding, I am deeply interested in AI projects and always looking for new opportunities to innovate. When I`m not glued to the screen, 
          you can find me exploring the latest trends in technology or experimenting with new coding techniques.
        </p>
      </section>

      {/* About the Store Section */}
      <section className="bg-black text-white p-6 rounded-2xl shadow-md">
        <h2 className="text-4xl font-bold mb-4">About Our Store</h2>
        <p className="text-lg leading-8 mb-4">
          Welcome to our e-commerce store, your one-stop destination for the finest selection of <span className="font-semibold">electronics, jewelry, and clothing</span>. 
          Our mission is to provide a seamless shopping experience with top-quality products, exceptional customer service, and unbeatable prices.
        </p>
        <p className="text-lg leading-8 mb-4">
          Our journey began with a vision to create an online platform that caters to the diverse needs of modern consumers. 
          Whether you`re looking for the latest gadgets, elegant jewelry, or stylish apparel, we have it all. 
          We believe in the power of choice, which is why our catalog is carefully curated to offer products that blend quality, style, and affordability.
        </p>
        <p className="text-lg leading-8 mb-4">
          At our store, customer satisfaction is our priority. We strive to deliver a hassle-free shopping experience, 
          from browsing to checkout, ensuring that you find exactly what you`re looking for. Our team is dedicated to staying ahead of the trends, 
          bringing you the newest and most innovative products in the market.
        </p>
        <p className="text-lg leading-8 mb-4">
          Thank you for choosing us as your preferred shopping destination. We are committed to providing an enriching and enjoyable online shopping experience. 
          Should you have any questions, suggestions, or feedback, feel free to reach out to us. We are here to help you every step of the way!
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
