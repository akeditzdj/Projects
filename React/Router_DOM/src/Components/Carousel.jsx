import img1 from "/images/Banner-1.jpg";
import img2 from "/images/Banner-2.jpg";
import img3 from "/images/Banner-3.jpg";
const Carousel = () => {
  return (
    <div>
      <div
        id="carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="0"
            area-label="slide-1"
            className="active"
            area-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="1"
            area-label="slide-2"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="2"
            area-label="slide-3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} alt="" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Caption-1</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, quibusdam repellendus.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} alt="" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Caption-2</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, quibusdam repellendus.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} alt="" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Caption-3</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, quibusdam repellendus.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden"></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
