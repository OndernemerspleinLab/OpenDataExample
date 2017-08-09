// @flow

import React from 'react';
import styled from 'styled-components';
import { mq } from '../styles/utils';
import { calcColumnWidth } from '../styles/grid';
import { grijs } from '../styles/colors';

const PayoffWrapper = styled.div`
	padding-left: 0.5rem;
	flex: 0 0 auto;

	${mq('mediumLarge')`
		width: ${calcColumnWidth(1 / 3)};
	`};
`;

const PayoffText = styled.p`
	margin: 0 0 0.1rem 0;
	text-align: left;
	color: ${grijs.grijs6};
	font-style: italic;
	line-height: 1.2;

	${mq('small', 'lesser')`font-size: 0.75rem`};
`;

export const Payoff = (props: { children: Element }) =>
	<PayoffWrapper>
		<PayoffText>
			{props.children}
		</PayoffText>
	</PayoffWrapper>;
