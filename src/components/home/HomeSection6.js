import React from 'react';
import { BsChatLeftQuote } from 'react-icons/bs';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
const HomeSection6 = () => {
  const { lang, currentLang } = useGlobalContext();
  const { head, call, num } = lang.homePage.Section6;
  return (
    <section className='home-section6 py-5 mt-5'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-lg-7'>
            <div className='d-flex flex-column flex-sm-row align-items-center'>
              <BsChatLeftQuote className='icon text-primary' />
              <h1 className='mx-4 my-3 lh-base text-light '>{head}</h1>
            </div>
          </div>
          <div className='col-lg-5'>
            <h5 className='text-light text-center fw-bold'>{call}</h5>
            <button className='btn button custom btn-block mx-auto w-50 d-block mt-3'>
              {num}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection6;
