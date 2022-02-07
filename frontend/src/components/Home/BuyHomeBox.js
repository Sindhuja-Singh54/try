import React from 'react';
import reactDom from 'react-dom';
import Typography from '@mui/material/Typography';
import { Card1, Img } from '../../style/pages/HomePage/BuyHomeBoxStyled';
import useViewport from "./../../viewport";
import {BuyHomeBoxJson} from "../../json/BuyHomeBoxJson"

const BuyHomeBox = () => {
const { width, height, isMobile, isTablet } = useViewport();  
  return (
  <React.Fragment>
    <h1>Singh</h1>
    {BuyHomeBoxJson.map((item, index) =>(
       <Card1 wd={isMobile ? "100%" : "33%"}> 
				<Img>
					<img
						style={{
							width: '84px',
							height: '84px'
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
						// lineHeight="64px"
						textAlign="center"
						color="rbga(0,0,0,.8)"
					>
						{item.title}
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
			</Card1> 
      ))}

  </React.Fragment>
  );
};

export default BuyHomeBox;
