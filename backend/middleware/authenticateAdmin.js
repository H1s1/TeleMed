const jwt = require('jsonwebtoken');

const authenticateAdmin = (req,res,next) => {
    const token = req.heder('Authorisation');
}