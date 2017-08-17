import React from 'react';
import { Svg } from './svg/svg';
import styled from 'styled-components';

const ExternalLinkBase = props => {
	const {
		isExternal = true,
		externalIcon = 'link-external',
		className,
	} = props;

	return isExternal ? <Svg icon={externalIcon} className={className} /> : null;
};

export const ExternalLink = styled(ExternalLinkBase)`
	height: 0.9rem;
	width: 0.9rem;
	display: inline-block;
	vertical-align: top;
	flex-shrink: 0;
`;
