"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Types
export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  plan?: string;
  addons?: { id: string; name: string; price: number }[];
}

export interface CartItem extends Product {
  quantity: number;
  key: string; // unique key (id-plan)
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (key: string) => void;
  clearCart: () => void;
  updateQuantity: (key: string, newQuantity: number) => void;
  updateCartItem: (key: string, patch: Partial<CartItem>) => void;
  updateAddons: (
    key: string,
    addon: { id: string; name: string; price: number },
    add: boolean
  ) => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) setCart(JSON.parse(stored));
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cart]);

  // Add product to cart
  const addToCart = (product: Product, quantity: number = 1) => {
    const uniqueKey = `${product.id}-${product.plan || "default"}`;
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.key === uniqueKey);
      if (existing) {
        return prevCart.map((item) =>
          item.key === uniqueKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prevCart,
        {
          ...product,
          quantity,
          key: uniqueKey,
          addons: product.addons ?? [],
        },
      ];
    });
  };

  // Remove product
  const removeFromCart = (key: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.key !== key));
  };

  // Clear all items
  const clearCart = () => {
    setCart([]);
  };

  // Update item quantity
  const updateQuantity = (key: string, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.key === key ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Update any cart item partially
  const updateCartItem = (key: string, patch: Partial<CartItem>) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.key === key ? { ...item, ...patch } : item))
    );
  };

  // ✅ New: Add or Remove Add-ons
  const updateAddons = (
    key: string,
    addon: { id: string; name: string; price: number },
    add: boolean
  ) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.key !== key) return item;

        let updatedAddons = item.addons || [];
        if (add) {
          // prevent duplicates
          const exists = updatedAddons.some((a) => a.id === addon.id);
          if (!exists) updatedAddons = [...updatedAddons, addon];
        } else {
          updatedAddons = updatedAddons.filter((a) => a.id !== addon.id);
        }

        return { ...item, addons: updatedAddons };
      })
    );
  };

  // Calculate total (plan + addons)
  const cartTotal = cart.reduce((sum, item) => {
    const planPrice = item.price || 0;
    const addonsPrice =
      item.addons?.reduce((total, addon) => total + addon.price, 0) || 0;
    return sum + (planPrice + addonsPrice) * (item.quantity || 1);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        updateCartItem,
        updateAddons, // ✅ include new function
        cartTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
