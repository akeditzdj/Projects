import React, { createContext, useState, useContext, useEffect } from "react";

// Create a Context for Cart
const CartContext = createContext();

// Custom hook to use the Cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage if available
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Sync cart with localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item) => {
    // Check if item is already in the cart
    const itemExists = cart.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.offer_price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
