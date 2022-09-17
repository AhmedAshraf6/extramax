import React from 'react';
import PricingSection1 from '../components/pricing/PricingSection1';
import GenralHeader from '../components/sharedComponent/GenralHeader';
import { useGlobalContext } from '../contexts/LangugeContextApi';
const Pricing = () => {
  const { lang } = useGlobalContext();
  const { title, link, linkName } = lang.Pricing;
  return (
    <>
      <GenralHeader title={title} link={link} linkName={linkName} />
      <PricingSection1 />
    </>
  );
};

export default Pricing;
