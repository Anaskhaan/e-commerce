"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export const FloatingCart = () => {
  const { cart } = useCart();
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/cart")}
      className='fixed bottom-4 right-4 z-50 flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition'>
      <ShoppingCart className='w-6 h-6' />
      {cart.length > 0 && (
        <span className='absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold'>
          {cart.length}
        </span>
      )}
    </button>
  );
};
