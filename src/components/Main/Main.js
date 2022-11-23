import React, {useState} from "react";
import axios from "axios";
import Context from "../../Context/Context";
import Header from "../Header/Hearder";
import TagCli from "../TagCli/TagCli";
import Content from "../Content/Content";
import WeatherSearch from '../WeatherSearch/WeatherSearch';
import WeatherData from "../WeatherSearch/WeatherData";
import DateTime from "../Data/DateTime";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";

const Main = () => {

    const [weather, setWeather] = useState();
    const [city, setCity ] = useState();
    const [error, setError] = useState();

    const  api_data = async e =>{

        e.preventDefault();

        const location  = e.target.elements.location.value;

        if(!location) setError ('Veuillez entrer le nom de la ville');
        
        setWeather(null);

        const API_KEY = '9eac7e06a6b320e47fe2dde7d5dd104d';
        
        const urlData = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
       
        const resquestData = axios.get(urlData);
        
        const responseData = await resquestData;

        setWeather(responseData.data.main);

        setCity(responseData.data.name);

        setError(null);
    };

   weather && console.log(weather);

    // useEffect(() =>{
    //     api_data();
    // }, []);

    return (
        <div className="main">
            <Header />
            <Content>
                <DateTime />
                <TagCli />
                <Context.Provider value={{ api_data, weather, city }}>
                    <WeatherSearch />
                    { weather && <WeatherData/> }
                 {   error && <Error error={error} />}
                </Context.Provider>
                <Footer />
            </Content>
        </div>
    );
}

export default Main;