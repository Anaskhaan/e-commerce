// app/api/create-payment-intent/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PrismaClient } from "@prisma/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { items, userInfo } = await req.json();

    // Calculate total amount in USD
    const totalAmount = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(totalAmount * 100),
      currency: "usd",
      description: `Order for ${userInfo.name}`,
      automatic_payment_methods: { enabled: true },
    });

    // Store pending order in DB
    await prisma.pendingOrder.create({
      data: {
        paymentIntentId: paymentIntent.id,
        name: userInfo.name,
        email: userInfo.email,
        contact: userInfo.contact,
        address: userInfo.address,
        emergencyName1: userInfo.emergencyName1,
        emergencyContact1: userInfo.emergencyContact1,
        emergencyName2: userInfo.emergencyName2,
        emergencyContact2: userInfo.emergencyContact2,
        totalAmount,
        status: "pending",
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
