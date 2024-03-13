const { Sequelize, DataTypes } = require('sequelize');
const {pending_user} = require('./pending_user');
const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    dialect:  'mysql'
  });

const pending_admin = sequelize.define('pending_admin',{
    id:{
        type:DataTypes.STRING(10),
        allowNull:false,
        primaryKey:true
    },
    requests:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
}, {timestamps: true,
 tableName: 'pending_admin' // Specify the exact table name
});

pending_admin.hasOne(pending_user, { foreignKey: 'id' });

module.exports = {pending_admin};