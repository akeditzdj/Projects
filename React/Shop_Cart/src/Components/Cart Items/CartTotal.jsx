import PropTypes from "prop-types";

// Cart Total Component
const CartTotal = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.offer_price,
    0
  );
  const deliveryFee = 5;
  const salesTax = totalPrice * 0.07; // Example: 7% sales tax
  const grandTotal = totalPrice + deliveryFee + salesTax;

  return (
    <>
      <div className="cart-total my-3">
        <h4 className="px-2 text-danger">Order Summary</h4>
        <div className="cart-total-info p-5 border-top border-2 border-dark py-2">
          <div className="d-flex justify-content-between align-items-center my-2">
            <h5>Order Subtotal </h5>
            <h5>Rs.{totalPrice.toFixed(2)}</h5>
          </div>
          <div className="d-flex justify-content-between align-items-center my-2">
            <h6 className="text-secondary">Delivery Fee</h6>
            <h6 className="text-secondary">Rs.{deliveryFee.toFixed(2)}</h6>
          </div>
          <div className="d-flex justify-content-between align-items-center my-2">
            <h6 className="text-secondary">Sales Tax</h6>
            <h6 className="text-secondary">Rs.{salesTax.toFixed(2)}</h6>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center px-5 my-2 border-top border-2 border-dark py-3">
          <h5>Total</h5>
          <h5>Rs.{grandTotal.toFixed(2)}</h5>
        </div>
        <button className="btn btn-lg btn-danger w-100">Checkout</button>
      </div>
    </>
  );
};
export default CartTotal;

CartTotal.propTypes = {
  cartItems: PropTypes.array.isRequired,
};
