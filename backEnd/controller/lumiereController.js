const Person = require("../model/personModel.js");
const Lumierer = require("../model/lumiereModel.js");

exports.createLumiere = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Le contenu ne peut pas être vide !" });
    return;
  }

  Lumierer.getAllLumiere((err, id) => {
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
};
