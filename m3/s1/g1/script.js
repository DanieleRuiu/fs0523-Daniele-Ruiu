// Funzione per generare un numero casuale tra min (incluso) e max (escluso)
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// Funzione per determinare quale giocatore si è avvicinato di più al numero casuale
function confrontaNumeri(numeroCasuale, guessGiocatore1, guessGiocatore2) {
    var differenzaGiocatore1 = Math.abs(numeroCasuale - guessGiocatore1);
    var differenzaGiocatore2 = Math.abs(numeroCasuale - guessGiocatore2);
    if (differenzaGiocatore1 === differenzaGiocatore2) {
        return "Entrambi i giocatori sono alla stessa distanza dal numero casuale!";
    }
    else if (differenzaGiocatore1 < differenzaGiocatore2) {
        return "Il giocatore 1 si è avvicinato di più!";
    }
    else {
        return "Il giocatore 2 si è avvicinato di più!";
    }
}
// Esempio di utilizzo
var giocatore1 = 38;
var giocatore2 = 62;
var numeroCasuale = generaNumeroCasuale(1, 100);
console.log("Numero casuale generato = ".concat(numeroCasuale));
if (giocatore1 === numeroCasuale || giocatore2 === numeroCasuale) {
    console.log("Uno dei giocatori ha azzeccato il numero casuale!");
}
else {
    var risultatoConfronto = confrontaNumeri(numeroCasuale, giocatore1, giocatore2);
    console.log("Nessuno dei due ha azzeccato il numero casuale, ma ".concat(risultatoConfronto));
}
