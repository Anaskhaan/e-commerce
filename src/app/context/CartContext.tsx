"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Types (kept compatible with your earlier definitions)
export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  plan?: string;
  addons?: { id: string; name: string; price: number }[]; // explicit shape for addons
}

export interface CartItem extends Product {
  quantity: number;
  key: string; // unique key (id-plan-addonsKey)
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (key: string) => void;
  clearCart: () => void;
  updateQuantity: (key: string, newQuantity: number) => void;
  updateCartItem: (key: string, patch: Partial<CartItem>) => void; // NEW
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

  // Save to localStorage when cart changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cart]);

  // Add product to cart
  // Note: we build a key that **does not** include addons here (so adding a plan directly groups by id+plan)
  const addToCart = (product: Product, quantity: number = 1) => {
    const uniqueKey = `${product.id}-${product.plan || "default"}`;
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.key === uniqueKey);
      if (existing) {
        // if same plan already exists (without addons keying), increase quantity
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

  // NEW: updateCartItem to patch addons, price, etc.
  const updateCartItem = (key: string, patch: Partial<CartItem>) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.key === key ? { ...item, ...patch } : item))
    );
  };

  // Calculate total: use item.totalPrice if present, otherwise item.price
  const cartTotal = cart.reduce((sum, item) => {
    const price = (item as any).totalPrice ?? item.price ?? 0;
    return sum + price * (item.quantity ?? 1);
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
