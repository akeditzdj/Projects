import React from "react";
import { useCart } from "../Context/CartContext";

const CartItems = () => {
  const { cart, getTotalPrice, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    // Remove from the cart
    removeFromCart(itemId);

    // Remove from local storage
    const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const filteredCart = updatedCart.filter((item) => item.id !== itemId);

    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  };

  return (
    <div className="cart-items-container">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item cart-list" key={item.id}>
              <div className="cart-item-img d-flex justify-content-center align-items-center gap-1">
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "100px", objectFit: "cover" }}
                />
                <div className="d-flex" style={{ maxWidth: "100px" }}>
                  {" "}
                  {/* or any width you need */}
                  <h5 className="fs-6 fw-bold text-truncate">{item.name}</h5>
                </div>
              </div>

              <div className="d-flex">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  className="quantity-input"
                />
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="btn btn-danger btn-sm ms-2"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
              <h5 className="fs-6 text-end fw-bold pe-2">
                Rs.{item.offer_price}.00
              </h5>
            </div>
          ))}
          <div className="total-price mt-3">
            <h4>Total: Rs.{getTotalPrice()}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
