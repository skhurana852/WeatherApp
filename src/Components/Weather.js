import React from 'react';
import './Weather.css';
import Sound from 'react-sound';
class Weather extends React.Component 
{
    
    
    componentDidMount(){
      window.addEventListener('load',this.handleLoad)
    }
render(){
    return(
       <div id="weatherdiv">
            <div id="weatherdetails">
            <img src={this.props.ImageUrl} alt="Weather"  className="image"/>
            {this.props.country && this.props.city && <p>Location: {this.props.city},    {this.props.country}</p>}
      {this.props.temperature && <p>Temperature: {Math.floor(this.props.temperature-273.15)}&#176;c</p>}
      {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
      {this.props.description && <p>Conditions:  {this.props.description}</p>}
      {this.props.error && <p>{this.props.error}</p>}
        </div>
        <Sound url={this.props.audioUrl} playStatus={Sound.status.PLAYING} autoLoad={true}/>
        
        </div>
    )
  }
}

export default Weather;