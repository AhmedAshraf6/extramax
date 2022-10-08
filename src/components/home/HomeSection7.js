import React from 'react';
import mainImage from '../../imgs/homepage/faq-1.png';
import { useGlobalContext } from '../../contexts/LangugeContextApi';

const HomeSection7 = () => {
  const { lang, currentLang } = useGlobalContext();
  const { faq, questions } = lang.homePage.Section7;
  return (
    <section className='home-section7 py-3 py-md-5 mt-5'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-lg-4'>
            <div className='d-flex align-items-start'>
              <img src={mainImage} alt='image' />
              <h1 className='mx-4 lh-base text-secondary'>{faq}</h1>
            </div>
          </div>
          <div className='col-lg-8'>
            <div
              className='accordion accordion-flush'
              id='accordionFlushExample'
            >
              {questions.map((quest, index) => (
                <div className='accordion-item' key={index}>
                  <h2
                    className='accordion-header'
                    id={`flush-heading${quest.arrange}`}
                  >
                    <button
                      className={
                        currentLang == 'arb'
                          ? 'accordion-button collapsed d-flex align-items-center fs-3 fw-bold custom-icon'
                          : 'accordion-button collapsed d-flex align-items-center fs-3 fw-bold'
                      }
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target={`#flush-collapse${quest.arrange}`}
                      aria-controls={`flush-collapse${quest.arrange}`}
                      aria-expanded='false'
                    >
                      <span className='fs-5 number p-2 rounded-circle fw-normal'>
                        {quest.num}
                      </span>
                      <span className='mx-4'> {quest.title}</span>
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${quest.arrange}`}
                    className='accordion-collapse collapse lh-base fs-5'
                    aria-labelledby={`flush-heading${quest.arrange}`}
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>{quest.paragraph}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className='accordion accordion-flush' id='accordionExample'>
              {questions.map((quest) => (
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button  d-flex align-items-center fs-3 fw-bold'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      <span className='fs-5 number p-2 rounded-circle fw-normal'>
                        {quest.num}
                      </span>
                      <span className='mx-4'> {quest.title}</span>
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>{quest.paragraph}</div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection7;
