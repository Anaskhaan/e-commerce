"use client";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import {
  CreditCard,
  User,
  Mail,
  Phone,
  MapPin,
  Shield,
  Users,
  Loader2,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, cartTotal, clearCart } = useCart();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Collect user info
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    emergencyName1: "",
    emergencyContact1: "",
    emergencyName2: "",
    emergencyContact2: "",
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) return;

    // 1️⃣ Create payment intent and pending order
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart, userInfo }),
    });

    const {
      clientSecret,
      paymentIntentId,
      error: serverError,
    } = await res.json();
    if (serverError) {
      setError(serverError);
      setLoading(false);
      return;
    }

    // 2️⃣ Confirm payment
    const card = elements.getElement(CardElement);
    const { paymentIntent, error: stripeError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: userInfo.name,
            email: userInfo.email,
            phone: userInfo.contact,
            address: { line1: userInfo.address },
          },
        },
      });

    // 3️⃣ Handle result
    if (stripeError) {
      setError(stripeError.message);
      setLoading(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      try {
        // 4️⃣ Update order status to 'paid' in your DB
        await fetch("/api/update-order-status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentIntentId: paymentIntent.id }),
        });

        setSuccess(true);
        setCurrentStep(3);
        clearCart();
      } catch (updateError) {
        console.error("Failed to update order status:", updateError);
        setError("Payment succeeded, but failed to update order status.");
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#374151",
        "::placeholder": {
          color: "#9CA3AF",
        },
        padding: "16px",
      },
    },
    hidePostalCode: true,
  };

  const formFields = [
    {
      label: "Full Name",
      name: "name",
      type: "text",
      icon: User,
      required: true,
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      icon: Mail,
      required: true,
    },
    {
      label: "Contact Number",
      name: "contact",
      type: "tel",
      icon: Phone,
      required: true,
    },
    {
      label: "Delivery Address",
      name: "address",
      type: "text",
      icon: MapPin,
      required: true,
    },
    {
      label: "Emergency Contact Name 1",
      name: "emergencyName1",
      type: "text",
      icon: Users,
      required: false,
    },
    {
      label: "Emergency Contact Number 1",
      name: "emergencyContact1",
      type: "tel",
      icon: Phone,
      required: false,
    },
    {
      label: "Emergency Contact Name 2",
      name: "emergencyName2",
      type: "text",
      icon: Users,
      required: false,
    },
    {
      label: "Emergency Contact Number 2",
      name: "emergencyContact2",
      type: "tel",
      icon: Phone,
      required: false,
    },
  ];

  if (success) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center px-4'>
        <div className='max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center'>
          <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
            <CheckCircle2 className='w-10 h-10 text-green-500' />
          </div>
          <h1 className='text-3xl font-light text-gray-800 mb-4'>
            Payment Successful!
          </h1>
          <p className='text-gray-600 mb-2'>Thank you for your order</p>
          <p className='text-gray-500 text-sm mb-8'>
            A confirmation email has been sent to {userInfo.email}
          </p>
          <div className='bg-gray-50 rounded-2xl p-6 mb-8'>
            <p className='text-2xl font-bold text-[#ba55d3]'>
              ${cartTotal.toFixed(2)}
            </p>
            <p className='text-gray-500 text-sm'>Total Amount Paid</p>
          </div>
          <button
            onClick={() => (window.location.href = "/")}
            className='w-full bg-[#ba55d3] text-white py-4 rounded-xl hover:bg-[#a847c7] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl'>
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 px-4'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-light text-gray-800 mb-4'>
            Secure Checkout
          </h1>
          <p className='text-gray-500 max-w-2xl mx-auto'>
            Complete your purchase with confidence - your information is
            protected with bank-level security
          </p>
        </div>

        {/* Progress Steps */}
        <div className='max-w-2xl mx-auto mb-12'>
          <div className='flex items-center justify-between'>
            {[1, 2, 3].map((step) => (
              <div key={step} className='flex items-center flex-1'>
                <div
                  className={`flex flex-col items-center ${
                    step < 3 ? "flex-1" : ""
                  }`}>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      currentStep >= step
                        ? "bg-[#ba55d3] border-[#ba55d3] text-white"
                        : "border-gray-300 text-gray-400"
                    }`}>
                    {currentStep > step ? (
                      <CheckCircle2 className='w-6 h-6' />
                    ) : (
                      step
                    )}
                  </div>
                  <span
                    className={`text-sm mt-2 ${
                      currentStep >= step
                        ? "text-[#ba55d3] font-medium"
                        : "text-gray-400"
                    }`}>
                    {step === 1
                      ? "Information"
                      : step === 2
                      ? "Payment"
                      : "Confirmation"}
                  </span>
                </div>
                {step < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 transition-colors duration-300 ${
                      currentStep > step ? "bg-[#ba55d3]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className='max-w-4xl mx-auto grid lg:grid-cols-2 gap-8'>
          {/* Left: User Info */}
          <div className='space-y-6'>
            <div className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100'>
              <div className='flex items-center gap-3 mb-6'>
                <User className='w-6 h-6 text-[#ba55d3]' />
                <h2 className='text-2xl font-light text-gray-800'>
                  Personal Information
                </h2>
              </div>

              <div className='space-y-5'>
                {formFields.map((field) => {
                  const Icon = field.icon;
                  return (
                    <div key={field.name} className='space-y-2'>
                      <label className='block text-sm font-medium text-gray-700 flex items-center gap-2'>
                        <Icon className='w-4 h-4' />
                        {field.label}
                        {field.required && (
                          <span className='text-red-400'>*</span>
                        )}
                      </label>
                      <div className='relative'>
                        <input
                          type={field.type}
                          name={field.name}
                          value={userInfo[field.name]}
                          onChange={handleChange}
                          required={field.required}
                          className='w-full border border-gray-200 rounded-xl px-4 py-3 pl-11 focus:ring-2 focus:ring-[#ba55d3] focus:border-[#ba55d3] outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white'
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                        />
                        <Icon className='w-4 h-4 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2' />
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type='button'
                onClick={() => setCurrentStep(2)}
                className='w-full mt-8 bg-[#ba55d3] text-white py-4 rounded-xl hover:bg-[#a847c7] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                Continue to Payment
              </button>
            </div>

            {/* Security Badge */}
            <div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100'>
              <div className='flex items-center gap-3 mb-3'>
                <Shield className='w-6 h-6 text-[#ba55d3]' />
                <h3 className='font-semibold text-gray-800'>Secure Payment</h3>
              </div>
              <p className='text-sm text-gray-600'>
                Your payment information is encrypted and secure. We never store
                your credit card details.
              </p>
            </div>
          </div>

          {/* Right: Payment Section */}
          <div className='space-y-6'>
            <div className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100 sticky top-8'>
              <div className='flex items-center gap-3 mb-6'>
                <CreditCard className='w-6 h-6 text-[#ba55d3]' />
                <h2 className='text-2xl font-light text-gray-800'>
                  Payment Details
                </h2>
              </div>

              {/* Order Summary */}
              <div className='bg-gray-50 rounded-2xl p-6 mb-6'>
                <h3 className='font-semibold text-gray-800 mb-4'>
                  Order Summary
                </h3>
                <div className='space-y-3'>
                  {cart.map((item) => (
                    <div
                      key={item.key}
                      className='flex justify-between items-center'>
                      <span className='text-gray-600 text-sm'>
                        {item.name} × {item.quantity}
                      </span>
                      <span className='font-medium text-gray-800'>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className='border-t border-gray-200 mt-4 pt-4'>
                  <div className='flex justify-between items-center text-lg font-bold'>
                    <span>Total</span>
                    <span className='text-[#ba55d3]'>
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Element */}
              <div className='space-y-4'>
                <div className='border border-gray-200 rounded-xl p-4 bg-gray-50/50 hover:bg-white transition-colors duration-300'>
                  <CardElement options={cardElementOptions} />
                </div>

                {error && (
                  <div className='bg-red-50 border border-red-200 rounded-xl p-4'>
                    <p className='text-red-600 text-sm'>{error}</p>
                  </div>
                )}

                <button
                  type='submit'
                  disabled={!stripe || loading || currentStep < 2}
                  onClick={handleSubmit}
                  className='w-full bg-gradient-to-r from-[#ba55d3] to-[#9c47b5] text-white py-4 rounded-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 font-semibold shadow-lg disabled:opacity-50 disabled:transform-none disabled:hover:shadow-lg disabled:cursor-not-allowed flex items-center justify-center gap-3'>
                  {loading ? (
                    <>
                      <Loader2 className='w-5 h-5 animate-spin' />
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <Lock className='w-5 h-5' />
                      Pay ${cartTotal.toFixed(2)}
                    </>
                  )}
                </button>
              </div>

              {/* Trust Indicators */}
              <div className='mt-6 pt-6 border-t border-gray-200'>
                <div className='flex items-center justify-center gap-6 text-gray-400'>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-4 h-4' />
                    <span className='text-xs'>SSL Secure</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CreditCard className='w-4 h-4' />
                    <span className='text-xs'>PCI Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
