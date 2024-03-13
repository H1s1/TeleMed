const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    dialect:  'mysql'
  });

const Patient = sequelize.define( 'Patient' , {
    id:{
        type: DataTypes.STRING(10),
        primaryKey : true,
        allowNull: false,
    },
    prblm_category:{
        type:DataTypes.STRING(20),
        allowNull:true
    },
    age:{
        type : DataTypes.INTEGER,
        allowNull:true
    },
    symptoms:{
        type:DataTypes.STRING(255),
        allowNull:true
    },
    requests:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    city:{
        type:DataTypes.STRING(20),
        allowNull:true
    },
    id_doc:{
        type:DataTypes.BLOB,
        allowNull:true
    },
    status:{
        type:DataTypes.INTEGER,
        allowNull: true,
      },
},{tableName: 'patient'});


module.exports = {Patient};