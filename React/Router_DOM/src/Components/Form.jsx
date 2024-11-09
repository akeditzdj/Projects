const Form = () => {
  return (
    <div className="container form-container rounded mt-3 shadow bg-dark-subtle">
      <div className="row mt-3">
        <div className="col-md-12 mb-4">
          <div className="contact-form">
            <h4 className="text-center">Send Us a Message</h4>
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
  );
};

export default Form;
