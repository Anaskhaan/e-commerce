// "use client";
// import { useState } from "react";
// import { useCart } from "../context/CartContext";
// import Link from "next/link";
// import Image from "next/image";

// export default function CartPage() {
//   const {
//     cart,
//     removeFromCart,
//     updateQuantity,
//     updateAddons,
//     cartTotal,
//     clearCart,
//   } = useCart();

//   const [delivery, setDelivery] = useState("standard");
//   const deliveryFee = delivery === "express" ? 10 : 0;
//   const grandTotal = cartTotal + deliveryFee;

//   const availableAddons = [
//     { id: "addon1", name: "Extended Warranty", price: 9.99 },
//     { id: "addon2", name: "Priority Support", price: 4.99 },
//   ];

//   if (cart.length === 0)
//     return (
//       <div className='min-h-screen flex flex-col items-center justify-center text-center'>
//         <h2 className='text-2xl font-semibold mb-3'>Your cart is empty 🛍️</h2>
//         <Link href='/products' className='text-blue-600 underline'>
//           Continue Shopping
//         </Link>
//       </div>
//     );

//   return (
//     <div className='max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8'>
//       {/* Left Section */}
//       <div className='lg:col-span-2 space-y-8'>
//         <h1 className='text-3xl font-bold text-gray-800 mb-2'>Your Cart</h1>

//         {cart.map((item) => {
//           const planPrice = item.price;
//           const addonsTotal =
//             item.addons?.reduce((sum, addon) => sum + addon.price, 0) || 0;
//           const subtotal = (planPrice + addonsTotal) * item.quantity;

//           return (
//             <div
//               key={item.key}
//               className='flex flex-col border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300'>
//               {/* Product Info */}
//               <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
//                 <div className='flex items-center gap-5'>
//                   {item.image && (
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       width={90}
//                       height={90}
//                       className='rounded-lg object-cover border'
//                     />
//                   )}
//                   <div>
//                     <h3 className='text-lg font-semibold text-gray-800'>
//                       {item.name}
//                     </h3>
//                     {item.plan && (
//                       <p className='text-gray-500 text-sm mb-1'>
//                         Plan: {item.plan}
//                       </p>
//                     )}
//                     <p className='font-medium text-gray-700'>
//                       ${planPrice.toFixed(2)}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Quantity + Remove */}
//                 <div className='flex items-center gap-4'>
//                   <input
//                     type='number'
//                     value={item.quantity}
//                     min={1}
//                     onChange={(e) =>
//                       updateQuantity(item.key, parseInt(e.target.value))
//                     }
//                     className='w-16 text-center border rounded-md focus:ring-2 focus:ring-blue-400'
//                   />
//                   <button
//                     onClick={() => removeFromCart(item.key)}
//                     className='text-red-500 hover:underline font-medium'>
//                     Remove
//                   </button>
//                 </div>
//               </div>

//               {/* Addons */}
//               <div className='bg-gray-50 mt-4 p-4 rounded-lg'>
//                 <h4 className='font-semibold mb-3 text-gray-800'>Add-ons</h4>
//                 <div className='space-y-2'>
//                   {availableAddons.map((addon) => {
//                     const isAdded = item.addons?.some((a) => a.id === addon.id);
//                     return (
//                       <div
//                         key={addon.id}
//                         className='flex justify-between items-center border-b last:border-none py-2'>
//                         <span className='text-gray-700'>
//                           {addon.name} — ${addon.price.toFixed(2)}
//                         </span>
//                         <button
//                           onClick={() =>
//                             updateAddons(item.key, addon, !isAdded)
//                           }
//                           className={`px-3 py-1 text-sm rounded-md transition ${
//                             isAdded
//                               ? "bg-red-500 text-white hover:bg-red-600"
//                               : "bg-blue-500 text-white hover:bg-blue-600"
//                           }`}>
//                           {isAdded ? "Remove" : "Add"}
//                         </button>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Subtotal */}
//               <div className='flex justify-between items-center mt-5 font-medium'>
//                 <p className='text-gray-700'>Subtotal</p>
//                 <p className='text-gray-900 font-semibold'>
//                   ${subtotal.toFixed(2)}
//                 </p>
//               </div>
//             </div>
//           );
//         })}

//         {/* Delivery Options */}
//         <div className='mt-10 border rounded-xl p-6 bg-white shadow-sm'>
//           <h3 className='text-lg font-semibold text-gray-800 mb-3'>
//             Choose Delivery Option
//           </h3>
//           <div className='flex flex-col sm:flex-row gap-4'>
//             <label
//               className={`flex items-center gap-3 border rounded-md p-3 cursor-pointer transition ${
//                 delivery === "standard" ? "border-blue-500 bg-blue-50" : ""
//               }`}>
//               <input
//                 type='radio'
//                 name='delivery'
//                 value='standard'
//                 checked={delivery === "standard"}
//                 onChange={() => setDelivery("standard")}
//                 className='accent-blue-600'
//               />
//               <div>
//                 <p className='font-medium text-gray-800'>Standard Delivery</p>
//                 <p className='text-gray-500 text-sm'>
//                   Free (3–5 business days)
//                 </p>
//               </div>
//             </label>

//             <label
//               className={`flex items-center gap-3 border rounded-md p-3 cursor-pointer transition ${
//                 delivery === "express" ? "border-blue-500 bg-blue-50" : ""
//               }`}>
//               <input
//                 type='radio'
//                 name='delivery'
//                 value='express'
//                 checked={delivery === "express"}
//                 onChange={() => setDelivery("express")}
//                 className='accent-blue-600'
//               />
//               <div>
//                 <p className='font-medium text-gray-800'>Express Delivery</p>
//                 <p className='text-gray-500 text-sm'>
//                   +$10 (1–2 business days)
//                 </p>
//               </div>
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Right Section — Summary */}
//       <div className='space-y-6 h-fit'>
//         <div className='border border-gray-200 rounded-xl p-6 bg-white shadow-md sticky top-24'>
//           <h2 className='text-xl font-semibold text-gray-800 mb-4'>
//             Order Summary
//           </h2>

//           <div className='flex justify-between text-gray-700 mb-2'>
//             <span>Subtotal</span>
//             <span>${cartTotal.toFixed(2)}</span>
//           </div>

//           <div className='flex justify-between text-gray-700 mb-2'>
//             <span>Delivery</span>
//             <span>{delivery === "standard" ? "Free" : "$10.00"}</span>
//           </div>

//           <div className='border-t my-4'></div>

//           <div className='flex justify-between text-lg font-semibold text-gray-900'>
//             <span>Total</span>
//             <span>${grandTotal.toFixed(2)}</span>
//           </div>

//           <div className='mt-6 space-y-3'>
//             <button
//               onClick={clearCart}
//               className='w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition'>
//               Clear Cart
//             </button>
//             <Link
//               href='/checkout'
//               className='block text-center w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition'>
//               Proceed to Checkout
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import Image from "next/image";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Truck,
  Shield,
  Headphones,
} from "lucide-react";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    updateAddons,
    cartTotal,
    clearCart,
  } = useCart();

  const [delivery, setDelivery] = useState("standard");
  const deliveryFee = delivery === "express" ? 10 : 0;
  const grandTotal = cartTotal + deliveryFee;

  const availableAddons = [
    { id: "addon1", name: "Extended Warranty", price: 9.99, icon: Shield },
    { id: "addon2", name: "Priority Support", price: 4.99, icon: Headphones },
  ];

  if (cart.length === 0)
    return (
      <div className='min-h-screen flex flex-col items-center justify-center text-center px-4'>
        <div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-full p-8 mb-6'>
          <ShoppingBag className='w-24 h-24 text-purple-300' />
        </div>
        <h2 className='text-3xl font-light text-gray-700 mb-4'>
          Your cart is empty
        </h2>
        <p className='text-gray-500 mb-8 max-w-md'>
          Start adding some beautiful items to your cart and they'll appear
          here.
        </p>
        <Link
          href='/products'
          className='bg-[#ba55d3] text-white px-8 py-3 rounded-full hover:bg-[#a847c7] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
          Start Shopping
        </Link>
      </div>
    );

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-light text-gray-800 mb-3'>
            Shopping Cart
          </h1>
          <p className='text-gray-500'>
            Review your items and proceed to checkout
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Section */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Cart Items */}
            <div className='space-y-6'>
              {cart.map((item) => {
                const planPrice = item.price;
                const addonsTotal =
                  item.addons?.reduce((sum, addon) => sum + addon.price, 0) ||
                  0;
                const subtotal = (planPrice + addonsTotal) * item.quantity;

                return (
                  <div
                    key={item.key}
                    className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300'>
                    {/* Product Header */}
                    <div className='flex flex-col md:flex-row justify-between items-start gap-6'>
                      <div className='flex items-start gap-5 flex-1'>
                        {item.image && (
                          <div className='relative'>
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={100}
                              height={100}
                              className='rounded-xl object-cover border-2 border-gray-100'
                            />
                            <div className='absolute -top-2 -right-2 bg-[#ba55d3] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium'>
                              {item.quantity}
                            </div>
                          </div>
                        )}
                        <div className='flex-1'>
                          <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                            {item.name}
                          </h3>
                          {item.plan && (
                            <p className='text-gray-600 text-sm mb-2 bg-purple-50 px-3 py-1 rounded-full inline-block'>
                              {item.plan}
                            </p>
                          )}
                          <p className='text-2xl font-bold text-[#ba55d3]'>
                            ${planPrice.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className='flex items-center gap-3'>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.key,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors'>
                          <Minus className='w-4 h-4 text-gray-600' />
                        </button>
                        <span className='w-12 text-center text-lg font-medium text-gray-700'>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.key, item.quantity + 1)
                          }
                          className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors'>
                          <Plus className='w-4 h-4 text-gray-600' />
                        </button>
                      </div>
                    </div>

                    {/* Addons Section */}
                    <div className='mt-6 bg-gray-50 rounded-xl p-5 border border-gray-200'>
                      <h4 className='font-semibold text-gray-700 mb-4 flex items-center gap-2'>
                        <span>Available Add-ons</span>
                      </h4>
                      <div className='space-y-3'>
                        {availableAddons.map((addon) => {
                          const isAdded = item.addons?.some(
                            (a) => a.id === addon.id
                          );
                          const AddonIcon = addon.icon;

                          return (
                            <div
                              key={addon.id}
                              className='flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-[#ba55d3] transition-colors'>
                              <div className='flex items-center gap-3'>
                                <AddonIcon className='w-5 h-5 text-[#ba55d3]' />
                                <div>
                                  <p className='font-medium text-gray-800'>
                                    {addon.name}
                                  </p>
                                  <p className='text-sm text-gray-500'>
                                    ${addon.price.toFixed(2)}
                                  </p>
                                </div>
                              </div>
                              <button
                                onClick={() =>
                                  updateAddons(item.key, addon, !isAdded)
                                }
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                  isAdded
                                    ? "bg-red-500 text-white hover:bg-red-600 shadow-md"
                                    : "bg-[#ba55d3] text-white hover:bg-[#a847c7] shadow-md hover:shadow-lg"
                                }`}>
                                {isAdded ? "Remove" : "Add"}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Item Footer */}
                    <div className='flex justify-between items-center mt-6 pt-4 border-t border-gray-200'>
                      <button
                        onClick={() => removeFromCart(item.key)}
                        className='flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors font-medium'>
                        <Trash2 className='w-4 h-4' />
                        Remove Item
                      </button>
                      <div className='text-right'>
                        <p className='text-sm text-gray-500'>Item Total</p>
                        <p className='text-xl font-bold text-gray-800'>
                          ${subtotal.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Delivery Options */}
            <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
              <h3 className='text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3'>
                <Truck className='w-6 h-6 text-[#ba55d3]' />
                Delivery Options
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <label
                  className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                    delivery === "standard"
                      ? "border-[#ba55d3] bg-purple-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}>
                  <input
                    type='radio'
                    name='delivery'
                    value='standard'
                    checked={delivery === "standard"}
                    onChange={() => setDelivery("standard")}
                    className='sr-only'
                  />
                  <div className='flex items-center gap-3'>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        delivery === "standard"
                          ? "border-[#ba55d3]"
                          : "border-gray-300"
                      }`}>
                      {delivery === "standard" && (
                        <div className='w-2 h-2 rounded-full bg-[#ba55d3]'></div>
                      )}
                    </div>
                    <div>
                      <p className='font-semibold text-gray-800'>
                        Standard Delivery
                      </p>
                      <p className='text-gray-500 text-sm'>
                        Free • 3–5 business days
                      </p>
                    </div>
                  </div>
                </label>

                <label
                  className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                    delivery === "express"
                      ? "border-[#ba55d3] bg-purple-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}>
                  <input
                    type='radio'
                    name='delivery'
                    value='express'
                    checked={delivery === "express"}
                    onChange={() => setDelivery("express")}
                    className='sr-only'
                  />
                  <div className='flex items-center gap-3'>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        delivery === "express"
                          ? "border-[#ba55d3]"
                          : "border-gray-300"
                      }`}>
                      {delivery === "express" && (
                        <div className='w-2 h-2 rounded-full bg-[#ba55d3]'></div>
                      )}
                    </div>
                    <div>
                      <p className='font-semibold text-gray-800'>
                        Express Delivery
                      </p>
                      <p className='text-gray-500 text-sm'>
                        +$10.00 • 1–2 business days
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Section — Summary */}
          <div className='space-y-6'>
            <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-8'>
              <h2 className='text-2xl font-semibold text-gray-800 mb-6 pb-4 border-b border-gray-200'>
                Order Summary
              </h2>

              <div className='space-y-4 mb-6'>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Subtotal</span>
                  <span className='font-medium text-gray-800'>
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Delivery</span>
                  <span className='font-medium text-gray-800'>
                    {delivery === "standard" ? "Free" : "$10.00"}
                  </span>
                </div>

                {delivery === "express" && (
                  <div className='text-sm text-[#ba55d3] bg-purple-50 px-3 py-2 rounded-lg'>
                    🚀 Express delivery selected
                  </div>
                )}
              </div>

              <div className='border-t border-gray-200 pt-4 mb-6'>
                <div className='flex justify-between items-center text-lg font-bold'>
                  <span className='text-gray-800'>Total Amount</span>
                  <span className='text-2xl text-[#ba55d3]'>
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className='space-y-3'>
                <button
                  onClick={clearCart}
                  className='w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium'>
                  <Trash2 className='w-4 h-4' />
                  Clear Cart
                </button>
                <Link
                  href='/checkout'
                  className='block text-center w-full bg-gradient-to-r from-[#ba55d3] to-[#9c47b5] text-white py-3 rounded-xl hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-semibold shadow-lg'>
                  Proceed to Checkout
                </Link>
              </div>

              <div className='mt-6 text-center'>
                <Link
                  href='/products'
                  className='text-[#ba55d3] hover:text-[#a847c7] font-medium transition-colors'>
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* Security Badge */}
            <div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 text-center border border-purple-100'>
              <Shield className='w-8 h-8 text-[#ba55d3] mx-auto mb-2' />
              <p className='font-medium text-gray-700 mb-1'>Secure Checkout</p>
              <p className='text-sm text-gray-500'>
                Your payment information is protected
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
