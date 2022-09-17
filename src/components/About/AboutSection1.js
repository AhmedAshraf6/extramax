import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import img1 from '../../imgs/about/sec11.jpg';
import img2 from '../../imgs/about/sec12.jpg';
import img3 from '../../imgs/about/sec13.jpg';
import img4 from '../../imgs/about/sec14.png';
import img5 from '../../imgs/about/sec15.png';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
const AboutSection1 = () => {
  const { lang } = useGlobalContext();
  const {
    h5,
    head,
    p,
    boss,
    jop,
    check: [a, b, c],
  } = lang.About.Section1;
  return (
    <div className='about-section1 my-4 my-md-6 '>
      <div className='container'>
        <div className='row gy-5'>
          <div className='col-lg'>
            <div className='left mx-auto  position-relative'>
              <img
                src={img1}
                alt=''
                className='position-absolute w-75 text-center rounded'
              />
              <img
                src={img2}
                alt=''
                className='position-absolute w-75 text-center rounded'
              />
            </div>
          </div>
          <div className='col-lg'>
            <div className='right'>
              <h6 className='text-primary fw-bold'>{h5}</h6>
              <h1 className='lg-base mt-4'>{head}</h1>
              <p className='lead lh-base mt-4'>{p}</p>

              <div className='d-flex flex-column flex-sm-row mt-4'>
                <div className='img-box d-flex flex-column py-2 position-relative mx-4'>
                  <img src={img4} alt='' className='w-50 mb-2' />
                  <h6 className='m-0 p-0'>{boss}</h6>
                  <span className='text-muted '>{jop}</span>
                  <div className='img-wrapper position-absolute'>
                    <img src={img3} alt='' className='img rounded-circle' />
                  </div>
                </div>
                <div className='list'>
                  <div className='d-flex align-items-center'>
                    <BsCheckLg className='text-primary mx-2' />
                    <h6>{a}</h6>
                  </div>
                  <div className='d-flex align-items-center'>
                    <BsCheckLg className='text-primary mx-2' />
                    <h6>{b}</h6>
                  </div>
                  <div className='d-flex align-items-center'>
                    <BsCheckLg className='text-primary mx-2' />
                    <h6>{c}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
