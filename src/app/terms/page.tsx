"use client";
import { useState } from "react";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "use-of-services", title: "2. Use of Services" },
    { id: "subscriptions", title: "3. Subscriptions & Payments" },
    { id: "privacy", title: "4. Privacy & Data Use" },
    { id: "limitations", title: "5. Service Limitations" },
    { id: "cancellation", title: "6. Cancellation & Termination" },
    { id: "governing-law", title: "7. Governing Law" },
    { id: "changes", title: "8. Changes to Terms" },
    { id: "contact", title: "9. Contact Us" },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
        <div className='absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl shadow-2xl mb-6'>
            <svg
              className='w-10 h-10 text-white'
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
          <h1 className='text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
            Terms & Conditions
          </h1>
          <p className='text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed'>
            Life Alarm Services - Your safety is our priority. Please review our
            terms carefully.
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full'></div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Sidebar Navigation */}
          <div className='lg:w-1/4'>
            <div className='bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 sticky top-8'>
              <h3 className='text-white font-semibold text-lg mb-4 flex items-center gap-2'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                Contents
              </h3>
              <nav className='space-y-2'>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-white/20 text-white shadow-lg transform scale-105"
                        : "text-purple-200 hover:text-white hover:bg-white/10"
                    }`}>
                    <span className='font-medium'>{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className='lg:w-3/4'>
            <div className='bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 lg:p-12'>
              {/* Introduction */}
              <section
                id='introduction'
                className={`space-y-6 ${
                  activeSection === "introduction" ? "block" : "hidden"
                }`}>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center'>
                    <span className='text-white font-bold text-lg'>1</span>
                  </div>
                  <h2 className='text-3xl font-bold text-white'>
                    Introduction
                  </h2>
                </div>
                <div className='space-y-4 text-purple-100 leading-relaxed'>
                  <p className='text-lg'>
                    Welcome to{" "}
                    <strong className='text-white'>Life Alarm Services</strong>.
                    These Terms and Conditions outline the rules and guidelines
                    for using our website, purchasing our products, and
                    subscribing to our monitoring services.
                  </p>
                  <div className='bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6'>
                    <div className='flex items-start gap-3'>
                      <svg
                        className='w-6 h-6 text-yellow-400 flex-shrink-0 mt-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z'
                        />
                      </svg>
                      <p className='text-yellow-100'>
                        <strong>Important:</strong> By accessing or using our
                        services, you agree to comply with these terms. Please
                        read them carefully before making any purchase or
                        subscription.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Use of Services */}
              <section
                id='use-of-services'
                className={`space-y-6 ${
                  activeSection === "use-of-services" ? "block" : "hidden"
                }`}>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center'>
                    <span className='text-white font-bold text-lg'>2</span>
                  </div>
                  <h2 className='text-3xl font-bold text-white'>
                    Use of Services
                  </h2>
                </div>
                <div className='space-y-4 text-purple-100 leading-relaxed'>
                  <p className='text-lg'>
                    Our products and monitoring systems are designed to enhance
                    your safety and provide peace of mind.
                  </p>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='bg-green-500/10 border border-green-500/20 rounded-2xl p-6'>
                      <div className='flex items-center gap-3 mb-3'>
                        <svg
                          className='w-6 h-6 text-green-400'
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
                        <h4 className='text-green-300 font-semibold'>
                          Permitted Uses
                        </h4>
                      </div>
                      <p className='text-green-100'>
                        Personal safety monitoring • Emergency alert systems •
                        Medical assistance coordination
                      </p>
                    </div>
                    <div className='bg-red-500/10 border border-red-500/20 rounded-2xl p-6'>
                      <div className='flex items-center gap-3 mb-3'>
                        <svg
                          className='w-6 h-6 text-red-400'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                        <h4 className='text-red-300 font-semibold'>
                          Prohibited Uses
                        </h4>
                      </div>
                      <p className='text-red-100'>
                        Misuse • Unauthorized access • Reselling services •
                        Illegal activities
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Subscriptions & Payments */}
              <section
                id='subscriptions'
                className={`space-y-6 ${
                  activeSection === "subscriptions" ? "block" : "hidden"
                }`}>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center'>
                    <span className='text-white font-bold text-lg'>3</span>
                  </div>
                  <h2 className='text-3xl font-bold text-white'>
                    Subscriptions & Payments
                  </h2>
                </div>
                <div className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6'>
                      <h4 className='text-blue-300 font-semibold mb-3 flex items-center gap-2'>
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                          />
                        </svg>
                        Auto-Renewal
                      </h4>
                      <p className='text-blue-100'>
                        All subscriptions automatically renew unless canceled
                        before the renewal date.
                      </p>
                    </div>
                    <div className='bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6'>
                      <h4 className='text-purple-300 font-semibold mb-3 flex items-center gap-2'>
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
                          />
                        </svg>
                        Billing
                      </h4>
                      <p className='text-purple-100'>
                        Charges are billed according to the plan selected at the
                        time of purchase.
                      </p>
                    </div>
                  </div>
                  <div className='bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6'>
                    <div className='flex items-start gap-3'>
                      <svg
                        className='w-6 h-6 text-orange-400 flex-shrink-0 mt-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <div>
                        <h4 className='text-orange-300 font-semibold mb-2'>
                          Payment Policy
                        </h4>
                        <p className='text-orange-100'>
                          Payments made are non-refundable once a subscription
                          term begins. It is the customer's responsibility to
                          ensure accurate billing information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Privacy & Data Use */}
              <section
                id='privacy'
                className={`space-y-6 ${
                  activeSection === "privacy" ? "block" : "hidden"
                }`}>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center'>
                    <span className='text-white font-bold text-lg'>4</span>
                  </div>
                  <h2 className='text-3xl font-bold text-white'>
                    Privacy & Data Use
                  </h2>
                </div>
                <div className='space-y-6'>
                  <div className='bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6'>
                    <p className='text-indigo-100 text-lg leading-relaxed'>
                      We respect your privacy and handle your information with
                      care. By subscribing, you consent to Life Alarm Services
                      collecting and storing your personal and medical data for
                      emergency purposes.
                    </p>
                  </div>
                  <div className='bg-pink-500/10 border border-pink-500/20 rounded-2xl p-6'>
                    <h4 className='text-pink-300 font-semibold mb-3 flex items-center gap-2'>
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                        />
                      </svg>
                      Emergency Data Sharing
                    </h4>
                    <p className='text-pink-100'>
                      In critical situations, we may share this information with
                      first responders, healthcare professionals, or monitoring
                      centers to ensure your safety.
                    </p>
                  </div>
                </div>
              </section>

              {/* Service Limitations */}
              <section
                id='limitations'
                className={`space-y-6 ${
                  activeSection === "limitations" ? "block" : "hidden"
                }`}>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center'>
                    <span className='text-white font-bold text-lg'>5</span>
                  </div>
                  <h2 className='text-3xl font-bold text-white'>
                    Service Limitations
                  </h2>
                </div>
                <div className='space-y-6'>
                  <div className='bg-gray-500/10 border border-gray-500/20 rounded-2xl p-6'>
                    <p className='text-gray-100 text-lg leading-relaxed'>
                      While our technology is designed for reliability, no
                      system is 100% fail-proof. Life Alarm Services is not
                      responsible for delays, interruptions, or technical issues
                      caused by internet outages, signal failures, or user
                      error.
                    </p>
                  </div>
                  <div className='bg-red-500/10 border border-red-500/20 rounded-2xl p-6'>
                    <h4 className='text-red-300 font-semibold mb-3'>
                      Liability Limitation
                    </h4>
                    <p className='text-red-100'>
                      Our maximum liability will not exceed{" "}
                      <strong>$100 USD</strong> or the total amount paid by the
                      customer for the service, whichever is lower.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cancellation & Termination */}
              <section
                id='cancellation'
                className={`space-y-6 ${
                  activeSection === "cancellation" ? "block" : "hidden"
                }`}>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center'>
                    <span className='text-white font-bold text-lg'>6</span>
                  </div>
                  <h2 className='text-3xl font-bold text-white'>
                    Cancellation & Termination
                  </h2>
                </div>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='bg-green-500/10 border border-green-500/20 rounded-2xl p-6'>
                    <h4 className='text-green-300 font-semibold mb-3'>
                      Customer Cancellation
                    </h4>
                    <p className='text-green-100'>
                      You may cancel your subscription at any time by contacting
                      our support team. However, payments already made for the
                      current billing cycle are non-refundable.
                    </p>
                  </div>
                  <div className='bg-red-500/10 border border-red-500/20 rounded-2xl p-6'>
                    <h4 className='text-red-300 font-semibold mb-3'>
                      Service Termination
                    </h4>
                    <p className='text-red-100'>
                      Life Alarm Services reserves the right to suspend or
                      terminate services in case of non-payment, misuse, or
                      violation of these terms.
                    </p>
                  </div>
                </div>
              </section>

              {/* Governing Law */}
              <section
                id='governing-law'
                className={`space-y-6 ${
                  activeSection === "governing-law" ? "block" : "hidden"
                }`}>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center'>
                    <span className='text-white font-bold text-lg'>7</span>
                  </div>
                  <h2 className='text-3xl font-bold text-white'>
                    Governing Law & Disputes
                  </h2>
                </div>
                <div className='space-y-4 text-purple-100 leading-relaxed'>
                  <p>
                    These Terms and Conditions are governed by the laws of the{" "}
                    <strong className='text-white'>
                      State of Georgia, USA
                    </strong>
                    .
                  </p>
                  <div className='bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6'>
                    <p className='text-yellow-100'>
                      Any disputes arising under this agreement will be resolved
                      through binding arbitration in Georgia and not in court.
                      You agree that class-action lawsuits are not permitted
                      under this agreement.
                    </p>
                  </div>
                </div>
              </section>

              {/* Changes to Terms */}
              <section
                id='changes'
                className={`space-y-6 ${
                  activeSection === "changes" ? "block" : "hidden"
                }`}>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center'>
                    <span className='text-white font-bold text-lg'>8</span>
                  </div>
                  <h2 className='text-3xl font-bold text-white'>
                    Changes to Terms
                  </h2>
                </div>
                <div className='space-y-4 text-purple-100 leading-relaxed'>
                  <p>
                    Life Alarm Services reserves the right to update or modify
                    these Terms and Conditions at any time.
                  </p>
                  <div className='bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6'>
                    <p className='text-blue-100'>
                      Updated terms will be posted on this page, and your
                      continued use of our services after any changes means you
                      accept the updated terms.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Us */}
              <section
                id='contact'
                className={`space-y-6 ${
                  activeSection === "contact" ? "block" : "hidden"
                }`}>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center'>
                    <span className='text-white font-bold text-lg'>9</span>
                  </div>
                  <h2 className='text-3xl font-bold text-white'>Contact Us</h2>
                </div>
                <div className='space-y-6'>
                  <p className='text-purple-100 text-lg'>
                    If you have any questions about these Terms and Conditions,
                    please contact us:
                  </p>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-center'>
                      <svg
                        className='w-8 h-8 text-white mx-auto mb-3'
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
                      <h4 className='text-white font-semibold mb-2'>Email</h4>
                      <p className='text-purple-100'>
                        support@lifealarmservices.com
                      </p>
                    </div>
                    <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-center'>
                      <svg
                        className='w-8 h-8 text-white mx-auto mb-3'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9'
                        />
                      </svg>
                      <h4 className='text-white font-semibold mb-2'>Website</h4>
                      <p className='text-blue-100'>www.lifealarmservices.com</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Acceptance Banner */}
            <div className='mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-center'>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Your Safety Matters
              </h3>
              <p className='text-emerald-100 text-lg mb-6'>
                By using Life Alarm Services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms and
                Conditions.
              </p>
              <div className='w-16 h-1 bg-white/30 mx-auto rounded-full'></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
