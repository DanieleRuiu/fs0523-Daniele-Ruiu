import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { iRegister } from '../Models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})

export class RegisterComponent {

  // AuthService e Router sono iniettati come dipendenze.

  constructor(private authSvc: AuthService, private router: Router) {}

  // Questo è un oggetto che rappresenta i dati di registrazione dell'utente.

  registerData: iRegister = {
    email: '',
    password: '',
    nome: '',
  };

  // Questa è una funzione che viene chiamata quando l'utente fa clic sul pulsante di registrazione.

  save() {

    // Chiama il metodo signUp del servizio di autenticazione con i dati di registrazione dell'utente.

    this.authSvc.signUp(this.registerData).subscribe((data) => {

      // Se la registrazione va a buon fine, reindirizza alla pagina di login.
      
      this.router.navigate(['/auth/login']);
    });
  }
}
