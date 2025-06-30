import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import EventDiscovery from './Components/EventDiscovery';
import EventDetails from './Components/EventDetails';
import ContactChat from './Components/ContactChat';
import Community from './Components/Community';



import './index.postcss';

const App = () => {

  // const [score, setScore] = useState(null)

  // const handleData = (data) => {
  //   setScore(data)
  // }

  return (
   <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event-discovery" element={<EventDiscovery />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/contact-chat" element={<ContactChat />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      
    </Router>

  );
};

export default App
