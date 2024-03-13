const express = require('express');
const newUserController = require('../controllers/newUserController'); 
const router = express.Router();

router.post('/register', newUserController.registerUser);

module.exports = router;

