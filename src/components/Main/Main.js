import React from "react";
import axios from "axios";
import Header from "../Header/Hearder";


const API_KEY = '9eac7e06a6b320e47fe2dde7d5dd104d';
// lat(liverpool)
const url = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${API_KEY}`;

const Main = () => {
    return (
        <div className="main">
            <Header />
        </div>
    );
}

export default Main;