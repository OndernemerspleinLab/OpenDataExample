// @flow

import React from 'react';
import styled from 'styled-components';
import { Svg } from './svg/svg';
import { AnchorLink } from './link';

const InterfaceLinkBase = styled(AnchorLink)``;

const InterfaceLinkText = styled.span`
	flex: 1 1 auto;
	color: inherit;
	line-height: inherit;
`;

const InterfaceLinkIcon = styled(Svg)`
	width: 1rem;
	flex: 0 0 auto;
	margin-right: 0.9rem;
	display: inline-block;
`;

export const InterfaceLink = (props: {
	children?: Element | string,
	icon: string,
	url: string,
}) => {
	return (
		<InterfaceLinkBase to={props.url}>
			<InterfaceLinkIcon icon={props.icon} />
			<InterfaceLinkText>
				{props.children}
			</InterfaceLinkText>
		</InterfaceLinkBase>
	);
};
