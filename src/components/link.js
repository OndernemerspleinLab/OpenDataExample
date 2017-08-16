import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { themeVariable } from '../helpers/styled-component-helpers';

export const A = styled.a`
	color: ${themeVariable('linkColor')};
	fill: ${themeVariable('linkColor')};
	text-decoration: none;

	&:hover {
		color: ${themeVariable('linkColorHover')};
		text-decoration: underline;
	}
`;

export const AnchorLink = A.withComponent(Link);
