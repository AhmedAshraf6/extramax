import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../../contexts/LangugeContextApi';
const PricingSection1 = () => {
  const { lang } = useGlobalContext();
  const {
    head1,
    spanHead,
    head2,
    paragraph,
    titles,
    pricing,
    kinds,
    benfits,
    buttons,
  } = lang.Pricing.Section1;
  return (
    <section className='pricing-section1 my-5'>
      <div className='container'>
        <h1 className='text-center fw-bold my-4'>
          {head1} <span className='text-primary'>{spanHead}</span>
          {head2}
        </h1>
        <p className='paragraph text-center text-scondary lh-base w-50 mx-auto my-4'>
          {paragraph}
        </p>
        <div className='row gy-3'>
          <div className='col-md-6 col-xl'>
            <div className='card border-0 border-top border-primary border-5 py-2 py-md-4 shadow shadow-2'>
              <div className='card-body'>
                <h3 className='card-title fw-bold'>{titles[0]}</h3>
                <div className='d-flex align-items-center h-100 py-4'>
                  <h1 className='num position-relative fw-bold text-primary'>
                    {pricing[0]}
                    <span className='position-absolute top-0 fs-5 '>$</span>
                  </h1>
                  <p className='text-secondary mx-4 fs-4 '>{kinds[0]}</p>
                </div>
                <div className='list'>
                  {benfits.map((b, index) => (
                    <div className='d-flex align-items-center my-3' key={index}>
                      <BsCheckLg className='text-primary ' />
                      <h6 className='text-muted mx-4'>{b}</h6>
                    </div>
                  ))}
                </div>
                <div className='d-flex align-items-center py-4'>
                  <button className='button custom border-0 fw-bold text-nowrap'>
                    {buttons[0]}
                  </button>
                  <Link
                    className='mx-4 text-primary fw-bold fs-5 text-decoration-none '
                    to='/contact'
                  >
                    {buttons[1]}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl'>
            <div className='card border-0 py-2 py-md-4 shadow shadow-2 middle'>
              <div className='card-body text-light'>
                <h3 className='card-title fw-bold'>{titles[1]}</h3>
                <div className='d-flex align-items-center h-100 py-4'>
                  <h1 className='num position-relative fw-bold  '>
                    {pricing[1]}
                    <span className='position-absolute top-0 fs-5 '>$</span>
                  </h1>
                  <p className=' mx-4 fs-4 '>{kinds[1]}</p>
                </div>
                <div className='list'>
                  {benfits.map((b) => (
                    <div className='d-flex align-items-center my-3'>
                      <BsCheckLg className='text-primary ' />
                      <h6 className='mx-4'>{b}</h6>
                    </div>
                  ))}
                </div>
                <div className='d-flex align-items-center py-4'>
                  <button
                    className='button custom border-0 fw-bold text-nowrap'
                    text-nowrap
                  >
                    {buttons[0]}
                  </button>
                  <Link
                    className='mx-4 text-primary fw-bold fs-5 text-decoration-none '
                    to='/contact'
                  >
                    {buttons[1]}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl'>
            <div className='card border-0 border-top border-primary border-5 py-2 py-md-4 shadow shadow-2'>
              <div className='card-body'>
                <h3 className='card-title fw-bold'>{titles[2]}</h3>
                <div className='d-flex align-items-center h-100 py-4'>
                  <h1 className='num position-relative fw-bold text-primary'>
                    {pricing[2]}
                    <span className='position-absolute top-0 fs-5 '>$</span>
                  </h1>
                  <p className='text-secondary mx-4 fs-4 '>{kinds[2]}</p>
                </div>
                <div className='list'>
                  {benfits.map((b) => (
                    <div className='d-flex align-items-center my-3'>
                      <BsCheckLg className='text-primary ' />
                      <h6 className='text-muted mx-4'>{b}</h6>
                    </div>
                  ))}
                </div>
                <div className='d-flex align-items-center py-4'>
                  <button
                    className='button custom border-0 fw-bold text-nowrap'
                    text-nowrap
                  >
                    {buttons[0]}
                  </button>
                  <Link
                    className='mx-4 text-primary fw-bold fs-5 text-decoration-none '
                    to='/contact'
                  >
                    {buttons[1]}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection1;
