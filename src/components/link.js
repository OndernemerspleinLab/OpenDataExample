import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const A = styled.a`
	color: ${props => props.theme.linkColor};

	&:hover {
		color: ${props => props.theme.linkColorHover};
	}
`;

export const AnchorLink = A.withComponent(Link);
