import Mission from "../assets/images/mission.png";
import Industry from "../assets/images/industry.png";
import Blog1 from "../assets/images/blog-1.png";
import Blog2 from "../assets/images/blog-2.jpg";
import Blog3 from "../assets/images/blog-3.jpg";
import HomeBanner from "../assets/images/Home-Banner.jpeg";
import "../assets/css/style.css";
import Poster from "../Components/Poster";

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="home-banner">
          <img src={HomeBanner} alt="Swiggy Banner" />
        </div>
      </div>
      <div className="container">
        <div className="row d-md-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div>
              <img className="img-fluid" src={Mission} alt="mission" />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h3 className="fw-bold">Mission</h3>
              <p className="pt-2 fs-5 lh-lg text-secondary">
                Our mission is to elevate the quality of life of the urban
                consumer by offering unparalleled convenience. Convenience is
                what makes us tick. It’s what makes us get out of bed and say,
                “Let’s do this.”
              </p>
            </div>
          </div>
        </div>

        <div className="row d-md-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div>
              <h3 className="fw-bold">Industry pioneer</h3>
              <p className="pt-2 fs-5 lh-lg text-secondary">
                Being among the first few entrants, Swiggy has successfully
                pioneered the hyperlocal commerce industry in India, launching
                Food Delivery in 2014 and Quick Commerce in 2020. Due to the
                pioneering status of Swiggy, it is well-recognised as a leader
                in innovation in hyperlocal commerce and as a brand synonymous
                with the categories it is present in.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img className="img-fluid" src={Industry} alt="industry" />
            </div>
          </div>
        </div>

        <div className="row my-md-5 py-md-5">
          <div className="col d-flex flex-wrap justify-content-between align-items-center">
            <div>
              <h1 className="fw-bold text-success">3bn+</h1>
              <p className="text-secondary">orders</p>
            </div>
            <div>
              <h1 className="fw-bold text-success">~200k+</h1>
              <p className="text-secondary">restaurant partners</p>
            </div>
            <div>
              <h1 className="fw-bold text-success">380k+</h1>
              <p className="text-secondary">delivery partners</p>
            </div>
            <div>
              <h1 className="fw-bold text-success">650+</h1>
              <p className="text-secondary">cities in India</p>
            </div>
          </div>
        </div>

        <div className="row blog">
          <div className="col">
            <h1 className="py-md-1">Blogs</h1>
            <div className="nav-pills py-md-5">
              <div className="nav-item d-flex gap-2">
                <button className="btn btn-lg active">Life at Swiggy</button>
                <button className="btn btn-lg">Updates</button>
                <button className="btn btn-lg">Snackables</button>
              </div>
            </div>
            <div className="mt-md-5 mt-3 d-flex justify-content-center align-items-center gap-5">
              <div className="card border-0 shadow">
                <div className="card-img-top">
                  <img className="img-fluid" src={Blog1} alt="blog-1" />
                </div>
                <div className="card-body bg-light p-4">
                  <p className="text-secondary">April 1, 2024</p>
                  <h5 className="text-dark py-3">
                    Passion matched with purpose: A Senior Manager’s Fulfilling
                    Joyride at Swiggy
                  </h5>
                  <button
                    className="btn text-white rounded"
                    style={{ backgroundColor: "#fe5005" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
              <div className="card border-0 shadow">
                <div className="card-img-top">
                  <img className="img-fluid" src={Blog2} alt="blog-2" />
                </div>
                <div className="card-body bg-light p-4">
                  <p className="text-secondary">April 15, 2023</p>
                  <h5 className="text-dark py-3">
                    Leaving a unique mark: A Manager’s ‘Ad’venture of Ascent at
                    Swiggy
                  </h5>
                  <button
                    className="btn text-white rounded"
                    style={{ backgroundColor: "#fe5005" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
              <div className="card border-0 shadow">
                <div className="card-img-top">
                  <img className="img-fluid" src={Blog3} alt="blog-3" />
                </div>
                <div className="card-body bg-light p-4">
                  <p className="text-secondary">April 13, 2023</p>
                  <h5 className="text-dark py-3">
                    How Delivery Partner Insurance Works at Swiggy
                  </h5>
                  <button
                    className="btn text-white rounded"
                    style={{ backgroundColor: "#fe5005" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <button
              className="btn text-white rounded mt-5"
              style={{ backgroundColor: "#fe5005" }}
            >
              See More
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0 m-0 w-100">
        <Poster />
      </div>
    </>
  );
};

export default Home;
