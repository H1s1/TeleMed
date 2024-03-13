const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    dialect:  'mysql'
  });

  const Med_rcd = sequelize.define('Med_rcd',{
    id:{
        type:DataTypes.STRING(10),
        primaryKey:true,
        allowNull:false
    },
    recr_id:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    date_time:{
        type:DataTypes.DATE,
        allowNull:true
    },
    symptoms:{
        type:DataTypes.STRING(255),
        allowNull:true
    },
    prescription:{
        type:DataTypes.STRING(255),
        allowNull:true
    },
    prblm_category:{
        type:DataTypes.STRING(255),
        allowNull:true
    },
    dr_id:{
        type:DataTypes.STRING(10),
        allowNull:true
        //Freign key
    },
    dr_name:{
        type:DataTypes.STRING(255),
        allowNull:true
    },
    city:{
        type:DataTypes.STRING(255),
        allowNull:true
    }
  },{tableName:'med_rcd'});

  module.exports = Med_rcd;