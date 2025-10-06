"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Smart Alert Watch",
      desc: "Transform your living space with cutting-edge automation solutions that simplify daily life.",
      image: "/watch.png",
      link: "/products/smart-alert-watch",
    },
    {
      id: 2,
      name: "Smart Alert Necklace",
      desc: "Track, analyze, and optimize your energy usage for a greener and more efficient lifestyle.",
      image: "/nacklace.png",
      link: "/products/smart-alert-nacklace",
    },
  ];

  return (
    <section className='w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-800 dark:text-gray-100'>
      {/* Hero Section */}
      <div className='relative overflow-hidden py-20 px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between'>
        {/* Text */}
        <div className='max-w-xl space-y-6 z-10'>
          <h1 className='text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500'>
            Explore Our Premium Products
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
            Discover our innovative range of solutions designed to elevate your
            lifestyle and business efficiency.
          </p>
          <div className='flex items-center gap-3'>
            <Star className='text-yellow-400 w-6 h-6' />
            <p className='text-gray-500 dark:text-gray-400'>
              Trusted by thousands of users worldwide
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className='mt-10 lg:mt-0 relative'>
          <div className='absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-indigo-500/30 blur-3xl rounded-full -z-10' />
          <Image
            src='/emotions-catching2.webp'
            alt='Products Hero'
            width={600}
            height={400}
            className='rounded-2xl shadow-2xl object-cover'
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className='px-6 sm:px-10 lg:px-20 py-16'>
        <h2 className='text-3xl font-semibold text-center mb-12 text-gray-800 dark:text-gray-100'>
          Our Featured Products
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {products.map((product) => (
            <div
              key={product.id}
              className='group relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300'>
              <div className='w-full overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-slate-700 flex justify-center items-center h-64'>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                  className='object-contain transition-transform duration-500 group-hover:scale-105'
                />
              </div>

              <div className='p-6 space-y-3'>
                <h3 className='text-xl font-semibold'>{product.name}</h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                  {product.desc}
                </p>
                <Link
                  href={product.link}
                  className='inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mt-3 group-hover:underline'>
                  View Details
                  <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
