import { useEffect, useState } from "react";
import "./App.css";
import Weather from "../Weather/Weather";
import Form from "../Form/Form";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("chicago");
  const [enterCityError, setEnterCityError] = useState(
    "Submit a city to check out the weather"
  );

  const getCity = (cityName) => {
    setCity(cityName);
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bdf2d3d4c86056684a6c8b16f1dd1be1&units=imperial`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setEnterCityError({ weather: [] });
        }
      })
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => console.log(err));
  }, [city]);

  return (
    <main className="main">
      <Form getCityFunc={getCity} />
      {city ? (
        <Weather weather={weather} />
      ) : (
        <h2 className="submit-city-text">{enterCityError}</h2>
      )}
    </main>
  );
}

export default App;
