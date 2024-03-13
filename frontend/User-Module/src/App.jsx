import React, { useState } from "react";
import Home from "./components/pages/Home.jsx";
import Login from "./components/pages/Login.jsx";
import Demo from './components/pages/Demo.jsx';
import CardPage from './components/pages/CardPage.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {

  const [isLoggedIn, setIsLoggedIn] =useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/CardPage" element={<CardPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        </Routes>
      </Router>
      {/* <Home></Home> */}
      {/* <Login></Login> */}
    </div>
  );
};

export default App;
