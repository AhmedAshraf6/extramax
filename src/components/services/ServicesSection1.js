import React from 'react';
import img0 from '../../imgs/services/sec11.png';
import img1 from '../../imgs/services/sec12.png';
import img2 from '../../imgs/services/sec13.png';
import img3 from '../../imgs/services/sec14.png';
import img4 from '../../imgs/services/sec15.png';
import img5 from '../../imgs/services/sec16.png';
import { useGlobalContext } from '../../contexts/LangugeContextApi';

const ServicesSection1 = () => {
  const { lang } = useGlobalContext();
  const {
    head1,
    spanHead,
    head2,
    cardsTitles: [a, b, c, d, e, f],
    paragraph,
  } = lang.Services.Section1;
  return (
    <section className='services-section1 my-3 my-md-5'>
      <div className='container'>
        <h1 className='text-center fw-bold my-2 my-md-4 lh-base'>
          {head1} <span className='text-primary'>{spanHead} </span>
          {head2}
        </h1>
        <div className='row gy-3'>
          <div className='col-sm-6 col-lg-4'>
            <div className='card text-center  py-2 py-md-5'>
              <img
                src={img0}
                className='card-img-top mx-auto mt-2  p-4'
                alt={a}
                style={{
                  width: '130px',
                  height: '130px',
                }}
              />
              <div className='card-body'>
                <h4 className='card-title fw-bold '>{a}</h4>
                <p className='card-text lh-base mt-3 fw-light'>{paragraph}</p>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='card text-center  py-2 py-md-5'>
              <img
                src={img1}
                className='card-img-top mx-auto mt-2  p-4'
                alt={b}
                style={{
                  width: '130px',
                  height: '130px',
                }}
              />
              <div className='card-body'>
                <h4 className='card-title fw-bold '>{b}</h4>
                <p className='card-text lh-base mt-3 fw-light'>{paragraph}</p>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='card text-center  py-2 py-md-5'>
              <img
                src={img2}
                className='card-img-top mx-auto mt-2  p-4'
                alt={c}
                style={{
                  width: '130px',
                  height: '130px',
                }}
              />
              <div className='card-body'>
                <h4 className='card-title fw-bold '>{c}</h4>
                <p className='card-text lh-base mt-3 fw-light'>{paragraph}</p>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='card text-center  py-2 py-md-5'>
              <img
                src={img3}
                className='card-img-top mx-auto mt-2  p-4'
                alt={d}
                style={{
                  width: '130px',
                  height: '130px',
                }}
              />
              <div className='card-body'>
                <h4 className='card-title fw-bold '>{d}</h4>
                <p className='card-text lh-base mt-3 fw-light'>{paragraph}</p>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='card text-center  py-2 py-md-5'>
              <img
                src={img4}
                className='card-img-top mx-auto mt-2  p-4'
                alt={e}
                style={{
                  width: '130px',
                  height: '130px',
                }}
              />
              <div className='card-body'>
                <h4 className='card-title fw-bold '>{e}</h4>
                <p className='card-text lh-base mt-3 fw-light'>{paragraph}</p>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='card text-center  py-2 py-md-5'>
              <img
                src={img5}
                className='card-img-top mx-auto mt-2  p-4'
                alt={f}
                style={{
                  width: '130px',
                  height: '130px',
                }}
              />
              <div className='card-body'>
                <h4 className='card-title fw-bold '>{f}</h4>
                <p className='card-text lh-base mt-3 fw-light'>{paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection1;
