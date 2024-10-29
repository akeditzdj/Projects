import React, { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [includesUppercase, setIncludesUppercase] = useState(true);
  const [includesLowercase, setIncludesLowercase] = useState(true);
  const [includesNumbers, setIncludesNumbers] = useState(true);
  const [includesSymbols, setIncludesSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const btnCopy = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#5f6368"
    >
      <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
    </svg>
  );
  const generatePassword = () => {
    let charset = "";
    if (includesUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includesLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includesNumbers) charset += "0123456789";
    if (includesSymbols) charset += "!@#$%^&*()-_+";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToClicpboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password is copied");
  };

  return (
    <>
      <div className="app-container">
        <h1>Password Generator</h1>
        <div className="input-group">
          <label htmlFor="pass-len">Choose Password length:</label>
          <input
            type="number"
            id="pass-len"
            min="0"
            max="16"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>

        <div className="check-box-group">
          <input
            type="checkbox"
            name="uppercase"
            id="uppercase"
            checked={includesUppercase}
            onChange={(e) => setIncludesUppercase(e.target.checked)}
          />
          <label htmlFor="uppercase">Includes Uppercase</label>
        </div>
        <div className="check-box-group">
          <input
            type="checkbox"
            name="lowercase"
            id="lowercase"
            checked={includesLowercase}
            onChange={(e) => setIncludesLowercase(e.target.checked)}
          />
          <label htmlFor="lowercase">Includes Lowercase</label>
        </div>
        <div className="check-box-group">
          <input
            type="checkbox"
            name="number"
            id="number"
            checked={includesNumbers}
            onChange={(e) => setIncludesNumbers(e.target.checked)}
          />
          <label htmlFor="number">Includes Numbers</label>
        </div>
        <div className="check-box-group">
          <input
            type="checkbox"
            name="symbol"
            id="symbol"
            checked={includesSymbols}
            onChange={(e) => setIncludesSymbols(e.target.checked)}
          />
          <label htmlFor="symbol">Includes Symbols</label>
        </div>
        <div className="result">
          <p>
            Password is: <span>{password}</span>
          </p>
          <p title="Copy" onClick={copyToClicpboard}>
            {btnCopy}
          </p>
        </div>
        <div className="btn-group">
          <button onClick={generatePassword}>Generate Password</button>
        </div>
        <p className="copyright">
          &copy;Copyrigt - <a href="https://www.akeditz.com">AK Editz</a>
        </p>
      </div>
    </>
  );
}

export default App;
