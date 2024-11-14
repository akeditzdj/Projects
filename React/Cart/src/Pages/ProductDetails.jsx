import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FoodItems from "../assets/js/fooditems.json"; // Your local JSON file with product data
import Poster from "../Components/Poster";
import StarRating from "../Components/StarRating";
import "../assets/css/style.css";
const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the product details from the local FoodItems data
  useEffect(() => {
    const foundProduct = FoodItems.find((item) => item.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setLoading(false);
    } else {
      setError("Product not found");
      setLoading(false);
    }
  }, [id]);

  // Loading state
  if (loading) {
    return <div>Loading product details...</div>;
  }

  // Error handling
  if (error) {
    return <div>Error: {error}</div>;
  }

  // If product is found, display it
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
              consectetur adipisicing elit. Dolores facere maxime odio eaque
              sint saepe voluptatem expedita blanditiis, ut voluptatum,
              distinctio ullam ducimus delectus quae doloremque praesentium
              ratione molestiae libero.
            </p>
            <p className="d-flex justify-content-start align-items-center gap-1">
              <strong>Product Rating:</strong>
              <p>
                <StarRating rating={product.ratings} />
              </p>

            </p>
            <div className="social-media-link d-flex justify-content-start align-items-center gap-3">
              <strong>Follow me :</strong>
              <a href="#">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#">
                <i className="bi bi-youtube fs-4"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </div>
            <div className="d-flex gap-2 justify-content-start align-items-center mt-4">
              <button className="btn btn-sm">Add to Cart</button>
              <button className="btn btn-sm">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <Poster />
    </div>
  );
};

export default ProductDetails;
