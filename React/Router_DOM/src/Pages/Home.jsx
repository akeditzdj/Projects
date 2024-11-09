import img1 from "/images/Banner-1.jpg";
import img2 from "/images/Banner-2.jpg";
import img3 from "/images/Banner-3.jpg";

const Home = () => {
  return (
    <div className="container mt-0">
      <div id="carousel" className="carousel slide">
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

      <div className="container-fluid w-75">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mt-5">Welcome to Modern Business</h1>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">
                <h4 className="py-3">
                  <i className="fa-solid fa-check pe-1"></i> Bootstarp v3.1.1
                </h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam accusantium aliquam quae, doloribus magni laudantium
                  velit? Eum error vitae officia, reprehenderit reiciendis
                  doloribus aliquam? Unde sapiente ratione accusamus repellendus
                  laudantium?
                </p>
                <a href="#" className="btn btn-outline-dark">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">
                <h4 className="py-3">
                  <i className="fa-solid fa-handcuffs ps-1"></i> Free & Open
                  Source
                </h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam accusantium aliquam quae, doloribus magni laudantium
                  velit? Eum error vitae officia, reprehenderit reiciendis
                  doloribus aliquam? Unde sapiente ratione accusamus repellendus
                  laudantium?
                </p>
                <a href="#" className="btn btn-outline-dark">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">
                <h4 className="py-3">
                  <i className="fa-regular fa-compass pe-1"></i> Easy to Use
                </h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam accusantium aliquam quae, doloribus magni laudantium
                  velit? Eum error vitae officia, reprehenderit reiciendis
                  doloribus aliquam? Unde sapiente ratione accusamus repellendus
                  laudantium?
                </p>
                <a href="#" className="btn btn-outline-dark">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <h1 className="mt-5">Portfolio Heading</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
