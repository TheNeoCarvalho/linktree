const Social = require("../models/Social");

module.exports = {
    async index(req, res){
        const socials = await Social.findAll();
        res.render("home", { socials });
    },
    async show(req, res){
        res.render("form");
    },
    async store(req, res){
        const { name, url } = req.body;
        await Social.create({
            name,
            url,
        })
        res.render("home");
    }
}