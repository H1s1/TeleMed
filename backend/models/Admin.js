const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    dialect:  'mysql'
});
const {User} = require('./User');

const Admin = sequelize.define('Admin',{
    id:{
        type:DataTypes.STRING(10),
        allowNull:false,
        primaryKey:true
    },
    requests:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    status:{
        type:DataTypes.INTEGER,
        allowNull: true,
      },

}, {timestamps: true,
 tableName: 'admin' // Specify the exact table name
});

Admin.hasOne(User, { foreignKey: 'id' });

module.exports = {Admin};