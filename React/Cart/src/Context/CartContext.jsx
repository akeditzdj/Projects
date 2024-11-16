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

  // Add item to the cart (or increase quantity if already in cart)
  const addToCart = (item) => {
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

  // Update the quantity of an item in the cart
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) return; // Prevent invalid quantity
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from the cart
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // Get the total price of all items in the cart
  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.offer_price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
