import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/swiggy-logo.svg";

const OffcanvasMenu = () => {
  return (
    <div
      className="offcanvas offcanvas-start"
      data-bs-backdrop="static"
      tabIndex="-1"
      id="offCanvasMenu"
      aria-labelledby="offCanvasMenuLabel"
    >
      <div className="offcanvas-header border-bottom border-white">
        <h5 className="offcanvas-title" id="offCanvasMenuLabel">
          {/* Descriptive alt text for logos */}
          <img width="300"
            className="img-fluid w-100 logo-1"
            src={Logo}
            alt="Swiggy main logo"
          />
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      {/* Offcanvas body */}
      <div className="offcanvas-body d-block">
        <ul className="navbar-nav">
          {/* About Swiggy Dropdown */}
          <li className="nav-item pe-4 dropdown">
            <a
              className="nav-link link-light dropdown-toggle"
              href="#"
              id="aboutSwiggyDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About Swiggy
            </a>
            <ul className="dropdown-menu" aria-labelledby="aboutSwiggyDropdown">
              <li className="py-2">
                <NavLink to="/swiggy-journey" className="dropdown-item">
                  Swiggy Journey
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/our-team" className="dropdown-item">
                  Our Team
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/careers" className="dropdown-item">
                  Careers
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/blogs" className="dropdown-item">
                  Blogs
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Other Links */}
          <li className="nav-item pe-4">
            <NavLink to="/businesses" className="nav-link link-light">
              Our Businesses
            </NavLink>
          </li>

          {/* Delivering For Everyone Dropdown */}
          <li className="nav-item pe-4 dropdown">
            <a
              className="nav-link link-light dropdown-toggle"
              href="#"
              id="deliverForEveryoneDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Delivering For Everyone
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="deliverForEveryoneDropdown"
            >
              <li className="py-2">
                <NavLink to="/ride-with-swiggy" className="dropdown-item">
                  Ride With Swiggy
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  to="/restaurant-partner-program"
                  className="dropdown-item"
                >
                  Swiggy Restaurant Partner Program
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/restaurant-awards" className="dropdown-item">
                  Swiggy Restaurant Awards
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-item pe-4">
            <NavLink to="/newsroom" className="nav-link link-light">
              Newsroom
            </NavLink>
          </li>

          {/* Sustainability Dropdown */}
          <li className="nav-item pe-4 dropdown">
            <a
              className="nav-link link-light dropdown-toggle"
              href="#"
              id="sustainabilityDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sustainability
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="sustainabilityDropdown"
            >
              <li className="py-2">
                <NavLink to="/environment" className="dropdown-item">
                  Environment
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/social" className="dropdown-item">
                  Social
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/governance" className="dropdown-item">
                  Governance
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/initiatives" className="dropdown-item">
                  Our Initiatives
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-item pe-4">
            <NavLink to="/investor-relations" className="nav-link link-light">
              Investor Relations
            </NavLink>
          </li>

          <li className="nav-item pe-4">
            <NavLink to="/contact-us" className="nav-link link-light">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffcanvasMenu;
