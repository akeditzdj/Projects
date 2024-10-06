import products from "./fooditems.json";

const ProductList = () => {
  return (
    <>
      <div className="container product-container">
        <h4 className="mt-3">Product List</h4>
        {products &&
          products.map((product) => <ProductList product={product} key={product.id} />)}
      </div>
    </>
  );
};

export default ProductList;
