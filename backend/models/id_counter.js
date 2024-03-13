const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    dialect:  'mysql'
  });

 const id_counter = sequelize.define('id_counter' , {
    type:{
        type: DataTypes.STRING(2),
       allowNull: false,
       primaryKey:true
    },
    counter:{
        type: DataTypes.INTEGER,
        allowNull: true,
    }
 },{tableName:'id_counter'});

 module.exports = {id_counter};

