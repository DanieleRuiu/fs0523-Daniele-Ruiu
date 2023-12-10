import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iRegister } from './Models/register';
import { iAccessData } from './Models/i-access-data';
import { BehaviorSubject, Observable, map, tap, throwError } from 'rxjs';
import { iLogin } from './Models/login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 // Questo è un helper per lavorare con i JSON Web Tokens (JWT).

  jwtHelper:JwtHelperService = new JwtHelperService()

// Questo è un BehaviorSubject che tiene traccia dell'utente corrente.
  // Inizialmente, non c'è un utente loggato, quindi il valore è null.

  authSubject = new BehaviorSubject<iAccessData|null>(null);

// Questo è un Observable che emette i dati dell'utente corrente.

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(user => !!user))

 // Questo è il costruttore del servizio. HttpClient e Router vengono iniettati come dipendenze.

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
// Al momento della creazione del servizio, tenta di ripristinare l'utente da localStorage.

    this.restoreUser()

  }
// Questi sono gli URL per le chiamate di registrazione e login.

  registerUrl:string = environment.apiUrl + '/register';
  loginUrl:string = environment.apiUrl + '/login'


// Questo metodo effettua una chiamata POST per registrare un nuovo utente.

  signUp(data:iRegister):Observable<iAccessData>{
    return this.http.post<iAccessData>(this.registerUrl, data)
  }
// Questo metodo effettua una chiamata POST per effettuare il login di un utente.

  login(data:iLogin):Observable<iAccessData>{
    return this.http.post<iAccessData>(this.loginUrl, data)
    .pipe(tap(data => {

 // Se il login va a buon fine, salva i dati dell'utente in authSubject e localStorage.

      this.authSubject.next(data)
      localStorage.setItem('accessData',JSON.stringify(data))

 // Avvia un timer per effettuare il logout automaticamente quando il token scade.

      this.autoLogout(data.accessToken)
    }))
  }
// Questo metodo avvia un timer per effettuare il logout automaticamente quando il token scade.

  autoLogout(jwt:string){
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs = expDate.getTime() - new Date().getTime();

    setTimeout(()=>{
      this.logout()
    },expMs)
  }
 // Questo metodo effettua il logout dell'utente.

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth/login']);
  }
 // Questo metodo tenta di ripristinare l'utente da localStorage quando la pagina viene ricaricata.
  //metodo che controlla al reload di pagina se l'utente è loggato e se il jwt è scaduto

  restoreUser(){

      const userJson:string|null =  localStorage.getItem('accessData');
      if(!userJson) return;

      const accessData:iAccessData = JSON.parse(userJson);
      if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return;

      //se nessun return viene eseguito proseguo

      this.authSubject.next(accessData)
      this.autoLogout(accessData.accessToken)
  }

 // Questo metodo gestisce gli errori restituiti dalle chiamate API.
 
  errors(err: any) {
    switch (err.error) {
        case "Email and Password are required":
            return new Error('Email e password obbligatorie');
            break;
        case "Email already exists":
            return new Error('Utente esistente');
            break;
        case 'Email format is invalid':
            return new Error('Email scritta male');
            break;
        case 'Cannot find user':
            return new Error('utente inesistente');
            break;
            default:
        return new Error('Errore');
            break;
    }
  }

}
