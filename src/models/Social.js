const {Model, DataTypes} = require("sequelize");

class Social extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            url: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Social;