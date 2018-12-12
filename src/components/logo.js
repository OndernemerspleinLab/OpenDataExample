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
	width: 80%;
	display: block;
	margin-left: 10%;
	margin-right: 10%;

	${mq('smallMedium')`
		width: 84%;
		margin-left: 8%;
		margin-right: 8%;
	`}; 

	${mq('extraExtraLarge')`
		width: 90%;
		margin-left: 5%;
		margin-right: 5%;
	`};

	${mq('extraExtraExtraLarge')`
		width: auto;
		margin-left: 0;
		margin-right: 0;
	`};
`;

export const Logo = () =>
	<Column>
		<LogoLink to="/">
			<LogoImg alt="logo" />
		</LogoLink>
	</Column>;
