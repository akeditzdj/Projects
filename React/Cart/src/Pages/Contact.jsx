import React, { useState } from "react";
import "../assets/css/style.css";
import Poster from "../Components/Poster";

const ContactInfo = () => (
  <section className="contact-info">
    <h2>Customer Support</h2>
    <p>
      Email: <a href="mailto:support@swiggy.in">support@swiggy.in</a>
    </p>
    <h3>Find Us On</h3>
    <h4>Corporate Office</h4>
    <p>
      No. 55, Sy No. 8-14, Ground Floor, I&J Block, Embassy TechVillage, Outer
      Ring Road, Devarbisanahalli, Bengaluru 560 103, Karnataka, India
    </p>
    <p>
      <strong>Corporate Identity Number:</strong> U74110KA2013PLC096530
    </p>
    <p>
      <strong>Registration Number:</strong> 096530
    </p>
    <a
      href="https://www.google.com/maps"
      target="_blank"
      className="get-directions"
    >
      <button>Get Directions</button>
    </a>
  </section>
);

const InvestorQueries = () => (
  <div className="left-column">
    <h2>Investor Queries and Grievances</h2>
    <p>
      <strong>Abhishek Agarwal</strong>
      <br />
      Vice President, Investor Relations
      <br />
      Email: <a href="mailto:ir@swiggy.in">ir@swiggy.in</a>
    </p>
    <p>
      <strong>Sridhar. M</strong>
      <br />
      Company Secretary and Compliance Officer
      <br />
      Email: <a href="mailto:secretarial@swiggy.in">secretarial@swiggy.in</a>
    </p>
    <p>
      <strong>Registrar and Share Transfer Agent</strong>
      <br />
      Link Intime India Private Limited
      <br />
      543/A, 7th Main, 3rd Cross S L Bhyrappa Road, Hanumanthnagar, Bengaluru,
      Karnataka 560019
      <br />
      Email:{" "}
      <a href="https://www.linkintime.co.in/" target="_blank">
        www.linkintime.co.in
      </a>
    </p>
  </div>
);

const PublicRelations = () => (
  <div className="right-column">
    <h2>Public Relations and Media</h2>
    <p>
      <strong>Sanjana Shetty</strong>
      <br />
      Director, Corporate Communications
      <br />
      Email: <a href="mailto:pr@swiggy.in">pr@swiggy.in</a>
    </p>
    <p>
      <strong>Dinker Vashisht</strong>
      <br />
      Vice President, Corporate Affairs
    </p>
    <h2>Customer Support</h2>
    <p>
      Email: <a href="mailto:support@swiggy.in">support@swiggy.in</a>
    </p>
  </div>
);

const ContactForm = ({ formData, handleInputChange, handleSubmit }) => (
  <section className="contact-form">
    <h3>Get in Touch</h3>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Enter Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Enter Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Enter Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <p>
          By contacting us, you agree to the
          <a href="#" target="_blank">
            Terms and Conditions
          </a>{" "}
          and
          <a href="#" target="_blank">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="contact-container">
      <div className="container d-flex justify-content-center gap-3">
        <ContactInfo />
        <ContactForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="d-flex justify-content-center container public">
        <InvestorQueries />
        <PublicRelations />
      </div>
      <Poster />
    </div>
  );
};

export default Contact;
