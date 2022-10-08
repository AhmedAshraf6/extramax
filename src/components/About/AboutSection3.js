import React, { useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import { MdImageSearch, MdSupportAgent } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
const AboutSection3 = () => {
  const { lang, currentLang } = useGlobalContext();
  const [counterOn, setCounterOn] = useState(false);
  const {
    num,
    headnum,
    h11,
    span,
    h12,
    h31,
    h32,
    h33,
    numIcon1,
    numIcon2,
    numIcon3,
    numIcon4,
    conIcon1,
    conIcon2,
    conIcon3,
    conIcon4,
  } = lang.homePage.Section4;
  return (
    <section className='about-section3 py-3 py-md-6 mt-5 text-light'>
      <div className='container'>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
          className='counter row mt-5'
        >
          <div className='col-sm-6 col-lg'>
            <div className='card mb-3 px-3 text-center '>
              <div className='row align-items-center gy-3'>
                <div className='col-12'>
                  <HiOutlineLightBulb className='icon fs-1 fw-bold text-primary' />
                </div>
                <div className='col-12'>
                  <div className='card-body'>
                    <h5 className='card-title fs-1 fw-bold'>
                      {counterOn && (
                        <CountUp end={numIcon1} duration={3} delay={0} />
                      )}
                      +
                    </h5>
                    <p className='card-text'>
                      <small className='fw-bold'>{conIcon1}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-lg'>
            <div className='card mb-3 px-3 text-center'>
              <div className='row align-items-center gy-3'>
                <div className='col-12'>
                  <MdSupportAgent className='icon fs-1 fw-bold text-primary' />
                </div>
                <div className='col'>
                  <div className='card-body'>
                    <h5 className='card-title fs-1 fw-bold'>
                      {counterOn && (
                        <CountUp end={numIcon2} duration={3} delay={0} />
                      )}
                      +
                    </h5>
                    <p className='card-text'>
                      <small className='fw-bold'>{conIcon2}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            <div className='card mb-3 px-3 text-center'>
              <div className='row align-items-center gy-3'>
                <div className='col-12'>
                  <MdImageSearch className='icon fs-1 fw-bold text-primary' />
                </div>
                <div className='col'>
                  <div className='card-body'>
                    <h5 className='card-title fs-1 fw-bold'>
                      {counterOn && (
                        <CountUp end={numIcon3} duration={3} delay={0} />
                      )}
                      +
                    </h5>
                    <p className='card-text'>
                      <small className='fw-bold'>{conIcon3}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            <div className='card mb-3 px-3 text-center'>
              <div className='row align-items-center gy-3'>
                <div className='col-12'>
                  <BsChatDots className='icon fs-1 fw-bold text-primary' />
                </div>
                <div className='col'>
                  <div className='card-body'>
                    <h5 className='card-title fs-1 fw-bold'>
                      {counterOn && (
                        <CountUp end={numIcon4} duration={3} delay={0} />
                      )}
                      +
                    </h5>
                    <p className='card-text'>
                      <small className='fw-bold'>{conIcon4}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default AboutSection3;
