import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWeatherCardComponent } from './main-weather-card/main-weather-card.component';
import { WeatherDetailsComponent } from './main-weather-card/weather-details.component';
import { SmallWeatherCardComponent } from './small-weather-card/small-weather-card.component';
import { AddCityCardComponent } from './add-city-card/add-city-card.component';



@NgModule({
  declarations: [MainWeatherCardComponent, WeatherDetailsComponent, SmallWeatherCardComponent, AddCityCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MainWeatherCardComponent,
    WeatherDetailsComponent,
    SmallWeatherCardComponent,
    AddCityCardComponent
  ]
})
export class CardsModule { }
