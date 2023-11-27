interface Sim {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;

    chiamata: (minuti: number) => void;

    ricarica: (euro: number) => void;

    numero404: () => string;

    getNumeroChiamate: () => number;

    azzeraChiamate: () => void;
}


class Smartphone implements Sim {
    carica: number = 0;
    numeroChiamate: number = 0;
    costoMinuto: number = 0.20;

    constructor(carica: number, numeroChiamate: number, costoMinuto: number) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
    }

    ricarica(euro: number): void {
        this.carica += euro;
        console.log("Ricarica di " + euro + " euro effettuata");
    }

    numero404(): string {
        return 'Credito residuo: ' + this.carica + ' euro';
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    chiamata(min: number): void {
        if (this.carica >= min * this.costoMinuto) {
            this.carica -= min * this.costoMinuto;
            this.numeroChiamate++;
            return console.log("Chiamata effettuata");
        }
    }

    azzeraChiamate(): void {
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






// Extra


interface RegistroChiamate {
    id: number;
    durata: number;
    data: Date;
    Orario: string;
}



class Smartphone2 extends Smartphone implements RegistroChiamate {
    id: number;
    durata: number;
    data: Date;
    Orario: string;

    constructor(carica: number, numeroChiamate: number, costoMinuto: number, id: number, durata: number, data: Date, Orario: string) {
        super(carica, numeroChiamate, costoMinuto);
        this.id = id;
        this.durata = durata;
        this.data = data;
        this.Orario = Orario;
    }

    mostraRegistroChiamate(): void {
        console.log("Registro chiamate");
    }

    filtraRegistroChiamate(data: Date): void {
        console.log("Registro chiamate filtrato per data");
    }

    filtraOrarioChiamate(orario: string): void {
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

