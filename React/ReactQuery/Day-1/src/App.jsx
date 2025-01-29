import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import RegularFetch from "./Components/RegularFetch";
import ReactQueryFetch from "./Components/ReactQueryFetch";
import Home from "./Components/Home";
import ReactQueryFetchDetail from "./Components/ReactQueryFetchDetail";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/regular">Regular Fetch</NavLink>
        <NavLink to="react-query">React Query Fetch</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regular" element={<RegularFetch />} />
        <Route path="/react-query" element={<ReactQueryFetch />} />
        <Route path="/react-query/:id" element={<ReactQueryFetchDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
