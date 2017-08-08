import React from 'react';
import { Anchor, StyledLink } from './button';

export const InternalButtonLink = props => {
	return (
		<StyledLink to={props.to} className={props.className}>
			<span>
				{props.children}
			</span>
		</StyledLink>
	);
};

export const ExternalButtonLink = props => {
	return (
		<Anchor href={props.to} className={props.className}>
			<span>
				{props.children}
			</span>
		</Anchor>
	);
};
