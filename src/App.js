import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './assets/main.css';
import './assets/style.css';
import './Styles/Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/flaticon-set.css';
import './assets/css/swiper-bundle.min.css';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import About from './Pages/About';
import Services from './Pages/Services'; 
import HeaderNav from './Components/navbar/Header';
import NotFound from './Components/Common/404';
import './App.css';
import Footer from './Components/Home/Footer';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
