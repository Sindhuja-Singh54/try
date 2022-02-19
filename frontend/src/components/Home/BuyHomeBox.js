import React from 'react';
import { BuyHomeBoxJson } from '../../jons/Home/BuyHomeBoxjson';
import useViewport from '../../viewport/useViewport';
import { Card1, Head, HText, Img, PText } from '../../styled/Home/BuyBoxstyled';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const BuyHomeBox = () => {
	const { width, height, isMobile, isTablet } = useViewport();
	return (
		<React.Fragment>
			<Card1>
				{BuyHomeBoxJson.map((item, index) => (
					<Card style={{ width: isMobile ? '100%' : '30%', margin: '1%', height: '365px' }}>
						<Head>
							<HText>{item.user}</HText>

							<IconButton aria-label="add to favorites">
								<FavoriteIcon />
							</IconButton>
						</Head>
						<Img>
							<img
								style={{
									width: '100%'
									// height: "200px"
								}}
								src={item.imageURL}
							/>
						</Img>
						<div>
							<HText>{item.title}</HText>
							<HText>{item.price}</HText>
							<PText mar={"1% 10%"} txa={"left"}>{item.heading}</PText>
							<PText mar={"1% 5%"} txa={"right"}>{item.time}</PText>
						</div>
					</Card>
				))}
			</Card1>
		</React.Fragment>
		// ))
	);
};

export default BuyHomeBox;
