import { useEffect, useState } from "react";
import PropTypes from "prop-types"

const clearIcon = <i className="bi bi-cloud-sun-fill text-warning"></i>;
const cloudIcon = <i className="bi bi-cloud-fog2-fill text-warning"></i>;
const drizzleIcon = <i className="bi bi-cloud-drizzle-fill text-warning"></i>;
const rainIcon = <i className="bi bi-cloud-lightning-rain-fill text-warning"></i>;
const snowIcon = <i className="bi bi-cloud-snow-fill text-warning"></i>;
const humidity = <i className="bi bi-water text-warning"></i>;
const wind = <i className="bi bi-wind text-warning"></i>;

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
        <div className="fs-1 text-center text-uppercase fw-semibold text-warning">{city}</div>
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

 WeatherDetails.propTypes={
  icon:PropTypes.string.isrequired,
  temp:PropTypes.number.isrequired,
  city:PropTypes.string.isRequired,
  country:PropTypes.string.isRequired,
  lat:PropTypes.number.isRequired,
  long:PropTypes.number.isRequired,
  humi:PropTypes.number.isRequired,
  win:PropTypes.number.isRequired,
};

function App () {
  let api_key = "95d7dcbff59c4c3639999ac1537cc902";
  const [text, setText] = useState("Singapore");
  const [icon, setIcon] = useState(clearIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("In");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [humi, setHumi] = useState(0);
  const [win, setWin] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError]=useState(null)

const weatherIconMap={
  "01d":clearIcon,
  "01n":clearIcon,
  "02d":cloudIcon,
  "02n":cloudIcon,
  "03d":drizzleIcon,
  "03n":drizzleIcon,
  "04d":drizzleIcon,
  "04n":drizzleIcon,
  "09d":rainIcon,
  "09n":rainIcon,
  "10d":rainIcon,
  "10n":rainIcon,
  "13d":snowIcon,
  "13n":snowIcon
}


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
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLong(data.coord.lon);
      setHumi(data.main.humidity);
      setWin(data.wind.speed);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || clearIcon)
     setCityNotFound(false)
    } catch (error) {
      console.error("An error occured:", error.message);
      setError("An error occured while fetching weather data")
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

  useEffect(function(){
    search();
  },[]);

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
     
      {loading && <div className="loading-message text-center fw-bold fs-3 my-4 text-warning">Loading...</div>}
      {error && <div className="error-message text-center fw-bold my-4">{error}</div>}
      {cityNotFound &&<div className="city-not-found text-center fw-bold fs-3 my-4 text-danger">City not found !</div>}

 {!loading && !cityNotFound && <WeatherDetails
          icon={icon}
          temp={temp}
          city={city}
          country={country}
          lat={lat}
          long={long}
          humi={humi}
          win={win}
        />}
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
