import React from 'react';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { HiOutlineMailOpen } from 'react-icons/hi';
import brand1 from '../../imgs/brands/brand-1.png';
// for animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutSection5 = () => {
  const { lang } = useGlobalContext();
  const {
    col1: { quick, contactInfo },
    col2: {
      message,
      help,
      inputs: [a, b, c, d, e],
    },
  } = lang.About.Section5;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='about-section5 py-3 py-md-6 mt-5 text-light'>
      <div className='container'>
        <div className='row g-5 '>
          <div className='col-lg-5 '>
            <h1 className='mb-3 mb-md-3' data-aos='fade-down'>
              {quick}
            </h1>
            <div className='card mb-3 px-3 bg-transparent '>
              <div className='row card-border align-items-center border-bottom border-light border-2 '>
                <div className='col-md-1'>
                  <BiPhoneCall className='icon fs-1 fw-bold ' />
                </div>
                <div className='col-md-11'>
                  <div className='card-body'>
                    <h5 className='card-title fs-3 fw-bold'>
                      {contactInfo[0]['title']}
                    </h5>
                    <p className='card-text'>
                      <small className='fs-5'> {contactInfo[0]['value']}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='card mb-3 px-3 bg-transparent'>
              <div className='row align-items-center border-bottom border-light border-2 '>
                <div className='col-md-1'>
                  <HiOutlineMailOpen className='icon fs-1 fw-bold ' />
                </div>
                <div className='col-md-11'>
                  <div className='card-body'>
                    <h5 className='card-title fs-3 fw-bold'>
                      {' '}
                      {contactInfo[1]['title']}
                    </h5>
                    <p className='card-text'>
                      <small className='fs-5'> {contactInfo[1]['value']}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='card mb-3 px-3 bg-transparent   '>
              <div className='row align-items-center border-bottom border-light border-2 '>
                <div className='col-md-1'>
                  <MdOutlineLocationOn className='icon fs-1 fw-bold ' />
                </div>
                <div className='col-md-11'>
                  <div className='card-body'>
                    <h5 className='card-title fs-3 fw-bold'>
                      {' '}
                      {contactInfo[2]['title']}
                    </h5>
                    <p className='card-text'>
                      <small className='fs-5'> {contactInfo[2]['value']}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='card text-dark p-3 p-md-5'>
              <div className='card-body text-center'>
                <p className='card-text text-primary fw-bold'>{message}</p>
                <h1 className='card-title'>{help}</h1>
              </div>
              <form className='row gy-4'>
                <div className='col-md-6'>
                  <input
                    className='form-control form-control-lg '
                    type='text'
                    placeholder={a}
                    required
                  />
                </div>
                <div className='col-md-6'>
                  <input
                    className='form-control form-control-lg '
                    type='email'
                    placeholder={b}
                    required
                  />
                </div>
                <div className='col-12'>
                  <input
                    className='form-control form-control-lg '
                    type='text'
                    placeholder={c}
                    required
                  />
                </div>

                <div className='col-12'>
                  <textarea
                    className='form-control'
                    placeholder={d}
                    required
                    id='floatingTextarea2'
                    style={{ height: '200px' }}
                  ></textarea>
                </div>
                <div className='col-12 text-center'>
                  <div className='button custom pointer fw-bold w-100'>{e}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection5;
