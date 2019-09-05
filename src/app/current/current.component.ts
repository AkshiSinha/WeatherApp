import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
myweather:CurrentWeather;

  constructor(private ws:WeatherService ) { }

  ngOnInit() {
    this.myweather=this.ws.weatherNow();
  }

}
