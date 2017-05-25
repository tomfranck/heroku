var express = require("express");
var auteurs = express.Router();

auteurs.get('/auteurs/:id', function(req, res) {
  res.render("auteur", {
      id: Number(req.params.id),
      items: req.app.get('nieuwsFile').nieuws,
      auteurs: req.app.get('auteursFile').auteurs
  });
});

module.exports = auteurs;
