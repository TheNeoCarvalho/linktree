const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Social = require("../models/Social");

const connection = new Sequelize(dbConfig);

Social.init(connection);

module.exports = connection;
