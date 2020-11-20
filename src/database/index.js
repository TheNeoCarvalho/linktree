const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Social = require("../models/Social");
const User = require("../models/User");

const connection = new Sequelize(dbConfig);

Social.init(connection);
User.init(connection);

module.exports = connection;
