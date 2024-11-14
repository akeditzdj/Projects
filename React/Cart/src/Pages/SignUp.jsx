import React, { useState } from "react";
import Logo from "../assets/images/logo.webp";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  // State for the form data
  const [formData, setFormData] = useState({
    phoneNumber: "", // Initial value for phone number
    referralCode: "", // Placeholder for referral code if needed
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

    // You can add further validation or form submission logic here
    console.log("Form submitted with data:", formData);

    // For example, after successful form submission, you can reset the form or redirect the user
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
            id="referralCode"
            value={formData.referralCode}
            onChange={handleInputChange}
          />
          <label htmlFor="referralCode">Referral Code (Optional)</label>
        </div>

        <h5>Have a referral code?</h5>

        <input type="submit" value="SIGN UP" />

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
