const { Sequelize, DataTypes, } = require('sequelize');

const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    dialect:  'mysql'
  });

 const new_pt_info =  sequelize.define('new_pt_info',{
    req_id :{
        type: DataTypes.STRING(10),
        allowNull:false,
    },
    sender_id :{
        type: DataTypes.STRING(10),
        allowNull:true,
    }
    ,name :{
        type: DataTypes.STRING(30), allowNull:true,}
    ,img :{
        type: DataTypes.BLOB, allowNull:true,}
    ,
    prblm_category :{
        type: DataTypes.STRING(20), allowNull:true,
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull:true
    },symptoms:{
        type: DataTypes.STRING(255),
        allowNull:true
    },
    user_city :{
        type: DataTypes.STRING(30),
        allowNull:false,
    }
    ,id_doc :{
        type: DataTypes.BLOB, allowNull:true,}

 },{tableName:'new_pt_info'});
 
 //Doctor.belongsTo(User,{foreignKey: 'id' , targetKey: 'id'});
 //Doctor.belongsTo(Request , {foreignKey: 'id' , targetKey: 'sender_id'});
 
 module.exports = {new_pt_info};