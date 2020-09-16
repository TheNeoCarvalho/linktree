const express = require("express")
const app = express()
const path = require("path")

app.use(express.json())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static('public'))


app.get("/cursos", (req, res) => {
    res.render("home");
});

app.post("/", (req, res) => {
    const {
        name
    } = req.body
    res.json({
        name
    })
})

app.listen(3000)