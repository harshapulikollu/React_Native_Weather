/**
 * Sample React Native Weather App
 * https://github.com/harshapulikollu/
 * @harshapulikollu
 */
import React, {Component} from 'react';
import {Platform, View, Text, Alert} from 'react-native';
import Style from './Style';
import WeatherView from '../Components/WeatherView';

export default class WeatherApp extends Component {


   render() {
     return(
       <WeatherView Style = {Style.container}>MAIN VIEW</WeatherView>

     );
   }
 }
