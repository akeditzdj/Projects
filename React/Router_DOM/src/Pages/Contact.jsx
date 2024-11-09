import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="mt-2 text-center">Contact</h1>
      <div className="text-center mt-4 d-flex justify-content-center align-items-center gap-2">
        <button className="btn btn-primary" onClick={() => navigate("info")}>
          Contact Info
        </button>
        <button className="btn btn-primary" onClick={() => navigate("form")}>
          Contact Form
        </button>
      </div>
    </div>
  );
};

export default Contact;
