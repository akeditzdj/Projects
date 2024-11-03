import { useState } from "react";
import "./App.css";

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={toggleShow}>
        {question}
      </div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};
const FaqAccordion = ({ data }) => {
  return (
    <div className="faq-accordion">
      <h2>FAQ's</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const data = [
  {
    id: 1,
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition.",
  },
  {
    id: 2,
    question: "How can I track my order?",
    answer:
      "Once your order has shipped, you will receive an email with a tracking number. You can use this number on our website to track your shipment.",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, and Apple Pay.",
  },
  {
    id: 4,
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 5-7 business days, while expedited shipping options are available for faster delivery.",
  },
  {
    id: 5,
    question: "Do you ship internationally?",
    answer:
      "Yes, we offer international shipping to select countries. Additional fees may apply.",
  },
];

function App() {
  return (
    <>
      <div className="App">
        <FaqAccordion data={data} />
      </div>
    </>
  );
}

export default App;
