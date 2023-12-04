
import { Component } from '@angular/core';
import { Todo, TodosService } from '../../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})


export class TodoComponent {

  title?: string;

 loading: boolean = false;

  todos: Todo[] = [];

// Viene creata un'istanza del servizio TodosService.
  todoService= TodosService.getInstance();

  constructor() { }

// Il metodo 'updateToDo' chiama il metodo 'editTodo' del servizio TodosService, passando l'id e lo stato di completamento del Todo.

  updateToDo(id:number, completed:boolean){
    this.todoService.editTodo(id, completed);

  }

// Il metodo 'ngOnInit' viene chiamato automaticamente da Angular quando il componente viene inizializzato.
// Qui, imposta 'loading' a true, poi chiama il metodo 'getTodos' del servizio TodosService.
// Quando la Promise ritornata da 'getTodos' si risolve, imposta 'todos' con i Todo ritornati e imposta 'loading' a false.

  ngOnInit() {
    this.loading = true;
    this.todoService.getTodos().then((todos) =>
      {this.todos = todos, this.loading = false} );
  }

// Il metodo 'addTodo' imposta 'loading' a true, poi chiama il metodo 'addTodo' del servizio TodosService, passando il titolo del nuovo Todo.
// Poi chiama di nuovo 'getTodos' per ottenere l'elenco aggiornato di Todo.
// Quando la Promise ritornata da 'getTodos' si risolve, imposta 'todos' con i Todo ritornati e imposta 'loading' a false.

  addTodo() {

    this.loading = true;
    this.todoService.addTodo(this.title!);
    this.todoService.getTodos().then((todos) => {this.todos = todos
      this.loading = false;});


  }
// Il metodo 'checkAllTodos' ritorna true se l'array 'todos' esiste e contiene almeno un elemento, altrimenti ritorna false.

  checkAllTodos(): boolean {
    return this.todos && this.todos.length > 0; }

}
