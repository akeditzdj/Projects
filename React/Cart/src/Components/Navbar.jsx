import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/swiggy-logo.svg";
import { useCart } from "../Context/CartContext"; // Import CartContext
import OffcanvasMenu from "./OffcanvasMenu"; // Import OffcanvasMenu component
import CartItems from "./CartItems"; // Import CartItems component

const Navbar = () => {
  const { cart } = useCart(); // Access cart state from context
  const [cartItemCount, setCartItemCount] = useState(cart.length); // Track cart item count

  // Update cart item count dynamically when cart changes
  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);

  return (
    <div>
      {/* Mobile Menu-bar Button */}
      <button
        className="btn bg-transparent text-white d-block d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offCanvasMenu" // Target offcanvas menu here
        aria-controls="offCanvasMenu"
      >
        <i className="bi bi-list fs-1"></i>
      </button>

      {/* Navbar Section */}
      <div className="navbar top-0 sticky-top">
        <div className="nav-items">
          {/* Logo */}
          <div>
            <NavLink to="/">
              <img src={Logo} alt="Swiggy Logo" />
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div>
            <nav>
              <ul className="list-unstyled d-flex gap-4">
                <li>
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" activeClassName="active">
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="active">
                    Contact
                  </NavLink>
                </li>

                {/* Login and Buttons Section */}
                <li>
                  <NavLink to="/login">
                    <button className="btn btn-outline-light p-0">Login</button>
                  </NavLink>
                </li>

                {/* Icon Buttons */}
                {/* Cart Button */}
                <li className="icon d-md-flex d-flex align-items-center justify-content-center">
                  <button
                    type="button"
                    className="btn bg-transparent border-0 p-0"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#cart"
                  >
                    <a href="#" className="cart nav-link">
                      <i className="bi bi-cart-check-fill fs-3 link-light pe-5"></i>
                      {/* Dynamically render the cart item count */}
                      <span id="cartItemCount">{cartItemCount}</span>
                    </a>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Offcanvas Menu Component */}
      <OffcanvasMenu />

      {/* Cart Items Offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="cart"
        aria-labelledby="cartLabel"
      >
        <div className="offcanvas-header">
          <h5 class="offcanvas-title" id="staticBackdropLabel">
            <i class="bi bi-cart-check-fill fs-3 link-light"></i> Cart Items
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-2">
          <CartItems /> {/* Display Cart Items inside Offcanvas */}
          <div class="total-section border-top mt-2">
            <div id="cartTotalOutput"></div>
            <div class="d-flex justify-content-center align-items-center gap-5 py-2">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                class="btn  btn-light"
              >
                Continue to Buy
              </button>
              <button type="button" class="btn  btn-light">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
