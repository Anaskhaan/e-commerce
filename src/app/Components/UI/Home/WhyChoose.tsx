import { Shield, MapPin, Headphones } from "lucide-react";

export const WhyChoose = () => {
  return (
    <section className='relative w-full py-20 bg-gray-100 text-gray-900 px-6'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-my-purple'>
          Why Choose{" "}
          <span className='my-purple text-white'>Life Alarm Services?</span>
        </h2>
        <p className='text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed'>
          At Life Alarm Services, we believe safety should never be complicated.
          That’s why we offer simple, reliable, and affordable medical alert
          solutions designed to protect what matters most to your loved ones.
        </p>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Feature 1 */}
          <div className='bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='my-purple text-white w-16 h-16 flex items-center justify-center rounded-full mb-4'>
              <Shield size={32} />
            </div>
            <h3 className='text-xl font-semibold mb-2'>Advanced Safety</h3>
            <p className='text-gray-700 text-sm'>
              Automatic fall detection, GPS tracking, and 24/7 monitoring to
              keep your loved ones safe.
            </p>
          </div>

          {/* Feature 2 */}
          <div className='bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='my-purple text-white w-16 h-16 flex items-center justify-center rounded-full mb-4'>
              <MapPin size={32} />
            </div>
            <h3 className='text-xl font-semibold mb-2'>
              Reliable & Easy Setup
            </h3>
            <p className='text-gray-700 text-sm'>
              Simple installation with no hidden fees. Trustworthy service
              families can count on.
            </p>
          </div>

          {/* Feature 3 */}
          <div className='bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='my-purple text-white w-16 h-16 flex items-center justify-center rounded-full mb-4'>
              <Headphones size={32} />
            </div>
            <h3 className='text-xl font-semibold mb-2'>Caring Support</h3>
            <p className='text-gray-700 text-sm'>
              Dedicated support available day and night. We provide peace of
              mind, not just devices.
            </p>
          </div>
        </div>

        <p className='mt-12 text-gray-700 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed'>
          Families across the country trust us because we deliver more than just
          a device — we deliver peace of mind.
        </p>
      </div>
    </section>
  );
};
