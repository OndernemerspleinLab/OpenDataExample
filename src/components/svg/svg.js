// @flow

import React from 'react';
import styled from 'styled-components';
import { Logo } from '../logo';
import { Zandloper } from './zandloper';
import { ChevronRight } from './chevronRight';
import { unexisty } from '../../helpers/functional';

const icons = {
	logo: Logo,
	zandloper: Zandloper,
	'chevron-right': ChevronRight,
};

const SvgBase = (props: { icon: string }) => {
	const Icon = icons[props.icon];

	if (unexisty(Icon)) {
		return null;
	}

	return <Icon {...props} />;
};

export const Svg = styled(SvgBase)`
	display: block;
	max-width: 100%;
	height: auto;
`;
