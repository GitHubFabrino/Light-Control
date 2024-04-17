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

  static findById(id, result) {
    db.query("SELECT * FROM personne WHERE id = ?", id, (err, res) => {
      if (err) {
        console.error(
          "Erreur lors de la recherche de la personne par ID : ",
          err
        );
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("Personne trouvée : ", res[0]);
        result(null, res[0]);
        return;
      }
      // Aucune personne trouvée avec cet ID
      result({ message: "Personne non trouvée" }, null);
    });
  }
}

module.exports = Person;
