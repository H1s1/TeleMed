const { Sequelize, DataTypes, Model } = require('sequelize');
const {Doctor} = require('./Doctor');
const {Admin} = require('./Admin');

const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    dialect:  'mysql'
  });

const Request = sequelize.define('Request',{
    req_id:{
      type:DataTypes.STRING(10),
      primaryKey:true,
      allowNull:false
    },
    sender_id:{
      type:DataTypes.STRING(10),
      allowNull:true
    },
    reciver_id:{
      type:DataTypes.STRING(10),
      allowNull:false
    },
    class:{
      type:DataTypes.STRING(10),
      allowNull:false,
      validate:{
        isIn: [['a' ,'b']],
      },
    },
    status:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue: 0,
      validate:{isIn: [[0,1]],},
    },
    
},{tableName: 'request'});


module.exports = {Request};