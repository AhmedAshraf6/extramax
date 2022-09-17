import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
const Navbar = () => {
  const { lang, changeLangFunc, toggleNavbarFunc } = useGlobalContext();
  const {
    links: { home, about, services, pricing, contact },
    title,
    title2,
    button,
    currentlang,
    phonetitle,
    phone,
  } = lang.Navbar;

  // console.log(document.head.appendChild('<link>ahmed</link>'));
  return (
    <nav className='navbar navbar-expand-lg bg-light py-3'>
      <div className='container'>
        <NavLink className='navbar-brand fw-bold fs-4 ' to='/'>
          <span className='text-primary'>{title}</span>
          <span>{title2}</span>
        </NavLink>
        <button
          className='navbar-toggler border-0'
          type='button'
          onClick={() => toggleNavbarFunc(true)}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mb-2 mb-lg-0 mx-auto'>
            <li className='nav-item fw-bold fs-6 mx-3'>
              <NavLink className='nav-link' to='/'>
                {home}
              </NavLink>
            </li>
            <li className='nav-item fw-bold fs-6 mx-3'>
              <NavLink className='nav-link' to='/about'>
                {about}
              </NavLink>
            </li>
            <li className='nav-item fw-bold fs-6 mx-3'>
              <NavLink className='nav-link' to='/services'>
                {services}
              </NavLink>
            </li>
            <li className='nav-item fw-bold fs-6 mx-3'>
              <NavLink className='nav-link' to='/pricing'>
                {pricing}
              </NavLink>
            </li>
            <li className='nav-item fw-bold fs-6 mx-3'>
              <NavLink className='nav-link' to='/contact'>
                {contact}
              </NavLink>
            </li>
          </ul>
          <div className='d-flex'>
            <div className='d-flex align-items-center'>
              {currentlang == 'ar' ? (
                <BsTelephoneFill className='text-primary fs-4 mx-2' />
              ) : (
                <AiFillPhone className='text-primary fs-4 mx-2' />
              )}
              <div>
                <span className='text-muted d-block phonetitle'>
                  {phonetitle}
                </span>
                <span>{phone}</span>
              </div>
            </div>
            <button
              className='button custom mx-2'
              onClick={() => changeLangFunc(currentlang)}
            >
              {button}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
