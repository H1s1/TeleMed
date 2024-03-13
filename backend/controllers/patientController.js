const { Sequelize} = require('sequelize');
const { User } = require('../models/User');
const { Doctor } = require('../models/Doctor');
const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    dialect:  'mysql'
});

const patientController = {
  listdr: async (req,res) =>{
    try {
        let d1 = User.findAll({where: {type: 'dr'}});
        console.log(d1);
        res.status(200).json("request success ")
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = patientController;