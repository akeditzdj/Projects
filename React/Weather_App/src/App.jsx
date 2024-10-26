import { useState } from "react";

const clearIcon = <i className="bi bi-cloud-sun-fill text-warning"></i>;
const cloudIcon = <i className="bi bi-cloud-fog2-fill"></i>;
const drizzleIcon = <i className="bi bi-cloud-drizzle-fill"></i>;
const rainIcon = <i className="bi bi-cloud-lightning-rain-fill"></i>;
const windIcon = <i className="bi bi-cloud-haze-fill"></i>;
const snowIcon = <i className="bi bi-cloud-snow-fill"></i>;
const humidity = <i className="bi bi-water"></i>;
const wind = <i className="bi bi-wind"></i>;

const WeatherDetails = ({
  icon,
  temp,
  city,
  country,
  lat,
  long,
  humi,
  win,
}) => {
  return (
    <>
      <div className="images">
        <div className="text-center">{icon}</div>
      </div>
      <div className="temp">
        <div className="fs-1 fw-bold text-center">{temp}°C</div>
      </div>
      <div className="city">
        <div className="fs-1 text-center fw-semibold text-warning">{city}</div>
      </div>
      <div className="country">
        <div className="fs-4 text-center fw-semibold text-uppercase">
          {country}
        </div>
      </div>
      <div className="cord d-flex justify-content-center align-items-center gap-5 mt-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="fs-5">Lattitude</span>
          <span className="fs-5">{lat}</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="fs-5">Longitude</span>
          <span className="fs-5">{long}</span>
        </div>
      </div>
      <div className="weatherData d-flex justify-content-between align-items-center mt-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="display-4">{humidity}</span>
          <span className="fs-4">{humi}%</span>
          <span className="fs-6">Humidity</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="display-4">{wind}</span>
          <span className="fs-4">{win} km/h</span>
          <span className="fs-6">Wind Speed</span>
        </div>
      </div>
    </>
  );
};

const App = () => {
  let api_key = "95d7dcbff59c4c3639999ac1537cc902";
  const [text, setText] = useState("Chennai");
  const [icon, setIcon] = useState(clearIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("In");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [humi, setHumi] = useState(0);
  const [win, setWin] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();
      if (data.cod === "404") {
        console.error("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.error("An error occured:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <>
      <div className="app-container">
        <h3 className="text-center fw-bold fs-1">Weather App</h3>
        <div className="input-group">
          <input
            className="form-control border-warning fs-5"
            type="text"
            id="cityName"
            onChange={handleCity}
            onKeyDown={handleKeyDown}
            value={text}
            placeholder="Enter city name..."
          />
          <button className="btn btn-warning" onClick={() => search()}>
            <i className="bi bi-search fs-5"></i>
          </button>
        </div>
        <WeatherDetails
          icon={icon}
          temp={temp}
          city={city}
          country={country}
          lat={lat}
          long={long}
          humi={humi}
          win={win}
        />
        <footer className="text-center mt-3">
          <p>
            &copy; Copyright{" "}
            <a className="link-warning" href="https://akeditz.com">
              AK Editz
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
