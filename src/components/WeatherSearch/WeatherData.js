import React, {useContext} from "react";
import Context from "../../Context/Context";

const WeatherData = () =>{

    const{weather} = useContext(Context);

    const {temp, humidity, prossure} = weather;
    
    return(
        <div className="weather-data">
            <p className="weather__tagline">Weather forecast for <span className="weather-data__city">Manchester</span></p>
            <div className="weather-data__box">
                <span className="weather-data__property">
                    <p className="weather-data__title">Temperature</p>
                    <p className="weather-data__value">{temp}</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title">Humidity</p>
                    <p className="weather-data__value">{humidity}</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title">Pressure</p>
                    <p className="weather-data__value">{prossure}</p>
                </span>
            </div>
        </div>
    );
};

export default WeatherData;