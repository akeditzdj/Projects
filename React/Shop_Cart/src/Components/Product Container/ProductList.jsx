import Products from "./Products.jsx";
import fooditems from "../Product Container/fooditems.json";

const ProductList = () => {
  return (
    <>
      <h4 className="mt-4 text-center">Product List</h4>
      <div className="container product-container my-2">
        {fooditems &&
          fooditems.map((food_item) => (
            <Products food_item={food_item} key={food_item.id} />
          ))}
      </div>
    </>
  );
};

export default ProductList;
