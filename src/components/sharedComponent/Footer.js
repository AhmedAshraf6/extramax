import React from 'react';
import img from '../../imgs/footer-bg.jpg';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';

import { useGlobalContext } from '../../contexts/LangugeContextApi';
const Footer = () => {
  const { lang } = useGlobalContext();
  const {
    contact: { title, title2, phone, email, location },
    useful_links_array,
    services_array,
    support_array,
    usefulLinks,
    ourServices,
    support,
    copyright,
  } = lang.Footer;
  return (
    <div className='footer pt-4 pt-md-6 mt-5'>
      {/* <div class='spinner-grow' role='status'>
        <span class='visually-hidden'>Loading...</span>
      </div> */}
      <div className='container'>
        <div className='row gy-3'>
          <div className='col-sm-6 col-lg'>
            <div className='d-flex flex-column'>
              <h2 className='fw-bold text-light mb-4'>
                <span className='text-primary'>{title}</span>
                <span>{title2}</span>
              </h2>
              <div className='d-flex align-items-center mt-2'>
                <BiPhoneCall className='text-primary fs-5' />
                <h6 className='text-light mx-2'>{phone}</h6>
              </div>
              <div className='d-flex align-items-center mt-2'>
                <HiOutlineMailOpen className='text-primary fs-5' />
                <h6 className='text-light mx-2'>{email}</h6>
              </div>
              <div className='d-flex align-items-center mt-2'>
                <MdOutlineLocationOn className='text-primary fs-5' />
                <h6 className='text-light mx-2'>{location}</h6>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            <h3 className='text-light mb-4'>{usefulLinks}</h3>
            <div className='d-flex flex-column'>
              {useful_links_array.map((link, index) => {
                return (
                  <h6 className='text-secondary mt-2' key={index}>
                    {link}
                  </h6>
                );
              })}
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            <h3 className='text-light mb-4'>{ourServices}</h3>
            <div className='d-flex flex-column'>
              {services_array.map((serice, index) => {
                return (
                  <h6 className='text-secondary mt-2' key={index}>
                    {serice}
                  </h6>
                );
              })}
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            <h3 className='text-light mb-4'>{support}</h3>
            <div className='d-flex flex-column'>
              {support_array.map((serice, index) => {
                return (
                  <h6 className='text-secondary mt-2' key={index}>
                    {serice}
                  </h6>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr className='fw-bold border mt-5' />
      <div className='container'>
        <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center py-4'>
          <h6 className='fw-bold text-secondary'>{copyright}</h6>
          <div className='d-flex align-items-center'>
            <a
              className='icon pointer py-2 px-2 text-center rounded-circle ms-2'
              href='https://www.facebook.com/ahmedashraf.ahmedashraf.353'
              target='_blank'
            >
              <FaFacebook className='social-icon text-light fs-4 fw-bold ' />
            </a>
            <a
              className='icon pointer py-2 px-2 text-center rounded-circle ms-2'
              href='https://www.linkedin.com/in/ahmed-ashraf6/'
              target='_blank'
            >
              <BsTwitter className='social-icon text-light fs-4 fw-bold ' />
            </a>
            <a
              className='icon pointer py-2 px-2 text-center rounded-circle ms-2'
              href='https://www.linkedin.com/in/ahmed-ashraf6/'
              target='_blank'
            >
              <GrLinkedinOption
                className='social-icon text-light fs-4 fw-bold '
                href='https://www.linkedin.com/in/ahmed-ashraf6/'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
