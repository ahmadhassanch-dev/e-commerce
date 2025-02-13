// src/app/checkout/page.tsx
"use client";
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

const CheckoutPage = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [payment, setPayment] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (
      !customer.name ||
      !customer.email ||
      !customer.address ||
      !payment.cardName ||
      !payment.cardNumber ||
      !payment.expiryDate ||
      !payment.cvv
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    alert(`Order placed successfully for ${customer.name}!`);
    clearCart();
  };

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Customer Details Form */}
        <div className="bg-black border border-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Customer Details</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={customer.name}
            onChange={handleCustomerChange}
            className="w-full mb-4 p-3 rounded-lg text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={customer.email}
            onChange={handleCustomerChange}
            className="w-full mb-4 p-3 rounded-lg text-black"
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={customer.address}
            onChange={handleCustomerChange}
            className="w-full mb-4 p-3 rounded-lg text-black"
            required
          />
        </div>

        {/* Payment Details Form */}
        <div className="bg-black border border-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
          <input
            type="text"
            name="cardName"
            placeholder="Name on Card"
            value={payment.cardName}
            onChange={handlePaymentChange}
            className="w-full mb-4 p-3 rounded-lg text-black"
            required
          />
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={payment.cardNumber}
            onChange={handlePaymentChange}
            className="w-full mb-4 p-3 rounded-lg text-black"
            required
          />
          <div className="flex space-x-4">
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={payment.expiryDate}
              onChange={handlePaymentChange}
              className="w-1/2 mb-4 p-3 rounded-lg text-black"
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={payment.cvv}
              onChange={handlePaymentChange}
              className="w-1/2 mb-4 p-3 rounded-lg text-black"
              required
            />
          </div>
          <button
            onClick={handleOrder}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full transition duration-300"
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-black border border-gray-800 rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-4">
              <div className="flex justify-between">
                <span>{item.title}</span>
                <span className="text-red-500">
                  ${item.price} x {item.quantity}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <p className="text-xl">
          Total Price:{" "}
          <span className="font-bold text-red-500">
            ${totalPrice.toFixed(2)}
          </span>
        </p>
        <Link href="/cart">
          <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full transition duration-300">
            Edit Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
