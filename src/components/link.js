import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const A = styled.a`
	color: ${props => props.theme.linkColor};
	text-decoration: none;

	&:hover {
		color: ${props => props.theme.linkColorHover};
		text-decoration: underline;
	}
`;

export const AnchorLink = A.withComponent(Link);
