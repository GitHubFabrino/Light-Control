const db = require("../db/db");

class Lumiere {
  constructor(lumiere) {
    (this.lightName = lumiere.lightName),
      (this.state = lumiere.state),
      (this.brightness = lumiere.brightness),
      (this.color = lumiere.color),
      (this.timeOn = lumiere.timeOn),
      (this.timeOff = lumiere.timeOff),
      (this.id_Personne = lumiere.id_Personne);
  }

  static create(newlumiere, result) {
    db.query("INSERT INTO lumiere SET ?", newlumiere, (err, res) => {
      if (err) {
        console.error("Erreur lors de la création de la lumiere : ", err);
        result(err, null);
        return;
      }
      console.log("lumiere créée : ", { id: res.insertId, ...newlumiere });
      result(null, { id: res.insertId, ...newlumiere });
    });
  }

  //   static getLastInsertedId(result) {
  //     db.query("SELECT LAST_INSERT_ID() as id", (err, res) => {
  //       if (err) {
  //         console.error(
  //           "Erreur lors de la récupération de l'ID de la personne : ",
  //           err
  //         );
  //         result(err, null);
  //         return;
  //       }
  //       result(null, res[0].id);
  //     });
  //   }

  static getAllLumiere(id_Personne, result) {
    db.query(
      "SELECT * FROM lumiere WHERE id_Personne = ?",
      id_Personne,
      (err, res) => {
        if (err) {
          console.error(
            "Erreur lors de la recherche de la lumiere par ID : ",
            err
          );
          result(err, null);
          return;
        }
        if (res.length) {
          console.log("Lumiere trouvée : ", res);
          result(null, res);
          return;
        }
        // Aucune personne trouvée avec cet ID
        result({ message: "Lumiere non trouvée" }, null);
      }
    );
  }
}

module.exports = Lumiere;
