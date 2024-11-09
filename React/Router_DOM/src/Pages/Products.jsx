import BootstrapLogo from "/images/Bootstrap_logo.png";

const Products = () => {
  return (
    <div className="container">
      <section>
        <div
          className="container-fluid w-75"
          data-bs-spy="scroll"
          data-bs-target="#pricing"
          data-bs-smooth-scroll="true"
        >
          <div className="d-flex justify-content-center align-items-center flex-column my-5">
            <h1 className="display-3 fw-semibold" id="pricing">
              Pricing
            </h1>
            <p className="text-center px-lg-5 fs-5">
              Quickly build an effective pricing table for you potential
              customers with this Bootstarp example, it's built with default
              Bootstrap components and utilities with little customaization.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div className="card-head">
                  <h3 className="card-header text-center py-3">Free</h3>
                </div>
                <div className="card-body text-center">
                  <h1 className="card-text">
                    $0<span className="fw-light text-secondary">/mo</span>
                  </h1>
                  <p className="card-text mt-4">10 users included</p>
                  <p className="card-text lh-1">2 GB of storage</p>
                  <p className="card-text lh-1">Email support</p>
                  <p className="card-text lh-1 pb-3">Help center access</p>
                  <button className="btn btn-lg btn-outline-primary w-100">
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div className="card-head">
                  <h3 className="card-header text-center py-3">Pro</h3>
                </div>
                <div className="card-body text-center">
                  <h1 className="card-text">
                    $15<span className="fw-light text-secondary">/mo</span>
                  </h1>
                  <p className="card-text mt-4">20 users included</p>
                  <p className="card-text lh-1">10 GB of storage</p>
                  <p className="card-text lh-1">Priority email support</p>
                  <p className="card-text lh-1 pb-3">Help center access</p>
                  <button className="btn btn-lg btn-primary w-100">
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-head bg-primary text-light rounded-top">
                  <h3 className="card-header text-center py-3">Enterprise</h3>
                </div>
                <div className="card-body text-center">
                  <h1 className="card-text">
                    $29<span className="fw-light text-secondary">/mo</span>
                  </h1>
                  <p className="card-text mt-4">30 users included</p>
                  <p className="card-text lh-1">15 GB of storage</p>
                  <p className="card-text lh-1">Phone and email support</p>
                  <p className="card-text lh-1 pb-3">Help center access</p>
                  <button className="btn btn-lg btn-primary w-100">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-fluid w-75 text-center mt-5 pb-5 border-bottom"
          data-bs-spy="scroll"
          data-bs-target="#compare"
          data-bs-smooth-scroll="true"
        >
          <h1 className="display-5 mt-5" id="compare">
            Compare plans
          </h1>
          <table className="table table-responsive-xl  mt-5">
            <thead>
              <tr className="fs-5 text-center">
                <th scope="col"></th>
                <th scope="col">Free</th>
                <th scope="col">Pro</th>
                <th scope="col">Enterprise</th>
              </tr>
            </thead>
            <tbody className="fs-5">
              <tr className="table-group-divider">
                <th scope="row" className="text-start">
                  Public
                </th>
                <td className="fs-2">
                  <i className="bi bi-check2"></i>
                </td>
                <td className="fs-2">
                  <i className="bi bi-check2"></i>
                </td>
                <td className="fs-2">
                  <i className="bi bi-check2"></i>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Private
                </th>
                <td></td>
                <td className="fs-2">
                  <i className="bi bi-check2"></i>
                </td>
                <td className="fs-2">
                  <i className="bi bi-check2"></i>
                </td>
              </tr>
              <tr className="table-group-divider">
                <th scope="row" className="text-start">
                  Permissions
                </th>
                <td className="fs-2">
                  <i className="bi bi-check2"></i>
                </td>
                <td className="fs-2">
                  <i className="bi bi-check2"></i>
                </td>
                <td className="fs-2">
                  <i className="bi bi-check2"></i>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Sharing
                </th>
                <td></td>
                <td className="fs-2">
                  <i className="bi bi-check2"></i>
                </td>
                <td className="fs-2">
                  <i className="bi bi-check2"></i>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Unlimitted members
                </th>
                <td></td>
                <td className="fs-2">
                  <i className="bi bi-check2"></i>
                </td>
                <td className="fs-2">
                  <i className="bi bi-check2"></i>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Extra security
                </th>
                <td></td>
                <td></td>
                <td className="fs-2">
                  <i className="bi bi-check2"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <footer className="mt-5 mb-5">
        <div className="container-fluid w-75">
          <div>
            <img
              className="img-fluid"
              src={BootstrapLogo}
              width="40"
              alt=""
            ></img>
          </div>
          <div className="mt-2">
            <p>&copy; 2017-2021</p>
          </div>
          <div
            className="row"
            data-bs-spy="scroll"
            data-bs-smooth-scroll="true"
            data-bs-target="#features"
            tabindex="0"
          >
            <div className="col-lg-6 col-md-6">
              <h4 id="features">Features</h4>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Cool stuff</p>
              </a>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Random feature</p>
              </a>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Team feature</p>
              </a>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Stuff for developers</p>
              </a>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Another one</p>
              </a>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Last time</p>
              </a>
            </div>
            <div className="col-lg-6 col-md-6">
              <h4>Resources</h4>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Resource</p>
              </a>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Resource name</p>
              </a>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Another resource</p>
              </a>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Final resource</p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-4">
              <h4>About</h4>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Team</p>
              </a>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Locations</p>
              </a>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Privacy</p>
              </a>
              <a className="link-dark link-underline-opacity-0" href="#">
                <p>Terms</p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
