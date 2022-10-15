import React from 'react';
import { Link } from 'react-router-dom';
// for animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const GenralHeader = ({ title, link, linkName }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='genral-header'>
      <div className='overlay'></div>
      <div className='content text-light d-flex align-items-center justify-content-center flex-column'>
        <h1 className='fw-bold' data-aos='zoom-in'>
          {title}
        </h1>
        <div className=' fw-bold' data-aos='fade-up'>
          <Link to='/' className='text-decoration-none text-primary'>
            {linkName}
          </Link>
          <span> / </span>
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
};

export default GenralHeader;
