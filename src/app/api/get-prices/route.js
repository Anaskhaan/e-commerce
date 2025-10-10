// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function GET() {
//   try {
//     // Fetch all active prices with expanded product details
//     const prices = await stripe.prices.list({
//       expand: ["data.product"],
//       active: true,
//     });

//     // Format the data you want to send back to the frontend
//     const formatted = prices.data.map((p) => ({
//       id: p.id,
//       productId: typeof p.product === "object" ? p.product.id : p.product,
//       name: typeof p.product === "object" ? p.product.name : "Unnamed",
//       price: (p.unit_amount || 0) / 100,
//       billing: p.recurring ? p.recurring.interval : "one-time",
//     }));

//     console.log("✅ Stripe prices fetched:", formatted);

//     return new Response(JSON.stringify(formatted), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     console.error("❌ Stripe API error:", err);
//     return new Response(JSON.stringify({ error: err.message }), {
//       status: 500,
//     });
//   }
// }

// src/app/api/get-prices/route.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
  try {
    const prices = await stripe.prices.list({
      active: true,
      expand: ["data.product"],
    });

    // Optional: console log to confirm
    console.log("✅ Stripe prices fetched:", prices.data.length);

    // Map specific product names to IDs in your frontend
    const priceMap = {};
    prices.data.forEach((price) => {
      const productName = price.product.name.toLowerCase();

      if (productName.includes("911"))
        priceMap["911"] = price.unit_amount / 100;
      else if (productName.includes("family"))
        priceMap["family"] = price.unit_amount / 100;
      else if (productName.includes("monitor"))
        priceMap["monitor"] = price.unit_amount / 100;
    });

    return Response.json(priceMap);
  } catch (err) {
    console.error("Stripe price fetch failed:", err);
    return Response.json({ error: "Failed to fetch prices" }, { status: 500 });
  }
}
