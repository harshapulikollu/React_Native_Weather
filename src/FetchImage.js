export default function FetchWeatherImage(image){

  let map = {
    '01d': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-clear.png', // clear sky
    '02d': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-fewclouds.png', // few clouds
    '03d': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-scatteredcloud.png', // scattered clouds
    '04d': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-brokenclouds.png', // broken clouds
    '09d': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-drizzle.png', // shower rain
    '10d': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-rain.png', // rain
    '11d': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-thunderstorm.png', // thunderstorm
    '13d': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-snow.png', // snow
    '50d': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-mist.png', // mist
    '01n': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-clear.png',
    '02n': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-fewclouds.png',
    '03n': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-scatteredcloud.png',
    '04n': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-brokenclouds.png',
    '09n': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-drizzle.png',
    '10n': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-rain.png',
    '11n': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-thunderstorm.png',
    '13n': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-snow.png',
    '50n': 'https://raw.githubusercontent.com/antonmills/netmag-reactnativeapp/master/weather_icons/weather-mist.png'
  };
  return map[image] ;
}
