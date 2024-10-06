import PropTypes from "prop-types";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

// Offcanvas Component
const Myoffcanvas = ({ cartItems, addToCart }) => {
  return (
    <div
      className="offcanvas offcanvas-end"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header bg-danger">
        <h5 className="text-white">
          <i className="bi fs-3 text-white bi-cart-check-fill"></i> Cart Items
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="cart-item-container">
          <CartItems cartItems={cartItems} addToCart={addToCart} />
        </div>
        <CartTotal cartItems={cartItems} />
      </div>
    </div>
  );
};

// PropTypes for Myoffcanvas
Myoffcanvas.propTypes = {
  cartItems: PropTypes.array.isRequired, // Array of items in the cart
  addToCart: PropTypes.func, // Function to add items to cart (optional)
};

export default Myoffcanvas;
