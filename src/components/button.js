import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const commonButtonCss = css`
	display: block;
	padding: 6px 20px;
	text-align: center;
	border: 0;
	margin-right: 20px;
	position: relative;
	flex: 0 1 50%;
	text-decoration: none;
	font-size: 0.85em;
	line-height: 1.15;

	span {
		position: relative;
		z-index: 2;
	}
`;
export const Button = styled.button`
	${commonButtonCss}
	background-color: ${props =>
		props.primary
			? props.theme.primaryButtonBackground
			: props.theme.secondaryButtonBackground};
	cursor: pointer;
	
	&, &:hover {
		color: #fff;
	}
	
	&:hover {
		border-color: ${props =>
			props.primary
				? props.theme.primaryButtonHoverShadow
				: props.theme.secondaryButtonHoverShadow};
	}
	
	&:before {
		width: 100%;
		height: 0;
		content: '';
		background-color: ${props =>
			props.primary
				? props.theme.primaryButtonHoverBackground
				: props.theme.secondaryButtonHoverBackground};
		position: absolute;
		top: 0;
		left: 0;
		transition: height: 0.15 ease-in-out;
		z-index: 1;
	}
	
	&:hover:before {
		height: 100%;
	}
`;

export const InactiveButton = styled.span`
	${commonButtonCss};
	opacity: 0.6;
`;

export const Anchor = Button.withComponent('a');
export const StyledLink = Button.withComponent(Link);
