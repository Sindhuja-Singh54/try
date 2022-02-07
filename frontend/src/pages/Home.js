import React from 'react';
import BuyHomeBox from '../components/Home/BuyHomeBox';
import Homebar from '../components/Home/Homebar';
import HomeBuyCard from '../components/Home/HomeBuyCard';

const Home = () => {
  return (
  <React.Fragment>
      <Homebar/>
      {/* <HomeBuyCard/> */}
      <BuyHomeBox/>
  </React.Fragment>
  );
};

export default Home;

