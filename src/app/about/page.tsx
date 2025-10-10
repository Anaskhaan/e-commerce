"use client";

import Image from "next/image";
import React from "react";

export default function AboutPage(): JSX.Element {
  return (
    <section className='w-full bg-gray-50 py-16 px-6'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center'>
        {/* Left Side: Image */}
        <div className='relative w-full lg:w-1/2 h-80 lg:h-[32rem] rounded-xl overflow-hidden shadow-lg'>
          <Image
            src='/emotions-catching2.webp' // replace with company image
            alt='Life Alarm Services'
            fill
            className='object-cover'
          />
        </div>

        {/* Right Side: Content */}
        <div className='lg:w-1/2 flex flex-col justify-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 leading-tight'>
            About <span className='text-purple-600'>Life Alarm Services</span>
          </h1>
          <p className='mt-6 text-gray-700 text-lg leading-relaxed'>
            Life Alarm Services is dedicated to providing advanced medical alert
            solutions for seniors and individuals who want to ensure the safety
            of their loved ones. Our mission is to deliver reliable,
            easy-to-use, and modern devices that provide peace of mind around
            the clock.
          </p>

          <h2 className='mt-8 text-2xl font-semibold text-gray-800'>
            Our Products & Services
          </h2>
          <p className='mt-4 text-gray-700 leading-relaxed'>
            We specialize in two flagship products designed to keep seniors
            safe:
          </p>

          <ul className='mt-4 list-disc list-inside space-y-2 text-gray-700'>
            <li>
              <strong>Smart Alert Watch:</strong> Stylish, lightweight, and
              comfortable, this watch features automatic fall detection, GPS
              tracking, two-way communication, and 24/7 emergency monitoring.
            </li>
            <li>
              <strong>Smart Alert Necklace:</strong> A wearable pendant that
              provides the same advanced safety features as the watch, offering
              peace of mind with a discreet and elegant design.
            </li>
          </ul>

          <p className='mt-6 text-gray-700 leading-relaxed'>
            At Life Alarm Services, we combine technology with care. Our devices
            are supported by a nationwide professional monitoring system,
            ensuring help is always just a button press away. With transparent
            pricing, flexible subscription plans, and nationwide coverage, we
            make it easy for families to protect their loved ones.
          </p>

          <div className='mt-8 flex gap-4'>
            <a
              href='/products/smart-alert-watch'
              className='px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition'>
              Learn About Watch
            </a>
            <a
              href='/products/smart-alert-nacklace'
              className='px-6 py-3 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition'>
              Learn About Necklace
            </a>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className='max-w-7xl mx-auto mt-16 bg-white rounded-xl shadow-lg p-8'>
        <h2 className='text-3xl font-semibold text-gray-800'>Our Mission</h2>
        <p className='mt-4 text-gray-700 leading-relaxed'>
          Our mission at Life Alarm Services is simple: to provide modern,
          reliable, and user-friendly medical alert solutions that empower
          seniors and individuals to live independently while giving families
          confidence and peace of mind. Safety should never be compromised, and
          with our products, help is always within reach.
        </p>
      </div>
    </section>
  );
}
