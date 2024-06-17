import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Header from './../components/Header/header';
import Footer from './../components/Footer/footer';
import Home from '../pages/Home/Home';
import About from './../pages/About/about';
import Error from './../pages/Error/Error';
import Location from './../pages/Location/Location';

const DefaultRouter = () => {
    return (
      <BrowserRouter>
      <Header />
      <main className='pageContenair'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/location/:id" element={<Location />} />
              <Route path="/About" element={<About />} />
              <Route path="*" element={<Error />} />
            </Routes>
            </main>
        <Footer />
    </BrowserRouter>
 )
}
export default DefaultRouter