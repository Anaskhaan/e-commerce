"use client";

import {
  Watch,
  Smartphone,
  Heart,
  ShieldCheck,
  MapPin,
  Phone,
  ShoppingCart,
  CheckCircle,
  Bell,
  Users,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <main className='bg-white text-gray-800'>
      {/* Hero */}
      <section
        className='relative bg-cover bg-center text-white py-20 px-6 text-center'
        style={{
          backgroundImage: "url('/emotions-catching3.webp')",
        }}>
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/60 backdrop-blur-sm'></div>

        {/* Content */}
        <div className='relative max-w-3xl mx-auto'>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-4 leading-tight'>
            How It Works — Simple, Safe & Reliable
          </h1>
          <p className='text-lg md:text-xl text-gray-200'>
            Life Alarm makes personal safety easy — from choosing your plan to
            getting emergency help. Clear, simple, and built for seniors and
            families.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className='max-w-7xl mx-auto py-20 px-6 space-y-28'>
        {/* Step Block Component */}
        <StepBlock
          step='1'
          title='Choose Your Device & Plan'
          text='Start by selecting the perfect device and subscription that fits your needs.'
          image='/chooseplan.webp'
          list={[
            { icon: <Watch />, text: "Life Alarm Smart Alert Watch" },
            { icon: <Heart />, text: "Life Alarm Smart Alert Necklace" },
          ]}
          details={
            <>
              <h4 className='font-semibold text-gray-900 mt-6'>Plans:</h4>
              <ul className='list-disc pl-6 mt-2 space-y-1 text-gray-700'>
                <li>911 Plan — $24.95/month: Directly calls 911</li>
                <li>
                  Family & Friends Plan — $35/month: Calls family first, then
                  911 if unreachable. Includes GPS & Geofencing app.
                </li>
                <li>
                  24/7 Monitoring Center Plan — $42/month: Professional team
                  dispatches EMS and notifies family.
                </li>
                <li>
                  Purchase Device Plan — $134.95 one-time: Calls 911 only.
                </li>
              </ul>
              <p className='text-gray-700 mt-4'>
                Optional Add-ons:
                <br />• Fall Detection — $10/month
                <br />• Lifetime Replacement Protection — $3/month
              </p>
            </>
          }
        />

        <StepBlock
          step='2'
          title='Place Your Order'
          text='Select your preferred device and subscription, then proceed with a secure checkout.'
          image='/placeorder.webp'
          reverse
          list={[
            { icon: <ShoppingCart />, text: "Simple and secure checkout" },
            {
              icon: <CheckCircle />,
              text: "Limited-time discounts automatically applied",
            },
          ]}
        />

        <StepBlock
          step='3'
          title='Activation & Programming'
          text='Submit your Device Activation & Programming Form within 7 days. Our technicians handle everything for you — no setup hassle.'
          image='/activation.webp'
          list={[
            {
              icon: <ShieldCheck />,
              text: "Professionally configured by experts",
            },
          ]}
        />

        <StepBlock
          step='4'
          title='Wear & Use with Ease'
          text='Wear your device daily on your wrist or around your neck. Lightweight, waterproof, and senior-friendly — powered by nationwide 4G coverage.'
          image='/wear.webp'
          reverse
        />

        {/* Emergency Help */}
        <div>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
            5. Emergency Help at the Press of a Button
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <Card
              icon={<Phone />}
              title='Family & Friends Plan'
              text='Calls/texts your chosen contacts first. If no response, automatically dials 911.'
            />
            <Card
              icon={<Users />}
              title='24/7 Monitoring Plan'
              text='Monitoring center connects with you, notifies family, and dispatches EMS.'
            />
            <Card
              icon={<Bell />}
              title='911-Only Plans'
              text='Device calls 911 directly. With Fall Detection add-on, alerts trigger automatically if a fall is detected.'
            />
          </div>
        </div>

        <StepBlock
          step='6'
          title='Peace of Mind & Ongoing Support'
          text='Your family and caregivers receive instant notifications in an emergency. If EMS is needed, we ensure fast dispatch. Lifetime Replacement Plan keeps your device covered for free replacements.'
          image='/peaceofmind.webp'
        />

        <StepBlock
          step='7'
          title='Family Monitoring via Mobile App'
          text='With the Life Alarm Any Tracking Caregiver App (iOS & Android), your loved ones can:'
          image='/familymonitoring.webp'
          reverse
          details={
            <ul className='list-disc pl-6 mt-2 space-y-1 text-gray-700'>
              <li>Track your location with GPS monitoring</li>
              <li>Set Geofencing alerts for safe zones</li>
              <li>Available with Family & Friends and 24/7 Monitoring plans</li>
            </ul>
          }
        />

        {/* Why Choose */}
        <div>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
            Why Choose Life Alarm?
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <Card
              icon={<ShieldCheck />}
              title='24/7 Emergency Monitoring'
              text='Professional setup & reliable emergency assistance anytime.'
            />
            <Card
              icon={<Heart />}
              title='Automatic Safety Backup'
              text='If family can’t be reached, the device immediately calls 911.'
            />
            <Card
              icon={<CheckCircle />}
              title='Transparent Pricing'
              text='Clear monthly fees and one-time purchase options — no hidden charges.'
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------
  Reusable Components
---------------------------------- */

function StepBlock({ step, title, text, image, list = [], details, reverse }) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-10 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}>
      <div className={`flex ${reverse ? "md:order-2" : ""} justify-center`}>
        <img
          src={image}
          alt={title}
          className='rounded-2xl shadow-lg w-full max-w-md object-cover'
        />
      </div>
      <div className={`${reverse ? "md:order-1" : ""}`}>
        <span className='inline-block bg-my-purple text-white px-4 py-1 rounded-full text-sm font-semibold mb-4'>
          Step {step}
        </span>
        <h2 className='text-3xl font-bold text-gray-900 mb-4'>{title}</h2>
        <p className='text-gray-700 mb-6'>{text}</p>
        {list.length > 0 && (
          <ul className='space-y-3'>
            {list.map((item, idx) => (
              <li key={idx} className='flex items-start gap-3 text-gray-700'>
                <span className='text-my-purple w-6 h-6'>{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        )}
        {details && <div className='mt-4'>{details}</div>}
      </div>
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className='p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300'>
      <div className='flex justify-center mb-4'>
        <div className='bg-my-purple/10 p-4 rounded-full text-my-purple'>
          {icon}
        </div>
      </div>
      <h3 className='font-semibold text-lg text-gray-900 mb-2'>{title}</h3>
      <p className='text-gray-700'>{text}</p>
    </div>
  );
}
