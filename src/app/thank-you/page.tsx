"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(5);
  const orderId =
    searchParams.get("orderId") ||
    Math.random().toString(36).substr(2, 9).toUpperCase();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-50 flex items-center justify-center p-6'>
      <div className='max-w-7xl w-full'>
        <div className='bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row'>
          {/* Left Side - Success Confirmation */}
          <div className='lg:w-2/5 bg-gradient-to-b from-blue-600 to-purple-600 p-8 md:p-12 text-white flex flex-col justify-between'>
            <div>
              {/* Animated Success Icon */}
              <div className='flex justify-center mb-8'>
                <div className='relative'>
                  <div className='w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-bounce'>
                    <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center'>
                      <svg
                        className='w-10 h-10 text-green-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='absolute inset-0 border-4 border-white border-opacity-30 rounded-full animate-ping'></div>
                </div>
              </div>

              {/* Main Message */}
              <div className='text-center mb-8'>
                <h1 className='text-3xl md:text-4xl font-bold mb-4'>
                  Thank You for Choosing Life Alarm!
                </h1>
                <p className='text-blue-100 text-lg opacity-90'>
                  Your order has been confirmed and is being processed
                </p>
              </div>

              {/* Order ID */}
              <div className='bg-white bg-opacity-10 rounded-2xl p-6 text-center backdrop-blur-sm'>
                <p className='text-blue-100 mb-2'>Order ID</p>
                <p className='text-2xl font-mono font-bold'>{orderId}</p>
                <div className='flex items-center justify-center gap-2 mt-3 text-green-300'>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='font-semibold'>Payment Confirmed</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className='text-center mt-8'>
              <div className='flex flex-col gap-3 opacity-90'>
                <div className='flex items-center justify-center gap-2 text-blue-100'>
                  <svg
                    className='w-4 h-4 text-green-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                  <span className='text-sm'>256-bit SSL Secure</span>
                </div>
                <div className='flex items-center justify-center gap-2 text-blue-100'>
                  <svg
                    className='w-4 h-4 text-green-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                    />
                  </svg>
                  <span className='text-sm'>Payment Secured</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Details & Next Steps */}
          <div className='lg:w-3/5 p-8 md:p-12 flex flex-col justify-between'>
            <div>
              {/* Email Confirmation - Horizontal Layout */}
              <div className='flex items-start gap-6 bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-200'>
                <div className='flex-shrink-0'>
                  <div className='w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center'>
                    <svg
                      className='w-7 h-7 text-blue-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                </div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                    Check Your Email
                  </h3>
                  <p className='text-gray-700 text-lg leading-relaxed'>
                    <strong>
                      You will receive a confirmation email shortly
                    </strong>{" "}
                    with your order details, setup instructions, and next steps.
                    Please check your inbox and spam folder.
                  </p>
                </div>
              </div>

              {/* Next Steps - Horizontal Cards */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-900 mb-6'>
                  What Happens Next?
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300'>
                    <div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3'>
                      <svg
                        className='w-6 h-6 text-purple-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        />
                      </svg>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      Device Setup
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      Follow the setup guide in your email to activate your Life
                      Alarm
                    </p>
                  </div>

                  <div className='bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300'>
                    <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3'>
                      <svg
                        className='w-6 h-6 text-blue-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                        />
                      </svg>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      Download App
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      Get our mobile app to monitor your system and receive
                      alerts
                    </p>
                  </div>

                  <div className='bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300'>
                    <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3'>
                      <svg
                        className='w-6 h-6 text-green-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                        />
                      </svg>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      24/7 Support
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      Our support team is available round the clock to assist
                      you
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Information - Horizontal Layout */}
              <div className='bg-gray-50 rounded-2xl p-6 border border-gray-200'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>
                  Need Immediate Assistance?
                </h3>
                <div className='flex flex-col md:flex-row gap-6 justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-blue-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                      </svg>
                    </div>
                    <div>
                      <p className='text-gray-600 text-sm'>Email Support</p>
                      <a
                        href='mailto:support@lifealarm.com'
                        className='text-blue-600 font-semibold hover:text-blue-700'>
                        support@lifealarm.com
                      </a>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-green-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                        />
                      </svg>
                    </div>
                    <div>
                      <p className='text-gray-600 text-sm'>Phone Support</p>
                      <a
                        href='tel:+1-800-LIFE-123'
                        className='text-blue-600 font-semibold hover:text-blue-700'>
                        1-800-LIFE-123
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions & Countdown */}
            <div className='mt-8 pt-6 border-t border-gray-200'>
              <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                <div className='text-gray-600'>
                  Redirecting in{" "}
                  <span className='font-bold text-blue-600'>{countdown}</span>{" "}
                  seconds
                </div>
                <div className='flex gap-3'>
                  <button
                    onClick={() => (window.location.href = "/")}
                    className='px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 font-semibold text-sm'>
                    Go to Homepage
                  </button>
                  <button
                    onClick={() => window.print()}
                    className='px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-semibold text-sm'>
                    Print Confirmation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
