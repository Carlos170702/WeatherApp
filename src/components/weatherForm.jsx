import { useState } from "react";

export function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState('');

  function onChange(e) {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
  }
  return (
    <form onSubmit={handleSubmit} className={"form"}>
      <input placeholder="Dijita tu Ciudad / Pais"  type="text" onChange={onChange} className={"form__shearch"} />
    </form>
  );
}
