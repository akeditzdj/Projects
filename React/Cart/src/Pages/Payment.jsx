import React from "react";
import { useCart } from "../Context/CartContext";

const PaymentPage = () => {
  const { cart, getTotalPrice } = useCart(); // Get cart items and total price from context
  const totalAmount = getTotalPrice().toFixed(2); // Total price formatted to 2 decimal places

  const [paymentMethod, setPaymentMethod] = React.useState("credit-card");

  // Handle payment method change
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container payment-container mb-5">
      <header>
        <h1>Food Court Payment</h1>
        <p>Complete your order and enjoy your meal!</p>
      </header>

      <div className="mt-5 d-flex justify-content-center align-items-start">
        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 ? (
                <tr>
                  <td colSpan="2">Your cart is empty.</td>
                </tr>
              ) : (
                cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>Rs.{item.offer_price}</td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>{totalQuantity}</strong>
                </td>
                <td>
                  <strong>Rs.{totalAmount}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods">
          <h2>Select Payment Method</h2>
          <form>
            <label>
              <input
                type="radio"
                name="payment-method"
                value="credit-card"
                checked={paymentMethod === "credit-card"}
                onChange={handlePaymentMethodChange}
              />
              Credit Card
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="payment-method"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={handlePaymentMethodChange}
              />
              PayPal
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="payment-method"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={handlePaymentMethodChange}
              />
              Cash on Delivery
            </label>
          </form>

          {/* Payment Details */}
          <div className="payment-details">
            {paymentMethod === "credit-card" && (
              <div id="credit-card-info">
                <label htmlFor="card-number">Card Number:</label>
                <input
                  type="text"
                  id="card-number"
                  placeholder="1234 5678 9101 1121"
                  required
                />
                <br />
                <label htmlFor="expiry-date">Expiry Date:</label>
                <input type="month" id="expiry-date" required />
                <br />
                <label htmlFor="cvv">CVV:</label>
                <input type="text" id="cvv" required />
              </div>
            )}
            {paymentMethod === "paypal" && (
              <div id="paypal-info">
                <label htmlFor="paypal-email">PayPal Email:</label>
                <input
                  type="email"
                  id="paypal-email"
                  placeholder="youremail@example.com"
                  required
                />
              </div>
            )}
            {paymentMethod === "cash" && (
              <div id="cash-info">
                <p>
                  Pay the total amount at the counter when your order arrives.
                </p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="submit-button"
            onClick={() => alert("Payment Submitted!")}
          >
            Complete Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
