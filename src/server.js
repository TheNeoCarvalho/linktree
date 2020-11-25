const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const session = require("express-session");
const morgan = require("morgan");

require("./database");

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); 
app.use(express.json());

app.use(session({
    secret: 'token',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));

app.use(routes);

app.listen(3334, () => console.log("Server is On"));