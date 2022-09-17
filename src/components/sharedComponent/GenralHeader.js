import React from 'react';
import { Link } from 'react-router-dom';

const GenralHeader = ({ title, link, linkName }) => {
  return (
    <section className='genral-header'>
      <div className='overlay'></div>
      <div className='content text-light d-flex align-items-center justify-content-center flex-column'>
        <h1 className='fw-bold'>{title}</h1>
        <div className=' fw-bold'>
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
