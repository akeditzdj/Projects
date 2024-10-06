import Products from "./Products.jsx";
import fooditems from "../Product Container/fooditems.json";
import PropTypes from "prop-types";
// Product List Component
const ProductList = ({ addToCart }) => {
  const validateItem = (item) => {
    return item && item.name && item.price;
  };

  const handleAddToCart = (item) => {
    if (validateItem(item)) {
      addToCart(item);
      console.log(`${item.name} has been added to your cart.`);
    } else {
      console.error("Item is invalid or already in cart.");
    }
  };

  return (
    <>
      <h4 className="mt-4 text-center">Product List</h4>
      <div className="container product-container my-2">
        {fooditems.map((food_item) => (
          <Products
            food_item={food_item}
            addToCart={handleAddToCart}
            key={food_item.id}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;

ProductList.propTypes = {
  addToCart: PropTypes.func, // Specifying that addToCart is a required function
};
