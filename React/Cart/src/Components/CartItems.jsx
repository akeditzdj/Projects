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
          {cart.map((item) => (
            <div className="cart-list pe-2" key={item.id}>
              <div className="cart-list-img" style={{ width: "80px" }}>
                <img
                  className=""
                  style={{ width: "100px" }}
                  src={item.img}
                  alt={item.name}
                ></img>
              </div>
              <h5 className="ms-0 fs-6 fw-bold text-truncate">{item.name}</h5>

              <h6>Qty:{item.quantity}</h6>
              <h5 className="fs-6 text-end fw-bold">
                Rs.{item.offer_price}.00
              </h5>
            </div>
          ))}

          <h4>Total: Rs.{getTotalPrice()}</h4>
        </div>
      )}
    </div>
  );
};

export default CartItems;
