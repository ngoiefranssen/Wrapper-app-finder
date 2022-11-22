import React from "react";
import Header from "../Header/Hearder";
import axios from "axios";


const API_KEY = '9eac7e06a6b320e47fe2dde7d5dd104d';
// lat(liverpool)
const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`;

const Main = () => {
    return (
        <div className="main">
            <Header />
        </div>
    );
}

export default Main;