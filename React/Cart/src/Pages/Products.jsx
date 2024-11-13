import React, { useState, useEffect, useMemo } from "react";
import foodData from "../assets/js/fooditems.json";

const Products = () => {
  // State hooks
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [foodItems, setFoodItems] = useState([]);
  const [priceRange, setPriceRange] = useState(130);

  // Example categories
  const categories = [...new Set(foodData.map((item) => item.category))];

  // Load food items from JSON or API (simulate with useEffect here)
  useEffect(() => {
    setFoodItems(foodData);
  }, []);

  // Memoized filter logic
  const filteredFoodItems = useMemo(() => {
    return foodItems.filter((item) => {
      return (
        (category === "All" || item.category === category) &&
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        item.price <= priceRange
      );
    });
  }, [foodItems, category, search, priceRange]);

  // Event Handlers
  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handlePriceChange = (e) => setPriceRange(Number(e.target.value));

  return (
    <div className="container">
      <div className="food-items-header d-md-flex h-auto justify-content-around align-items-center rounded">
        <div className="food-items-header-content p-3">
          <label className="form-label text-white">Search</label>
          <input
            className="form-control"
            id="searchFood"
            type="search"
            placeholder="Search your Food"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="food-items-header-content p-3">
          <label className="form-label text-white">Category</label>
          <select
            className="form-select"
            id="categoryList"
            value={category}
            onChange={handleCategoryChange}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="food-items-header-content p-3 range">
          <div className="d-flex gap-5 justify-content-center align-items-center">
            <label className="form-label text-white" htmlFor="priceRange">
              Price Range
            </label>
            <span className="text-white form-label" id="priceValue">
              Rs.{priceRange}
            </span>
          </div>
          <input
            className="form-range"
            type="range"
            min="130"
            max="300"
            id="priceRange"
            value={priceRange}
            onChange={handlePriceChange}
          />
        </div>
      </div>

      <div className="main-section my-5 border-top">
        <div className="row show-food-items flex-wrap d-flex justify-content-start align-items-start">
          {filteredFoodItems.map((item) => (
            <div key={item.id} className="col-12 col-md-4">
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
                    title="Add to Cart"
                    className="btn btn-sm text-white fs-4 add-to-cart"
                    onClick={() => console.log("Added to cart", item)}
                  >
                    <i className="bi bi-cart-plus"></i>
                  </button>
                  <button
                    title="Add to Favourite"
                    className="btn btn-sm text-white fs-4 add-to-fav"
                    onClick={() => console.log("Added to favourites", item)}
                  >
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
