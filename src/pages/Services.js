import React from 'react';
import ServicesSection1 from '../components/services/ServicesSection1';
import GenralHeader from '../components/sharedComponent/GenralHeader';
import { useGlobalContext } from '../contexts/LangugeContextApi';
const Services = () => {
  const { lang } = useGlobalContext();
  const { title, link, linkName } = lang.Services;
  return (
    <>
      <GenralHeader title={title} link={link} linkName={linkName} />
      <ServicesSection1 />
    </>
  );
};

export default Services;
