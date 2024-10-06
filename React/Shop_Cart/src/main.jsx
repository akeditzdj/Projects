import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Components/Navbar/Nav.css";
import "./Components/Product Container/ProductList.css";
import "./Components/Cart Items/CartItems.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/Product Container/ProductList";
import CartItems from "./Components/Cart Items/CartItems";
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <ProductList />
    <CartItems />
  </StrictMode>
);
