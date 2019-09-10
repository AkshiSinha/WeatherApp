import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
myWeather:CurrentWeather;
location;
lat;
lon;
myIconUrl;
icon;

  constructor(private ws:WeatherService ,private httpClient: HttpClient,private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe(
      (data:{myWeather:CurrentWeather})=>{
        // this.icon=data.weather[0].icon;
        this.myWeather=data.myWeather;
      }
   );
    // this.myweather=this.ws.weatherNow();
    // navigator.geolocation.getCurrentPosition((pos)=>{
    //   this.location=pos.coords;
    //   console.log(this.location);
    //   this.lat=this.location.latitude;
    //     this.lon=this.location.longitude;
    //     console.log(this.lon,this.lat)
    //   this.ws.localWeather(this.lat,this.lon).subscribe(
    //     (data:any)=>{
    //      // console.log(data);
    //       this.icon=data.weather[0].icon;
    //     //  console.log(this.icon)
    //       this.myIconUrl = 'http://openweathermap.org/img/wn/'+this.icon+'@2x.png';
    //      // console.log(this.myIconUrl)
    //       http://openweathermap.org/img/wn/10d@2x.png
    //     this.myweather=new CurrentWeather(data.name,
    //                                     data.main.temp,
    //                                     data.weather[0].icon,
    //                                     data.weather[0].description,
    //                                     data.main.temp_max,
    //                                     data.main.temp_min)}
    //    )
    // })
   // console.log(this.myIconUrl)
    
  }
 // weatherForm:NgForm
  onSubmit(data)
  {console.log(data);
    
    this.ws.weatherByCityname(data).subscribe(
      (data:any)=>{
        console.log(data);
        this.icon=data.weather[0].icon;
        console.log(this.icon)
        this.myIconUrl = 'http://openweathermap.org/img/wn/'+this.icon+'@2x.png';
        console.log(this.myIconUrl)
       // http://openweathermap.org/img/wn/10d@2x.png
      this.myWeather=new CurrentWeather(data.name,
                                      data.main.temp,
                                      data.weather[0].icon,
                                      data.weather[0].description,
                                      data.main.temp_max,
                                      data.main.temp_min)}

    )
    
    // this.ws.iconUrl().subscribe(
    //   (data:any)=>{
    //    // console.log(data);
    //     this.myIconUrl=data;
    //   }
    // )

  }

}
