import Carousel from "../Components/Carousel.jsx";

const Home = () => {
  return (
    <div className="container-fluid">
      <Carousel />

      <div className="container mt-0">
        <div className="container-fluid w-75">
          <div className="row">
            <div className="col-md-12">
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
                    Quibusdam accusantium aliquam quae, doloribus magni
                    laudantium velit? Eum error vitae officia, reprehenderit
                    reiciendis doloribus aliquam? Unde sapiente ratione
                    accusamus repellendus laudantium?
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
                    Quibusdam accusantium aliquam quae, doloribus magni
                    laudantium velit? Eum error vitae officia, reprehenderit
                    reiciendis doloribus aliquam? Unde sapiente ratione
                    accusamus repellendus laudantium?
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
                    Quibusdam accusantium aliquam quae, doloribus magni
                    laudantium velit? Eum error vitae officia, reprehenderit
                    reiciendis doloribus aliquam? Unde sapiente ratione
                    accusamus repellendus laudantium?
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
    </div>
  );
};

export default Home;
