// authModel.js
const db = require("../db/db.js");

class Auth {
  constructor(auth) {
    this.personne_id = auth.personne_id;
    this.email = auth.email;
    this.motDePasse = auth.motDePasse;
  }

  static create(newAuth, result) {
    db.query("INSERT INTO authentification SET ?", newAuth, (err, res) => {
      if (err) {
        console.error(
          "Erreur lors de la création de l'authentification : ",
          err
        );
        result(err, null);
        return;
      }
      console.log("Authentification créée : ", {
        id: res.insertId,
        ...newAuth,
      });
      result(null, { id: res.insertId, ...newAuth });
    });
  }

  static findByEmail(email, result) {
    db.query(
      "SELECT * FROM authentification WHERE email = ?",
      email,
      (err, res) => {
        if (err) {
          console.error(
            "Erreur lors de la recherche de l'utilisateur par email : ",
            err
          );
          result(err, null);
          return;
        }

        if (res.length) {
          result(null, res[0]);
          return;
        }

        // User not found with the provided email
        result({ kind: "not_found" }, null);
      }
    );
  }
}

module.exports = Auth;
