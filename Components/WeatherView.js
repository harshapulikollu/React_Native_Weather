import React, {Component} from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import Style from '../src/Style';
import FetchWeatherImage from '../src/FetchImage';
import FetchWeathermtd from '../Api/FetchWeather';
import FetchBgColor from '../src/FetchColor';

export default class WeatherView extends Component {
  constructor(props){
    super(props);
    this.state = {
      animating: true,
      temperature: 0,
      city: 'Nellore',
      country: 'IN',
      weatherType: 'Sunny',
      icon: FetchWeatherImage('01d'),
      latitude: null,
      longitude: null,
      error: null,
      color: FetchBgColor(Math.floor(Math.random() * 10)+1)
    };
  }


componentDidMount(){
  navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("wokeeey");
        console.log(position);
         lat = String(position.coords.latitude);
         lon = String(position.coords.longitude);
         console.log(lat+" " + " " + lon);
        this.setState({
          latitude: String(position.coords.latitude),
          longitude: String(position.coords.longitude),
          error: null,
        });
        // FetchWeathermtd(lat, lon)
        // .then((response) => {
        //   let cityDetails = response.city;
        //   let weatherList = response.list[0];
        //   console.log(weatherList);
        //   this.setState({
        //     animating: false,
        //     temperature: weatherList.main.temp,
        //     city: cityDetails.name,
        //     country: cityDetails.country,
        //     weatherType: weatherList.weather[0].main,
        //     icon: FetchWeatherImage(weatherList.weather[0].icon)
               color: FetchBgColor(Math.floor(Math.random() * 10)+1)
        //   });
        // });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
);



}

  render (){
    return(

      <View style = {[Style.weatherContainer, {backgroundColor: this.state.color}]}>
          <ActivityIndicator
           animating = {this.state.animating}
           color = '#bc2b78'
           size = "large"
           style = {Style.activityIndicator}/>
           <View style = {Style.weatherTypeConatiner}>
            <Text style = {Style.weatherTypeTextConatiner}>{this.state.weatherType}</Text>
           </View>
           <View style = {Style.tempContainer}>
           <Image source={{uri: this.state.icon}}
    style={{width: 100, height: 100}} />
            <Text style = {Style.tempTextContainer}>{this.state.temperature}</Text>
            <View style = {Style.countryContainer}>
              <Text style = {Style.countryTextContainer}>{this.state.city}</Text>
              <Text style = {Style.countryTextContainer}>{this.state.country}</Text>
            </View>
           </View>
           <View style ={Style.BottomContainer}>
           
           </View>
      </View>


    );
  }
}
