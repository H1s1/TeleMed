import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './CardPage.css';
import dummyData from './dummyData.json';

const CardPage = () => {
  const navigate = useNavigate();
  const [doctorsData, setDoctorsData] = useState(dummyData);

  const handleFilterChange = (event) => {
    // Handle filter changes here
    console.log(event.target.value);
  };

  return (
    <div>
      {/* Navbar with filter input */}
      {/* ... (same as before) */}

      {/* Cards section */}
      <div className="container mt-4">
        <div className="row">
          {/* Map through the doctorsData and render cards */}
          {doctorsData.map((doctor) => (
            <div key={doctor.id} className="col-md-4">
              <div className="card">
                {/* Use base64 directly in the src attribute */}
                <img src={doctor.img} className="card-img-top" alt="Doctor" />

                <div className="card-body">
                  <h5 className="card-title">{doctor.name}</h5>
                  <p className="card-text">Specialization: {doctor.speciality}</p>
                  {/* Add more details as needed */}
                  <button className="btn btn-primary" onClick={() => navigate(`/doctor/${doctor.id}`)}>
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPage;
