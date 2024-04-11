// authRoute.js
const express = require("express");
const router = express.Router();
const authController = require("../controller/authController.js");

// Créer une nouvelle authentification
router.post("/", authController.createAuth);
router.post("/signin", authController.signIn);
module.exports = router;
