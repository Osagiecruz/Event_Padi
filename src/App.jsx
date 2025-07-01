import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import EventDiscovery from './Components/EventDiscovery';
import EventDetails from './Components/EventDetails';
import ContactChat from './Components/ContactChat';
import Community from './Components/Community';
import Signup from './Components/Signup';
import Login from './Components/Login';
// import AuthHandler from "./Components/AuthHandler";



import './index.postcss';

const App = () => {


  return (
   <Router>
      {/* <AuthHandler /> */}
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event-discovery" element={<EventDiscovery />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/contact-chat" element={<ContactChat />} />
          <Route path="/community" element={<Community />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
    </Router>

  );
};

export default App
