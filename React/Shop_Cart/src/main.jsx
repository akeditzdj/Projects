import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Components/Navbar/Navbar.css";
import "./Components/Product Container/ProductList.css";
import "./Components/Cart Items/CartItems.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/Product Container/ProductList";
import "bootstrap-icons/font/bootstrap-icons.css";
import Myoffcanvas from "./Components/Cart Items/Myoffcanvas";
import Myoffcanvasmenu from "./Components/Cart Items/Myoffcanvasmenu";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (food_item) => {
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.some((item) => item.id === food_item.id);
      if (itemExists) {
        console.error("Item is already in the cart.");
        return prevCartItems;
      }
      return [...prevCartItems, food_item];
    });
  };

  return (
    <StrictMode>
      <Navbar cartItems={cartItems} />
      <Myoffcanvas cartItems={cartItems} addToCart={addToCart} />
      <Myoffcanvasmenu />
      <ProductList addToCart={addToCart}  />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<App />);
