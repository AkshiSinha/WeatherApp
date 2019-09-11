import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {Forecast} from '../forecast';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  forecastForm:FormGroup;
  forecastCity;
  icon;
  myIconUrl;
  cityForecast:Forecast[]=[];

  constructor(private ws:WeatherService) { }

  ngOnInit() {
    this.forecastForm=new FormGroup(
      {
        forecastCity:new FormControl('')

      }
    )

    
  }
  onSubmit()
  {
    this.cityForecast = [];
    console.log(this.forecastForm);
    this.ws.fiveDayforecast(this.forecastForm.value.forecastCity).subscribe(
      (data:any)=>{
        
        for(let i=0;i<data.list.length;i+=8){
          const temporary=new Forecast(data.list[i].dt_txt,
                                        data.list[i].weather[0].icon,
                                        data.list[i].main.temp_max,
                                        data.list[i].main.temp_min)
                                        
              this.cityForecast.push(temporary);
              console.log(data);
        this.icon=data.list[i].weather[0].icon;
        console.log(this.icon)
        this.myIconUrl = 'http://openweathermap.org/img/wn/'+this.icon+'@2x.png';
        console.log(this.myIconUrl)
        }
        console.log(this.cityForecast)
      }

    )
  }

}
