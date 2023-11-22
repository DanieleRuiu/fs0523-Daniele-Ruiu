// creo una classe astratta che ha nome, cognome, id, salario lordo e metodo calcola salario netto

abstract class Lavoratore {
    nome: string;
    cognome: string;
    id: number;
    salarioLordo: number;

    constructor(nome: string, cognome: string, id: number, salarioLordo: number) {
        this.nome = nome;
        this.cognome = cognome;
        this.id = id;
        this.salarioLordo = salarioLordo;
    }

    abstract calcolaSalarioNetto(): number;
}




//estendo la classe lavoratore con lavoratore autonomo e definisco le proprietà che estendono la classe astratta codredd, redditoannuolordo, tasseinps, tasseirpef

class LavoratoreAutonomo extends Lavoratore {
ScaglioneReddito: string;
    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;

    constructor(nome: string, cognome: string, id: number, salarioLordo: number,ScaglioneReddito: string, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number) {
        super(nome, cognome, id, salarioLordo);
        this.ScaglioneReddito = ScaglioneReddito;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }

    calcolaSalarioNetto(): number {
        return this.salarioLordo - this.tasseInps - this.tasseIrpef;
    }
}
// Definisco l'interfaccia ScaglioneReddito

interface ScaglioneReddito {
    inizio: number;
    fine?: number;
}

// Definisco la classe Scaglione che implementa l'interfaccia

class Scaglione implements ScaglioneReddito {
    constructor(public inizio: number, public fine?: number) {}
}

// Dichiaro gli oggetti Scaglione

const scaglioneA = new Scaglione(15000);
const scaglioneB = new Scaglione(15001, 28000);
const scaglioneC = new Scaglione(28001, 50000);
const scaglioneD = new Scaglione(50001);

// Definisco la funzione getUtileTasse

function getUtileTasse(redditoAnnuoLordo: number, scaglioneReddito: ScaglioneReddito): number {
    let utileTasse: number = 0;

    if (redditoAnnuoLordo >= scaglioneReddito.inizio) {
        if (scaglioneReddito.fine && redditoAnnuoLordo <= scaglioneReddito.fine) {
        
            if (scaglioneReddito.inizio === 15000) {
                utileTasse = redditoAnnuoLordo * 0.23;
            } else if (scaglioneReddito.inizio === 15001) {
                utileTasse = redditoAnnuoLordo * 0.25;
            } else if (scaglioneReddito.inizio === 28001) {
                utileTasse = redditoAnnuoLordo * 0.35;
            } else if (scaglioneReddito.inizio === 50001) {
                utileTasse = redditoAnnuoLordo * 0.43;
            }
        }
    }

    return utileTasse;
}

// Utilizzo della funzione getUtileTasse

const reddito = 29000;
const scaglioneCorrente = scaglioneC; // scaglioneB, scaglioneA, scaglioneD
const utileTasse = getUtileTasse(reddito, scaglioneCorrente);
console.log(`L'utile tasse è: ${utileTasse}`);



//utilizzo metodo getRedditoAnnuoNetto e gli passo i parametri

function getRedditoAnnuoNetto(redditoAnnuoLordo: number, utileTasse: number): number {
    return redditoAnnuoLordo - utileTasse;
}


const redditoLordo = 29000;
const tasse = 0.35 * redditoLordo;

const redditoNetto = getRedditoAnnuoNetto(redditoLordo, tasse);

console.log(`Il reddito annuo netto dopo le tasse è: ${redditoNetto}`);








