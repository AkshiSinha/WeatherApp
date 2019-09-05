import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { Routes, RouterModule } from '@angular/router';
import { WeatherService } from './weather.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CurrentComponent
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
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
