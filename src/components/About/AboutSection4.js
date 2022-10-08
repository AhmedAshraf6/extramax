import React from 'react';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
import brand1 from '../../imgs/brands/brand-1.png';
import brand2 from '../../imgs/brands/brand-2.png';
import brand3 from '../../imgs/brands/brand-3.png';
import brand4 from '../../imgs/brands/brand-4.png';
import brand5 from '../../imgs/brands/brand-5.png';
const AboutSection4 = () => {
  const { lang } = useGlobalContext();
  const { p, span, p2 } = lang.homePage.Section2;
  return (
    <section className='brands mt-6'>
      <div className='container'>
        <div className='h2 text-center text-secondary'>
          {p} <span className='text-primary fw-bold'>{span}</span> {p2}
        </div>
        <div className='row mt-3 gx-2 gy-3 text-center'>
          <div className='col-md-4 col-lg'>
            <img src={brand1} alt='' />
          </div>
          <div className='col-md-4 col-lg'>
            <img src={brand2} alt='' />
          </div>
          <div className='col-md-4 col-lg'>
            <img src={brand3} alt='' />
          </div>
          <div className='col-md-4 col-lg'>
            <img src={brand4} alt='' />
          </div>
          <div className='col-md-4 col-lg'>
            <img src={brand5} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection4;
