class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }

    confrontaEtaAltroUtente(altroUtente) {
      if (this.age > altroUtente.age) {
        return ${this.firstName} è più vecchio di ${altroUtente.firstName}.;
      } else if (this.age < altroUtente.age) {
        return ${altroUtente.firstName} è più vecchio di ${this.firstName}.;
      } else {
        return ${this.firstName} e ${altroUtente.firstName} hanno la stessa età.;
      }
    }
  }

  // Esemp
  let utente1 = new User('Marco', 'Rossi', 30, 'Roma');
  let utente2 = new User('Laura', 'Bianchi', 35, 'Milano');

  console.log(utente1.confrontaEtaAltroUtente(utente2));