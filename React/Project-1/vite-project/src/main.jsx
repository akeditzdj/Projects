import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserCard } from "./components/card/Card";
// import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <UserCard />
  </StrictMode>
);
