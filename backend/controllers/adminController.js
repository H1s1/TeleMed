const { Sequelize} = require('sequelize');
const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    dialect:  'mysql'
});
const { Admin } = require('../models/Admin');
const {Request} = require('../models/Request');
const { User } = require('../models/User');
const { Doctor } = require('../models/Doctor');
const { Patient } = require('../models/Patient');

const AdminController = {
    getAdminData: async (req, res) => {
        try {
            const adminData = await Admin.findAll({attributes:['id','requests']});
            res.status(200).json(adminData);
        } catch (error) {
            console.log('error hogya h bahi');
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error in function getAdminData' });
        }
    },
    countPendingRequest :  async (req, res) => {
        try {
            const adminData = await Request.count({where: {class: 'a',},});
            res.status(200).json(adminData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error in function countPendingRequest' });
        }
    },
    getPendingUser : async (req,res) =>{
        try {
            const requestData = await User.findAll({where:{status:0} });
            res.status(200).json(requestData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error in function getPendingUser' });
        }
    },
    approveUser : async (req,res) =>{
       let {id,type} = req.body;
        try {
            User.update({status : 1} , {where:{id: id , type: type}});
            Request.update({status : 1} , {where : {sender_id : id}});
            if(type == 'dr'){
                Doctor.update(
                    { status: 1 },
                    { where: { id: id } }
                  )
            }
            else if(type == 'pt'){
                Patient.update(
                    {status : 1},
                    {where : {id : id }}
                )
            }
            else {
                Admin.update(
                    {status : 1},
                    {where: {id: id}}
                )
            }
            res.status(200).json(`${id} registered successfully`);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error in function approveUser' });
        }
    },
    

};
    
module.exports = AdminController;
