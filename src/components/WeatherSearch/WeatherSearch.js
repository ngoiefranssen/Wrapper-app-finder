import React, {useContext} from "react";
import Context from "../../Context/Context";

const WeatherSearch = () =>{

    const{api_data} = useContext(Context);

    return(
        <div className="weather-search">
            <form onSubmit={api_data} className="weather-search__form">
                <input name="location" autoComplete="off" className="weather-search__input" type="text"/>
                <div className="weather-search__submit">
                    <button className="weather-search__button">&rarr;</button>
                </div>
            </form>
        </div>
    );
};

export default WeatherSearch;
