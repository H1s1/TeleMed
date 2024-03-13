import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  
  const handleTalkToDoctor = () => {
    // Navigate to the Demo component
    
      navigate('/CardPage');
   
  };
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand m-2" href="#">
            <img
              src="hIsI.png"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block  align-text-center"
            />
            HealthOneSolutions
          </a>
          <div className="d-flex" role="search">
            <a className="nav-link mx-3" href="#">
              About
            </a>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      </nav>
      <div className="second-content">
        <div className="left-content">
          <h5>
            Consult Specialist Doctors Online
            <br />
            <span style={{ fontWeight: 400 }}>
              on Video/Audio Call & and Chat
            </span>
          </h5>

          <h6>Consult Doctors from Top Hospitals within 30 minutes</h6>
          <br />
          <button onClick={handleTalkToDoctor}>Talk to Doctor</button>
        </div>
        <div className="right-content">
          <img src="right.jpg" alt="" />
        </div>
      </div>
      <div className="third-container">
        <div className="hstack gap-3">
          <div style={{ width: 50 }} className=" widthlength ">
            <img src="skin-probs.svg" alt="" /> Dermatologist
          </div>
          <div style={{ width: 50 }} className=" widthlength ">
            <img src="general-physician.svg" alt="" /> physician
          </div>
          <div style={{ width: 50 }} className=" widthlength ">
            <img src="neurology.svg" alt="" /> neurology
          </div>
          <div style={{ width: 50 }} className=" widthlength ">
            <img src="child-infant.svg" alt="" /> Pediatrics
          </div>
          <div style={{ width: 50 }} className=" widthlength ">
            <img src="sex-probs.svg" alt="" />
            Sexologiest
          </div>
          <div style={{ width: 50 }} className=" widthlength">
            <img src="skin-probs.svg" alt="" /> Dermatologist
          </div>
        </div>
      </div>
      <div className="fourth-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/NvZktxngQWc?si=xsGIusiUP5ql6DMs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="fifth-container">
        <h5>Popular Doctors Available</h5> <br />
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action "
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>
                Consultation Fee ₹ 499/- <br /> <button>Consult now</button>
              </small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action "
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>
                Consultation Fee ₹ 499/- <br /> <button>Consult now</button>
              </small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action "
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>
                Consultation Fee ₹ 499/- <br /> <button>Consult now</button>
              </small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
        </div>
      </div>

      <div className="sixth-container">
        <div className="card">
          <label className="card-header">
            <p>
              HealthOneSolutions offers the convenience of online doctor
              consultations, allowing you to receive medical advice and
              treatment from the comfort of your own home. At the end of every
              consultation, we immediately provide an online prescription to
              help you order medicines.
            </p>
          </label>
          <div className="card-body">
            <h6 className="card-title">
              Benefits of Online Doctor Consultation
            </h6>
            <div className="card-text">
              <ul>
                <li>
                  {" "}
                  <span style={{ fontWeight: 400 }}>24X 7 Consultation</span> :
                  Consult a doctor via audio/video anytime.
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: 400 }}>Convenience</span> : Access
                  MD-level doctors across 22+ specialties
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: 400 }}>Time-saving </span>{" "}
                  :Schedule a doctor's appointment in under 10 minutes.
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: 400 }}>Cost-effective</span> :Book
                  an appointment for just ₹199.anytime.
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: 400 }}>Flexibility</span> : Connect
                  with a doctor at your convenience.
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: 400 }}>24X 7 Consultation</span> :
                  Consult a doctor via audio/video anytime.
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: 400 }}>24X 7 Consultation</span> :
                  Consult a doctor via audio/video anytime.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="seventh-container">
        <h5 className="text-center"> FAQs</h5>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <ul>
                  <li>What is HEALTHONESOLUTION</li>
                  <li>Why  HEALTHONESOLUTION</li>
                  <li>How to connect Tech Team</li>
                  <li>How to visit the doctor offline</li>
                </ul>
                
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
              <ul>
                  <li>What is HEALTHONESOLUTION</li>
                  <li>Why  HEALTHONESOLUTION</li>
                  <li>How to connect Tech Team</li>
                  <li>How to visit the doctor offline</li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="r1">
        <ul> <h5>Health</h5>
          <li>Doctors</li>
          <li>Categories</li>
          <li>Speciality</li>
          <li>Experiences</li>
          <li>Medicines</li>
          <li>Reports</li>
        </ul>
        </div>
        <div className="r2">
        <ul> <h5>Health</h5>
          <li>Doctors</li>
          <li>Categories</li>
          <li>Speciality</li>
          <li>Experiences</li>
          
        </ul>
        </div>
        <div className="r2">
        <ul> <h5>About</h5>
          <li>Overview</li>
          <li>Contact</li>
          <li>Testimonial</li>
          <li>Blog</li>
          <li>Security</li>
          <li>FAQs</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
