import { iAccessData } from './Models/i-access-data';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

// Questo è il costruttore dell'Interceptor. AuthService viene iniettato come dipendenza.

  constructor(
    private authSvc:AuthService
  ) {}

// Questo metodo viene chiamato ogni volta che viene effettuata una richiesta HTTP.

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

 // Il servizio di autenticazione fornisce un Observable che tiene traccia dell'utente corrente.

    return this.authSvc.user$.pipe(switchMap((user:iAccessData|null) => {

 // Se non c'è un utente loggato, la richiesta viene inviata senza modifiche.

      if(!user) return next.handle(request);

 // Se c'è un utente loggato, clona la richiesta e aggiunge un header di autorizzazione.

      const newRequest = request.clone({
        headers: request.headers.append('Authorization','Bearer '+ user.accessToken)
      })

  // Invia la nuova richiesta con l'header di autorizzazione.
  
      return next.handle(newRequest);
    }))

  }
}
