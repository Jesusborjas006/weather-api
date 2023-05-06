import { useEffect, useState } from "react";
import "./App.css";
import Weather from "../Weather/Weather";
import Form from "../Form/Form";

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=bdf2d3d4c86056684a6c8b16f1dd1be1&units=imperial`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  }, []);

  return (
    <main className="main">
      <Form />
      <Weather weather={weather} />
    </main>
  );
}

export default App;
