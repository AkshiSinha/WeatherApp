import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  current:CurrentWeather=new CurrentWeather('newYork','80','','100','20','sunny')
  weatherNow(){
    return this.current;
  }

  constructor() { }
}
