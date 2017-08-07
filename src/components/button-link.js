import React from 'react';
import styled from 'styled-components';
import { buttonStyle } from '../styles/index';
import { Link } from 'react-router-dom';

const InternalButtonLinkBase = props => {
	return (
		<Link to={props.to} className={props.className}>
			<span>
				{props.children}
			</span>
		</Link>
	);
};

const ExternalButtonLinkBase = props => {
	return (
		<a href={props.to} className={props.className}>
			<span>
				{props.children}
			</span>
		</a>
	);
};

export const ExternalButtonLink = styled(ExternalButtonLinkBase)`
	${buttonStyle}
`;

export const InternalButtonLink = styled(InternalButtonLinkBase)`
	${buttonStyle}
`;
