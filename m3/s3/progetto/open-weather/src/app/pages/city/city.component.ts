import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  WeatherResponse,
  WeatherService,
} from '../../services/weather.service';
import { AuthService } from '../auth/auth.service';
import { FavouritesService } from '../../services/favourites.service';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
})
export class CityComponent {
  lat: number = 0;
  lon: number = 0;
  forecast: WeatherResponse | undefined;

// Questo è il costruttore del componente.
// AuthService, Router, ActivatedRoute, WeatherService e FavouritesService sono iniettati come dipendenze.

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private favouriteService: FavouritesService
  ) {}

// Questo metodo viene chiamato quando il componente viene inizializzato.

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.lat = params['lat'];
      this.lon = params['lon'];
    });

  // Chiama il metodo getWeather del servizio WeatherService con le coordinate lat e lon.
  // Quando la risposta arriva, aggiorna la previsione del tempo.

    this.weatherService.getWeatherData(this.lat, this.lon).subscribe((response) => {
      console.log(response);
      this.forecast = response;
    });
  }
  // Questo metodo aggiunge la città corrente ai preferiti dell'utente.

  addCityToFavourites() {

  // Sottoscrive all'Observable user$ del servizio AuthService.
  // Quando i dati dell'utente cambiano, aggiunge la città ai preferiti se l'utente è loggato.

    this.authSvc.user$.subscribe((accessData) => {
      if (accessData) {
        console.log(accessData);
        if(!this.forecast?.city.id) return;
        this.favouriteService.includeFavourite(Number(accessData.user.id), {
          name: this.forecast?.city.name || "Unkonuwn city",
          lat: this.lat,
          lon: this.lon,
          id: this.forecast?.city.id,
        });
      }else{
        console.log("User not logged in");

      }
    });
  }
}
