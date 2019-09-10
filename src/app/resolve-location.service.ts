import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolveLocationService implements Resolve<any> {
  // resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
  //   return this.ws.localWeather();
  //   throw new Error("Method not implemented.");
  // }

  constructor(private ws:WeatherService) { }
  resolve()
  {
    return this.ws.localWeather();
  }
}
