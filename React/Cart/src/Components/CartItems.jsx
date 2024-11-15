import React from "react";
import { useCart } from "../Context/CartContext";

const CartItems = () => {
  const { cart, getTotalPrice } = useCart();

  return (
    <div className="cart-items-container">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div>{item.name}</div>
                <div>Price: Rs.{item.offer_price}</div>
                <div>Quantity: {item.quantity}</div>
                <div>Total: Rs.{item.offer_price * item.quantity}</div>
              </li>
            ))}
          </ul>
          <h4>Total: Rs.{getTotalPrice()}</h4>
        </div>
      )}
    </div>
  );
};

export default CartItems;
