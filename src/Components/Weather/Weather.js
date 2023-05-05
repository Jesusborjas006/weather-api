import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";

const Weather = (props) => {
  const todaysDate = new Date();
  let text = todaysDate.toLocaleDateString("default", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  if (props.weather.weather) {
    return (
      <div className="weather-card">
        <div className="top-content">
          <p className="date">{text}</p>
          <h3 className="city">{props.weather.name}</h3>
          <h2 className="temp">{props.weather.main.temp.toFixed()}°</h2>
          <p className="description">{props.weather.weather[0].description}</p>
          <p>
            High: {props.weather.main.temp_max.toFixed()}° Low:
            {props.weather.main.temp_min.toFixed()}°
          </p>
        </div>
        <div className="bottom-content">
          <div className="container">
            <FontAwesomeIcon className="icon" icon={faDroplet} />
            <p>Humidity</p>
            <p>{props.weather.main.humidity}%</p>
          </div>
          <div className="container">
            <FontAwesomeIcon className="icon" icon={faWind} />
            <p>Wind</p>
            <p>{props.weather.wind.speed.toFixed(1)} km/h</p>
          </div>
        </div>
      </div>
    );
  } else {
    console.log("No data found");
  }
};

export default Weather;
