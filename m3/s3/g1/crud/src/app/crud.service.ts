import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // chiamata get per prendere tutti i prodotti
  private apiURL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProdotti(): Observable<any> {
    return this.http.get<any>(this.apiURL);
    console.log(this.apiURL);
  }



  // chiamata get per prendere tutti i prodotti preferiti
  getPreferiti(): Observable<any> {
    return this.http.get<any>(this.apiURL);
    console.log(this.apiURL);
  }

  // chiamata per salavre i prodotti preferiti in un array
  savePreferiti(preferiti: any[]): void {
    localStorage.setItem('preferiti', JSON.stringify(preferiti));
  }
  //chiamata per salvare i prodotti nel carrello in un array
  saveCarrello(carrello: any[]): void {
    localStorage.setItem('carrello', JSON.stringify(carrello));
  }










}
