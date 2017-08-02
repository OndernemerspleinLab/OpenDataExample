import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export const baseStyles = () => injectGlobal`
	${styledNormalize}
	
	* {
		box-sizing: border-box;
	}
	
	body {
		line-height: 1.6;
		padding-bottom: 100px;
	}
`;

export const buttonStyle = () => `
	background-color: #a90061;
	padding: 6px 20px;
	borde-top: 3px solid #85004d;
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
		background-color: #85004d;
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
