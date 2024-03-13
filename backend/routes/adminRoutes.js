const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');
//const authenticateAdmin = require('../middleware/authenticateAdmin');

//router.use(authenticateAdmin);

router.get('/' , AdminController.getAdminData);
router.get('/count-request' , AdminController.countPendingRequest);
router.get('/get-user' , AdminController.getPendingUser);
router.post('/approve' , AdminController.approveUser);


module.exports = router;