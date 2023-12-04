import { Todo, TodosService } from './../../todos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {


// Crea un'istanza del servizio TodosService. Questo servizio è utilizzato per gestire le operazioni sui Todo.
todoService= TodosService.getInstance();

// Inizializza una variabile 'loading' a false. Questa variabile può essere utilizzata per mostrare un indicatore di caricamento nell'interfaccia utente.
loading: boolean = false;

// Inizializza un array 'todos' come vuoto. Questo array conterrà gli oggetti Todo che sono stati completati.
todos: Todo[] = [];

// Il metodo 'ngOnInit' viene chiamato automaticamente da Angular quando il componente viene inizializzato.
// Qui, imposta 'loading' a true, poi chiama il metodo 'getTodos' del servizio TodosService.
// Quando la Promise ritornata da 'getTodos' si risolve, filtra i Todo per includere solo quelli completati,
// imposta 'todos' con i Todo filtrati e imposta 'loading' a false.
ngOnInit () {
  this.loading = true;
  this.todoService.getTodos().then((todos) => {
  this.todos =  todos.filter((todo) => todo.completed);
  this.loading = false;
  });

}
}
