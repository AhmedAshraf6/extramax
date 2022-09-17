import React, { useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import { MdImageSearch, MdSupportAgent } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
const HomeSection4 = () => {
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
    <section className='home-section4 py-3 py-md-6 mt-5'>
      <div className='container'>
        {/* Content  */}
        <div className='row gy-4'>
          <div className='col-lg-7'>
            <div className='exp d-flex flex-column flex-md-row align-items-center '>
              <div className='num mx-4'>
                <h1 className='text-primary fw-bold d-flex align-items-center'>
                  <span>{num}</span>
                  <span>+</span>
                </h1>
                <span className='text-dark fw-bold'>{headnum}</span>
              </div>
              <h1 className='head text-dark fw-bold mx-4 lh-base'>
                {h11} <span className='text-primary'>{span}</span> {h12}
              </h1>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='box d-flex align-items-center border-bottom border-primary border-1  mb-4 pb-3'>
              <h5 className='mx-3'>{h31}</h5>
              {currentLang == 'eng' ? (
                <FaLongArrowAltRight className='fs-5' />
              ) : (
                <FaLongArrowAltLeft className='fs-5' />
              )}
            </div>
            <div className='box d-flex align-items-center border-bottom border-primary border-1 mb-4 pb-3'>
              <h5 className='mx-3'>{h32}</h5>
              {currentLang == 'eng' ? (
                <FaLongArrowAltRight className='fs-5' />
              ) : (
                <FaLongArrowAltLeft className='fs-5' />
              )}
            </div>
            <div className='box d-flex align-items-center border-bottom border-primary border-1 mb-4 pb-3'>
              <h5 className='mx-3'>{h33}</h5>
              {currentLang == 'eng' ? (
                <FaLongArrowAltRight className='fs-5' />
              ) : (
                <FaLongArrowAltLeft className='fs-5' />
              )}
            </div>
          </div>
        </div>
        {/* Counter  */}
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
          className='counter row mt-5'
        >
          <div className='col-sm-6 col-lg'>
            <div className='card mb-3 px-3 text-center '>
              <div className='row align-items-center '>
                <div className='col-md-2'>
                  <HiOutlineLightBulb className='icon fs-1 fw-bold text-primary' />
                </div>
                <div className='col-md-10'>
                  <div className='card-body'>
                    <h5 className='card-title fs-1 fw-bold'>
                      {counterOn && (
                        <CountUp end={numIcon1} duration={3} delay={0} />
                      )}
                      +
                    </h5>
                    <p className='card-text'>
                      <small className='text-muted'>{conIcon1}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-lg'>
            <div className='card mb-3 px-3 text-center'>
              <div className='row align-items-center '>
                <div className='col-md-2'>
                  <MdSupportAgent className='icon fs-1 fw-bold text-primary' />
                </div>
                <div className='col-md-10'>
                  <div className='card-body'>
                    <h5 className='card-title fs-1 fw-bold'>
                      {counterOn && (
                        <CountUp end={numIcon2} duration={3} delay={0} />
                      )}
                      +
                    </h5>
                    <p className='card-text'>
                      <small className='text-muted'>{conIcon2}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            <div className='card mb-3 px-3 text-center'>
              <div className='row align-items-center '>
                <div className='col-md-2'>
                  <MdImageSearch className='icon fs-1 fw-bold text-primary' />
                </div>
                <div className='col-md-10'>
                  <div className='card-body'>
                    <h5 className='card-title fs-1 fw-bold'>
                      {counterOn && (
                        <CountUp end={numIcon3} duration={3} delay={0} />
                      )}
                      +
                    </h5>
                    <p className='card-text'>
                      <small className='text-muted'>{conIcon3}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            <div className='card mb-3 px-3 text-center'>
              <div className='row align-items-center '>
                <div className='col-md-2'>
                  <BsChatDots className='icon fs-1 fw-bold text-primary' />
                </div>
                <div className='col-md-10'>
                  <div className='card-body'>
                    <h5 className='card-title fs-1 fw-bold'>
                      {counterOn && (
                        <CountUp end={numIcon4} duration={3} delay={0} />
                      )}
                      +
                    </h5>
                    <p className='card-text'>
                      <small className='text-muted'>{conIcon4}</small>
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

export default HomeSection4;
