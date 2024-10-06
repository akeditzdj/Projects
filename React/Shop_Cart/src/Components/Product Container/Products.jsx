const products = ({ food_item }) => {
  return (
    <>
      <div className="container">
        <div className="card shadow">
          <div className="card-img">
            <img src={food_item.img} alt={food_item.name} />
          </div>
          <div className="card-body">
            <div className="info text-center mt-1">
              <h4 className="text-truncate" title="food_item.name">{food_item.name}</h4>
              <h5>{food_item.category}</h5>
              <p className="text-decoration-line-through">
                Price: Rs.{food_item.price}
              </p>
              <p>Offer price: Rs.{food_item.offer_price}</p>
              <p>Ratings: {food_item.ratings}</p>
              <button className="btn btn-sm btn-danger">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default products;
