import React from 'react';
import './Weather.css';

const Weather =(props) =>
{
    return(
       <div id="weatherdiv">
            <div id="weatherdetails">
            {props.country && props.city && <p>Location: {props.city},    {props.country}</p>}
      {props.temperature && <p>Temperature: {Math.floor(props.temperature-273.15)}&#176;c</p>}
      {props.humidity && <p>Humidity: {props.humidity}%</p>}
      {props.description && <p>Conditions:  {props.description}</p>}
      {props.error && <p>{props.error}</p>}
        </div>
        </div>
    )
}

export default Weather