import React from 'react';
import BuyHomeBox from '../components/Home/BuyHomeBox';
import Homebar from '../components/Home/Homebar';
import { HomeMainWrapper } from '../styled/Background';

const Home = () => {
	return (
		<React.Fragment>
			<Homebar/>
			<HomeMainWrapper>
				<BuyHomeBox />
			</HomeMainWrapper>
		</React.Fragment>
	);
};

export default Home;
