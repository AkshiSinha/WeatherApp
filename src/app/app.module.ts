import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { Routes, RouterModule } from '@angular/router';
import { WeatherService } from './weather.service';
import {ResolveLocationService}  from './resolve-location.service';
import {NgForm} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CurrentComponent,resolve:{myWeather:ResolveLocationService}
  },
  {
    path: 'forecast',
    pathMatch: 'full',
    component: ForecastComponent
  }
  

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    ForecastComponent,
   // NgForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [WeatherService, ResolveLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
