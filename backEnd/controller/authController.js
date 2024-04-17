// authController.js
const Auth = require("../model/authModel.js");
const Person = require("../model/personModel.js");
const bcrypt = require("bcrypt");

exports.createAuth = (req, res) => {
  // Vérifier si les données requises sont fournies
  if (!req.body.nom || !req.body.email || !req.body.motDePasse) {
    res.status(400).send({ message: "Tous les champs sont obligatoires !" });
    return;
  }

  // Créer la personne avec le nom spécifié
  const person = new Person({
    nom: req.body.nom,
  });

  Person.create(person, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création de la personne.",
      });
      return;
    }

    // Récupérer l'ID de la personne nouvellement créée
    const personneId = data.id;

    // Hasher le mot de passe
    bcrypt.hash(req.body.motDePasse, 10, (err, hash) => {
      if (err) {
        res.status(500).send({
          message:
            "Une erreur s'est produite lors du cryptage du mot de passe.",
        });
        return;
      }

      // Créer l'authentification avec l'ID de la personne et le mot de passe hashé
      const auth = new Auth({
        personne_id: personneId,
        email: req.body.email,
        motDePasse: hash, // Stocker le mot de passe hashé dans la base de données
      });

      Auth.create(auth, (err, data) => {
        if (err) {
          res.status(500).send({
            message:
              err.message ||
              "Une erreur s'est produite lors de la création de l'authentification.",
          });
          return;
        }

        res.send(data);
      });
    });
  });
};

exports.signIn = (req, res) => {
  if (!req.body.email || !req.body.motDePasse) {
    res
      .status(400)
      .send({ message: "L'email et le mot de passe sont requis." });
    return;
  }

  Auth.findByEmail(req.body.email, (err, user) => {
    if (err) {
      res.status(500).send({
        message:
          "Une erreur s'est produite lors de la recherche de l'utilisateur.",
      });
      return;
    }

    if (!user) {
      res.status(401).send({ message: "L'utilisateur n'existe pas." });
      return;
    }

    bcrypt.compare(req.body.motDePasse, user.motDePasse, (err, result) => {
      if (err) {
        res.status(500).send({
          message:
            "Une erreur s'est produite lors de la comparaison des mots de passe.",
        });
        return;
      }

      if (!result) {
        res.status(401).send({ message: "Mot de passe incorrect." });
        return;
      }

      Person.findById(user.personne_id, (err, person) => {
        if (err) {
          res.status(500).send({
            message:
              "Une erreur s'est produite lors de la recherche du nom de l'utilisateur.",
          });
          return;
        }

        res.status(200).send({
          message: "Connexion réussie !",
          user: { id: user.id, nom: person.nom, email: user.email },
        });
      });
    });
  });
};
