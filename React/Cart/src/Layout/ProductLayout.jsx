import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <div>
      <h1 className="text-center my-5">Product Details</h1>
      <nav>
        {/* Include links to product categories or other sections here */}
      </nav>
      <Outlet />{" "}
      {/* This is where child routes like Products or ProductDetails will render */}
    </div>
  );
};

export default ProductLayout;
