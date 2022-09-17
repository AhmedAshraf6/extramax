import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
const HomeHeader = () => {
  const { lang } = useGlobalContext();
  const { h2, h3, btn } = lang.homePage.Header;
  return (
    <section className='home-header'>
      <div className='overlay'></div>

      <div className='content text-light text-center d-flex flex-column align-items-center justify-content-center'>
        <h3>{h2}</h3>
        <h1 className='lh-base w-75 mx-auto'>{h3}</h1>
        <NavLink
          className='button text-decoration-none fw-bold fs-6'
          to='/about'
        >
          {btn}
        </NavLink>
      </div>
    </section>
  );
};

export default HomeHeader;
