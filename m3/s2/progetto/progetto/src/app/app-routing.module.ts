import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './page/todo/todo.component';
import { CompletedComponent } from './page/completed/completed.component';



const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'completed', component: CompletedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
