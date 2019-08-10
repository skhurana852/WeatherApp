import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Weather from './Components/Weather';
import Title from './Components/Title';
class App extends Component {

state={
  temp: undefined,
  city : undefined,
  country : undefined,
  humidity: undefined,
  description: undefined,
  error: undefined,
  ImageUrl:'https://media.giphy.com/media/l1J9w4UPRtjZtPsA0/giphy.gif'
}

getWeather =  async (e) =>{


  let city = document.getElementById("city").value;

  let country = document.getElementById("country").value;

  console.log(city);
  console.log(country);
  //fethcing data using fetch library in an asynchronous function
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=a1d5dd29b06c7cbaf7523098e9726acc`)
  
  //converting data into json
  const response = await api_call.json();
  //console.log(response);

  if(city&& country){

  
  this.setState({
    temperature: response.main.temp,
    city: response.name,
    country: response.sys.country,
    humidity: response.main.humidity,
    description: response.weather[0].description,
    error: "",
    
  })
  
   
}

else{
  this.setState({
    error:"Please Enter Values"
  })
  alert("Please Fill Fields");
}

console.log(response.weather[0].main);

if(response.weather[0].main==='Rain'){
  this.setState({
    ImageUrl: 'https://media.giphy.com/media/RIexS5Dd3x0pMEppVE/giphy.gif'
  })
}
else if(response.weather[0].main==='Clouds'){
  this.setState({
    ImageUrl: 'https://media.giphy.com/media/3ohhwsupwJyzktdgS4/giphy.gif'
  })
}
else if(response.weather[0].main==='Clear'){
  this.setState({
    ImageUrl: 'https://media.giphy.com/media/CvmdavnVFX0d2/giphy.gif'
  })
}
else if(response.weather[0].main==='Haze'){
  this.setState({
    ImageUrl: 'https://media.giphy.com/media/cNwdp35dM1Ue4UUaDS/giphy.gif'
  })
}
}
render(){
  return (
    
    <div className="App" style={{backgroundImage:'weather.jpg'}}>
      <Title />
      <div id="form">
         
      <form > 
      <div className="input">  <input type="text" id="city" placeholder="Enter City"/></div>
          <div className="input"> <input type="text" id="country" placeholder="Enter County"/> </div><br/><br/>
            <input type="button" onClick={this.getWeather} value="Get Weather" id="submit"/>

        </form>

        </div>

      <Weather 
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
      ImageUrl={this.state.ImageUrl} />

      <footer id="footer">
        <small>&copy;Copyright Saransh Khurana 2019, All Rights Reserved </small>
      </footer>

    </div>
  );
 }
}
export default App;
