import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
myweather:CurrentWeather;
location;

  constructor(private ws:WeatherService ,private httpClient: HttpClient) { }

  ngOnInit() {
    this.myweather=this.ws.weatherNow();
    navigator.geolocation.getCurrentPosition((pos)=>{
      this.location=pos.coords;
      console.log(this.location);
    })
    
  }

}
