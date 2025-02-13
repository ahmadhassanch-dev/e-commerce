import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-red-600">Contact Us</h1>

      <p className="text-lg text-gray-400 text-center mb-8 max-w-2xl">
        Have any questions or feedback? Feel free to reach out to us. We`re here to help you!
      </p>

      <form className="bg-white text-black w-full max-w-lg rounded-2xl shadow-lg p-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Your Message"
            rows={5}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
