"use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } =
    useCart();

  if (cart.length === 0)
    return (
      <div className='min-h-screen flex flex-col items-center justify-center text-center'>
        <h2 className='text-2xl font-semibold mb-3'>Your cart is empty 🛍️</h2>
        <Link href='/products' className='text-blue-600 underline'>
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className='max-w-5xl mx-auto py-10 px-4'>
      <h1 className='text-3xl font-bold mb-8'>Your Cart</h1>

      <div className='space-y-6'>
        {cart.map((item) => (
          <div
            key={item.key}
            className='flex flex-col md:flex-row items-center justify-between border-b pb-4 gap-4'>
            <div className='flex items-center gap-4'>
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={70}
                  className='rounded-md object-cover'
                />
              )}
              <div>
                <h3 className='font-semibold'>{item.name}</h3>
                {item.plan && (
                  <p className='text-gray-500'>Plan: {item.plan}</p>
                )}
                {item.addons && item.addons.length > 0 && (
                  <p className='text-gray-500 text-sm'>
                    Add-ons: {item.addons.map((a) => a.name).join(", ")}
                  </p>
                )}
                <p className='text-gray-700 font-semibold'>
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div className='flex items-center gap-4 mt-2 md:mt-0'>
              <input
                type='number'
                value={item.quantity}
                min={1}
                onChange={(e) =>
                  updateQuantity(item.key, parseInt(e.target.value))
                }
                className='w-16 text-center border rounded-md'
              />
              <button
                onClick={() => removeFromCart(item.key)}
                className='text-red-500 hover:underline'>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center mt-10 gap-4'>
        <p className='text-lg font-medium'>Total: ${cartTotal.toFixed(2)}</p>
        <div className='flex gap-3'>
          <button
            onClick={clearCart}
            className='bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400'>
            Clear Cart
          </button>
          <Link
            href='/checkout'
            className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700'>
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
