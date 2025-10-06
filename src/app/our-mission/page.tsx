"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MissionPage() {
  return (
    <section className='relative w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 px-6 overflow-hidden'>
      {/* Decorative Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute top-10 left-10 w-56 h-56 bg-purple-200 rounded-full blur-3xl opacity-25'
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className='absolute bottom-10 right-10 w-56 h-56 bg-blue-200 rounded-full blur-3xl opacity-25'
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className='max-w-6xl mx-auto relative z-10 space-y-24'>
        {/* Mission Section */}
        <div className='text-center'>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent mb-6'>
            Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            At{" "}
            <span className='font-semibold text-purple-700'>
              Life Alarm Services
            </span>
            , our mission goes beyond technology. We are committed to protecting
            lives, empowering independence, and giving families peace of mind.
            Our goal is to create reliable, senior-friendly safety solutions
            that ensure help is always just one press away.
          </motion.p>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-gray-200'>
          <h2 className='text-3xl font-bold text-center text-purple-700 mb-10'>
            Our Core Values
          </h2>

          <div className='grid md:grid-cols-3 gap-10'>
            {[
              {
                icon: ShieldCheck,
                title: "Safety First",
                desc: "Every device is designed to provide quick access to help when it’s needed most.",
              },
              {
                icon: HeartPulse,
                title: "Independence with Confidence",
                desc: "We believe everyone deserves the freedom to live without fear, knowing support is always close at hand.",
              },
              {
                icon: Clock,
                title: "Trust & Reliability",
                desc: "Families rely on us during critical moments, and we deliver dependable solutions they can count on.",
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className='bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-lg text-center border border-purple-100'>
                <val.icon className='mx-auto text-purple-600 mb-4' size={48} />
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  {val.title}
                </h3>
                <p className='text-gray-600'>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innovation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='flex flex-col md:flex-row items-center gap-10'>
          <div className='flex-1 space-y-6'>
            <h2 className='text-3xl font-bold text-purple-700'>
              Empowering Lives Through Innovation
            </h2>
            <p className='text-gray-700 leading-relaxed'>
              Our innovative devices, including the{" "}
              <strong>Life Alarm Smart Alert Watch</strong>
              and the <strong>Life Alarm Smart Alert Necklace</strong>, are
              built to keep you safe and connected during emergencies. With
              simple, easy-to-use features, they ensure that whether you’re at
              home or on the go, help is never out of reach.
            </p>
            <p className='text-gray-700 leading-relaxed'>
              These smart safety solutions represent more than just technology —
              they are a promise to protect what matters most:{" "}
              <strong>you and your loved ones</strong>.
            </p>
          </div>
          <div className='flex-1 relative'>
            <div className='absolute -inset-4 bg-gradient-to-r from-purple-300 to-blue-300 rounded-3xl blur-3xl opacity-30' />
            <Image
              src='/emotions-catching.webp'
              alt='Life Alarm Devices'
              width={500}
              height={400}
              className='relative z-10 rounded-3xl shadow-xl object-cover'
            />
          </div>
        </motion.div>

        {/* Why Mission Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-3xl shadow-xl p-10 text-center space-y-6'>
          <h2 className='text-3xl font-bold'>Why Our Mission Matters</h2>
          <p className='max-w-3xl mx-auto text-lg leading-relaxed opacity-90'>
            Every second counts in an emergency. That’s why we combine
            innovation with compassion, helping seniors and families replace
            fear with confidence. Our mission is not only to save lives but also
            to enable a lifestyle of freedom and security.
          </p>
        </motion.div>

        {/* Join Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className='text-center space-y-6'>
          <h2 className='text-3xl font-bold text-purple-700'>
            Join Us in Building a Safer Tomorrow
          </h2>
          <p className='text-gray-700 max-w-2xl mx-auto'>
            Life Alarm Services is more than a provider; we are your partner in
            protection. Whether you want safety for yourself or peace of mind
            for a loved one, we are here to help.
          </p>

          <div className='flex flex-col sm:flex-row justify-center gap-4 pt-4'>
            <Link href='/products/smart-alert-watch' passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                className='flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition'>
                Discover the Smart Alert Watch <ArrowRight size={18} />
              </motion.a>
            </Link>

            <Link href='/products/smart-alert-nacklace' passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                className='flex items-center justify-center gap-2 bg-white text-purple-700 border border-purple-300 px-8 py-4 rounded-xl font-semibold shadow-sm hover:bg-purple-50 transition'>
                Explore the Smart Alert Necklace <ArrowRight size={18} />
              </motion.a>
            </Link>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='text-center text-gray-600 text-lg pt-10'>
          Your safety is our mission — because every second counts.
        </motion.p>
      </div>
    </section>
  );
}
