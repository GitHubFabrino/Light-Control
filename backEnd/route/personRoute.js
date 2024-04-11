// personRoute.js
const express = require("express");
const router = express.Router();
const personController = require("../controller/personController.js");

// Créer une nouvelle personne
router.post("/", personController.createPerson);
//router.get("/getPerson", personController.getPerson);

module.exports = router;
