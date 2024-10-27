import React from "react";
import "./App.css";
import banner from "./assets/cc.jpeg";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="headder">
          <img src={banner} alt="" />
        </div>
        <div className="content">
          <h1>Currency Converter</h1>
          <div className="input-group">
            <label htmlFor="amt">Amount:</label>
            <input type="text" id="amt" placeholder="Enter your amount value" />
          </div>
          <div className="input-group">
            <label htmlFor="fromCurrency">From Currency:</label>
            <select id="fromCurrency">
              <option value="USD">United States Dollar (USD)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="JPY">Japanese Yen (JPY)</option>
              <option value="GBP">British Pound Sterling (GBP)</option>
              <option value="AUD">Australian Dollar (AUD)</option>
              <option value="CAD">Canadian Dollar (CAD)</option>
              <option value="CHF">Swiss Franc (CHF)</option>
              <option value="CNY">Chinese Yuan (CNY)</option>
              <option value="INR">Indian Rupee (INR)</option>
              <option value="BRL">Brazilian Real (BRL)</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="toCurrency">To Currency:</label>
            <select id="toCurrency">
              <option value="USD">United States Dollar (USD)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="JPY">Japanese Yen (JPY)</option>
              <option value="GBP">British Pound Sterling (GBP)</option>
              <option value="AUD">Australian Dollar (AUD)</option>
              <option value="CAD">Canadian Dollar (CAD)</option>
              <option value="CHF">Swiss Franc (CHF)</option>
              <option value="CNY">Chinese Yuan (CNY)</option>
              <option value="INR">Indian Rupee (INR)</option>
              <option value="BRL">Brazilian Real (BRL)</option>
            </select>
          </div>
          <div className="result">
            <p>1 INR is equal to 83.25 USD</p>
          </div>
          <div className="footer">
            <p>&copy;Copyright <a href="https://akeditz.com">AK Editz</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
