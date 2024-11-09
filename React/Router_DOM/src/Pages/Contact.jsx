const Contact = () => {
  return (
    <div className="container">
      <section className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="contact-info">
                <h4>Contact Information</h4>
                <p>
                  <strong>Email:</strong> contact@yourwebsite.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 234 567 890
                </p>
                <p>
                  <strong>Address:</strong> 123 Your Street, City, Country
                </p>
              </div>
            </div>

            <div className="col-md-8 mb-4">
              <div className="contact-form">
                <h4>Send Us a Message</h4>
                <form action="#" method="POST">
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label for="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label for="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
