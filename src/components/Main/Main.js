import React from "react";
import axios from "axios";
import Header from "../Header/Hearder";


const API_KEY = '9eac7e06a6b320e47fe2dde7d5dd104d';


const Main = () => {
    const  api_cal = async () =>
    {
        const urlData = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${API_KEY}`;
        const resquestDadta = axios.get(urlData);

        const reponseData = await resquestDadta;
    }
    return (
        <div className="main">
            <Header />
        </div>
    );
}

export default Main;