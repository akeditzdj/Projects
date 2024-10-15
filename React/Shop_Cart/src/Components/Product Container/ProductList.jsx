import { useState } from "react";
import Products from "./Products.jsx";
import fooditems from "../Product Container/fooditems.json";
import PropTypes from "prop-types";

// Product List Component
const ProductList = ({ addToCart }) => {
  const [cartItems, setCartItems] = useState([]);

  const validateItem = (item) => {
    return item && item.name && item.price;
  };

  const handleAddToCart = (item) => {
    if (validateItem(item)) {
      setCartItems((prevItems) => [...prevItems, item]); // Update state
      addToCart(item);
    }
  };

  const isItemAdded = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
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
            isAdded={isItemAdded(food_item.id)} // Check if the item is added
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired, // Marking as required
};
