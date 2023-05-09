import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [city, setCity] = useState({ location: "" });

  const handleChange = (event) => {
    setCity({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.getCityFunc(city.location);
    setCity({ location: "" });
  };

  return (
    <form className="form">
      <input
        className="city-input"
        name="location"
        type="text"
        placeholder="Search for a city..."
        value={city.location}
        onChange={(event) => handleChange(event)}
      />
      <button onClick={(event) => handleSubmit(event)} className="form-btn">
        Search
      </button>
    </form>
  );
};

export default Form;
