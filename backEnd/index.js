// index.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const personRoute = require("./route/personRoute.js");
const authRoute = require("./route/authRoute.js");

app.use("/api/persons", personRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
