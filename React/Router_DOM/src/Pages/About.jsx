import profile from "/images/man-1.png";

const About = () => {
  return (
    <div className="container">
      <div className="container-fluid w-75 shadow mt-4 p-5">
        <div className="row mt-5 mb-5">
          <div className="col-lg-6">
            <div className="d-flex justify-content-start align-items-center gap-5 flex-wrap">
              <div>
                <img
                  className="img-fluid rounded ms-4"
                  width="170px"
                  height="150px"
                  src="images/man-1.png"
                  alt=""
                />
              </div>
              <div>
                <h5 className="fw-bold py-2">
                  Name: <span className="fw-semibold">Morgan Freeman</span>
                </h5>
                <h5 className="fw-bold py-2">
                  Profile:{" "}
                  <span className="fw-semibold">Flull stack developer</span>
                </h5>
                <h5 className="fw-bold py-2">
                  Email:{" "}
                  <span className="fw-semibold">contact@example.com</span>
                </h5>
                <h5 className="fw-bold py-2">
                  Phone: <span className="fw-semibold">(617) 557-0089</span>
                </h5>
              </div>
            </div>
            <div className="mt-5 ps-4">
              <h5 className="fw-bold py-3">Skill</h5>
              <div className="mt-3 mb-4">
                <h5 className="">HTML 85%</h5>
                <div
                  className="progress rounded-0"
                  role="progressbar"
                  aria-label="Example 10px high"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar pb1"></div>
                </div>
              </div>
              <div className="mt-3 mb-4">
                <h5>CSS3 75%</h5>
                <div
                  className="progress rounded-0"
                  role="progressbar"
                  aria-label="Example 10px high"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar pb2"></div>
                </div>
              </div>
              <div className="mt-3 mb-4">
                <h5>PHP 50%</h5>
                <div
                  className="progress rounded-0"
                  role="progressbar"
                  aria-label="Example 10px high"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar pb3"></div>
                </div>
              </div>
              <div className="mt-3 mb-4">
                <h5>JAVASCRIPT 90%</h5>
                <div
                  className="progress rounded-0"
                  role="progressbar"
                  aria-label="Example 10px high"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar pb4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="border-bottom border-primary d-inline border-3 pb-2 ">
              About me
            </h1>
            <p className="fs-4 mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto quod, accusantium optio ipsam laborum quaerat, quia
              modi quam molestias aperiam esse perspiciatis perferendis,
              consequuntur quo vero tenetur libero dicta ab.
            </p>
            <p className="fs-4 mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto quod, accusantium optio ipsam laborum quaerat, quia
              modi quam molestias aperiam esse perspiciatis perferendis,
              consequuntur quo vero tenetur libero dicta ab.
            </p>
            <p className="fs-4 mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto quod, accusantium optio ipsam laborum quaerat, quia
              modi quam molestias aperiam esse perspiciatis perferendis,
              consequuntur quo vero tenetur libero dicta ab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
