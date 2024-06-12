import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Error from './pages/Error/error';
import Header from './layouts/Header/header';
import Footer from './layouts/Footer/footer';
import Location from './pages/Location/Location';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <body>
      <Header />
        <div className='pageContenair'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location/:id" element={<Location />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </body>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
