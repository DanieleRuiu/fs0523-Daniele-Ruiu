//scrivo un programma che inizializza le caratteristiche dei capi di abbigliamento attraverso il costruttore

class capo {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;

  constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
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

function getsaldocapo(capo: capo) {
  return capo.saldo;
}

//utilizzo il metodo getaquistocapo che riporta il costo totake del capo da acquistare

function getacquistocapo(capo: capo) {
  return capo.prezzoivainclusa;
}

//creo un servizio web fetch con chiamata asincrona per recuperare i dati da abbigliamento.json

async function call(): Promise<void> {
  let response: Response = await fetch('Abbigliamento.json');
  let data = await response.json();
  console.log(data);
}

