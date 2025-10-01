"use client";

import { useState, useEffect } from "react";
import { User, Quote, Star, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const TestimonialsSlider = () => {
  const testimonials = [
    {
      message:
        "Medical Alert systems give me peace of mind knowing my mom is safe at home.",
      name: "Sarah M.",
      role: "Daughter & Caregiver",
      rating: 5,
    },
    {
      message:
        "The Smart Alert Watch is stylish and comfortable, yet it provides critical protection.",
      name: "John K.",
      role: "Senior User",
      rating: 5,
    },
    {
      message:
        "Automatic fall detection saved my father's life. We are forever grateful!",
      name: "Aisha R.",
      role: "Family Member",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  return (
    <section className='relative w-full bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-24 px-6 overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute top-10 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className='absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className='absolute top-1/2 left-1/3 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-30'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className='relative max-w-6xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
            Trusted by Families
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Hear from real customers who found peace of mind with Life Alarm
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Testimonial Slider */}
          <div className='relative'>
            <div
              className='relative h-96'
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}>
              <AnimatePresence mode='wait' custom={1}>
                <motion.div
                  key={current}
                  custom={1}
                  variants={testimonialVariants}
                  initial='enter'
                  animate='center'
                  exit='exit'
                  className='absolute inset-0'>
                  <div className='bg-white/80 backdrop-blur-xl border-2 border-white/50 rounded-3xl p-8 shadow-2xl h-full flex flex-col'>
                    {/* Quote Icon */}
                    <div className='mb-6'>
                      <Quote className='w-12 h-12 text-purple-500/30' />
                    </div>

                    {/* Testimonial Text */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className='text-gray-700 text-lg leading-relaxed flex-1 italic mb-6'>
                      "{testimonials[current].message}"
                    </motion.p>

                    {/* Rating Stars */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className='flex mb-4'>
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='w-5 h-5 fill-yellow-400 text-yellow-400'
                        />
                      ))}
                    </motion.div>

                    {/* User Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className='flex items-center'>
                      <div className='w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 shadow-lg'>
                        <User size={24} className='text-white' />
                      </div>
                      <div>
                        <div className='font-semibold text-gray-900 text-lg'>
                          {testimonials[current].name}
                        </div>
                        <div className='text-gray-600 text-sm'>
                          {testimonials[current].role}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className='flex items-center justify-between mt-6'>
              <div className='flex space-x-2'>
                {testimonials.map((_, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === current
                        ? "bg-purple-600 scale-125"
                        : "bg-gray-300 hover:bg-purple-400"
                    }`}
                    onClick={() => setCurrent(idx)}
                  />
                ))}
              </div>

              <div className='flex space-x-3'>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(147, 51, 234, 0.1)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className='p-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300'
                  onClick={prevTestimonial}>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 19l-7-7 7-7'
                    />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(147, 51, 234, 0.1)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className='p-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300'
                  onClick={nextTestimonial}>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Conclusion Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className='relative'>
            <div className='bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden'>
              {/* Background Pattern */}
              <div className='absolute top-0 right-0 opacity-10'>
                <Heart className='w-32 h-32' />
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-3xl font-bold mb-6 relative z-10'>
                Peace of Mind Guaranteed
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='text-purple-100 text-lg leading-relaxed mb-6 relative z-10'>
                Ensure your loved ones' safety with Life Alarm, the trusted
                medical alert systems with automatic fall detection and 24/7
                emergency monitoring. The Life Alarm Smart Alert Necklace and
                Watch provide reliable protection, giving families peace of mind
                at home or on the go.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='text-purple-100 text-lg leading-relaxed relative z-10'>
                With clear Life Alarm costs and flexible plans, protecting your
                family has never been easier. Don't wait to choose the device
                that fits their lifestyle and stay prepared for any medical
                emergency.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.6 }}
                className='mt-8 bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative z-10'>
                Get Protected Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
