import styled from 'styled-components';

export const Box = styled.div`
padding: 60px 30px;
background-image: radial-gradient(circle, #fcfcfc, #f6f6f7, #f0f1f1, #eaebec, #e4e6e6);
width: 100%;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 40px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #000;
margin-bottom: 20px;
font-size: 15px;
text-decoration: none;

&:hover {
	color: black;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 18px;
color: #000;
margin-bottom: 20px;
font-weight: bold;
`;