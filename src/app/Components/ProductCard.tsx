"use client";
import { useState } from "react";
import { Product } from "../context/CartContext";
import { BuyModal } from "./BuyModal";

export const ProductCard = ({ product }: { product: Product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border p-4 rounded'>
      <h3 className='font-semibold'>{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => setShowModal(true)}
        className='px-4 py-2 bg-blue-600 text-white rounded'>
        Buy Now
      </button>

      {showModal && (
        <BuyModal product={product} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};
