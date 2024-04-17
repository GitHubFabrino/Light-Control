// personRoute.js
const express = require("express");
const router = express.Router();
const lumiereController = require("../controller/lumiereController.js");

// Créer une nouvelle personne
router.get("/", lumiereController.createLumiere);
//router.get("/getPerson", personController.getPerson);

module.exports = router;
