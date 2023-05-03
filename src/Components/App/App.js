import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState({});
  console.log(weather)

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=bdf2d3d4c86056684a6c8b16f1dd1be1&units=imperial`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data)
      });
  }, []);

  return (
    <main className="main">
      <h1 className="heading">Weather App</h1>
    </main>
  );
}

export default App;
