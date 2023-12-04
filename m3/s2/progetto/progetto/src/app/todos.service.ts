
import { Injectable } from '@angular/core';

// Definisce un'interfaccia per un Todo.
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


@Injectable({
  providedIn: 'root',
})
export class TodosService {
  // Inizializza un array di Todo con alcuni Todo di default.
  todos: Todo[] = [];


static instance: TodosService;

static getInstance(): TodosService {
  if (!TodosService.instance) {
    TodosService.instance = new TodosService();
  }
  return TodosService.instance;}

  constructor() {}

  // Definisce un metodo privato sleep che ritorna una Promise che si risolve dopo 2000 millisecondi (2 secondi).
  private sleep() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  // Definisce un metodo asincrono getTodos che ritorna l'array di Todo dopo un ritardo di 2 secondi.
  async getTodos() {
    await this.sleep();

    return this.todos;
  }

  // Definisce un metodo asincrono addTodo che aggiunge un nuovo Todo all'array di Todo dopo un ritardo di 2 secondi.
  async addTodo(title: string) {
    await this.sleep();

    let id = 0;

    if (this.todos.length > 0) {
      const lastToDo = this.todos[this.todos.length - 1];
      id = lastToDo.id + 1;
    }

    this.todos.push({
      id,
      title,
      completed: false,
    });
  }

  // Definisce un metodo asincrono removeTodo che rimuove un Todo dall'array di Todo dopo un ritardo di 2 secondi.
  async removeTodo(id: number) {

    await this.sleep();

    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      return;
    }

    this.todos.splice(index, 1);
  }

  // Definisce un metodo asincrono editTodo che modifica un Todo esistente nell'array di Todo dopo un ritardo di 2 secondi.
  async editTodo(id: number, completed: boolean ,title?: string) {

    await this.sleep();

    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      return;
    }


    this.todos[index] = {
      ...this.todos[index],
      id,
      title:title? title: this.todos[index].title,
      completed,
    };
  }
}
