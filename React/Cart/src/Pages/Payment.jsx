import { useState } from "react";
const PaymentPage = () => {
  // State for the payment method selection
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  // Order items
  const orderItems = [
    { name: "Cheeseburger", price: 5.99 },
    { name: "Fries", price: 2.49 },
    { name: "Soft Drink", price: 1.99 },
  ];

  // Calculate total price
  const totalAmount = orderItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  // Handle payment method change
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="container">
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
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>${totalAmount}</strong>
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
