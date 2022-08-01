import { useEffect, useState } from "react";
import { WeatherForm } from "./weatherForm";
import { WeatherMainInfo } from "./weatherMainInfo";
import { Scroll } from "./scroll";
import "../weatherApp.css";

export function WatherApp() {
  //cuando se manejen variables null se le tiene que poner el signo "?" para decir que es opcional
  const [weather, setWeather] = useState(null);

  //este useEffect cuando los corchetes estan vacios ejecuta u codigo o alguna funcion
  useEffect(() => {
    loadInfo();
  }, []);

  //cuando en los corchetes tienen algun dato ese dato cada que actualise ejecutara el codigo o funcion
  useEffect(() => {
    //los dos signos de interrogacion sicnifican que si es nulo ejecute lo que esta ala derecha en este caso un string vacio
    document.title = `weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `https://api.weatherapi.com/v1/current.json?aqi=no&key=dc1276b858a649d1bf630549221407&q=${city}`
      );
      if (request.status === 200) {
        const json = await request.json();
        setTimeout(() => {
          setWeather(json);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className="container">
      <div className="gato">
        <WeatherForm onChangeCity={handleChangeCity} />
        {weather ? <WeatherMainInfo weather={weather}/> : <Scroll/>}
      </div>
    </div>  
  );
}
