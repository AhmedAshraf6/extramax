import React from 'react';
import { GoQuote } from 'react-icons/go';
import img1 from '../../imgs/homepage/sec51.jpg';
import img2 from '../../imgs/homepage/sec52.jpeg';
import img3 from '../../imgs/homepage/sec53.jpg';
import img4 from '../../imgs/homepage/sec11.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
// for animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const HomeSection5 = () => {
  const { lang, currentLang } = useGlobalContext();
  const {
    head,
    headspan,
    cardquote1,
    cardtitle1,
    cardjop1,
    cardquote2,
    cardtitle2,
    cardjop2,
    cardquote3,
    cardtitle3,
    cardjop3,
    cardquote4,
    cardtitle4,
    cardjop4,
  } = lang.homePage.Section5;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='home-section5 mt-5'>
      <div className='container'>
        <h1 className='text-center fw-bold my-5' data-aos='flip-up'>
          <span className='text-primary'>{headspan} </span>
          {head}
        </h1>
        <Swiper
          dir='ltr'
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              // width: 576,
              slidesPerView: 1,
            },
            768: {
              // width: 768,
              slidesPerView: 2,
            },
            992: {
              // width: 768,
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide className={currentLang == 'arb' ? 'dirslide' : ''}>
            <div className='box  py-5 px-4 bg-body rounded mx-1 my-1'>
              <div className='icon text-center rounded-circle py-3 px-3 w-25 mb-3'>
                <GoQuote className='quote fs-1 fw-bold text-primary' />
              </div>
              <h5 className='lh-base text-secondary'>{cardquote1}</h5>
              <div className='d-flex align-items-center mt-3'>
                <div>
                  <img
                    src={img1}
                    alt=''
                    className=' rounded-circle'
                    style={{ width: '70px', height: '70px' }}
                  />
                </div>
                <div className='content mx-3'>
                  <h5 className='fw-bold mb-0 pb-0'>{cardtitle1}</h5>
                  <span className='text-muted'>{cardjop1}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={currentLang == 'arb' ? 'dirslide' : ''}>
            <div className='box  py-5 px-4 bg-body rounded mx-1 my-1'>
              <div className='icon text-center rounded-circle py-3 px-3 w-25 mb-3'>
                <GoQuote className='quote fs-1 fw-bold text-primary' />
              </div>
              <h5 className='lh-base text-secondary'>{cardquote2}</h5>
              <div className='d-flex align-items-center mt-3'>
                <div>
                  <img
                    src={img2}
                    alt=''
                    className=' rounded-circle'
                    style={{ width: '70px', height: '70px' }}
                  />
                </div>
                <div className='content mx-3'>
                  <h5 className='fw-bold mb-0 pb-0'>{cardtitle2}</h5>
                  <span className='text-muted'>{cardjop2}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={currentLang == 'arb' ? 'dirslide' : ''}>
            <div className='box  py-5 px-4 bg-body rounded mx-1 my-1'>
              <div className='icon text-center rounded-circle py-3 px-3 w-25 mb-3'>
                <GoQuote className='quote fs-1 fw-bold text-primary' />
              </div>
              <h5 className='lh-base text-secondary'>{cardquote3}</h5>
              <div className='d-flex align-items-center mt-3'>
                <div>
                  <img
                    src={img3}
                    alt=''
                    className=' rounded-circle'
                    style={{ width: '70px', height: '70px' }}
                  />
                </div>
                <div className='content mx-3'>
                  <h5 className='fw-bold mb-0 pb-0'>{cardtitle3}</h5>
                  <span className='text-muted'>{cardjop3}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={currentLang == 'arb' ? 'dirslide' : ''}>
            <div className='box  py-5 px-4 bg-body rounded mx-1 my-1'>
              <div className='icon text-center rounded-circle py-3 px-3 w-25 mb-3'>
                <GoQuote className='quote fs-1 fw-bold text-primary' />
              </div>
              <h5 className='lh-base text-secondary'>{cardquote4}</h5>
              <div className='d-flex align-items-center mt-3'>
                <div>
                  <img
                    src={img4}
                    alt=''
                    className=' rounded-circle'
                    style={{ width: '70px', height: '70px' }}
                  />
                </div>
                <div className='content mx-3'>
                  <h5 className='fw-bold mb-0 pb-0'>{cardtitle4}</h5>
                  <span className='text-muted'>{cardjop4}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={currentLang == 'arb' ? 'dirslide' : ''}>
            <div className='box  py-5 px-4 bg-body rounded mx-1 my-1'>
              <div className='icon text-center rounded-circle py-3 px-3 w-25 mb-3'>
                <GoQuote className='quote fs-1 fw-bold text-primary' />
              </div>
              <h5 className='lh-base text-secondary'>{cardquote1}</h5>
              <div className='d-flex align-items-center mt-3'>
                <div>
                  <img
                    src={img1}
                    alt=''
                    className=' rounded-circle'
                    style={{ width: '70px', height: '70px' }}
                  />
                </div>
                <div className='content mx-3'>
                  <h5 className='fw-bold mb-0 pb-0'>{cardtitle1}</h5>
                  <span className='text-muted'>{cardjop1}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSection5;
