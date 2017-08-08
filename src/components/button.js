import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
	background-color: ${props => props.theme.primaryButtonBackground};
	padding: 6px 20px;
	border-top: 3px solid ${props => props.theme.primaryButtonShadow};
	cursor: pointer;
	text-align: center;
	margin-right: 20px;
	position: relative;
	flex: 0 1 50%;
	
	&, &:hover {
		color: #fff;
	}
	
	&:before {
		width: 100%;
		height: 0;
		content: '';
		background-color: ${props => props.theme.primaryButtonHoverBackground};
		position: absolute;
		top: 0;
		left: 0;
		transition: height: 0.15 ease-in-out;
		z-index: 1;
	}
	
	&:hover:before {
		height: 100%;
	}
	
	span {
		position: relative;
		z-index: 2;
	}
`;

export const Anchor = Button.withComponent('a');
export const StyledLink = Button.withComponent(Link);
