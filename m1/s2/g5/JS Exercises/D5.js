/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (i = 0; i < pets.length; i++) {
    console.log(pets[i])
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const petSort = pets.sort()
console.log(petSort);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const petReverse = pets.reverse()
console.log(petReverse);
console.log(pets[i]);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const primotPets = pets.shift()
pets.push(primotPets)
console.log(pets[3]);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        color: 'red',
        trims: ['titanium', 'st', 'active'],
    },
    {
        brand: 'Peugeot',
        model: '208',
        color: 'blue',
        trims: ['allure', 'GT'],
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        color: 'black',
        trims: ['life', 'style', 'r-line'],
    },
]

for (i = 0; i < cars.length; i++) {
    cars[0].lincensePlate = 'AB 123 CD';
    cars[1].lincensePlate = 'EF 456 GH';
    cars[2].lincensePlate = 'IL 789 MN';
    console.log(cars[i]);
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = {
    brand: 'Kia' ,
    model: 'Stonic' ,
    color: 'Red' ,
    lincensePlate : 'GN 007 JB',
    trims: ['GTS' , 'TDI']  ,
}

cars.push(newCar)


for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    cars[i].trims.pop()
    console.log(cars[i])
}


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
    justTrims.push(cars[i].trims[0])
    
}

for (let i = 0; i < justTrims.length; i++) {
    const elementJust = justTrims[i];
    console.log(elementJust);
    
}




/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".*/

for (let i = 0; i < cars.length; i++) {
   
if (cars[i].color.startsWit == 'b') { console.log( 'Fizz');
    
} else { console.log('Buzz');
    
}
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

while ( i < numericArray.length && numericArray[i] !== 32 ) {
    console.log(numericArray[i]);
    i++
    
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']


const alphabetItaliano = 'abcdefghijklmnopqrstuvwxyz'.split('');

const positions = charactersArray.map(char => {
  switch (char) {
    case 'a':
      return 1;
    case 'b':
      return 2;
    case 'c':
      return 3;
    case 'd':
      return 4;
    case 'e':
      return 5;
    case 'f':
      return 6;
    case 'g':
      return 7;
    case 'h':
      return 8;
    case 'i':
      return 9;
    case 'j':
      return 10;
    case 'k':
      return 11;
    case 'l':
      return 12;
    case 'm':
      return 13;
    case 'n':
      return 14;
    case 'o':
      return 15;
    case 'p':
      return 16;
    case 'q':
      return 17;
    case 'r':
      return 18;
    case 's':
      return 19;
    case 't':
      return 20;
    case 'u':
      return 21;
    case 'v':
      return 22;
    case 'w':
      return 23;
    case 'x':
      return 24;
    case 'y':
      return 25;
    case 'z':
      return 26;
    default:
      return 0; // Carattere non trovato nell'alfabeto italiano
  }
});

console.log(positions);