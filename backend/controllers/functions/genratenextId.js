
// Function to generate the next Admin ID
const generateNextAdminId = (lastAdminId) => {
    if (!lastAdminId) {
      return 'ad_1';
    }
  
    let lastIdNumber = parseInt(lastAdminId.split('_')[1]);
    let nextIdNumber = lastIdNumber + 1;
  
    return `ad_${nextIdNumber}`;
  };

  //Function to genrate next Doctor ID
  const generateNextDoctorId = (lastDoctorID) => {
    if(!lastDoctorID){
      return 'dr_1';
    }

    let lastIdNumber = parseInt(lastDoctorID.split('_')[1]);
    let nextIdNumber = lastIdNumber + 1;

    return `dr_${nextIdNumber}`;
  }

  //Function to genrate next Request ID
  const generateNextRequestId = (lastRequestID) => {
    if(!lastRequestID){
      return 'req_1';
    }

    let lastIdNumber = parseInt(lastRequestID.split('_')[1]);
    let nextIdNumber = lastIdNumber + 1;

    return `req_${nextIdNumber}`;
  }

  //Function to genrate next Request ID
  const generateNextPatientId = (lastPatientID) => {
    if(!lastPatientID){
      return 'pt_1';
    }

    let lastIdNumber = parseInt(lastPatientID.split('_')[1]);
    let nextIdNumber = lastIdNumber + 1;

    return `pt_${nextIdNumber}`;
  }

  

module.exports = {
  generateNextAdminId,
  generateNextDoctorId,
  generateNextRequestId,
  generateNextPatientId,
};
