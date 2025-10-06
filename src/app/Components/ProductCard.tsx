"use client";
import { useState } from "react";
import { Product } from "../context/CartContext";
import { BuyModal } from "./BuyModal";
import { useCart } from "@/context/CartContext";

export const ProductCard = ({ product }: { product: Product }) => {
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className='border rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 bg-white flex flex-col gap-3'>
      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className='text-gray-700 font-medium'>${product.price}</p>

      <div className='flex gap-3'>
        <button
          onClick={handleAddToCart}
          className='px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition'>
          Add to Cart
        </button>

        <button
          onClick={() => setShowModal(true)}
          className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition'>
          Buy Now
        </button>
      </div>

      {showModal && (
        <BuyModal product={product} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};
