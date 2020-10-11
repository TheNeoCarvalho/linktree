const express = require("express");
const SocialController = require("./controllers/SocialController");
const routes = express.Router();

routes.get("/", SocialController.index);
routes.get("/add", SocialController.show);
routes.post("/add", SocialController.store);

module.exports = routes;