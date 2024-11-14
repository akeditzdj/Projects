import React, { useState } from "react";
import Logo from "../assets/images/logo.webp";

const Login = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="container form-container">
      <form onSubmit={handleSubmit}>
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
          <div className="heading-container">
            <h2>Sign Up</h2>
            <p>
              or <span>login to your account</span>
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

        <h5>Have a referral code?</h5>

        <input type="submit" value="CONTINUE" />

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

export default Login;
