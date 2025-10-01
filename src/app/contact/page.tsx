"use client";

import React, { FormEvent } from "react";

export default function ContactPage(): JSX.Element {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle form submission here, e.g., API call
    alert("Message sent!");
  };

  return (
    <section className='w-full bg-gray-50 py-16 px-6'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-12'>
        {/* Left Side: Contact Info */}
        <div className='lg:w-1/2 flex flex-col justify-start gap-6'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>
            Contact <span className='text-purple-600'>Life Alarm Services</span>
          </h1>
          <p className='text-gray-700 leading-relaxed text-lg'>
            Have questions about our Smart Alert Watch or Necklace? Reach out to
            us today! Our team is ready to assist you with product inquiries,
            subscription plans, or general support.
          </p>

          <div className='mt-6 space-y-4 text-gray-700'>
            <div>
              <strong>Phone:</strong>{" "}
              <a
                href='tel:+1234567890'
                className='text-purple-600 hover:underline'>
                +1 234 567 890
              </a>
            </div>
            <div>
              <strong>Email:</strong>{" "}
              <a
                href='mailto:support@lifealarmservices.com'
                className='text-purple-600 hover:underline'>
                support@lifealarmservices.com
              </a>
            </div>
            <div>
              <strong>Address:</strong> 123 Safety Lane, Suite 100, New York,
              USA
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className='lg:w-1/2 bg-white rounded-xl shadow-lg p-8'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
            Send Us a Message
          </h2>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600'
              required
            />
            <input
              type='email'
              placeholder='Your Email'
              className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600'
              required
            />
            <input
              type='text'
              placeholder='Subject'
              className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600'
              required
            />
            <textarea
              placeholder='Message'
              rows={5}
              className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600'
              required></textarea>
            <button
              type='submit'
              className='mt-2 px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition'>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Optional Map Section */}
      <div className='max-w-7xl mx-auto mt-16 rounded-xl overflow-hidden shadow-lg h-80'>
        <iframe
          title='Life Alarm Services Location'
          src='https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed'
          className='w-full h-full'
          allowFullScreen
          loading='lazy'></iframe>
      </div>
    </section>
  );
}
