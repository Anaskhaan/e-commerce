"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useCart } from "../../context/CartContext";

// ⬇️ We'll fetch Stripe prices from your backend route /api/stripe-prices
// (You’ll create that API route below.)

type AddonDef = { id: string; name: string; price: number; billing?: string };

export default function SmartAlertWatchPage() {
  const router = useRouter();
  const { addToCart } = useCart();

  const [bigImage, setBigImage] = useState("/watch.png");
  const smallImages = [
    "/watch.png",
    "/emotions-catching2.webp",
    "/watch-alt2.png",
    "/watch-alt3.png",
  ];

  // plans state will hold dynamic prices from Stripe
  const [plans, setPlans] = useState([
    {
      id: "911",
      name: "911 Plan",
      price: null,
      billing: "monthly",
      cta: "Add to Cart",
    },
    {
      id: "family",
      name: "Family & Friends Plan",
      price: null,
      billing: "monthly",
      cta: "Add to Cart",
    },
    {
      id: "monitor",
      name: "24/7 Monitoring Center Plan",
      price: null,
      billing: "monthly",
      cta: "Add to Cart",
      highlight: true,
    },
    {
      id: "device",
      name: "Purchase Device",
      price: 134.95, // static one-time
      billing: "one-time",
      cta: "Buy Now",
    },
  ]);

  // Add-ons remain static
  const addonsDefs: AddonDef[] = [
    { id: "fall", name: "Fall Detection", price: 10, billing: "monthly" },
    {
      id: "lifetime",
      name: "Lifetime Replacement Protection",
      price: 3,
      billing: "monthly",
    },
  ];

  const [addonModalOpen, setAddonModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<(typeof plans)[0] | null>(
    null
  );
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const fmt = (n?: number | null) =>
    typeof n === "number" ? `$${n.toFixed(2)}` : "Loading...";

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handlePlanClick = (plan: (typeof plans)[0]) => {
    setSelectedPlan(plan);
    setSelectedAddons([]);
    setAddonModalOpen(true);
  };

  const handleAddToCart = () => {
    if (!selectedPlan) return;

    const selectedAddonObjs = selectedAddons.map((id) => {
      const a = addonsDefs.find((ad) => ad.id === id)!;
      return { id: a.id, name: a.name, price: a.price };
    });

    const basePrice = selectedPlan.price || 0;
    const addonsTotal = selectedAddonObjs.reduce((sum, a) => sum + a.price, 0);
    const totalPrice = parseFloat((basePrice + addonsTotal).toFixed(2));

    addToCart({
      id: "smart-alert-watch",
      name: "Smart Alert Smart Watch",
      price: totalPrice,
      plan: selectedPlan.id,
      image: bigImage,
      addons: selectedAddonObjs,
    });

    setAddonModalOpen(false);
    router.push("/cart");
  };

  // ⬇️ Fetch prices dynamically from Stripe via API
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch("/api/get-prices");
        const data = await res.json();

        // Match your plans with Stripe prices based on ID mapping
        setPlans((prev) =>
          prev.map((plan) => ({
            ...plan,
            price:
              data[plan.id] !== undefined ? data[plan.id] : plan.price || null,
          }))
        );
      } catch (err) {
        console.error("Failed to fetch Stripe prices:", err);
      }
    };

    fetchPrices();
  }, []);

  return (
    <main className='w-full bg-gray-50'>
      {/* Hero Section */}
      <section className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 py-16 px-4'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center md:items-start'>
          {/* Small Thumbnails */}
          <div className='flex md:flex-col gap-3'>
            {smallImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setBigImage(img)}
                className='w-20 h-20 md:w-24 md:h-24 relative rounded-lg overflow-hidden shadow cursor-pointer hover:scale-105 transition'>
                <Image
                  src={img}
                  alt={`watch ${idx}`}
                  fill
                  className='object-contain'
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className='w-80 md:w-96 h-80 md:h-96 rounded-xl overflow-hidden shadow-lg relative bg-white'>
            <Image
              src={bigImage}
              alt='Smart Alert Watch'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1 md:pl-6'>
          <h1 className='text-4xl font-bold text-gray-800'>
            Smart Alert Smart Watch
          </h1>
          <p className='text-lg font-medium text-gray-500 mt-2'>
            Best Medical Alert Smartwatch for Seniors
          </p>
          <p className='mt-4 text-gray-600'>
            Stay safe with the Smart Alert Smart Watch — GPS, fall detection,
            two-way communication, and easy setup. Choose a plan below.
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className='max-w-7xl mx-auto py-12 px-4'>
        <h2 className='text-3xl font-bold text-gray-800 text-center mb-12'>
          Choose Your Perfect Plan
        </h2>

        <div className='grid gap-8 md:grid-cols-2'>
          {plans.map((p, index) => (
            <div
              key={p.id}
              className={`flex flex-col md:flex-row items-center md:items-start justify-between border rounded-xl p-6 transition-shadow hover:shadow-lg ${
                p.highlight
                  ? "border-purple-600 bg-purple-50"
                  : "border-gray-200"
              }`}>
              {/* Left Side: Plan Info */}
              <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-xl font-semibold text-gray-800 flex items-center gap-2'>
                  {p.name}
                  {p.highlight && (
                    <span className='bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full'>
                      Most Popular
                    </span>
                  )}
                </h3>

                <p className='mt-2 text-gray-600 text-sm space-y-1'>
                  {p.id === "911" && (
                    <>
                      <span>Direct 911 Emergency Call</span>
                      <span>Simple & Affordable</span>
                      <span>No family/friends app monitoring</span>
                    </>
                  )}
                  {p.id === "family" && (
                    <>
                      <span>Calls & Texts up to 2 family/friends</span>
                      <span>If no response → 911 auto-dial</span>
                      <span>GPS Tracking & Geofencing</span>
                      <span>Caregiver App Access</span>
                    </>
                  )}
                  {p.id === "monitor" && (
                    <>
                      <span>24/7 Life Alarm Monitoring Center</span>
                      <span>Professional EMS Dispatch (911)</span>
                      <span>Notifies Family & Friends Automatically</span>
                      <span>GPS Tracking & Geofencing</span>
                      <span>Caregiver App Access</span>
                    </>
                  )}
                  {p.id === "device" && (
                    <>
                      <span>Direct 911 Call</span>
                      <span>One-time cost, no recurring payments</span>
                    </>
                  )}
                </p>
              </div>

              {/* Right Side: Price + CTA */}
              <div
                className={`flex flex-col items-center md:items-end justify-between gap-4 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}>
                <p className='text-2xl font-bold text-gray-900'>
                  {fmt(p.price)} {p.billing === "monthly" ? "/ month" : ""}
                </p>

                <button
                  onClick={() => handlePlanClick(p)}
                  disabled={!p.price}
                  className={`w-full md:w-auto py-2 px-6 rounded-lg ${
                    p.price
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  } transition`}>
                  {p.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className='max-w-7xl mx-auto py-16 px-4 space-y-16'>
        {/* Intro / Description */}
        <div className='flex flex-col md:flex-row items-center gap-10'>
          <div className='flex-1 space-y-4'>
            <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
              Life Alarm Smart Alert Watch: Trusted Life Alert for Seniors
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              As we age, maintaining independence while staying safe becomes
              more important than ever. Families across the United States want
              peace of mind knowing their loved ones are protected in
              emergencies. The Life Alarm Smart Alert Watch is a modern,
              reliable, and easy-to-use life alert watch designed specifically
              for seniors.
            </p>
            <p className='text-gray-600 leading-relaxed'>
              This medical life alert watch isn’t just another gadget — it’s a
              lifeline combining fall detection, GPS tracking, and two-way
              communication into a sleek, wearable design. Nationwide coverage
              ensures help is only one tap away, no matter where you are.
            </p>
          </div>
          <div className='flex-1 relative w-full h-80 md:h-96'>
            <Image
              src='/watch.png' // replace with actual path
              alt='Life Alarm Smart Alert Watch'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* Key Features */}
        <div className='space-y-6'>
          <h2 className='text-3xl font-bold text-gray-800'>Key Features</h2>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                title: "Fall Detection",
                desc: "Automatically senses falls and sends alerts even if the user can't press a button.",
              },
              {
                title: "GPS Location & Geofencing",
                desc: "Track loved ones in real-time; alerts triggered if they leave safe zones.",
              },
              {
                title: "Two-Way Communication",
                desc: "Talk directly to emergency responders or family from your wrist.",
              },
              {
                title: "Medical Alert Notifications",
                desc: "Instant alerts sent to caregivers or monitoring centers.",
              },
              {
                title: "Long Battery Life & Water Resistance",
                desc: "Engineered for everyday use, water-resistant and long-lasting battery.",
              },
              {
                title: "Nationwide 4G Coverage",
                desc: "Provides coverage anywhere in the USA, not just at home.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className='p-6 border rounded-xl hover:shadow-lg transition bg-white'>
                <h3 className='font-semibold text-purple-700 mb-2'>
                  {f.title}
                </h3>
                <p className='text-gray-600 text-sm'>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className='space-y-6'>
          <h2 className='text-3xl font-bold text-gray-800'>
            Benefits for Seniors & Families
          </h2>
          <ul className='list-disc list-inside space-y-2 text-gray-600'>
            <li>Independence for seniors: live active lives without fear.</li>
            <li>
              Peace of mind for families: always know loved ones are safe.
            </li>
            <li>Discreet and modern design: stylish and comfortable.</li>
            <li>
              Affordable subscription model: professional monitoring at a
              fraction of hospitalization cost.
            </li>
          </ul>
        </div>

        {/* Why Choose Life Alarm */}
        <div className='space-y-6'>
          <h2 className='text-3xl font-bold text-gray-800'>
            Why Choose Life Alarm Over Other Smartwatches?
          </h2>
          <ul className='list-decimal list-inside space-y-2 text-gray-600'>
            <li>Dedicated senior safety, not just fitness tracking.</li>
            <li>Automatic emergency response unlike generic wearables.</li>
            <li>
              Trusted subscription system with professional monitoring 24/7.
            </li>
            <li>Nationwide service ensures coverage anywhere in the USA.</li>
          </ul>
        </div>

        {/* Step-by-Step Usage */}
        <div className='space-y-6'>
          <h2 className='text-3xl font-bold text-gray-800'>How It Works</h2>
          <div className='space-y-4'>
            {[
              {
                step: "Step 1: Choose Your Plan",
                desc: "Select from 4 flexible payment options that fit your needs.",
              },
              {
                step: "Step 2: Place Your Order",
                desc: "Complete your order using our secure online checkout. Receive confirmation and activation form.",
              },
              {
                step: "Step 3: Send Us the Activation Form",
                desc: "Within 7 days, fill out and send the Device Activation & Programming Form.",
              },
              {
                step: "Step 4: We Handle Everything",
                desc: "Our technicians install SIM, activate cellular service, and program the device for immediate use.",
              },
              {
                step: "Step 5: Unbox & Go Anywhere Safely",
                desc: "Open the box, turn on, press SOS anytime. Works nationwide using 4G coverage.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className='p-6 border-l-4 border-purple-600 bg-white rounded-r-xl shadow-sm'>
                <h3 className='font-semibold text-gray-800 mb-1'>{s.step}</h3>
                <p className='text-gray-600 text-sm'>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Call */}
        <div className='text-center space-y-4'>
          <h2 className='text-3xl font-bold text-gray-800'>
            One Step Away from Peace of Mind
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Your safety shouldn’t wait. With Life Alarm, help is always one
            button away, no setup, no hassle, only confidence.
          </p>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Stay protected everywhere, no activation needed, with U.S.-based
            24/7 monitoring.
          </p>
        </div>
      </section>

      {/* Add-ons modal */}
      {addonModalOpen && selectedPlan && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
          <div className='bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative'>
            <button
              onClick={() => setAddonModalOpen(false)}
              className='absolute top-4 right-4 text-gray-600 hover:text-black'>
              <X size={20} />
            </button>
            <h3 className='text-xl font-semibold mb-2'>Choose Add-ons</h3>
            <div className='space-y-3'>
              {addonsDefs.map((a) => (
                <label
                  key={a.id}
                  className='flex items-center justify-between p-3 border rounded-xl cursor-pointer hover:bg-gray-50'>
                  <div className='flex items-center gap-3'>
                    <input
                      type='checkbox'
                      checked={selectedAddons.includes(a.id)}
                      onChange={() => toggleAddon(a.id)}
                      className='w-4 h-4 accent-purple-600'
                    />
                    <div>
                      <div className='font-medium text-gray-700'>{a.name}</div>
                      <div className='text-sm text-gray-500'>
                        {a.billing === "monthly"
                          ? `${fmt(a.price)} / month`
                          : fmt(a.price)}
                      </div>
                    </div>
                  </div>
                  <div className='font-semibold text-gray-800'>
                    +{fmt(a.price)}
                    {a.billing === "monthly" ? "/mo" : ""}
                  </div>
                </label>
              ))}
            </div>
            <div className='mt-4 flex gap-3'>
              <button
                onClick={handleAddToCart}
                className='flex-1 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition'>
                Add to Cart
              </button>
              <button
                onClick={() => setAddonModalOpen(false)}
                className='py-2 px-4 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
