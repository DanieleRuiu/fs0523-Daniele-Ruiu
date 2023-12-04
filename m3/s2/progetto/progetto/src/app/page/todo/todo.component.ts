
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

  todoService= new TodosService();

  constructor() { }


  ngOnInit() {
    this.loading = true;
    this.todoService.getTodos().then((todos) =>
      {this.todos = todos, this.loading = false} );
  }


  addTodo(title: string) {


    this.todoService.addTodo(this.title!);
    this.todoService.getTodos().then((todos) => this.todos = todos);
    this.loading = true;
  }



}
