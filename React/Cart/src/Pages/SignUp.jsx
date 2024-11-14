import React, { useState } from "react";
import Logo from "../assets/images/logo.webp";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  // State for the form data, with initial values for all fields
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    email: "",
    referralCode: "",
  });

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (e.g., for email format)
    if (!formData.email || !formData.phoneNumber || !formData.name) {
      alert("Please fill all required fields.");
      return;
    }

    // Optional: Add regex for phone number and email validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // You can handle form submission logic here, e.g., calling an API
    console.log("Form submitted with data:", formData);

    // Optional: Reset the form after submission
    setFormData({
      phoneNumber: "",
      name: "",
      email: "",
      referralCode: "",
    });
  };

  return (
    <div className="container login-form-container">
      <form onSubmit={handleSubmit}>
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
          <div className="heading-container">
            <h2>Sign Up</h2>
            <p>
              or{" "}
              <NavLink to="/login">
                <span>already have an account? Login</span>
              </NavLink>
            </p>
            <hr />
          </div>
        </div>

        <div className="row">
          <input
            type="text"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="phoneNumber">Phone Number</label>
        </div>

        <div className="row">
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="row">
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="row">
          <input
            type="text"
            id="referralCode"
            value={formData.referralCode}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="referralCode">Referral Code (Optional)</label>
        </div>
        <span>If code don't have type "NA"</span>

        <button type="submit">SIGN UP</button>

        <div className="footer">
          <p>
            By creating an account, I accept the
            <span>Terms & Conditions & Privacy Policy</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
