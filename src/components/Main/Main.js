import React, {useEffect} from "react";
import axios from "axios";
import Header from "../Header/Hearder";
import Content from "../Context/Content";


const API_KEY = '9eac7e06a6b320e47fe2dde7d5dd104d';


const Main = () => {

    const  api_data = async () =>{
        
        const urlData = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${API_KEY}`;
        const resquestDadta = axios.get(urlData);
        const responseData = await resquestDadta;
        console.log(responseData)
    };

    useEffect(() =>{
        api_data();
    }, []);

    return (
        <div className="main">
            <Header />
            <Content>
                
            </Content>
        </div>
    );
}

export default Main;