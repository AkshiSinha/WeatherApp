import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
import { HttpClient ,HttpResponse} from '@angular/common/http';
//import 'rxjs/Rx';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  current:CurrentWeather=new CurrentWeather('newYork','80','','100','20','sunny')
  weatherNow(){
    return this.current;
  }
  localWeather(lat:string,lon:string)
  {
return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9ed1c67cff03f124b0250e9776881252&units=metric').pipe(map((response:Response)=>response.json()));
  }

  constructor(private httpClient: HttpClient) { }
}
