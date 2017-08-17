// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mq } from '../styles/utils';
import { Column } from './column';
import { LogoIcon } from './svg/logo';

const LogoLink = styled(Link)`
	width: fit-content;
	display: block;
`;

const LogoImg = styled(LogoIcon)`
	max-width: 100%;
	display: block;

	width: 7.8rem;
	height: 2.6rem;

	${mq('small')`
		width: 9rem;
		height: 3rem;
	`};

	${mq('large')`
		width: 9.36rem;
		height: 3.12rem;
	`};
`;

export const Logo = () =>
	<Column>
		<LogoLink to="/">
			<LogoImg alt="logo" />
		</LogoLink>
	</Column>;
