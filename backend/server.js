const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const port = 3000;
const { Sequelize } = require('sequelize');
const adminRoutes = require('./routes/adminRoutes');
const newUserRoutes = require('./routes/newUserRoutes');
const loginRoutes = require('./routes/loginRoutes');

//establishing connection with database
const sequelize = new Sequelize('example_db', 'root', 'test123', {
    host: 'localhost',
    port:3306,
    dialect:  'mysql'
  });

  // Apply CORS middleware globally:
  app.use(cors()); // This enables CORS for all routes
   
app.use(cors({
  origin: 'http://localhost:5173' // Replace with your React app's origin
}));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
 
//Testing the connection 
async function testConnection(){  
     try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
testConnection();

//set up routes
app.use('/admin', adminRoutes);
app.use('/newUser',newUserRoutes);
app.use('/login',loginRoutes);
app.use('/patient',loginRoutes);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
})