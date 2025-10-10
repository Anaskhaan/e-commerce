// app/api/update-order-status/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { paymentIntentId } = await req.json();

    await prisma.pendingOrder.updateMany({
      where: { paymentIntentId },
      data: { status: "paid" },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating order status:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
