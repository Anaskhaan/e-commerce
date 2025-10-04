import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basic validation
    if (
      !body.name ||
      !body.email ||
      !body.phone ||
      !body.address ||
      !body.cardNumber ||
      !body.expiry ||
      !body.cvv ||
      !body.product
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save order
    const order = await prisma.order.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address,
        cardNumber: body.cardNumber,
        expiry: body.expiry,
        cvv: body.cvv,
        product: body.product, // store product JSON
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (err) {
    console.error("Failed to save order:", err);
    return NextResponse.json(
      { error: "Failed to save order" },
      { status: 500 }
    );
  }
}
