
	/*const napoletana = [
		{"number": "1", "text": "L'Italia", },
		{"number": "2", "text": "'A criatura", },
		{"number": "3", "text": "'A jatta", },
		{"number": "4", "text": "'O puorco", },
		{"number": "5", "text": "'A mano", },
		{"number": "6", "text": "Chella che guarda 'nterra", },
		{"number": "7", "text": "'A scuppetta", },
		{"number": "8", "text": "'A maronna", },
		{"number": "9", "text": "'A figliata", },
		{"number": "10", "text": "'E fasule", },
		{"number": "11", "text": "'E surice", },
		{"number": "12", "text": "'E surdate", },
		{"number": "13", "text": "Sant'Antonio", },
		{"number": "14", "text": "'O mbriaco", },
		{"number": "15", "text": "'O guaglione", },
		{"number": "16", "text": "'O culo", },
		{"number": "17", "text": "'A disgrazia", },
		{"number": "18", "text": "'O sanghe", },
		{"number": "19", "text": "'A resata", },
		{"number": "20", "text": "'A festa", },
		{"number": "21", "text": "'A femmena annura",},
		{"number": "22", "text": "'O pazzo", },
		{"number": "23", "text": "'O scemo", },
		{"number": "24", "text": "'E gguardie", },
		{"number": "25", "text": "Natale", "translation": ""},
		{"number": "26", "text": "Nanninella", },
		{"number": "27", "text": "'O cantero", },
		{"number": "28", "text": "'E zzizze", },
		{"number": "29", "text": "'O pate d''e criature", },
		{"number": "30", "text": "'E palle d''o tenente", },
		{"number": "31", "text": "'O padrone ' e casa", },
		{"number": "32", "text": "'O capitone", },
		{"number": "33", "text": "Ll'anne ' e Cristo", },
		{"number": "34", "text": "'A capa",},
		{"number": "35", "text": "L'aucielluzzo", },
		{"number": "36", "text": "'E castagnelle", },
		{"number": "37", "text": "'O monaco", },
		{"number": "38", "text": "'E mmazzate", },
		{"number": "39", "text": "'A funa 'nganna", },
		{"number": "40", "text": "'A paposcia", },
		{"number": "41", "text": "'O curtiello",},
		{"number": "42", "text": "'O ccafè", },
		{"number": "43", "text": "'A femmena 'ncopp'' o balcone", },
		{"number": "44", "text": "'E ccancelle", },
		{"number": "45", "text": "'O vino", },
		{"number": "46", "text": "'E denare", },
		{"number": "47", "text": "'O muorto", },
		{"number": "48", "text": "'O muorto che parla",},
		{"number": "49", "text": "'O piezzo ' e carne",},
		{"number": "50", "text": "'O ppane", },
		{"number": "51", "text": "'O ciardino", },
		{"number": "52", "text": "'A mamma", },
		{"number": "53", "text": "'O viecchio", },
		{"number": "54", "text": "'O cappiello", },
		{"number": "55", "text": "'A museca", },
		{"number": "56", "text": "'A caruta", },
		{"number": "57", "text": "'O scartellato", },
		{"number": "58", "text": "'O paccotto", },
		{"number": "59", "text": "'E pile", },
		{"number": "60", "text": "Se lamenta", },
		{"number": "61", "text": "'O cacciatore", },
		{"number": "62", "text": "'O muorto acciso", },
		{"number": "63", "text": "'A sposa", },
		{"number": "64", "text": "'A sciammeria", },
		{"number": "65", "text": "'O chianto", },
		{"number": "66", "text": "'E ddoie zetelle", },
		{"number": "67", "text": "'O totano int''a chitarra", },
		{"number": "68", "text": "'A zuppa cotta", },
		{"number": "69", "text": "Sott'e'ncoppo", },
		{"number": "70", "text": "'O palazzo", },
		{"number": "71", "text": "L'ommo 'e merda", },
		{"number": "72", "text": "'A meraviglia", },
		{"number": "73", "text": "'O spitale", },
		{"number": "74", "text": "'A rotta", },
		{"number": "75", "text": "Pullecenella", },
		{"number": "76", "text": "'A funtana", }
    ],*/

const tabellone = document.getElementById("tabellone");
const estraiNumeroButton = document.getElementById("estraiNumero");
const numeriEstratti = new Set();





for (let i = 1; i <= 76; i++) { 
  const cella = document.createElement("div");
  cella.className = "cella";
  cella.innerText = i;
  tabellone.appendChild(cella);
}


estraiNumeroButton.addEventListener("click", () => {
  if (numeriEstratti.size === 76) {
    alert("Hai estratto tutti i numeri!");
    return;
  }

  let numeroCasuale;
  do {
    numeroCasuale = Math.floor(Math.random() * 76) + 1;
  } while (numeriEstratti.has(numeroCasuale));

  numeriEstratti.add(numeroCasuale);
  const cellaCorrispondente = tabellone.children[numeroCasuale - 1];
  cellaCorrispondente.style.backgroundColor = "grey";
});