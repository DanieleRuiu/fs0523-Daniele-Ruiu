"use strict";
//scrivo un programma che inizializza le caratteristiche dei capi di abbigliamento attraverso il costruttore
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class capo {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
}
//utilizzo il metodo getsaldocapo per applicare il saldo da sottrarre all'acquisto del capo alla cassa
function getsaldocapo(capo) {
    return capo.saldo;
}
//utilizzo il metodo getaquistocapo che riporta il costo totake del capo da acquistare
function getacquistocapo(capo) {
    return capo.prezzoivainclusa;
}
//creo un servizio web fetch con chiamata asincrona per recuperare i dati da abbigliamento.json
function call() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('Abbigliamento.json');
        let data = yield response.json();
        console.log(data);
    });
}
