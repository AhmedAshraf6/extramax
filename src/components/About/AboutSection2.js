import React, { useState } from 'react';
import img1 from '../../imgs/about/sec21.png';
import img2 from '../../imgs/about/sec22.png';
import img3 from '../../imgs/about/sec23.png';
import img4 from '../../imgs/about/sec24.jpg';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useGlobalContext } from '../../contexts/LangugeContextApi';
const AboutSection2 = () => {
  const { lang } = useGlobalContext();
  const [counterOn, setCounterOn] = useState(false);

  const {
    cardTitles: [a, b, c],
    cardParagraph,
    num,
    numSpan,
    head1,
    headSpan,
    head2,
    progress: [pa, pb, pc],
    progressNum: [pnum1, pnum2, pnum3],
  } = lang.About.Section2;
  return (
    <section className='about-section2'>
      <div className='container'>
        {/* Start Cards */}
        <div className='row gy-3'>
          <div className='col-sm-6 col-lg'>
            {/* Card 1 */}
            <div className='card text-center border-0 py-2 py-md-5'>
              <img
                src={img1}
                className='card-img-top mx-auto mt-2 rounded-circle p-4'
                alt={a}
                style={{
                  width: '130px',
                  height: '130px',
                  backgroundColor: '#e9f1fc',
                }}
              />
              <div className='card-body'>
                <h4 className='card-title fw-bold '>{a}</h4>
                <p className='card-text lh-base mt-3 fw-light'>
                  {cardParagraph}
                </p>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            {/* Card 1 */}
            <div className='card text-center border-0 py-2 py-md-5'>
              <img
                src={img2}
                className='card-img-top mx-auto mt-2 rounded-circle p-4'
                alt={a}
                style={{
                  width: '130px',
                  height: '130px',
                  backgroundColor: '#e9f1fc',
                }}
              />
              <div className='card-body'>
                <h4 className='card-title fw-bold'>{b}</h4>
                <p className='card-text lh-base mt-3 fw-light'>
                  {cardParagraph}
                </p>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            {/* Card 1 */}
            <div className='card text-center border-0 py-2 py-md-5'>
              <img
                src={img3}
                className='card-img-top mx-auto mt-2 rounded-circle p-4'
                alt={a}
                style={{
                  width: '130px',
                  height: '130px',
                  backgroundColor: '#e9f1fc',
                }}
              />
              <div className='card-body'>
                <h4 className='card-title fw-bold'>{c}</h4>
                <p className='card-text lh-base mt-3 fw-light'>
                  {cardParagraph}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Cards */}
      </div>

      {/* Start Progress */}
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
        className='progress-section mt-5 py-3 py-md-5'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg '>
              <h1 className='text-primary fw-bold num'>{num}+</h1>
              <h5 className='text-secondary'>{numSpan}</h5>
              <h1 className='fw-bold lh-base mt-4'>
                {head1} <span className='text-primary'>{headSpan} </span>
                {head2}
              </h1>
            </div>
            <div className='col-lg'>
              <div className='main-progress mt-4 '>
                <h5 className='lh-base'>{cardParagraph}</h5>
                <div className='my-4'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <h6 className='fw-bold'>{pa}</h6>
                    <h5 className='pro-num'>
                      {counterOn && (
                        <CountUp end={pnum1} duration={2} delay={0} />
                      )}
                      %
                    </h5>
                  </div>
                  <div className='progress'>
                    <div
                      className={
                        counterOn
                          ? 'progress-bar full1'
                          : 'progress-bar nowidth'
                      }
                      role='progressbar'
                    ></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <h6 className='fw-bold'>{pb}</h6>
                    <h5 className='pro-num'>
                      {counterOn && (
                        <CountUp end={pnum2} duration={2} delay={0} />
                      )}
                      %
                    </h5>
                  </div>
                  <div className='progress'>
                    <div
                      className={
                        counterOn
                          ? 'progress-bar full2'
                          : 'progress-bar nowidth'
                      }
                      role='progressbar'
                    ></div>
                  </div>
                </div>
                <div className='my-4'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <h6 className='fw-bold'>{pc}</h6>
                    <h5 className='pro-num'>
                      {counterOn && (
                        <CountUp end={pnum3} duration={2} delay={0} />
                      )}
                      %
                    </h5>
                  </div>
                  <div className='progress'>
                    <div
                      className={
                        counterOn
                          ? 'progress-bar full3'
                          : 'progress-bar nowidth'
                      }
                      role='progressbar'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
      {/* End Progress */}
    </section>
  );
};

export default AboutSection2;
