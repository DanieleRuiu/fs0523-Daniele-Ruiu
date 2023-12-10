import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { iLogin } from '../Models/login';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent {
  constructor(private authSvc: AuthService, private router: Router) {}

  // Questo è un oggetto che rappresenta i dati di login dell'utente.

  loginData: iLogin = {
    email: '',
    password: '',
  };

  // Questa è una funzione che viene chiamata quando l'utente fa clic sul pulsante di login.

  save() {

    // Chiama il metodo di login del servizio di autenticazione con i dati di login dell'utente.

    this.authSvc
      .login(this.loginData)
      .pipe(take(1))
      .subscribe((data) => {
        // Se il login va a buon fine, reindirizza alla home.
        this.router.navigate(['/home']);
      });
  }
}
