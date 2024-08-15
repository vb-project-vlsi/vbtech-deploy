import React from 'react';
import './App.css';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './pages/Navigation/Navigation';
import Services from './pages/Services/Services';
import USAServices from './pages/USAServices/USAServices';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="back-button" onClick={handleBackClick}>
      <FontAwesomeIcon icon={faArrowLeft} /> Back
    </div>
  );
};

const MainContent = () => {
  const location = useLocation();
  const isUSAServicesPage = location.pathname === '/usa-services';

  return (
    <>
      {!isUSAServicesPage && <Navbar />}
      {isUSAServicesPage && <BackButton />}
      <Routes>
        <Route path="/usa-services" element={<USAServices />} />
        <Route path="/" element={
          <>
            <Element name="home">
              <HomePage />
            </Element>
            <Element name="about">
              <AboutUs />
            </Element>
           
            <Element name="services">
              <Services />
            </Element>
            <Element name="contact">
              <ContactUs />
            </Element>
          </>
        } />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
