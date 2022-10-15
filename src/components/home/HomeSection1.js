import React from 'react';
import home1 from '../../imgs/homepage/sec11.jpg';
import home2 from '../../imgs/homepage/sec12.jpg';
import home3 from '../../imgs/homepage/sec13.jpg';
import authorimg from '../../imgs/homepage/wordsec1.png';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
// for animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const HomeSection1 = () => {
  const { lang } = useGlobalContext();
  const { title, h1, p, leadername, jop, card1, card2, card3 } =
    lang.homePage.Section1;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className='home-section1'>
      <div className='container'>
        {/* Content */}
        <div className='box1 row gx-5 gy-3'>
          <div className='col-lg text-light' data-aos='fade-right'>
            <h6 className='fw-bold lh-base'>{title}</h6>
            <h1 className='fw-bold lh-base mt-3'>{h1}</h1>
          </div>
          <div className='col-lg' data-aos='fade-left'>
            <p className='fs-5 text-white-50 '>{p}</p>
            <div className='d-flex mt-2'>
              <img src={authorimg} alt='' />
              <div className='mx-4'>
                <h6 className='text-white'>{leadername}</h6>
                <p className='text-white-50'>{jop}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div
          className='box2 row gy-2 position-relative top-25'
          data-aos='fade-up'
        >
          <div className='col-sm-6 col-lg'>
            <div className='card pointer text-bg-dark position-relative border-0 '>
              <div className='overlay'></div>
              <img src={home1} className='card-img ' alt='...' />
              <div className='card-img-overlay '>
                <h5 className='card-title text-white fw-bold fs-5'>{card1}</h5>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            <div className='card pointer text-bg-dark position-relative border-0 '>
              <div className='overlay'></div>
              <img src={home2} className='card-img ' alt='...' />
              <div className='card-img-overlay'>
                <h5 className='card-title text-white fw-bold fs-5'>{card2}</h5>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg mx-auto'>
            <div className='card pointer text-bg-dark position-relative border-0 '>
              <div className='overlay'></div>
              <img src={home3} className='card-img ' alt='...' />
              <div className='card-img-overlay'>
                <h5 className='card-title text-white fw-bold fs-5'>{card3}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
