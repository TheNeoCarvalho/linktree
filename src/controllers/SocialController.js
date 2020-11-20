const Social = require("../models/Social");
const User = require("../models/User");

module.exports = {
    async index(req, res){
        const socials = await Social.findAll();
        res.render("home", { socials });
    },
    async show(req, res){
        res.render("form");
    },
    async showUser(req, res){
        const {profile} = req.params;
        const userProfile = await User.findOne({
            where: {
                profile
            }
        });

        const socials = await Social.findAll({
            where: {
                profile: userProfile.id
            }
        });
        res.render("home", { socials });
    },
    async store(req, res){
        const { name, url } = req.body;
        await Social.create({
            name,
            url,
        })
        res.redirect(`/${name}`);
    }
}