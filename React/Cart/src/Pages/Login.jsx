import React, { useState } from "react";
import Logo from "../assets/images/logo.webp";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.phoneNumber.match(/^[0-9]{10}$/)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
    }
    // Add more validations as needed for email, name, etc.
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return; // Stop if there are validation errors

    setIsLoading(true);
    // Simulate a form submission (e.g., API call)
    setTimeout(() => {
      console.log(formData); // Handle form submission logic here
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="container login-form-container">
      <form onSubmit={handleSubmit}>
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
          <div className="heading-container">
            <h2>Login</h2>
            <p>
              or{" "}
              <NavLink to="/signup">
                <span>Create a new account</span>
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
            aria-describedby="phoneError"
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          {errors.phoneNumber && (
            <p id="phoneError" className="error-message mt-2 ">
              {errors.phoneNumber}
            </p>
          )}
          <p>
            <a href="#">Forgot Password</a>
          </p>
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "LOG IN"}
        </button>

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
