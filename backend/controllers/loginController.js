const { Sequelize} = require('sequelize');
const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    dialect:  'mysql'
});

const { User } = require('../models/User');
const { Doctor } = require('../models/Doctor');
const { Patient } = require('../models/Patient');
const { Admin } = require('../models/Admin');

const loginController = {
 login: async (req,res) =>{
   const {userId,password,role} = req.body;
   const id = userId;
   const pswrd = password;
   const type = role;
   try {
       let d1 = await User.findOne({where: {id : id, type : type , pswrd : pswrd},});
       let d2;
    if(type == 'dr')
    {
        d2 = await Doctor.findOne({where : { id: id,}});
    }
    else if(type == 'pt')
    {
        d2 = await Patient.findOne({where : { id: id, }});
    }
    else{
        d3 = await Admin.findOne({where : { id: id,}});
    }
    const data = [d1,d2];
    res.status(200).json(data);
   } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error in function getAdminData' });
   }
 },
}

module.exports = loginController;