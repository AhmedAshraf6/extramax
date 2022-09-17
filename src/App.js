import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './style.scss';
import SharedLayout from './components/sharedComponent/SharedLayout';
import Services from './pages/Services';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='services' element={<Services />}></Route>
          <Route path='pricing' element={<Pricing />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
