const bcrypt = require('bcrypt');

const Social = require("../models/Social");
const User = require("../models/User");

module.exports = {
    async index(req, res){
        res.render("admin/login");
    },

    async home(req, res) {
            res.render( "admin/home");
    },
    async login(req, res){
       const {email, password} = req.body;

        if (email && password) {
            const users = await User.findOne({
                where: {
                    email
                }
            });

            const match = bcrypt.compareSync(password, users.password);

            if(match){
                req.session.loggedin = true;
                req.session.email = email;
                req.session.id = users.id;
                res.redirect('/admin/home');
            }else {
                res.redirect('/admin/login');
            }
        }
    },
    async register(req, res){
        return res.render("admin/register");
    },
    async ActionRegister(req, res){

        const { name, profile, email, password } = req.body;
        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        await User.create({
            name, 
            profile, 
            email, 
            password: hash
        })
        return res.redirect("admin/login");
    }
    
}