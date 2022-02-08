import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const Card1 = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const Head = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 1%;
`;

export const Img = styled.div`
	display: flex;
	margin: 0 10%;
	max-height: 50%;
	justify-content: center;
`;

export const HText = styled(Typography)`
font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    text-align: center;
	margin: 1%;

`;


export const PText = styled(Typography)`
font-size: 0.75rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    margin-bottom: 0.35em;
    display: block;
    font-family: Manjari;
    font-style: normal;
    font-weight: normal;
    line-height: 14px;
    /* text-align: center; */
    color: rbga(37,37,37,.6);
	margin:${(props) => props.mar};
    /* margin: 1% 10%; */
	text-align: ${(props) => props.txa};

`;