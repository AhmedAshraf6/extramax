import React from 'react';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
import { GiProcessor } from 'react-icons/gi';
import { HiChip, HiOutlineChip } from 'react-icons/hi';
import { BsChatDots } from 'react-icons/bs';
import homeseaction31 from '../../imgs/homepage/sec31.jpg';
import homeseaction32 from '../../imgs/homepage/sec32.jpg';
const HomeSection3 = () => {
  const { lang } = useGlobalContext();
  const { head, headSpan, head2, p, conIcon1, conIcon2, conIcon3 } =
    lang.homePage.Section3;
  return (
    <section className='home-section3 mt-5'>
      <div className='container'>
        <div className='row gx-5 gy-3'>
          <div className='col-lg'>
            <div className='wrap-imgs d-flex flex-column flex-md-row text-center'>
              <div className='img mx-2 '>
                <img
                  src={homeseaction31}
                  className='w-100 one rounded '
                  alt=''
                />
              </div>
              <div className='img mx-2 '>
                <img
                  src={homeseaction32}
                  className='w-100 two rounded'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='col-lg '>
            <h1 className='fw-bold text-dark lh-base'>
              {head} <span className='text-primary'>{headSpan} </span>
              {head2}
            </h1>
            <p className='text-secondary lh-base mt-4'>{p}</p>
            <div className='row text-center mt-4 gy-2'>
              <div className='col-sm'>
                <HiChip className='text-primary icon' />
                <h5 className='fw-bold'>{conIcon1}</h5>
              </div>
              <div className='col-sm'>
                <GiProcessor className='text-primary icon' />
                <h5 className='fw-bold'>{conIcon2}</h5>
              </div>
              <div className='col-sm'>
                <BsChatDots className='text-primary icon' />
                <h5 className='fw-bold'>{conIcon3}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
