import React from 'react';
import Home from './home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './services/Services';
import { Toaster } from "react-hot-toast";
import Gallery from './gallery/Gallery';
import Aboutus from './aboutus/Aboutus';
import Contactus from './contactus/Contactus';
import BookNow from './booknow/BookNow';
import PrivacyPolicy from './privacypolicy/PrivacyPolicy';
import Jobs from './jobs/Jobs';

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes> 
          <Route path="https://capturetexturephotography.netlify.app/" element={<Home />} />
          <Route path="https://capturetexturephotography.netlify.app/services" element={<Services />} />
          <Route path="https://capturetexturephotography.netlify.app/gallery" element={<Gallery/>} />
          <Route path="https://capturetexturephotography.netlify.app/aboutus" element={<Aboutus/>} />
          <Route path="https://capturetexturephotography.netlify.app/contactus" element={<Contactus/>} />
          <Route path="https://capturetexturephotography.netlify.app/booknow" element={<BookNow/>} />
          <Route path="https://capturetexturephotography.netlify.app/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="https://capturetexturephotography.netlify.app/jobs" element={<Jobs/>} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;