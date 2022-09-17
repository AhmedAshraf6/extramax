import React from 'react';
import ContactSection1 from '../components/contact/ContactSection1';
import ContactSection2 from '../components/contact/ContactSection2';
import GenralHeader from '../components/sharedComponent/GenralHeader';
import { useGlobalContext } from '../contexts/LangugeContextApi';
const Contact = () => {
  const { lang } = useGlobalContext();
  const { title, link, linkName } = lang.Contact;
  return (
    <>
      <GenralHeader title={title} link={link} linkName={linkName} />
      <ContactSection1 />
      <ContactSection2 />
    </>
  );
};

export default Contact;
