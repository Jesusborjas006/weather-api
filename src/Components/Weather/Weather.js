import "./Weather.css";

const Weather = (props) => {
  console.log(props.weather);
  if (props.weather.weather) {
    return (
      <div className="weather-card">
        <h3>{props.weather.name}</h3>
        <h2>{props.weather.main.temp.toFixed()}</h2>
        <p>{props.weather.weather[0].main}</p>
        <p>
          High: {props.weather.main.temp_max.toFixed()} Low:
          {props.weather.main.temp_min.toFixed()}
          <p>Humidity: {props.weather.main.humidity}</p>
          <p>Wind: {props.weather.wind.speed.toFixed(1)} km/h</p>
        </p>
      </div>
    );
  } else {
    console.log("No data found");
  }
};

export default Weather;
