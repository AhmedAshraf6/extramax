import React from 'react';
import HomeHeader from '../components/home/HomeHeader';
import HomeSection1 from '../components/home/HomeSection1';
import HomeSection2 from '../components/home/HomeSection2';
import HomeSection3 from '../components/home/HomeSection3';
import HomeSection4 from '../components/home/HomeSection4';
import HomeSection5 from '../components/home/HomeSection5';
import HomeSection6 from '../components/home/HomeSection6';
import { useEffect } from 'react';
import { useGlobalContext } from '../contexts/LangugeContextApi';
import HomeSection7 from '../components/home/HomeSection7';
const Home = () => {
  // const { loading, loadingStatusFunc } = useGlobalContext();
  // useEffect(() => {
  //   loadingStatusFunc(true);
  //   setTimeout(() => {
  //     loadingStatusFunc(false);
  //   }, 7000);
  // }, []);
  return (
    <div className='home  '>
      <HomeHeader />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
    </div>
  );
};

export default Home;

//  {
//    loading ? (
//      <div class='spinner-grow text-dark' role='status'>
//        <span class='visually-hidden'>Loading...</span>
//      </div>
//    ) : (
//      <>
//        <HomeHeader />
//        <HomeSection1 />
//        <HomeSection2 />
//        <HomeSection3 />
//        <HomeSection4 />
//        <HomeSection5 />
//        <HomeSection6 />
//      </>
//    );
//  }
