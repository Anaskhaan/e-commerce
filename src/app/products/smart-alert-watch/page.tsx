"use client";

import Image from "next/image";
import { useState } from "react";

export default function SmartAlertWatchPage() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [bigImage, setBigImage] = useState("/watch.png");

  const smallImages = [
    "/watch.png",
    "/watch-alt1.png",
    "/watch-alt2.png",
    "/watch-alt3.png",
  ];

  return (
    <section className='w-full bg-gray-50 py-16 px-6'>
      {/* Row 1: Small images + Big Image + Title & Plan Selector */}
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start'>
        {/* Small Images */}
        <div className='flex md:flex-col gap-3 justify-center md:justify-start'>
          {smallImages.map((img, idx) => (
            <div
              key={idx}
              className='w-20 h-20 md:w-24 md:h-24 relative rounded-lg overflow-hidden shadow cursor-pointer hover:scale-105 transition-transform duration-300'
              onClick={() => setBigImage(img)}>
              <Image
                src={img}
                alt={`Watch ${idx + 1}`}
                fill
                className='object-contain'
              />
            </div>
          ))}
        </div>

        {/* Big Image */}
        <div className='relative w-64 md:w-96 h-64 md:h-96 rounded-lg overflow-hidden shadow-lg flex-shrink-0'>
          <Image
            src={bigImage}
            alt='Life Alarm Smart Alert Watch'
            fill
            className='object-contain transition-transform duration-300 hover:scale-105'
          />
        </div>

        {/* Title + Plan Selector */}
        <div className='flex-1 flex flex-col justify-start'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 leading-tight'>
            Life Alert Watch - Best Medical Alert Smartwatch for Seniors
          </h1>
          <p className='mt-4 text-gray-600'>
            Stay safe with the Life Alarm Smart Alert Watch. A trusted medical
            life alert watch, the #1 smartwatch for seniors with GPS & fall
            detection. Order now!
          </p>

          {/* Plan Selector */}
          <div className='mt-6 flex gap-4'>
            <button
              onClick={() => setSelectedPlan("monthly")}
              className={`px-4 py-2 rounded-lg transition ${
                selectedPlan === "monthly"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-purple-100"
              }`}>
              Monthly Plan
            </button>
            <button
              onClick={() => setSelectedPlan("one-time")}
              className={`px-4 py-2 rounded-lg transition ${
                selectedPlan === "one-time"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-purple-100"
              }`}>
              One-Time Payment
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Description + Features */}
      <div className='max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-2xl font-semibold text-gray-800'>Description</h2>
          <p className='mt-4 text-gray-600 leading-relaxed'>
            The Life Alarm Smart Alert Watch is a trusted medical life alert
            watch for seniors in the USA. Lightweight, comfortable, and easy to
            use, it combines advanced safety features like fall detection, GPS
            tracking, and two-way communication into a sleek wearable design.
          </p>
        </div>
        <div>
          <h2 className='text-2xl font-semibold text-gray-800'>Key Features</h2>
          <ul className='mt-4 space-y-2 text-gray-600 list-disc list-inside'>
            <li>Fall Detection: Automatic alerts when a fall occurs.</li>
            <li>GPS Location & Geofencing: Real-time tracking for safety.</li>
            <li>
              Two-Way Communication: Talk to emergency responders directly.
            </li>
            <li>Medical Alert Notifications: Instant alerts to caregivers.</li>
            <li>Long Battery Life & Water Resistance</li>
            <li>Nationwide 4G Coverage</li>
          </ul>
        </div>
      </div>

      {/* Row 3: Comparison Table */}
      <div className='max-w-7xl mx-auto mt-16 overflow-x-auto'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
          Plan Comparison
        </h2>
        <table className='w-full border-collapse border border-gray-200 text-gray-700'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='border p-3 text-left'>Feature</th>
              <th className='border p-3 text-center'>Monthly Plan</th>
              <th className='border p-3 text-center'>One-Time Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr className='hover:bg-gray-50 transition'>
              <td className='border p-3'>24/7 Monitoring</td>
              <td className='border p-3 text-center'>✔</td>
              <td className='border p-3 text-center'>Optional</td>
            </tr>
            <tr className='hover:bg-gray-50 transition'>
              <td className='border p-3'>Fall Detection</td>
              <td className='border p-3 text-center'>✔</td>
              <td className='border p-3 text-center'>✔</td>
            </tr>
            <tr className='hover:bg-gray-50 transition'>
              <td className='border p-3'>GPS Tracking</td>
              <td className='border p-3 text-center'>✔</td>
              <td className='border p-3 text-center'>✔</td>
            </tr>
            <tr className='hover:bg-gray-50 transition'>
              <td className='border p-3'>Subscription Support</td>
              <td className='border p-3 text-center'>✔</td>
              <td className='border p-3 text-center'>Optional</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Row 4: CTA */}
      <div className='max-w-7xl mx-auto mt-16 flex flex-col md:flex-row gap-4 justify-center md:justify-start'>
        <a
          href='tel:+1234567890'
          className='px-6 py-3 rounded-lg bg-purple-600 text-white text-center hover:bg-purple-700 transition'>
          Call Now
        </a>
        <a
          href='#purchase'
          className='px-6 py-3 rounded-lg bg-gray-200 text-gray-800 text-center hover:bg-purple-100 transition'>
          Purchase
        </a>
      </div>
    </section>
  );
}
