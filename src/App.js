import React from 'react';
import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LatamFest1 from './pages/LatamFest1';
import LatamFest2 from './pages/LatamFest2';
import LatamFest3 from './pages/LatamFest3';
import LatamFest4 from './pages/LatamFest4';
import Layout from './Layout';
import Explore from './pages/Explore';
import History from './pages/History';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import General from './pages/General';

function App() {
  return (

      <Router>
            <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Main />} />
                <Route path="/latamfest1" element={<LatamFest1 />} />
                <Route path="/latamfest2" element={<LatamFest2 />} />
                <Route path="/latamfest3" element={<LatamFest3 />} />
                <Route path="/latamfest4" element={<LatamFest4 />} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/history" element={<History/>} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/general" element={<General/>} />
                </Route>
            </Routes>
        </Router>
  );
}

export default App;
