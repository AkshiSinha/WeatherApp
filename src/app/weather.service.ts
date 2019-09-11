import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
import { HttpClient ,HttpResponse} from '@angular/common/http';
//import 'rxjs/Rx';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  location;
  weatherClass:CurrentWeather;
  myWeather:CurrentWeather;
  icon;
  myIconUrl;
  localWeather()
  //lat1:string,lon1:string
  {
// return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?'+'lat='+lat1 +'&lon='+ lon1+'&appid=9ed1c67cff03f124b0250e9776881252&units=imperial')
return new Promise ((res,rej)=>{
  navigator.geolocation.getCurrentPosition((pos) => {
    this.location = pos.coords;
    const lat = this.location.latitude;
    const lon = this.location.longitude;
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?'+'lat='+lat +'&lon='+ lon+'&appid=9ed1c67cff03f124b0250e9776881252&units=imperial').toPromise().then(
      (data:any) => {
        this.icon=data.weather[0].icon;
             console.log(this.icon)
              this.myIconUrl = 'http://openweathermap.org/img/wn/'+this.icon+'@2x.png';
       // console.log(this.myIconUrl)
        this.weatherClass = new CurrentWeather(data.name, data.main.temp,this.myIconUrl, data.weather[0].description, data.main.temp_min, data.main.temp_max );
        res(this.weatherClass);
        return this.weatherClass;
        
      }
    );

})
  }) 
}

iconUrl()
{
  return this.myIconUrl;
}
weatherByCityname(city:string)
{
  console.log("service name"+city)
  return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9ed1c67cff03f124b0250e9776881252&units=imperial')

}

fiveDayforecast(city:string)
{
return this.httpClient.get('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=9ed1c67cff03f124b0250e9776881252&units=imperial')
}

  constructor(private httpClient: HttpClient) { }
}
