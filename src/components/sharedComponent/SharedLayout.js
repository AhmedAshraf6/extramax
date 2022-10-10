import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
import Footer from './Footer';
import Navbar from './Navbar';
import ResponNav from './ResponNav';
import ReactLoading from 'react-loading';

const SharedLayout = () => {
  const { navbarStatus } = useGlobalContext();
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {navbarStatus && <ResponNav />}
      {loading ? (
        <div className='position-fixed top-50 start-50 translate-middle'>
          <ReactLoading
            type={'cylon'}
            color={'#0d6efd'}
            height={100}
            width={100}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default SharedLayout;
