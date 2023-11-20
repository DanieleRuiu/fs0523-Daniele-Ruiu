// Funzione per generare un numero casuale tra min (incluso) e max (escluso)
function generaNumeroCasuale(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // Funzione per determinare quale giocatore si è avvicinato di più al numero casuale
  function confrontaNumeri(numeroCasuale: number, guessGiocatore1: number, guessGiocatore2: number): string {
    const differenzaGiocatore1: number = Math.abs(numeroCasuale - guessGiocatore1);
    const differenzaGiocatore2: number = Math.abs(numeroCasuale - guessGiocatore2);
  
    if (differenzaGiocatore1 === differenzaGiocatore2) {
      return "Entrambi i giocatori sono alla stessa distanza dal numero casuale!";
    } else if (differenzaGiocatore1 < differenzaGiocatore2) {
      return "Il giocatore 1 si è avvicinato di più!";
    } else {
      return "Il giocatore 2 si è avvicinato di più!";
    }
  }
  
  // Esempio di utilizzo
  const giocatore1: number = 38;
  const giocatore2: number = 62;
  const numeroCasuale: number = generaNumeroCasuale(1, 100);
  
  console.log(`Numero casuale generato = ${numeroCasuale}`);
  
  if (giocatore1 === numeroCasuale || giocatore2 === numeroCasuale) {
    console.log("Uno dei giocatori ha azzeccato il numero casuale!");
  } else {
    const risultatoConfronto: string = confrontaNumeri(numeroCasuale, giocatore1, giocatore2);
    console.log(`Nessuno dei due ha azzeccato il numero casuale, ma ${risultatoConfronto}`);
  }