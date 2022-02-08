import React from 'react';
import BuyHomeBox from '../components/Home/BuyHomeBox';
import Homebar from '../components/Home/Homebar';
import HomeBuyCard from '../components/Home/HomeBuyCard';
import { HomeMainWrapper } from '../styled/Background';

const Home = () => {
	return (
		<React.Fragment>
			<Homebar />
			{/* <HomeBuyCard/> */}
			<HomeMainWrapper>
				<BuyHomeBox />
			</HomeMainWrapper>
		</React.Fragment>
	);
};

export default Home;
