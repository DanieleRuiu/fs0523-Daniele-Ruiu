import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {
  GeocodingResponse,
  WeatherService,
} from '../../services/weather.service';
import { take } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  city: string = '';
  foundCities: GeocodingResponse[] = [];

  ngOnInit() {}

// Questo è il costruttore del componente.
// AuthService, Router, ActivatedRoute e WeatherService sono iniettati come dipendenze.

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  searchCity() {

  // Chiama il metodo getCityGeocoding del servizio WeatherService con il nome della città.
  // Quando la risposta arriva, aggiorna l'elenco delle città trovate.

    this.weatherService
      .getCityGeocodingData(this.city)
      .pipe(take(1))
      .subscribe((response) => {
        console.log(response);
        this.foundCities = response;
      });
  }

// Questo metodo reindirizza l'utente alla pagina delle previsioni del tempo per una città specifica.

  goToWeather(lat: number, lon: number) {

// Utilizza il servizio Router per navigare alla rotta '/city' con i parametri di query lat e lon.

    this.router.navigate(['/city'], {
      queryParams: {
        lat,
        lon,
      },
    });
  }
}
