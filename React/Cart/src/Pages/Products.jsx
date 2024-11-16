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

  const renderRatings = (rating) => {
    const stars = Array.from({ length: 5 }, (_, index) =>
      index < rating ? "★" : "☆"
    );
    return stars.join("");
  };

  return (
    <div className="container">
      <div className="food-items-header  d-md-flex h-auto  justify-content-around align-items-center rounded">
        <div className="food-items-header-content p-3">
          <label className="form-label text-white">Search</label>
          <input
            className="form-control"
            id="searchFood"
            type="search"
            placeholder="Search your Food"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="food-items-header-content p-3">
          <label className="form-label text-white">Category</label>
          <select
            className="form-select"
            id="categoryList"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="food-items-header-content p-3 range">
          <div className="d-flex gap-5 justify-content-center align-items-center ">
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
            max="1000"
            id="priceRange"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
      </div>

      <div className="main-section my-5 border-top">
        <div className="row show-food-items flex-wrap d-flex justify-content-start align-items-start">
          {filteredFoodItems.map(
            ({ id, name, category, img, price, offer_price, ratings }) => (
              <div key={id} className="col-12 col-md-4">
                <NavLink to={`/products/${id}`}>
                  <div className="card border-0 shadow">
                    <div className="card-img">
                      <img className="img-fluid" src={img} alt={name} />
                    </div>
                    <div className="card-body p-3 text-center">
                      <h4 className="text-truncate">{name}</h4>
                      <p>{category}</p>
                      <p className="text-decoration-line-through">
                        Price: Rs.{price}.00
                      </p>
                      <p>Offer Price: Rs.{offer_price}.00</p>
                      <p>Customer Review: {renderRatings(ratings)}</p>
                      <button
                        onClick={() =>
                          addToCart({
                            id,
                            name,
                            category,
                            img,
                            price,
                            offer_price,
                            ratings,
                          })
                        }
                        className="btn"
                      >
                        <h3>
                          <i
                            className="bi bi-cart-plus"
                            title="Add To Cart"
                          ></i>
                        </h3>
                      </button>
                    </div>
                  </div>
                </NavLink>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
