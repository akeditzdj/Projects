import PropTypes from "prop-types";
// Cart Item Component
const CartItems = ({ cartItems }) => {
  return (
    <>
      {cartItems.map((item) => (
        <div key={item.id} className="p-2 cart-list-container">
          <div className="cart-list d-flex justify-content-between align-items-center p-2">
            <div className="d-md-flex justify-content-start align-items-center gap-2">
              <div className="cart-img">
                <img src={item.img} alt={item.name} />
              </div>
              <h5 className="text-truncate">{item.name}</h5>
            </div>
            <div className="d-flex flex-wrap justify-content-end align-items-center gap-2">
              <div className="cart-price">Rs.{item.offer_price.toFixed(2)}</div>
              <div>
                <input
                  className="form-control form-control-sm"
                  type="number"

                  id="qty"
                />
              </div>
              <button className="btn btn-sm btn-danger">
                <i className="bi bi-trash-fill"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItems;

CartItems.propTypes = {
  cartItems: PropTypes.array.isRequired, // Correctly specifying that cartItems is an array
};
