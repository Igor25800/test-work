import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeatherLib } from '@org/weather-lib';

@Component({
  imports: [RouterModule, WeatherLib],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'weather';
}
