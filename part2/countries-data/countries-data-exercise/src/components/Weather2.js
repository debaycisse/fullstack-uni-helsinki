import { useEffect, useState } from "react";
import axios from "axios";

const Weather2 = (props) => {
    const {countryCapital} = props
    
    const apiKey = process.env.REACT_APP_API_KEY
    const [temperature, setTemperature] = useState(null)
    const [imgSrc, setImgSrc] = useState(null)
    const [windSpeed, setWindSpeed] = useState(null)


    // make call to the weather for the given country
    // 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=b1b15e88fa797225412429c1c50c122a1r'
    useEffect(
        () => {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${countryCapital}&appid=${apiKey}&units=metric`)
                .then(
                    (response) => {
                        setTemperature(response.data.main['temp'])
                        setImgSrc(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
                        setWindSpeed(response.data.wind.speed)
                    }
                )
                .catch(
                    (error) => console.log(`Error:- There was an error in this call, error - ${error} encountered.`)
                )
        },
        [countryCapital, apiKey]
    ) 



    return (
        <div>
            <h1>Weather in {countryCapital}</h1>
            <p>Temperature: {temperature} Celcius</p>
            <img src={imgSrc} alt="Weather status' icon" />
            <p>Wind: {windSpeed} m/s</p>
        </div>
    )

}


export default Weather2;
