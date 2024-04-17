const Person = require("../model/personModel.js");

exports.createPerson = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Le contenu ne peut pas être vide !" });
    return;
  }

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
    } else {
      Person.getLastInsertedId((err, id) => {
        if (err) {
          res.status(500).send({
            message:
              err.message ||
              "Une erreur s'est produite lors de la récupération de l'ID de la personne.",
          });
        } else {
          req.body.personne_id = id;
          res.send(data);
        }
      });
    }
  });
};
