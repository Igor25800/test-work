import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherStore } from '../state/weather.store';
import { WeatherApi } from '../state/weather.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-weather-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'weather-widget.component.html',
})
export class WeatherWidgetComponent {
  store = inject(WeatherStore);
  api = inject(WeatherApi);
  dest = inject(DestroyRef);

  load(city: string) {
    if (!city) return;

    this.store.setLoading(true);
    this.store.setError(null);

    this.api.getWeather(city).pipe(
      takeUntilDestroyed(this.dest)
    ).subscribe({
      next: data => {
        this.store.setWeather(data);
        this.store.setLoading(false);
      },
      error: () => {
        this.store.setError('Failed to load weather');
        this.store.setLoading(false);
      }
    });
  }
}
