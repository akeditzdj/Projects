import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Components/Navbar/Navbar.css";
import "./Components/Product Container/ProductList.css";
import "./Components/Cart Items/CartItems.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/Product Container/ProductList";
import CartItems from "./Components/Cart Items/CartItems";
import "bootstrap-icons/font/bootstrap-icons.css";
import Myoffcanvas from "./Components/Cart Items/Myoffcanvas";
import Myoffcanvasmenu from "./Components/Cart Items/Myoffcanvasmenu";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Myoffcanvasmenu />
    <Myoffcanvas />
    <ProductList />
    <CartItems />
  </StrictMode>
);
