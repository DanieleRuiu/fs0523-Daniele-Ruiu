import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { PreferitiComponent } from './page/preferiti/preferiti.component';
import { CarrelloComponent } from './page/carrello/carrello.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreferitiComponent,
    CarrelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
