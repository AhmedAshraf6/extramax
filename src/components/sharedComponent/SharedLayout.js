import React from 'react';
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
import Footer from './Footer';
import Navbar from './Navbar';
import ResponNav from './ResponNav';

const SharedLayout = () => {
  const { navbarStatus } = useGlobalContext();
  return (
    <div>
      {navbarStatus && <ResponNav />}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
