import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';
import { FavouritesService } from '../../services/favourites.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss',
})
export class FavouritesComponent {
  favourites: {
    id: number;
    userId: number;
    cityName: string;
    cityLat: number;
    cityLon: number;
    cityId: number;
  }[] = [];

// Questo è il costruttore del componente.
// AuthService, HttpClient, Router e FavouritesService sono iniettati come dipendenze.

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router,
    private favouritesService: FavouritesService
  ) {}

// Questo metodo viene chiamato quando il componente viene inizializzato.

  ngOnInit(): void {
    this.authService.user$.subscribe((accessData) => {
      if(!accessData?.user?.id) {
        this.router.navigate(['/auth']);
        return;
      }

    // Chiama il metodo getFavourites del servizio FavouritesService con l'ID dell'utente.
    // Quando la risposta arriva, aggiorna i preferiti.

      this.favouritesService
        .retrieveFavourites(accessData?.user.id)
        .subscribe((data: any) => {
          this.favourites = data;
        });
    });
  }
// Questo metodo elimina un preferito.

  removeFavourite(id: number) {

     // Sottoscrive all'Observable user$ del servizio AuthService.
  // Quando i dati dell'utente cambiano, elimina il preferito se l'utente è loggato.

    this.authService.user$.subscribe((accessData) => {
      if(!accessData?.user?.id) {
        this.router.navigate(['/auth']);
        return;
      }

    // Chiama il metodo deleteFavourite del servizio FavouritesService con l'ID del preferito.
    // Quando la risposta arriva, aggiorna i preferiti.

      this.favouritesService
        .removeFavourite(id).pipe(take(1))
        .subscribe((data: any) => {
          this.favourites = data;
        });
    });
  }
}
