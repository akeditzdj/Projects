import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h3 className="mb-2 text-center text-primary">QR Code Generator</h3>
        <img className="img-fluid" src="QRCode.png" alt="QRCode" />
        <div className="my-3">
          <label className="form-label" htmlFor="dataInput">
            Data for QR Code
          </label>
          <input
            className="form-control"
            id="dataInput"
            type="text"
            placeholder="Enter Data for QR Code"
          />
        </div>
        <div className="my-3">
          <label className="form-label" htmlFor="imageSize">
            Image Size (e.g., 150):
          </label>
          <input
            className="form-control"
            id="imageSize"
            type="text"
            placeholder="Enter image size"
          />
        </div>
        <div className="my-4 d-flex justify-content-center align-items-center gap-3">
          <button className="btn btn-primary">Generate QR Code</button>
          <button className="btn btn-danger">Download QR Code</button>
        </div>
        <footer className="mt-3 text-center">
          <p className="text-danger">Designed By</p>
          <a
            className="link-primary text-decoration-none"
            target="_blank"
            href="https://www.akeditz.com"
          >
            Ak Editz Design and Develop
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
