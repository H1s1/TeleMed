const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    dialect:  'mysql'
  });
const {pending_user} = require('./pending_user');


const pending_doctor = sequelize.define('pending_doctor',{
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
   }
},{tableName:'pending_doctor'});

//Doctor.belongsTo(User,{foreignKey: 'id' , targetKey: 'id'});
//Doctor.belongsTo(Request , {foreignKey: 'id' , targetKey: 'sender_id'});

module.exports = {pending_doctor};