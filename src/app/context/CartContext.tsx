"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Types
export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  plan?: string;
  addons?: Record<string, boolean>; // optional addons map
}

export interface CartItem extends Product {
  quantity: number;
  key: string; // unique key (could be id + plan or something similar)
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (key: string) => void;
  clearCart: () => void;
  updateQuantity: (key: string, newQuantity: number) => void;
  cartTotal: number;
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

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
      return [...prevCart, { ...product, quantity, key: uniqueKey }];
    });
  };

  // Remove product
  const removeFromCart = (key: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.key !== key));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Update quantity
  const updateQuantity = (key: string, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.key === key ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate total
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        cartTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
