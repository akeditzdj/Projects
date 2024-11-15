import { Outlet } from "react-router-dom";
import CartItems from "../Components/CartItems"; // Import CartItems component
import { useCart } from "../Context/CartContext"; // Use the cart context

const ProductLayout = () => {
  const { cart } = useCart(); // Get cart from context

  return (
    <div>
      <div className="product-layout-container">
        <Outlet />
      </div>
      {cart.length > 0 && <CartItems />}{" "}
      {/* Conditionally render the CartItems */}
    </div>
  );
};

export default ProductLayout;
