import React, {useState} from "react";
import axios from "axios";
import Context from "../../Context/Context";
import Header from "../Header/Hearder";
import Content from "../Content/Content";
import WeatherSearch from '../WeatherSearch/WeatherSearch';
import WeatherData from "../WeatherSearch/WeatherData";

const Main = () => {

    const [weather, setWeather] = useState();

    const  api_data = async e =>{

        e.preventDefault();

        const API_KEY = '9eac7e06a6b320e47fe2dde7d5dd104d';
        const urlData = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`;
       
        const resquestData = axios.get(urlData);
        const responseData = await resquestData;

        setWeather(responseData.data.main);

    };

   weather && console.log(weather);

    // useEffect(() =>{
    //     api_data();
    // }, []);

    return (
        <div className="main">
            <Header />
            <Content>
                <Context.Provider value={{ api_data, weather }}>
                    <WeatherSearch />
                    { weather && <WeatherData/> }
                </Context.Provider>
            </Content>
        </div>
    );
}

export default Main;