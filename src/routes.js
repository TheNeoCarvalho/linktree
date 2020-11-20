const express = require("express");
const SocialController = require("./controllers/SocialController");
const AdminController = require("./controllers/AdminController");

const middlewareAuth = (req, res, next) => {
    if (req.session.loggedin) {
        next();
    } else {
        res.redirect('login');
    }
    
}

const routes = express.Router();

routes.get("/", SocialController.index);
routes.get("/:profile", SocialController.showUser);
routes.get("/add", SocialController.show);
routes.post("/add", SocialController.store);


routes.get('/admin/home', middlewareAuth, AdminController.home);
routes.get("/admin/login", AdminController.index);
routes.post('/admin/auth', AdminController.login);
routes.get('/admin/register', AdminController.register);
routes.post('/admin/register', AdminController.ActionRegister);

module.exports = routes;