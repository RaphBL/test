// Chargement des dépendances
const express = require("express");
const app = express();
const port = 3000;

// Définition des routes
app.get("/", (req, res) => {
  res.send("Bienvenue sur notre site de vente en ligne !");
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Le serveur est en marche sur le port ${port}`);
});
