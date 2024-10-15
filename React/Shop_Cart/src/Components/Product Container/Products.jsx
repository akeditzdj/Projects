import PropTypes from "prop-types";

// Product Component
const Products = ({ food_item, addToCart, isAdded }) => {
  return (
    <div className="container">
      <div className="card shadow">
        <div className="card-img">
          <img src={food_item.img} alt={food_item.name} />
        </div>
        <div className="card-body">
          <div className="info text-center mt-1">
            <h4 className="text-truncate text-danger" title={food_item.name}>
              {food_item.name}
            </h4>
            <h5>{food_item.category}</h5>
            <p className="text-decoration-line-through">
              Price: Rs.{food_item.price}
            </p>
            <p>Offer price: Rs.{food_item.offer_price}</p>
            <p>Ratings: {food_item.ratings}</p>
            <button
              onClick={() => addToCart(food_item)}
              className="btn btn-sm btn-danger"
              disabled={isAdded} // Disable button if added
            >
              {isAdded ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

Products.propTypes = {
  food_item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    offer_price: PropTypes.number.isRequired,
    ratings: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  isAdded: PropTypes.bool.isRequired, // New prop for tracking if added
};
