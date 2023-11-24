"use strict";
class Smartphone {
    constructor(carica, numeroChiamate, costoMinuto) {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
    }
    ricarica(euro) {
        this.carica += euro;
        console.log("Ricarica di " + euro + " euro effettuata");
    }
    numero404() {
        return 'Credito residuo: ' + this.carica + ' euro';
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        if (this.carica >= min * this.costoMinuto) {
            this.carica -= min * this.costoMinuto;
            this.numeroChiamate++;
            return console.log("Chiamata effettuata");
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log("Chiamate azzerate");
    }
}
// Test funzionamemto in console
const smartphone1 = new Smartphone(50, 10, 0.20);
const smartphone2 = new Smartphone(100, 20, 0.20);
const smartphone3 = new Smartphone(70, 30, 0.20);
smartphone1.ricarica(20);
console.log(smartphone1.numero404());
smartphone2.ricarica(30);
smartphone2.chiamata(5);
smartphone2.chiamata(3);
console.log(smartphone2.numero404());
console.log(`Numero di chiamate effettuate: ${smartphone2.getNumeroChiamate()}`);
smartphone3.ricarica(50);
smartphone3.chiamata(7);
smartphone3.chiamata(2);
smartphone3.azzeraChiamate();
console.log(smartphone3.numero404());
console.log(`Numero di chiamate effettuate: ${smartphone3.getNumeroChiamate()}`);
class Smartphone2 extends Smartphone {
    constructor(carica, numeroChiamate, costoMinuto, id, durata, data, Orario) {
        super(carica, numeroChiamate, costoMinuto);
        this.id = id;
        this.durata = durata;
        this.data = data;
        this.Orario = Orario;
    }
    mostraRegistroChiamate() {
        console.log("Registro chiamate");
    }
    filtraRegistroChiamate(data) {
        console.log("Registro chiamate filtrato per data");
    }
    filtraOrarioChiamate(orario) {
        console.log("Registro chiamate filtrato per orario");
    }
}
// Test funzionamemto in console
const smartphone4 = new Smartphone2(50, 10, 0.20, 1, 10, new Date(), "10:00");
const smartphone5 = new Smartphone2(100, 20, 0.20, 2, 20, new Date(), "11:00");
const smartphone6 = new Smartphone2(70, 30, 0.20, 3, 30, new Date(), "12:00");
console.log(smartphone4.mostraRegistroChiamate());
console.log(smartphone5.filtraRegistroChiamate(new Date()));
console.log(smartphone6.filtraOrarioChiamate("12:00"));
console.log(`Numero di chiamate effettuate: ${smartphone6.getNumeroChiamate()}`);
