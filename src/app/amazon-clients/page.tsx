"use client";
import { useState } from "react";

export default function AmazonClientsPage() {
  const [formData, setFormData] = useState({
    userAddress: "",
    deviceId: "",
    emergencyContact: "",
    billingAddress: "",
    billingPhone: "",
    cardNumber: "",
    cardExpiry: "",
    email: "",
    subscriptionPlan: "",
    fallDetection: "no",
    deviceReplacement: "no",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms and Conditions before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/sendActivationEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Form submitted successfully! Email sent to Life Alarm.");
        setFormData({
          userAddress: "",
          deviceId: "",
          emergencyContact: "",
          billingAddress: "",
          billingPhone: "",
          cardNumber: "",
          cardExpiry: "",
          email: "",
          subscriptionPlan: "",
          fallDetection: "no",
          deviceReplacement: "no",
          agreeToTerms: false,
        });
      } else {
        const err = await res.json();
        alert("Failed to send email: " + err.error);
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6'>
      <div className='max-w-4xl mx-auto'>
        {/* Header Card */}
        <div className='bg-white rounded-3xl shadow-xl p-8 mb-6 border border-gray-100'>
          <div className='text-center mb-6'>
            <div className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-8 h-8 text-white'
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
            </div>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3'>
              LIFE ALARM ACTIVATION
            </h1>
            <div className='w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full'></div>
          </div>

          <div className='bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-2'>
            <p className='text-gray-700 text-center leading-relaxed'>
              <strong className='text-blue-800'>
                Please refer to our "Private Pay" section to choose your desired
                monthly payment plan prior to starting this secured form.
              </strong>{" "}
              Only the Family & Friends Plan and the 24/7 Monitoring Plan
              requires emergency contact persons' name and contact number when
              filling out this form.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100'>
          <form onSubmit={handleSubmit} className='space-y-8'>
            {/* User Info */}
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-800 mb-2'>
                  <span className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-purple-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                    Name & Full Address of User*
                  </span>
                </label>
                <input
                  type='text'
                  name='userAddress'
                  value={formData.userAddress}
                  onChange={handleChange}
                  placeholder='John Doe, 123 Main St, City, State'
                  className='w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white'
                  required
                />
              </div>
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-800 mb-2'>
                  <span className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-purple-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                    Device ID#*
                  </span>
                </label>
                <input
                  type='text'
                  name='deviceId'
                  value={formData.deviceId}
                  onChange={handleChange}
                  placeholder='Device ID'
                  className='w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white'
                  required
                />
              </div>
            </div>

            {/* Emergency Contact */}
            <div className='space-y-2'>
              <label className='block text-sm font-semibold text-gray-800 mb-2'>
                <span className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-purple-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  Emergency Contact Persons #1 and #2*
                </span>
                <span className='text-xs text-gray-500 font-normal'>
                  (Family & Friends or 24/7 Monitoring Plan)
                </span>
              </label>
              <input
                type='text'
                name='emergencyContact'
                value={formData.emergencyContact}
                onChange={handleChange}
                placeholder='Name & Telephone Number'
                className='w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white'
              />
            </div>

            {/* Billing Info */}
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-800 mb-2'>
                  <span className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-purple-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                      />
                    </svg>
                    Billing Person's Name & Full Address*
                  </span>
                </label>
                <input
                  type='text'
                  name='billingAddress'
                  value={formData.billingAddress}
                  onChange={handleChange}
                  placeholder='Billing Name & Address'
                  className='w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white'
                  required
                />
              </div>
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-800 mb-2'>
                  <span className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-purple-600'
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
                    Billing Telephone Number*
                  </span>
                </label>
                <input
                  type='tel'
                  name='billingPhone'
                  value={formData.billingPhone}
                  onChange={handleChange}
                  placeholder='555-123-4567'
                  className='w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white'
                  required
                />
              </div>
            </div>

            {/* Payment Info */}
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-800 mb-2'>
                  <span className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-purple-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                      />
                    </svg>
                    Card Number*
                  </span>
                </label>
                <input
                  type='text'
                  name='cardNumber'
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder='4242 4242 4242 4242'
                  className='w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white'
                  required
                />
              </div>
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-800 mb-2'>
                  <span className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-purple-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                      />
                    </svg>
                    Card Expiration Date*
                  </span>
                </label>
                <input
                  type='month'
                  name='cardExpiry'
                  value={formData.cardExpiry}
                  onChange={handleChange}
                  className='w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white'
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className='space-y-2'>
              <label className='block text-sm font-semibold text-gray-800 mb-2'>
                <span className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-purple-600'
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
                  Email*
                </span>
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='you@example.com'
                className='w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white'
                required
              />
            </div>

            {/* Subscription Plans */}
            <div className='space-y-2'>
              <label className='block text-sm font-semibold text-gray-800 mb-2'>
                <span className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-purple-600'
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
                  Choose 1 Monthly Subscription Plan*
                </span>
              </label>
              <select
                name='subscriptionPlan'
                value={formData.subscriptionPlan}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none'
                required>
                <option value=''>Select a Plan</option>
                <option value='911'>
                  $24.95 - 911 PLAN (limited time offer)
                </option>
                <option value='family'>$35.00 - FAMILY & FRIENDS PLAN</option>
                <option value='monitoring'>
                  $42.00 - LIFE ALARM 24/7 MONITORING PLAN
                </option>
              </select>
            </div>

            {/* Optional Services */}
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-800 mb-2'>
                  Fall Detection: $10 Additional Monthly
                </label>
                <select
                  name='fallDetection'
                  value={formData.fallDetection}
                  onChange={handleChange}
                  className='w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none'>
                  <option value='no'>No</option>
                  <option value='yes'>Yes</option>
                </select>
              </div>
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-800 mb-2'>
                  Lifetime Loss or Damage Device Replacement Plan: $3 Additional
                  Monthly
                </label>
                <select
                  name='deviceReplacement'
                  value={formData.deviceReplacement}
                  onChange={handleChange}
                  className='w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none'>
                  <option value='no'>No</option>
                  <option value='yes'>Yes</option>
                </select>
              </div>
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className='bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-6'>
              <div className='flex items-start space-x-3'>
                <div className='flex items-center h-6'>
                  <input
                    type='checkbox'
                    name='agreeToTerms'
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className='w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500'
                    required
                  />
                </div>
                <label className='text-sm text-gray-700 leading-relaxed'>
                  <strong className='text-purple-700'>
                    I agree to the Life Alarm Services Terms and Conditions*
                  </strong>
                  <br />
                  <span className='text-gray-600'>
                    By checking this box, you acknowledge that you have read,
                    understood, and agree to be bound by our Terms and
                    Conditions.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className='text-center pt-4'>
              <button
                type='submit'
                disabled={!formData.agreeToTerms || isSubmitting}
                className='bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-12 py-4 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                {isSubmitting ? (
                  <span className='flex items-center justify-center gap-2'>
                    <svg
                      className='w-5 h-5 animate-spin'
                      fill='none'
                      viewBox='0 0 24 24'>
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className='flex items-center justify-center gap-2'>
                    <svg
                      className='w-5 h-5'
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
                    Submit
                  </span>
                )}
              </button>
              <p className='text-xs text-gray-500 mt-3'>
                Secure form • Encrypted transmission • Your data is protected
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className='mt-8 bg-white rounded-3xl shadow-xl p-8 border border-gray-100'>
          <div className='text-center mb-8'>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>
              Need Assistance?
            </h3>
            <div className='bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 max-w-md mx-auto'>
              <div className='flex items-center justify-center gap-3 mb-2'>
                <svg
                  className='w-8 h-8'
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
                <span className='text-2xl font-bold'>1-800-780-5433</span>
              </div>
              <p className='text-green-100'>
                24/7 Monitoring Center • Sales Office Hours Below
              </p>
            </div>
          </div>

          {/* Office Hours */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8'>
            {[
              { day: "Mon", hours: "09:00 am – 03:00 pm" },
              { day: "Tue", hours: "09:00 am – 03:00 pm" },
              { day: "Wed", hours: "09:00 am – 03:00 pm" },
              { day: "Thu", hours: "09:00 am – 03:00 pm" },
              { day: "Fri", hours: "09:00 am – 03:00 pm" },
              { day: "Sat", hours: "Closed" },
              { day: "Sun", hours: "Closed" },
            ].map((schedule, index) => (
              <div
                key={index}
                className='bg-gray-50 rounded-xl p-4 border border-gray-200'>
                <div className='font-semibold text-gray-800'>
                  {schedule.day}
                </div>
                <div className='text-sm text-gray-600'>{schedule.hours}</div>
              </div>
            ))}
          </div>

          {/* Terms and Conditions */}
          <div className='border-t border-gray-200 pt-8'>
            <h3 className='text-xl font-bold text-gray-800 mb-4 text-center'>
              Terms and Conditions
            </h3>
            <div className='bg-gray-50 rounded-2xl p-6 border border-gray-200'>
              <p className='text-gray-700 leading-relaxed'>
                LIFE ALARM TERMS AND CONDITIONS - By submitting this form, you
                agree to our comprehensive terms of service, privacy policy, and
                billing agreements. Full terms available upon request or at our
                website.
              </p>
              <div className='mt-4 text-xs text-gray-500'>
                <p>
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
