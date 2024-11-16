import SwiggyLogo from "../assets/images/Swiggy_Logo_2024.webp.png";
import GooglePlay from "../assets/images/google-play.png";
import AppStore from "../assets/images/appstore-logo.png";

const Footer = () => {
  return (
    <div className="container-fluid border-top">
      <footer className="mt-5 pt-5">
        <div className="d-flex justify-content-between align-items-start footer-content pb-5">
          <section className="content-1">
            <img
              className="img-fluid w-50 my-2"
              src={SwiggyLogo}
              alt="Swiggy logo"
            />
            <p className="my-2">&copy; 2024 Swiggy Limited</p>
            <address className="my-2">
              No. 55 Sy No 8 to 14 I & J Block – Ground <br />
              Floor Embassy Tech Village | Outer Ring <br />
              Road Devarbisanahalli Varthur <br />
              Bengaluru – 560130
            </address>
          </section>

          <nav>
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Swiggy One</a>
              </li>
              <li>
                <a href="#">Swiggy Instamart</a>
              </li>
              <li>
                <a href="#">Swiggy Genie</a>
              </li>
              <li>
                <a href="#">Minis</a>
              </li>
            </ul>
          </nav>

          <div>
            <nav>
              <h5>Contact us</h5>
              <ul>
                <li>
                  <a href="#">Help & Support</a>
                </li>
                <li>
                  <a href="#">Partner With Us</a>
                </li>
                <li>
                  <a href="#">Ride With Us</a>
                </li>
              </ul>
            </nav>

            <nav>
              <h5>Legal</h5>
              <ul>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>

          <section>
            <h5>We deliver to:</h5>
            <ul>
              <li>
                <a href="#">Mumbai</a>
              </li>
              <li>
                <a href="#">Delhi</a>
              </li>
              <li>
                <a href="#">Gurugram</a>
              </li>
              <li>
                <a href="#">Bengaluru</a>
              </li>
              <li>
                <a href="#">Chennai</a>
              </li>
              <li>
                <a href="#">Kolkata</a>
              </li>
            </ul>
            <label htmlFor="city-select" className="d-block">
              Select your city:
            </label>
            <select id="city-select" className="form-select">
              <option value="600 cities">600 cities</option>
            </select>
          </section>

          <div>
            <nav>
              <h5>Life at Swiggy</h5>
              <ul>
                <li>
                  <a href="#">Explore With Swiggy</a>
                </li>
                <li>
                  <a href="#">Swiggy News</a>
                </li>
                <li>
                  <a href="#">Snackables</a>
                </li>
              </ul>
            </nav>

            <nav>
              <h5>Social Links</h5>
              <ul className="d-flex align-items-center justify-content-center gap-2 social-link">
                <li>
                  <a aria-label="LinkedIn" className="fs-5 link-dark" href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a aria-label="Instagram" className="fs-5 link-dark" href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a aria-label="Facebook" className="fs-5 link-dark" href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a aria-label="Pinterest" className="fs-5 link-dark" href="#">
                    <i className="bi bi-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a aria-label="Twitter" className="fs-5 link-dark" href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-top d-flex justify-content-center align-items-center gap-4 w-100 app-link py-5">
          <div>
            <p className="fw-bolder text-center">
              For a better experience, download the Swiggy app now
            </p>
          </div>
          <div>
            <a href="#">
              <img
                className="img-fluid"
                src={GooglePlay}
                alt="Google Play Store"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img className="img-fluid" src={AppStore} alt="App Store" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
