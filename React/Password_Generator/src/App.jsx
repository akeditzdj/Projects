import React, { useState } from "react";
import "./App.css";

function App() {
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
  return (
    <>
      <div className="app-container">
        <h1>Password Generator</h1>
        <div className="input-group">
          <label htmlFor="pass-len">Choose Password length:</label>
          <input type="number" id="pass-len" min="0" max="16" />
        </div>
        <div className="check-box-group">
          <input type="checkbox" name="number" id="number" />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="check-box-group">
          <input type="checkbox" name="uppercase" id="uppercase" />
          <label htmlFor="uppercase">Uppercase</label>
        </div>
        <div className="check-box-group">
          <input type="checkbox" name="lowercase" id="lowercase" />
          <label htmlFor="lowercase">Lowercase</label>
        </div>
        <div className="check-box-group">
          <input type="checkbox" name="symbol" id="symbol" />
          <label htmlFor="symbol">Symbols</label>
        </div>
        <div className="result">
          <p>
            Password is: <span>Ajith195@</span>
          </p>
          <p title="Copy">{btnCopy}</p>
        </div>
        <div className="btn-group">
          <button>Generate Password</button>
        </div>
        <p className="copyright">
          &copy;Copyrigt - <a href="https://www.akeditz.com">AK Editz</a>
        </p>
      </div>
    </>
  );
}

export default App;
