"use client";

import { useState } from "react";
import { ChevronDown, Sparkles, HeartPulse } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

export const FAQs: React.FC = () => {
  const faqData: FAQ[] = [
    {
      question: "What is the Life Alarm Smart Alert system?",
      answer:
        "The Life Alarm Smart Alert system is a trusted medical alert system designed to keep seniors and people with medical conditions safe. Devices like the necklace and watch offer automatic fall detection, two-way voice communication, and GPS tracking, so help is always available during a medical emergency.",
    },
    {
      question: "How much does Life Alarm cost?",
      answer:
        "The cost of Medical Alert systems depends on the device and subscription plan. Options include monthly fees for full 24/7 monitoring or a one-time equipment fee. All charges, including activation fees, are transparent, helping families choose a plan that fits their budget.",
    },
    {
      question:
        "Can Medical Life Alarm Alert Systems detect falls automatically?",
      answer:
        "Yes, both the Life Alarm necklace and watch have automatic fall detection. If a fall occurs, trained responders are notified immediately along with your emergency contacts, ensuring fast assistance and peace of mind.",
    },
    {
      question: "Are the devices waterproof?",
      answer:
        "Yes, both devices are water-resistant, allowing seniors to wear them safely in showers or during light rain. Continuous protection is maintained at all times.",
    },
    {
      question: "Can Medical Life Alarm Alert be used outside the home?",
      answer:
        "Absolutely. With GPS tracking and mobile system support, both devices work anywhere. Seniors remain protected while walking, traveling, or performing outdoor activities.",
    },
    {
      question: "What happens when the alert button is pressed?",
      answer:
        "When the alert button is pressed, trained responders communicate through two-way voice. They assess the situation and notify your emergency contacts or authorities if needed, providing immediate assistance during any medical emergency.",
    },
    {
      question: "Who should use Life Alarm Alert devices?",
      answer:
        "Medical Life Alarm Alert is ideal for seniors, people with chronic medical conditions, or anyone who may need quick access to emergency assistance. The devices are lightweight, easy to use, and designed to provide independence while ensuring safety.",
    },
    {
      question: "Are there monthly fees for Life Alarm Devices?",
      answer:
        "Yes, monthly plans cover 24/7 monitoring, mobile system support, and alert system costs. For families who prefer a one-time payment, there are also plans with only an equipment fee.",
    },
    {
      question: "How do I set up the Life Alarm Smart Alert system?",
      answer:
        "Setup is simple. Activate your necklace or watch, connect it to your emergency contacts, and the device is ready. No technical skills are required, making protection fast and easy.",
    },
    {
      question:
        "Why is Life Alarm Alert Devices better than other medical alert systems?",
      answer:
        "Life Alarm combines automatic fall detection, GPS, mobile system support, and 24/7 monitoring with clear and transparent cost. Families trust it to provide peace of mind, while seniors enjoy independence and safety at home or on the go.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const answerVariants: Variants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: 16,
      transition: { type: "spring", stiffness: 200, damping: 25 },
    },
    exit: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section className='relative w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 px-6 overflow-hidden'>
      {/* Background Decorations */}
      <div className='absolute top-10 left-10 opacity-10'>
        <Sparkles size={120} className='text-purple-500' />
      </div>
      <div className='absolute bottom-10 right-10 opacity-10'>
        <HeartPulse size={120} className='text-blue-500' />
      </div>

      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute -top-24 -right-24 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-30'
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className='absolute -bottom-24 -left-24 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-30'
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className='max-w-4xl mx-auto relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
            Frequently Asked Questions
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Get all the answers to the most common questions about our Life
            Alarm system
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='space-y-4'>
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.01,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              className='group'>
              <motion.div
                className={`bg-white/80 backdrop-blur-xl border-2 rounded-2xl shadow-xl overflow-hidden ${
                  activeIndex === index
                    ? "border-purple-500 shadow-purple-200"
                    : "border-white/50 shadow-gray-200 hover:border-purple-300"
                } transition-all duration-300`}
                whileTap={{ scale: 0.99 }}>
                <button
                  className='w-full px-6 py-5 flex justify-between items-center text-left group'
                  onClick={() => toggleFAQ(index)}>
                  <motion.span
                    className={`text-lg font-semibold pr-4 transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-purple-700"
                        : "text-gray-800 group-hover:text-purple-600"
                    }`}
                    layout>
                    {faq.question}
                  </motion.span>
                  <motion.div
                    animate={{
                      rotate: activeIndex === index ? 180 : 0,
                      scale: activeIndex === index ? 1.1 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`flex-shrink-0 p-2 rounded-full transition-colors duration-300 ${
                      activeIndex === index
                        ? "bg-purple-100 text-purple-600"
                        : "bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600"
                    }`}>
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key='content'
                      variants={answerVariants}
                      initial='hidden'
                      animate='visible'
                      exit='exit'
                      className='overflow-hidden'>
                      <div className='px-6 pb-5'>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                          className='text-gray-700 leading-relaxed border-l-4 border-purple-400 pl-4'>
                          {faq.answer}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          viewport={{ once: true }}
          className='text-center mt-16'>
          <p className='text-gray-600 text-lg mb-4'>
            Still have questions? We&apos;re here to help 24/7
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px -10px rgba(147, 51, 234, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className='bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300'>
            Contact Our Support Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
