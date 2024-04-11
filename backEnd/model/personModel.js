// // personModel.js
// const db = require("../db/db");

// class Person {
//   constructor(person) {
//     this.nom = person.nom;
//   }

//   static create(newPerson, result) {
//     var id;
//     db.query("INSERT INTO personne SET ?", newPerson, (err, res) => {
//       if (err) {
//         console.error("Erreur lors de la création de la personne : ", err);
//         result(err, null);
//         return;
//       }
//       console.log("Personne créée : ", { id: res.insertId, ...newPerson });
//       id = res.insertId;
//       console.log(id);
//       result(null, { id: res.insertId, ...newPerson });
//     });
//     // console.log(id_personne);
//   }
// }

// module.exports = Person;

// personModel.js
const db = require("../db/db");

class Person {
  constructor(person) {
    this.nom = person.nom;
  }

  static create(newPerson, result) {
    db.query("INSERT INTO personne SET ?", newPerson, (err, res) => {
      if (err) {
        console.error("Erreur lors de la création de la personne : ", err);
        result(err, null);
        return;
      }
      console.log("Personne créée : ", { id: res.insertId, ...newPerson });
      result(null, { id: res.insertId, ...newPerson });
    });
  }

  static getLastInsertedId(result) {
    db.query("SELECT LAST_INSERT_ID() as id", (err, res) => {
      if (err) {
        console.error(
          "Erreur lors de la récupération de l'ID de la personne : ",
          err
        );
        result(err, null);
        return;
      }
      result(null, res[0].id);
    });
  }
}

module.exports = Person;
