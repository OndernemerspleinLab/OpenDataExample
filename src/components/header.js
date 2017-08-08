// @flow

import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';
import { Col, Container, Row } from 'muicss/react';
import { Link } from 'react-router-dom';

const Header = styled.header`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
	padding: 18px 0 13px;
`;

const LogoLink = styled(Link)`
	width: 187px;
	height: 62px;
	flex: 0 1 auto;
`;

const Img = styled.img``;

const Logo = () =>
	<LogoLink to="/">
		<Img src={logo} alt="logo" />
	</LogoLink>;

const Payoff = styled.div`
	flex: 0 0 auto;
	color: dimgray;
	font-style: italic,
	margin-bottom: 2px;
	line-height: 1.2;
	font-size: 16px;
`;

const HeaderBase = () =>
	<Container>
		<Row>
			<Col md="12">
				<Header>
					<Logo />
					<Payoff>Ondernemersplein OpenData Example</Payoff>
				</Header>
			</Col>
		</Row>
	</Container>;

export default HeaderBase;
