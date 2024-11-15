import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import foodData from "../assets/js/fooditems.json"; // Product data
import { useCart } from "../Context/CartContext"; // Use the cart context
import StarRating from "../Components/StarRating"; // Assuming you have this component

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // Get the addToCart function from context

  useEffect(() => {
    const foundProduct = foodData.find((item) => item.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="product-details-box">
          <div className="product-details-img">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="product-details-content">
            <h1>{product.name}</h1>
            <p className="text-decoration-line-through">
              <strong>Price:</strong> Rs.{product.price}
            </p>
            <p>
              <strong>Offer Price:</strong> Rs.{product.offer_price}
            </p>
            <p>
              <strong>Description:</strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <p>
              <strong>Product Rating:</strong>
              <StarRating rating={product.ratings} />
            </p>
            <div className="d-flex gap-2 justify-content-start align-items-center mt-4">
              <button onClick={() => addToCart(product)} className="btn btn-sm">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
