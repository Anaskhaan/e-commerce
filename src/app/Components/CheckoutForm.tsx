// app/checkout/CheckoutForm.jsx
"use client";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, cartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) return;

    // Create PaymentIntent on the server
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });

    const { clientSecret, error: serverError } = await res.json();
    if (serverError) {
      setError(serverError);
      setLoading(false);
      return;
    }

    const card = elements.getElement(CardElement);
    const { paymentIntent, error: stripeError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card },
      });

    if (stripeError) {
      setError(stripeError.message);
      setLoading(false);
    } else if (paymentIntent.status === "succeeded") {
      setSuccess(true);
      clearCart();
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto px-4 py-20'>
      <CardElement className='p-4 border rounded' />
      {error && <p className='text-red-500 mt-2'>{error}</p>}
      {success && <p className='text-green-500 mt-2'>Payment successful!</p>}
      <button
        type='submit'
        disabled={!stripe || loading}
        className='mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>
        {loading ? "Processing..." : `Pay $${cartTotal.toFixed(2)}`}
      </button>
    </form>
  );
}
