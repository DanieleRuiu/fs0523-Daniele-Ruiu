import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authSvc: AuthService, private router: Router) {}

  // Questo metodo determina se un utente può attivare una particolare rotta.

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    // Questo ritorna un Observable che risolve in un booleano o un UrlTree.
    // Il servizio di autenticazione fornisce un Observable che tiene traccia se l'utente è loggato o no.

    return this.authSvc.isLoggedIn$.pipe(
      map((isLoggedIn) => {
        if (!isLoggedIn) this.router.navigate(['/auth/login']);

        return isLoggedIn;
      })
    );
  }
  // Questo metodo determina se un utente può attivare una sotto-rotta di una particolare rotta.

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      
    // Questo semplicemente chiama il metodo canActivate per determinare se la sotto-rotta può essere attivata.

    return this.canActivate(childRoute, state);
  }
}
