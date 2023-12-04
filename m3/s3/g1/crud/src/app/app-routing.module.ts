import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'preferiti', redirectTo: 'preferiti', pathMatch: 'full'},

  {path: 'carrello', redirectTo: 'carrello', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
