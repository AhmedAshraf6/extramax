import React from 'react';
import AboutSection1 from '../components/About/AboutSection1';
import AboutSection2 from '../components/About/AboutSection2';
import AboutSection3 from '../components/About/AboutSection3';
import AboutSection4 from '../components/About/AboutSection4';
import AboutSection5 from '../components/About/AboutSection5';
import GenralHeader from '../components/sharedComponent/GenralHeader';
import { useGlobalContext } from '../contexts/LangugeContextApi';
const About = () => {
  const { lang } = useGlobalContext();
  const { title, link, linkName } = lang.About;
  return (
    <>
      <GenralHeader title={title} link={link} linkName={linkName} />
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <AboutSection5 />
    </>
  );
};

export default About;
