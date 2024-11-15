import "./App.css";
import RootLayOut from "./Layout/RootLayOut";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ProductDetails from "./Pages/ProductDetails";
import ProductLayout from "./Layout/ProductLayout";
import Products from "./Pages/Products";
import NotFound from "./Pages/NotFound";
import CartItems from "./Components/CartItems";
import { CartProvider } from "./Context/CartContext"; // Import the CartProvider
import "../src/assets/css/style.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="products" element={<ProductLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="cart" element={<CartItems />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
