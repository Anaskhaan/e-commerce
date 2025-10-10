// "use client";

// import React from "react";
// import { Calendar, CreditCard, Check, Star, Shield, Zap } from "lucide-react";

// export const PlansPricing: React.FC = () => {
//   return (
//     <section className='relative w-full bg-gradient-to-br from-slate-50 via-white to-purple-50 py-24 px-6 overflow-hidden'>
//       {/* Background Elements */}
//       <div className='absolute top-0 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl'></div>
//       <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl'></div>
//       <div className='absolute top-1/2 left-1/4 w-48 h-48 bg-pink-200/20 rounded-full blur-2xl'></div>

//       <div className='relative max-w-6xl mx-auto'>
//         {/* Section Header */}
//         <div className='text-center mb-20'>
//           <div className='inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6'>
//             <Star className='w-4 h-4 fill-purple-500' />
//             Transparent Pricing
//           </div>
//           <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
//             Choose Your Protection Plan
//           </h2>
//           <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
//             Flexible options designed to keep your loved ones safe with no
//             hidden fees
//           </p>
//         </div>

//         {/* Plans Grid */}
//         <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
//           {/* Monthly Plan - Premium Card */}
//           <div className='relative group'>
//             <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity'></div>
//             <div className='relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300'>
//               {/* Header */}
//               <div className='text-center mb-8'>
//                 <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg'>
//                   <Calendar className='w-8 h-8 text-white' />
//                 </div>
//                 <h3 className='text-3xl font-bold text-gray-900 mb-2'>
//                   Monthly Plan
//                 </h3>
//                 <div className='flex items-center justify-center gap-2 text-gray-600'>
//                   <Shield className='w-5 h-5 text-green-500' />
//                   <span className='font-semibold'>Most Popular</span>
//                 </div>
//               </div>

//               {/* Features */}
//               <div className='space-y-4 mb-8'>
//                 <div className='flex items-center gap-3 text-gray-700'>
//                   <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center'>
//                     <Check className='w-4 h-4 text-green-600' />
//                   </div>
//                   <span className='font-medium'>
//                     Full device access & 24/7 monitoring
//                   </span>
//                 </div>
//                 <div className='flex items-center gap-3 text-gray-700'>
//                   <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center'>
//                     <Check className='w-4 h-4 text-green-600' />
//                   </div>
//                   <span className='font-medium'>Automatic fall detection</span>
//                 </div>
//                 <div className='flex items-center gap-3 text-gray-700'>
//                   <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center'>
//                     <Check className='w-4 h-4 text-green-600' />
//                   </div>
//                   <span className='font-medium'>
//                     GPS tracking & mobile support
//                   </span>
//                 </div>
//                 <div className='flex items-center gap-3 text-gray-700'>
//                   <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center'>
//                     <Check className='w-4 h-4 text-green-600' />
//                   </div>
//                   <span className='font-medium'>
//                     Transparent monthly billing
//                   </span>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <button className='w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300'>
//                 Start Monthly Protection
//               </button>
//             </div>
//           </div>

//           {/* One-Time Payment Plan - Premium Card */}
//           <div className='relative group'>
//             <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity'></div>
//             <div className='relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300'>
//               {/* Header */}
//               <div className='text-center mb-8'>
//                 <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg'>
//                   <CreditCard className='w-8 h-8 text-white' />
//                 </div>
//                 <h3 className='text-3xl font-bold text-gray-900 mb-2'>
//                   One-Time Payment
//                 </h3>
//                 <div className='flex items-center justify-center gap-2 text-gray-600'>
//                   <Zap className='w-5 h-5 text-blue-500' />
//                   <span className='font-semibold'>Best Value</span>
//                 </div>
//               </div>

//               {/* Features */}
//               <div className='space-y-4 mb-8'>
//                 <div className='flex items-center gap-3 text-gray-700'>
//                   <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center'>
//                     <Check className='w-4 h-4 text-blue-600' />
//                   </div>
//                   <span className='font-medium'>Lifetime device ownership</span>
//                 </div>
//                 <div className='flex items-center gap-3 text-gray-700'>
//                   <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center'>
//                     <Check className='w-4 h-4 text-blue-600' />
//                   </div>
//                   <span className='font-medium'>
//                     Optional monitoring subscription
//                   </span>
//                 </div>
//                 <div className='flex items-center gap-3 text-gray-700'>
//                   <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center'>
//                     <Check className='w-4 h-4 text-blue-600' />
//                   </div>
//                   <span className='font-medium'>No hidden activation fees</span>
//                 </div>
//                 <div className='flex items-center gap-3 text-gray-700'>
//                   <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center'>
//                     <Check className='w-4 h-4 text-blue-600' />
//                   </div>
//                   <span className='font-medium'>Family sharing options</span>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <button className='w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300'>
//                 Get Lifetime Device
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Additional Information */}
//         <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-100 max-w-4xl mx-auto'>
//           <div className='text-center mb-8'>
//             <h4 className='text-2xl font-bold text-gray-900 mb-4'>
//               Important Information
//             </h4>
//             <p className='text-gray-600 text-lg'>
//               Everything you need to know about our pricing and plans
//             </p>
//           </div>

//           <div className='grid md:grid-cols-2 gap-8'>
//             <div className='space-y-4'>
//               <div className='flex items-start gap-3'>
//                 <div className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></div>
//                 <p className='text-gray-700'>
//                   <strong>Life Alarm cost</strong> varies by device and plan
//                   selection
//                 </p>
//               </div>
//               <div className='flex items-start gap-3'>
//                 <div className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></div>
//                 <p className='text-gray-700'>
//                   Choose between{" "}
//                   <strong>Life Alarm Smart Alert Necklace</strong> or{" "}
//                   <strong>Watch</strong> based on preference
//                 </p>
//               </div>
//             </div>
//             <div className='space-y-4'>
//               <div className='flex items-start gap-3'>
//                 <div className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></div>
//                 <p className='text-gray-700'>
//                   <strong>Discounts available</strong> for multiple devices and
//                   family plans
//                 </p>
//               </div>
//               <div className='flex items-start gap-3'>
//                 <div className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></div>
//                 <p className='text-gray-700'>
//                   <strong>30-day money-back guarantee</strong> on all purchases
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import React, { useState } from "react";
import {
  Calendar,
  CreditCard,
  Check,
  Star,
  Shield,
  Zap,
  X,
} from "lucide-react";
import Image from "next/image";
import { useCart } from "../../../context/CartContext"; // make sure you have this

export const PlansPricing = () => {
  const { addToCart } = useCart(); // assuming your CartContext has addToCart()
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleAddToCart = () => {
    if (!selectedDevice) return alert("Please select a device first!");

    const item = {
      id: `${selectedPlan}-${selectedDevice}`,
      name: `${selectedPlan} - ${selectedDevice}`,
      price: selectedPlan === "Monthly Plan" ? 29.99 : 299.99, // example
      image:
        selectedDevice === "Smart Alert Watch" ? "/watch.png" : "/necklace.png",
    };
    addToCart(item);
    setShowModal(false);
    setSelectedDevice(null);
  };

  return (
    <section className='relative w-full bg-gradient-to-br from-slate-50 via-white to-purple-50 py-24 px-6 overflow-hidden'>
      {/* Background */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl'></div>

      <div className='relative max-w-6xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6'>
            <Star className='w-4 h-4 fill-purple-500' />
            Transparent Pricing
          </div>
          <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
            Choose Your Protection Plan
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Flexible options designed to keep your loved ones safe with no
            hidden fees
          </p>
        </div>

        {/* Plans Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
          {/* Monthly Plan */}
          <div className='relative group'>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity'></div>
            <div className='relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300'>
              <div className='text-center mb-8'>
                <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg'>
                  <Calendar className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-3xl font-bold text-gray-900 mb-2'>
                  Monthly Plan
                </h3>
                <div className='flex items-center justify-center gap-2 text-gray-600'>
                  <Shield className='w-5 h-5 text-green-500' />
                  <span className='font-semibold'>Most Popular</span>
                </div>
              </div>

              <div className='space-y-4 mb-8'>
                {[
                  "Full device access & 24/7 monitoring",
                  "Automatic fall detection",
                  "GPS tracking & mobile support",
                  "Transparent monthly billing",
                ].map((feature) => (
                  <div
                    key={feature}
                    className='flex items-center gap-3 text-gray-700'>
                    <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center'>
                      <Check className='w-4 h-4 text-green-600' />
                    </div>
                    <span className='font-medium'>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handlePlanClick("Monthly Plan")}
                className='w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300'>
                Start Monthly Protection
              </button>
            </div>
          </div>

          {/* One-Time Plan */}
          <div className='relative group'>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity'></div>
            <div className='relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300'>
              <div className='text-center mb-8'>
                <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg'>
                  <CreditCard className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-3xl font-bold text-gray-900 mb-2'>
                  One-Time Payment
                </h3>
                <div className='flex items-center justify-center gap-2 text-gray-600'>
                  <Zap className='w-5 h-5 text-blue-500' />
                  <span className='font-semibold'>Best Value</span>
                </div>
              </div>

              <div className='space-y-4 mb-8'>
                {[
                  "Lifetime device ownership",
                  "Optional monitoring subscription",
                  "No hidden activation fees",
                  "Family sharing options",
                ].map((feature) => (
                  <div
                    key={feature}
                    className='flex items-center gap-3 text-gray-700'>
                    <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center'>
                      <Check className='w-4 h-4 text-blue-600' />
                    </div>
                    <span className='font-medium'>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handlePlanClick("One-Time Payment")}
                className='w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300'>
                Get Lifetime Device
              </button>
            </div>
          </div>
        </div>

        {/* Device Selection Modal */}
        {showModal && (
          <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
            <div className='bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl'>
              <button
                onClick={() => setShowModal(false)}
                className='absolute top-4 right-4 text-gray-400 hover:text-gray-600'>
                <X className='w-6 h-6' />
              </button>

              <h3 className='text-2xl font-bold mb-4 text-center text-gray-900'>
                Select Your Device
              </h3>
              <div className='flex gap-4 justify-center mb-8'>
                {["Smart Alert Watch", "Smart Alert Nacklace"].map((device) => (
                  <div
                    key={device}
                    onClick={() => setSelectedDevice(device)}
                    className={`cursor-pointer border-2 rounded-2xl p-4 flex flex-col items-center w-40 transition-all ${
                      selectedDevice === device
                        ? "border-purple-500 shadow-lg"
                        : "border-gray-200"
                    }`}>
                    <Image
                      src={
                        device === "Smart Alert Watch"
                          ? "/watch.png"
                          : "/nacklace.png"
                      }
                      alt={device}
                      width={80}
                      height={80}
                    />
                    <p className='mt-2 font-medium text-gray-800'>{device}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={handleAddToCart}
                className='w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-2xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all'>
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
