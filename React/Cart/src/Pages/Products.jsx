import React, { useState, useMemo } from "react";
import foodData from "../assets/js/fooditems.json"; // Product data
import { NavLink } from "react-router-dom";
import { useCart } from "../Context/CartContext"; // Importing cart context

const Products = () => {
  const { addToCart } = useCart(); // Get the addToCart function from context
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(1000);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(foodData.map((item) => item.category)),
    ];
    return uniqueCategories.filter((cat) => cat); // Remove null/undefined categories
  }, [foodData]);

  const filteredFoodItems = useMemo(() => {
    return foodData.filter((item) => {
      return (
        (category === "All" || item.category === category) &&
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        item.offer_price <= priceRange
      );
    });
  }, [foodData, category, search, priceRange]);

  return (
    <div className="container">
      <div className="main-section my-5 border-top">
        <div className="row show-food-items flex-wrap d-flex justify-content-start align-items-start">
          {/* Displaying filtered food items */}
          {filteredFoodItems.map((item) => (
            <div key={item.id} className="col-12 col-md-4">
              <NavLink to={`/products/${item.id}`}>
                <div className="card border-0 shadow">
                  <div className="card-img">
                    <img className="img-fluid" src={item.img} alt={item.name} />
                  </div>
                  <div className="card-body p-3 text-center">
                    <h4 className="text-truncate">{item.name}</h4>
                    <p>{item.category}</p>
                    <p className="text-decoration-line-through">
                      Price: Rs.{item.price}.00
                    </p>
                    <p>Offer Price: Rs.{item.offer_price}.00</p>
                    <p>Customer Review: {item.ratings}</p>
                    <button
                      onClick={() => addToCart(item)}
                      className="btn btn-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
