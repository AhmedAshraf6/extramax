import React from 'react';
import AboutSection1 from '../components/About/AboutSection1';
import AboutSection2 from '../components/About/AboutSection2';
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
    </>
  );
};

export default About;
