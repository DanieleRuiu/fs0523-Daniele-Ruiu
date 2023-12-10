import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.private';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { take } from 'rxjs';

export type GeocodingResponse = {
  name: string;
  lat: number;
  lon: number;
  state: string;
};

export type WeatherResponse = {
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  }[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private http: HttpClient,
    private router: Router,
    handler: HttpBackend
  ) {
    this.http = new HttpClient(handler);
  }

  getWeatherData(lat: number, lon: number) {
    return this.http.get<WeatherResponse>(
      `https://api.openweathermap.org/data/2.5/forecast?cnt=5&lat=${lat}&lon=${lon}&lang=it&units=metric&appid=${environment.weatherAPIKey}`
    );
  }

  getCityGeocodingData(city: string) {
    return this.http.get<GeocodingResponse[]>(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${environment.weatherAPIKey}`
    );
  }
}
