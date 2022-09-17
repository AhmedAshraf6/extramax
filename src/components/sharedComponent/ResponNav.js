import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
const ResponNav = () => {
  const { toggleNavbarFunc, lang, changeLangFunc } = useGlobalContext();
  const {
    links: { home, about, services, pricing, contact },
    title,
    title2,
    button,
    currentlang,
    phonetitle,
    phone,
  } = lang.Navbar;
  const detectToggle = (e) => {
    if (e.target.className === 'side-navbar') {
      toggleNavbarFunc(false);
    }
  };
  return (
    <div className='side-navbar' onClick={detectToggle}>
      <div className='small-nav py-3 px-3 '>
        <button
          type='button'
          className='btn-close fw-bold fs-5 btn-close-white d-block ms-auto'
          aria-label='Close'
          onClick={() => toggleNavbarFunc(false)}
        ></button>
        <ul className='navbar-nav mb-2 mb-lg-0 mx-auto mt-4 text-light'>
          <li className='nav-item fw-bold fs-5 mx-3'>
            <NavLink
              className='nav-link'
              to='/'
              onClick={() => toggleNavbarFunc(false)}
            >
              {home}
            </NavLink>
          </li>
          <li className='nav-item fw-bold fs-5 mx-3'>
            <NavLink
              className='nav-link'
              to='/about'
              onClick={() => toggleNavbarFunc(false)}
            >
              {about}
            </NavLink>
          </li>
          <li className='nav-item fw-bold fs-5 mx-3'>
            <NavLink
              className='nav-link'
              to='/services'
              onClick={() => toggleNavbarFunc(false)}
            >
              {services}
            </NavLink>
          </li>
          <li className='nav-item fw-bold fs-5 mx-3'>
            <NavLink
              className='nav-link'
              to='/pricing'
              onClick={() => toggleNavbarFunc(false)}
            >
              {pricing}
            </NavLink>
          </li>
          <li className='nav-item fw-bold fs-5 mx-3'>
            <NavLink
              className='nav-link'
              to='/contact'
              onClick={() => toggleNavbarFunc(false)}
            >
              {contact}
            </NavLink>
          </li>
          <li
            className='nav-item fw-bold fs-5 mx-3'
            onClick={() => toggleNavbarFunc(false)}
          >
            <button
              className='button custom '
              onClick={() => changeLangFunc(currentlang)}
            >
              {button}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResponNav;
