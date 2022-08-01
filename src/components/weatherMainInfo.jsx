export function WeatherMainInfo({ weather }) {
  return (
    <div className="container-info">
      <div className="info-weather">
        <div className={"info"}>
          <div className="info-name">{weather?.location.name}</div>
          <div className={"info-country"} >{weather?.location.country}</div>
        </div>
        <div className="container-img contenedor-datos">
          <div className="weather-img">
            <img
              src={`http:${weather?.current.condition.icon}`}
              alt={weather?.current.condition.text}
            />
          </div>
          <div>
            <div className="info-country">{weather?.current.condition.text}</div>
            <div className="info-name">{weather?.current.temp_c}°</div>
          </div>
        </div>
      </div>
      <div className="container-img">
        <iframe className="info-map"
          title="mapa"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3274158.734958971!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1657845777138!5m2!1sen!2smx`}
          width="500"
          height="450"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
