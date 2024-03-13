const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    dialect:  'mysql'
  });
const {User} = require('./User');


const Doctor = sequelize.define('Doctor',{
   id:{
    type:DataTypes.STRING(10),
    primaryKey : true,
    allowNull: false
   },
   speciality:{
    type:DataTypes.STRING(20),
    allowNull:true
   },
   id_doc:{
    type: DataTypes.BLOB,
    allowNull:true
   },
   requests:{
    type: DataTypes.INTEGER,
    allowNull:true
   },
   status:{
    type:DataTypes.INTEGER,
    allowNull: true,
  },
},{tableName:'doctor'});

//Doctor.belongsTo(User,{foreignKey: 'id' , targetKey: 'id'});
//Doctor.belongsTo(Request , {foreignKey: 'id' , targetKey: 'sender_id'});

module.exports = {Doctor};