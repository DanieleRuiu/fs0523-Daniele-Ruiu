import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from './auth.service';
// Questo è un guardiano di rotta personalizzato che utilizza una funzione invece di una classe.

export const auth2Guard: CanActivateFn = (route, state) => {

  // Utilizza la funzione inject per ottenere un'istanza del servizio AuthService.
  // AuthService ha un Observable isLoggedIn$ che emette true se l'utente è loggato, false altrimenti.

  return inject(AuthService).isLoggedIn$.pipe(
    map((isLoggedIn) => {
      
      // Se l'utente non è loggato, utilizza la funzione inject per ottenere un'istanza del Router
      // e reindirizza l'utente alla pagina di login.

      if (!isLoggedIn) {
        inject(Router).navigate(['/auth/login']);
      }
      // Il valore di ritorno determina se la rotta può essere attivata o no.
      // Se l'utente è loggato, ritorna true, altrimenti ritorna false.

      return isLoggedIn;
    })
  );
};
