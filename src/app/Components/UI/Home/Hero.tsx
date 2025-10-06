"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <section className='relative w-full min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Mirrored Background Layer */}
      <div
        className='absolute inset-0 bg-cover bg-center scale-x-[-1]'
        style={{ backgroundImage: "url('/hero_banner.webp')" }}></div>

      {/* Soft Overlay */}
      <div className='absolute inset-0 bg-black/20'></div>

      {/* Centered Content */}
      <div className='relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-16 px-6'>
        {/* Left Side Content */}
        <div className='text-center md:text-left max-w-xl flex-shrink-0'>
          <h1 className='text-4xl md:text-5xl font-bold text-white leading-tight'>
            Life Alarm{" "}
            <span className='text-purple-400'>
              Trusted Medical Alert Systems for Seniors
            </span>
          </h1>
          <p className='mt-4 text-lg text-gray-200'>
            Keep your loved ones safe with Life Alarm, the trusted medical alert
            systems with fall detection and 24/7 monitoring. Get peace of mind
            today!
          </p>
          <div className='mt-6 flex justify-center md:justify-start'>
            <button className='bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition'>
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Products */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl'>
          {/* Product Card 1 */}
          <div
            onClick={() => router.push("/products/smart-alert-watch")}
            className='relative bg-white/20 backdrop-blur-2xl rounded-2xl border border-white/20 p-5 hover:shadow-2xl transition duration-300 flex flex-col items-center cursor-pointer'>
            <div className='relative w-full h-56 mb-4 overflow-hidden rounded-lg'>
              <Image
                src='/watch.png'
                alt='Smart Alert Watch'
                fill
                className='object-contain transition-transform duration-500 ease-in-out hover:scale-105'
              />
            </div>
            <h3 className='mt-2 text-lg font-semibold text-white text-center'>
              Smart Alert Watch
            </h3>
            <p className='text-gray-200 text-sm mt-1 text-center'>
              High-quality product with great features.
            </p>
          </div>

          {/* Product Card 2 */}
          <div
            onClick={() => router.push("/products/smart-alert-nacklace")}
            className='relative bg-white/20 backdrop-blur-2xl rounded-2xl border border-white/20 p-5 hover:shadow-2xl transition duration-300 flex flex-col items-center cursor-pointer'>
            <div className='relative w-full h-56 mb-4 overflow-hidden rounded-lg'>
              <Image
                src='/nacklace.png'
                alt='Smart Alert Necklace'
                fill
                className='object-contain transition-transform duration-500 ease-in-out hover:scale-105'
              />
            </div>
            <h3 className='mt-2 text-lg font-semibold text-white text-center'>
              Smart Alert Necklace
            </h3>
            <p className='text-gray-200 text-sm mt-1 text-center'>
              Stylish, durable, and perfect for daily use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
