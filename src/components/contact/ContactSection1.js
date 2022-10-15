import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
// for animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ContactSection1 = () => {
  const { lang } = useGlobalContext();
  const { head, span } = lang.Contact.Section1;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='contact-section1 my-6'>
      <div className='container'>
        <div className='row gy-5'>
          <div className='col-sm-6 col-lg' data-aos='fade-right'>
            <div className='box position-relative py-5 bg-light shadow shadow-2 d-flex flex-column justify-content-center align-items-center'>
              <div className='icon bg-primary rounded-circle py-4 px-4 position-absolute d-flex justify-content-center align-items-center'>
                <BiPhoneCall className='text-light fs-1 fw-bold' />
              </div>
              <h5 className='fw-bold'>{head[0]}</h5>
              <p className='text-primary'>{span[0]}</p>
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            <div className='box position-relative py-5 bg-light shadow shadow-2 d-flex flex-column justify-content-center align-items-center'>
              <div className='icon bg-primary rounded-circle py-4 px-4 position-absolute d-flex justify-content-center align-items-center'>
                <FiMail className='text-light fs-1 fw-bold' />
              </div>
              <h5 className='fw-bold'>{head[1]}</h5>
              <p className='text-primary'>{span[1]}</p>
            </div>
          </div>
          <div className='col-sm-6 col-lg' data-aos='fade-left'>
            <div className='box position-relative py-5 bg-light shadow shadow-2 d-flex flex-column justify-content-center align-items-center'>
              <div className='icon bg-primary rounded-circle py-4 px-4 position-absolute d-flex justify-content-center align-items-center'>
                <MdOutlineLocationOn className='text-light fs-1 fw-bold' />
              </div>
              <h5 className='fw-bold'>{head[2]}</h5>
              <p className='text-primary'>{span[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection1;
