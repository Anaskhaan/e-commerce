// src/utils/fetchStripePrices.js
export const fetchStripePrices = async () => {
  try {
    const res = await fetch("/api/get-prices");
    const data = await res.json();

    // Map product IDs to specific plan names
    const priceMap = {};
    data.forEach((p) => {
      switch (p.productId) {
        case "prod_TBzVK9yno9cri3": // your 911 subscription product ID
          priceMap["911 Subscription"] = p;
          break;
        case "prod_FAMILY_ID": // replace with your Family plan product ID
          priceMap["Family Subscription"] = p;
          break;
        case "prod_MONITOR_ID": // replace with your Monitoring plan product ID
          priceMap["Monitoring Subscription"] = p;
          break;
      }
    });

    return priceMap;
  } catch (err) {
    console.error(err);
    return {};
  }
};
