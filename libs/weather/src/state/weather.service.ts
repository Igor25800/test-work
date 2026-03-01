import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { WeatherData } from './weather.model';

@Injectable({ providedIn: 'root' })
export class WeatherApi {
  private http = inject(HttpClient);
  private API_KEY = 'f9c5c85a39c07c518c3ed8b3a8b402ae';
  private BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  getWeather(city: string) {
    console.log(city);
    return this.http
      .get<any>(`${this.BASE_URL}?q=${city}&appid=${this.API_KEY}&units=metric`)
      .pipe(
        map(res => ({
          city: res.name,
          temperature: res.main.temp,
          description: res.weather[0].description,
        } as WeatherData)),
      );
  }
}
