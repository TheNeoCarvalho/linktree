const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
require("./database");

app.use(express.urlencoded());
app.use(express.json());
app.use(routes);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));


app.listen(3334, () => console.log('On'));