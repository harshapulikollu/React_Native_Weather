export default function FecthWeathermtd(lat, lon){
  let appId = '9332fcc0e58e66a4c76588f197b75be7';

  let url = "http://api.openweathermap.org/data/2.5/forecast?";
  let formattedUrl = url + "lat=" + lat + "&lon=" + lon + "&APPID=" + appId + "&units=metric";
    console.log(formattedUrl);

  return fetch(formattedUrl).then((response) => response.json())


}
