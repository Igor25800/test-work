import { Injectable, signal, computed } from '@angular/core';
import { WeatherData } from './weather.model';

@Injectable({ providedIn: 'root' })
export class WeatherStore {
  private _weather = signal<WeatherData | null>(null);
  private _loading = signal(false);
  private _error = signal<string | null>(null);

  weather = computed(() => this._weather());
  loading = computed(() => this._loading());
  error = computed(() => this._error());

  setWeather(data: WeatherData | null) {
    this._weather.set(data);
  }

  setLoading(loading: boolean) {
    this._loading.set(loading);
  }

  setError(err: string | null) {
    this._error.set(err);
  }
}
