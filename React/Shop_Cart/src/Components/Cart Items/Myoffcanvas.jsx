

const Myoffcanvas = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header bg-danger">
        <h5 className="text-white">
          <i className="bi fs-3 text-white bi-cart-check-fill"></i> Cart Items
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
      <p>This is body</p>
      </div>
    </div>
  );
};

export default Myoffcanvas;
