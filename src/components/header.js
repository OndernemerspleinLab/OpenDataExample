// @flow

import React from 'react';
import styled from 'styled-components';
import { gridContainer, layoutContainer } from '../styles/grid';
import { Logo } from './logo';
import { Payoff } from './payoff';
import BrandBar from './brandBar';
import { mq } from '../styles/utils';

const Header = styled.header`flex: none;`;

const TopHeader = styled.div`
	${layoutContainer} ${gridContainer} & {
		transition-property: padding;
		transition-duration: 400ms;
		padding-top: 1.2rem;
		padding-bottom: 1.2rem;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
		
		${mq('smallMedium')`
			padding-top: 2.4rem;
			padding-bottom: 2.4rem;
		`};
`;

const HeaderBase = () =>
	<Header>
		<TopHeader>
			<Logo />
			<Payoff>
				{'Ondernemersplein OpenData Example'}
			</Payoff>
		</TopHeader>
		<BrandBar />
	</Header>;

export default HeaderBase;
