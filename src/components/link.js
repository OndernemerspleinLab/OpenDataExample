import React from 'react';
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

export const TextLink = props => {
	if (props.isExternal) {
		return (
			<A href={props.to} title={props.title} className={props.className}>
				{props.children}
			</A>
		);
	}

	return (
		<AnchorLink
			to={{ pathname: props.to }}
			title={props.title}
			className={props.className}
		>
			{props.children}
		</AnchorLink>
	);
};
