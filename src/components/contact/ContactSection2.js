import React from 'react';
import { useGlobalContext } from '../../contexts/LangugeContextApi';

const ContactSection2 = () => {
  const { lang } = useGlobalContext();
  const { head, placeholders, button } = lang.Contact.Section2;
  return (
    <section className='contact-section2 my-5 text-center w-75 mx-auto'>
      <div className='container'>
        <h1 className='fw-bold my-4 lh-base'>{head}</h1>
        <form className='row gy-4'>
          <div className='col-md-6'>
            <input
              className='form-control form-control-lg '
              type='text'
              placeholder={placeholders[0]}
              required
            />
          </div>
          <div className='col-md-6'>
            <input
              className='form-control form-control-lg '
              type='email'
              placeholder={placeholders[1]}
              required
            />
          </div>
          <div className='col-md-6'>
            <input
              className='form-control form-control-lg '
              type='text'
              placeholder={placeholders[2]}
              required
            />
          </div>
          <div className='col-md-6'>
            <input
              className='form-control form-control-lg '
              type='text'
              placeholder={placeholders[3]}
              required
            />
          </div>
          <div className='col-12'>
            <textarea
              className='form-control'
              placeholder={placeholders[4]}
              required
              id='floatingTextarea2'
              style={{ height: '200px' }}
            ></textarea>
          </div>
          <div className='col-12'>
            <div className='button custom pointer fw-bold'>{button}</div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection2;
