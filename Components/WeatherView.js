import React, {Component} from 'react';
import {Platform, View, Text, ActivityIndicator, Alert} from 'react-native';
import Style from '../src/Style';
import FetchWeathermtd from '../Api/FetchWeather';

export default class WeatherView extends Component {
  constructor(props){
    super(props);
    this.state = {
      animating: true,
      temperature: 0,
      city: 'Nellore',
      country: 'IN',
      weatherType: 'Sunny',
      icon: 'Sunny PIC',
      latitude: null,
      longitude: null,
      error: null
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
        //     icon: "\uf077" //weatherList.weather[0].icon
        //   });
        // });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
);



}

  render (){
    return(
      <View style = {[Style.weatherContainer, {backgroundColor: 'blue'}]}>
        <ActivityIndicator
           animating = {this.state.animating}
           color = '#bc2b78'
           size = "large"
           style = {Style.activityIndicator}/>
           <View style = {Style.weatherTypeConatiner}>
            <Text style = {Style.weatherTypeTextConatiner}>{this.state.weatherType}</Text>
           </View>
           <View style = {Style.tempContainer}>
             <Text style = {Style.tempTextContainer}>{this.state.temperature}</Text>

           </View>
           <View style = {Style.countryContainer}>
             <Text style = {Style.countryTextContainer}>{this.state.city}</Text>
             <Text style = {Style.countryTextContainer}>{this.state.country}</Text>
           </View>



      </View>
    );
  }
}
