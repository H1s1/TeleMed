const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    dialect:  'mysql'
  });

const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  pswrd: {
    type: DataTypes.STRING(8),
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING(2),
    allowNull: true,
    validate: {
      isIn: [['ad', 'dr', 'pt']],
    },
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  img: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  status:{
    type:DataTypes.INTEGER,
    allowNull: true,
  },
},{tableName: 'user'});

module.exports = {User};
