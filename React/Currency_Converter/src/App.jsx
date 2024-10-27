import { useState, useEffect } from "react";
import "./App.css";
import banner from "./assets/cc.jpeg";
import axios from "axios";

function App() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(url);
        console.log(response);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };
  });

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

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
            <input
              type="text"
              id="amt"
              placeholder="Enter your amount value"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="fromCurrency">From Currency:</label>
            <select id="fromCurrency" value={fromCurrency}>
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
            <select id="toCurrency" value={toCurrency}>
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
            <p>
              {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
            </p>
          </div>
          <div className="footer">
            <p>
              &copy;Copyright <a href="https://akeditz.com">AK Editz</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
