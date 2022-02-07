import React from 'react';
import { BuyHomeBoxJson } from '../../jons/Home/BuyHomeBoxjson';
import useViewport from '../../viewport/useViewport';
import { Card1, Img } from '../../styled/Home/BuyBoxstyled';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const BuyHomeBox = () => {
	const { width, height, isMobile, isTablet } = useViewport();
	return (
		<React.Fragment>
			<Card1>
				{BuyHomeBoxJson.map((item, index) => (
					<Card style={{ width: isMobile ? '100%' : '30%', margin:"1%" }}>
						<Img>
							<img
								style={{
									width: '200px'
								}}
								src={item.imageURL}
							/>
						</Img>
						<div>
							<Typography
								variant="h6"
								gutterBottom
								component="div"
								fontFamily="Montserrat"
								fontStyle="normal"
								fontWeight="bold"
								textAlign="center"
								color="rbga(0,0,0,.8)"
							>
								{item.title}
							</Typography>
							<Typography
								variant="h6"
								gutterBottom
								component="div"
								fontFamily="Montserrat"
								fontStyle="normal"
								fontWeight="bold"
								textAlign="center"
								color="rbga(0,0,0,.8)"
							>
								{item.price}
							</Typography>
							<Typography
								variant="caption"
								display="block"
								gutterBottom
								fontFamily="Manjari"
								fontStyle="normal"
								fontWeight="normal"
								lineHeight="14px"
								textAlign="center"
								color="rbga(37,37,37,.6)"
							>
								{item.heading}
							</Typography>
						</div>
					</Card>
				))}
			</Card1>
		</React.Fragment>
		// ))
	);
};

export default BuyHomeBox;
