import {
  Watch,
  MapPin,
  Phone,
  Home,
  Headphones,
  Heart,
  Zap,
  CheckCircle,
  MessageCircle,
  Smartphone,
  DollarSign,
} from "lucide-react";
import Image from "next/image";

export const ProductsInfo = () => {
  return (
    <section className='relative w-full bg-gradient-to-br from-slate-50 via-white to-purple-50 py-24 px-6 overflow-hidden'>
      {/* Decorative Blurred Shapes */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        {/* ====== Emotion-Catching Hero Image ====== */}
        <div className='relative w-full h-[420px] md:h-[500px] mb-20 rounded-3xl overflow-hidden shadow-2xl'>
          <Image
            src='/emotions-catching.webp'
            alt='Caring & Protection'
            fill
            className='object-cover'
            priority
          />
          {/* Overlay for readability */}
          <div className='absolute inset-0 bg-black/30'></div>

          {/* Text Overlay */}
          <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-6'>
            <h2 className='text-4xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg'>
              Safety, Care & Peace of Mind
            </h2>
            <p className='text-lg md:text-xl text-white/90 max-w-2xl'>
              Empower your loved ones with reliable emergency response —
              everywhere, anytime.
            </p>
          </div>
        </div>

        {/* ====== Products Header ====== */}
        <div className='text-center mb-16'>
          <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
            Our Products
          </h2>
        </div>

        {/* ====== Product Cards ====== */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20'>
          {/* Necklace Card */}
          <div className='bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center'>
                <Heart className='w-7 h-7 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900'>
                Life Alarm Smart Alert Necklace
              </h3>
            </div>

            <div className='mb-6 p-4 bg-purple-50 rounded-2xl border-l-4 border-purple-500'>
              <p className='text-gray-700 font-medium'>
                <span className='font-bold text-purple-700'>
                  Wearable Design:
                </span>{" "}
                Comfortable and lightweight necklace suitable for daily use.
              </p>
            </div>

            <div className='space-y-6'>
              <div>
                <h4 className='font-bold text-gray-900 mb-3 text-lg flex items-center gap-2'>
                  <CheckCircle className='w-5 h-5 text-green-500' />
                  Key Features
                </h4>
                <div className='grid gap-3 pl-7'>
                  <p className='text-gray-700'>Automatic fall detection</p>
                  <p className='text-gray-700'>Two-way communication</p>
                  <p className='text-gray-700'>GPS tracking</p>
                  <p className='text-gray-700'>
                    Emergency contact notifications
                  </p>
                </div>
              </div>

              <div className='p-4 bg-blue-50 rounded-2xl border-l-4 border-blue-500'>
                <h4 className='font-bold text-gray-900 mb-2'>Use Cases:</h4>
                <p className='text-gray-700'>
                  Perfect for home, outdoors, or traveling seniors.
                </p>
              </div>
            </div>
          </div>

          {/* Watch Card */}
          <div className='bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center'>
                <Watch className='w-7 h-7 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900'>
                Life Alarm Smart Alert Watch
              </h3>
            </div>

            <div className='mb-6 p-4 bg-blue-50 rounded-2xl border-l-4 border-blue-500'>
              <p className='text-gray-700 font-medium'>
                <span className='font-bold text-blue-700'>
                  Wearable Wrist Device:
                </span>{" "}
                Stylish, easy-to-wear watch with the same features as the
                necklace.
              </p>
            </div>

            <div className='space-y-6'>
              <div>
                <h4 className='font-bold text-gray-900 mb-3 text-lg flex items-center gap-2'>
                  <CheckCircle className='w-5 h-5 text-green-500' />
                  Key Features
                </h4>
                <div className='grid gap-3 pl-7'>
                  <p className='text-gray-700'>GPS tracking</p>
                  <p className='text-gray-700'>Mobile system</p>
                  <p className='text-gray-700'>24/7 monitoring</p>
                  <p className='text-gray-700'>Automatic fall detection</p>
                </div>
              </div>

              <div className='p-4 bg-purple-50 rounded-2xl border-l-4 border-purple-500'>
                <h4 className='font-bold text-gray-900 mb-2'>Advantages:</h4>
                <p className='text-gray-700'>
                  Offers discreet protection with all-in-one functionality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ====== Features Section ====== */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h3 className='text-4xl font-bold mb-6 text-gray-900'>
              Features That Matter
            </h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                icon: MessageCircle,
                title: "Two-Way Communication",
                desc: "Talk directly to our trained medical professionals in emergencies.",
              },
              {
                icon: Smartphone,
                title: "Mobile Devices",
                desc: "Works anywhere, providing continuous protection.",
              },
              {
                icon: Home,
                title: "Base Unit & Home System Options",
                desc: "Choose devices that suit home or on-the-go lifestyles.",
              },
              {
                icon: DollarSign,
                title: "Alert System Costs",
                desc: "Affordable pricing plans with clear monthly fees.",
              },
              {
                icon: Zap,
                title: "Automatic Fall Detection Technology",
                desc: "Ensures emergencies are detected instantly.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300'>
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4'>
                  <item.icon className='w-6 h-6 text-white' />
                </div>
                <h4 className='font-bold text-gray-900 mb-3 text-lg'>
                  {item.title}
                </h4>
                <p className='text-gray-600'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ====== How It Works Section ====== */}
        <div className='bg-white rounded-3xl p-10 shadow-2xl border border-gray-100'>
          <div className='text-center mb-12'>
            <h3 className='text-4xl font-bold mb-6 text-gray-900'>
              How It Works
            </h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
            {[
              {
                icon: Watch,
                title: "Wear Your Device",
                desc: "Necklace or watch, comfortably at all times.",
              },
              {
                icon: Phone,
                title: "Emergency Occurs",
                desc: "Either you press the alert button or the automatic fall detection activates.",
              },
              {
                icon: Headphones,
                title: "24/7 Monitoring Response",
                desc: "Our trained staff is immediately notified.",
              },
              {
                icon: Home,
                title: "Help Arrives",
                desc: "Emergency contacts and local services are alerted.",
              },
              {
                icon: MapPin,
                title: "Track & Protect Anywhere",
                desc: "GPS system ensures safety wherever you go.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className='bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 text-center hover:shadow-lg hover:bg-white transition-all duration-300 group'>
                <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 transition-all duration-300'>
                  <item.icon className='w-8 h-8 text-purple-600 group-hover:text-white transition-all duration-300' />
                </div>
                <div className='w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm'>
                  {idx + 1}
                </div>
                <h4 className='font-bold text-gray-900 mb-3'>{item.title}</h4>
                <p className='text-gray-600 text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
