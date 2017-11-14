// @flow

import React from 'react';
import styled from 'styled-components';
import { gridContainer, layoutContainer } from '../styles/grid';
import { Logo } from './logo';
import { Payoff } from './payoff';
import BrandBar from './brandBar';

const Header = styled.header`flex: none;`;

const TopHeader = styled.div`
	${layoutContainer} ${gridContainer} & {
		flex-wrap: nowrap;
		align-items: flex-end;
		justify-content: space-between;
		padding-top: 0.9rem;
		padding-bottom: 0.65rem;
	}
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
