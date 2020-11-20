const express = require("express");
const SocialController = require("./controllers/SocialController");
const AdminController = require("./controllers/AdminController");
const path = require('path');

const middlewareAuth = (req, res, next) => {
    if (req.session.loggedin) {
        res.render("admin/home");
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


routes.get("/admin/login", AdminController.index);
routes.post('/admin/auth', AdminController.login);
routes.get('/admin/home', AdminController.home);
routes.get('/admin/register', AdminController.register);
routes.post('/admin/register', AdminController.ActionRegister);

routes.post('/upload', function(req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(path.resolve(__dirname, "src","public", "images"), "filename.jpg", function(err) {
      if (err)
        return res.status(500).send(err);
  
      res.send('File uploaded!');
    });
  });

module.exports = routes;