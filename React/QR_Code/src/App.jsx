import "./App.css";
import { useState } from "react";
function App() {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("https://www.akeditz.com");
  const [qrSize, setQrsize] = useState("150");
  async function generateQR() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
        qrData
      )}`;
      setImg(url);
    } catch (error) {
      console.error("Error generating QR code", error);
    } finally {
      setLoading(false);
    }
  }
  function downloadQR() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        alert("Error QR code download", error);
      });
  }
  return (
    <>
      <div className="container">
        <h3 className="mb-5 text-center text-primary">QR Code Generator</h3>
        {loading && <p>Please waite...</p>}
        {img && <img className="img-fluid border border-dark p-1" src={img} alt="" />}
        <div className="my-3">
          <label className="form-label" htmlFor="dataInput">
            Data for QR Code
          </label>
          <input
            className="form-control"
            id="dataInput"
            type="text"
            value={qrData}
            onChange={(e) => setQrData(e.target.value)}
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
            value={qrSize}
            onChange={(e) => setQrsize(e.target.value)}
            placeholder="Enter image size"
          />
        </div>
        <div className="my-4 d-flex justify-content-center align-items-center gap-3">
          <button
            className="btn btn-primary"
            disabled={loading}
            onClick={() => generateQR()}
          >
            Generate QR Code
          </button>
          <button className="btn btn-danger" onClick={() => downloadQR()}>
            Download QR Code
          </button>
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
