import { Component } from '@angular/core';
import { WeatherWidgetComponent } from '../../ui/weather-widget.component';

@Component({
  selector: 'lib-weather',
  imports: [WeatherWidgetComponent],
  templateUrl: './weather-lib.html',
  styleUrl: './weather-lib.css',
})
export class WeatherLib {}
