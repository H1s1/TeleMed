const express = require('express');
const router = express.Router();
const DoctorController = require('../controllers/doctorController');
//const authenticateDoctor = require('../middleware/authenticateDoctor');

//router.use(authenticateAdmin);

router.get('/' , AdminController.getAdminData);
router.post('/register-admin' , AdminController.registerAdmin);


module.exports = router;