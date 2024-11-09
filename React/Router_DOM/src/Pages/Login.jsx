const Login = () => {
  return (
    <div className="container border border-info-subtle rounded login-box mt-5">
      <div className="row mb-3 bg-info-subtle bg-opacity-10">
        <div className="col d-flex justify-content-between">
          <h3 className="fs-5 pt-3 pb-3">Sign In</h3>
          <span className=" align-items-end d-flex fs-6 p">
            <a className="text-decoration-none py-2" href="#">
              Forgot Password
            </a>
          </span>
        </div>
      </div>
      <div className="form w-100  p-4">
        <div className="row mb-4">
          <div className="col input-group input-group-lg">
            <i className="bi bi-person-fill input-group-text"></i>
            <input
              className="form-control form-control-lg"
              type="text"
              name="u-name"
              id="u-name"
              placeholder="Username or Email"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col input-group input-group-lg">
            <i className="bi bi-lock-fill input-group-text"></i>
            <input
              className="form-control form-control-lg"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            ></input>
          </div>
        </div>
        <div className="row mt-5 ps-3">
          <div className="col form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember-me"
              id="remember-me"
            ></input>
            <label className="form-check-label fw-semibold" for="remember-me">
              Remember Me
            </label>
          </div>
        </div>
        <div className="row mt-2 border-bottom border-1 border-dark-subtle">
          <div className="col mb-3 btn-group">
            <button className="btn btn-success">Login</button>
            <button className="btn text-white">Login with Facebook</button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <p className="fw-semibold">
              Don't have an account!{" "}
              <a className="text-decoration-none" href="#">
                Sign Up Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
