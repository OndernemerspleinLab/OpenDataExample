// @flow

import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { mq } from '../styles/utils';
import { Column } from './column';
import { LogoIcon } from './svg/logo';

const LogoLink = styled(Link)`
	width: fit-content;
	display: block;
`;

const LogoImg = styled(LogoIcon)`
	width: auto;
	max-width: 100%;
	display: block;

	height: 2.6rem;

	${mq('small')`
		height: 3rem;
	`};

	${mq('large')`
		height: 3.12rem;
	`};
`;

export const Logo = () =>
	<Column>
		<LogoLink to="/">
			<LogoImg alt="logo" />
		</LogoLink>
	</Column>;
