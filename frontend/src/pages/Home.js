import React from 'react';
import Homebar from '../components/Home/Homebar';
import HomeBuyCard from '../components/Home/HomeBuyCard';

const Home = () => {
  return (
  <React.Fragment>
      <Homebar/>
      <div>
        <HomeBuyCard/>
      </div>
  </React.Fragment>
  );
};

export default Home;

