const { Request } = require('../models/Request');
const {Doctor} = require("../models/Doctor");
const {Patient} = require("../models/Patient");
const {User} = require("../models/User");
const {Admin} = require("../models/Admin");


const {generateNextDoctorId , generateNextRequestId , generateNextPatientId, generateNextAdminId} = require('./functions/genratenextId');


const newUserController = {
    registerUser : async (req,res) => {
        try {
            const {pswrd,type,name,img,city} = req.body;
            let newUser;
            var newUserType;
            switch (type) {
                case 'dr':
               {    
                    newUserType = "Doctor"; 
                    let {speciality,id_doc} = req.body;
                    //genrate next dr id 
                   const lastDoctor = await Doctor.findOne({order: [['id' , 'DESC']]});
                   const newDoctorId = generateNextDoctorId(lastDoctor.id);
                   
                   //genrate next req id
                    const lastRequest = await Request.findOne({order: [['req_id' , 'DESC']]});
                    let newRequestId;
                    if(lastRequest != null){
                    newRequestId = await generateNextRequestId(lastRequest.req_id);
                   }else{
                    newRequestId = 'req_1';
                   }
               
                   //Create a corresponding in User table 
                   newUser = await User.create({
                       id: newDoctorId,
                       pswrd:pswrd,
                       type:type,
                        name: name,
                       img: img,
                       city: city,
                       status: 0,
                    });
                    
                    newDoctor = await Doctor.create({
                    id:newDoctorId,
                    speciality: speciality,
                    id_doc:id_doc,
                    requests:0,
                    status:0,
                   });
                   // Create requests for single admin using a loop
               
                   await Request.create({
                     req_id: newRequestId,
                     sender_id: newDoctorId,
                     reciver_id: 'ad_1',
                     class: 'a',
                     status: 0,
                   });
                 
                }

                    break;
                case 'pt':
                    {
                        newUserType = "Patient";
                    //Create new request for new patient
                    let {prblm_category,age,symptoms,id_doc} = req.body;
                    
                    //genrate next pt id 
                   const lastPatient = await Patient.findOne({order: [['id' , 'DESC']]});
                   const newPatientId = generateNextPatientId(lastPatient.id);
                   
                   //genrate next req id
                    const lastRequest = await Request.findOne({order: [['req_id' , 'DESC']]});
                    let newRequestId;
                    if(lastRequest != null){
                    newRequestId = await generateNextRequestId(lastRequest.req_id);
                   }else{
                    newRequestId = 'req_1';
                   }
               
                   //Create a corresponding in User table 
                   newUser = await User.create({
                       id: newPatientId,
                       pswrd:pswrd,
                       type:type,
                        name: name,
                       img: img,
                       city: city,
                       status: 0,
                    });
                    
                    newPatient= await Patient.create({
                    id:newPatientId,
                    prblm_category: prblm_category,
                    age:age,
                    symptoms:symptoms,
                    requests:0,
                    city:city,
                    id_doc:id_doc,
                    status:0,
                   });
                   // Create requests for single admin using a loop
               
                   await Request.create({
                     req_id: newRequestId,
                     sender_id: newPatientId,
                     reciver_id: 'ad_1',
                     class: 'a',
                     status: 0,
                   });
                    }
                    break;
                case 'ad':
                    {
                      newUserType = "Admin";
        
                    
                    //genrate next ad id 
                   const lastAdmin = await Admin.findOne({order: [['id' , 'DESC']]});
                   const newAdminId = generateNextAdminId(lastAdmin.id);
                   
                   //genrate next req id
                    const lastRequest = await Request.findOne({order: [['req_id' , 'DESC']]});
                    let newRequestId;
                    if(lastRequest != null){
                    newRequestId = await generateNextRequestId(lastRequest.req_id);
                   }else{
                    newRequestId = 'req_1';
                   }
               
                   //Create a corresponding in User table 
                   newUser = await User.create({
                       id: newAdminId,
                       pswrd:pswrd,
                       type:type,
                        name: name,
                       img: img,
                       city: city,
                       status:0,
                    });
                    
                   //Create new admin(User)
                    newAdmin = await Admin.create({
                    id: newAdminId,
                    requests: 0, // Assuming you have other fields to set
                    status: 0,
                  });
                   // Create requests for single admin using a loop
                   await Request.create({
                     req_id: newRequestId,
                     sender_id: newAdminId,
                     reciver_id: 'ad_1',
                     class: 'a',
                     status: 0,
                   });
                    }
                   
                    break;

                default:
                    break;        
                }
                res.status(201).json({message: `${newUserType} request successful`, user: newUser })  
        } catch (error) {
            console.error(error);
         res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

module.exports = newUserController;