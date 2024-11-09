import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import RootLayout from "./Layout/RootLayout";
import Login from "./Pages/Login";
import ContactLayout from "./Layout/ContactLayout";
import Info from "./Components/Info";
import Form from "./Components/Form";
import NotFound from "./Pages/NotFound";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<Info />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
