// @flow

import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';
import { Col, Container, Row } from 'muicss/react';

const Header = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Img = styled.img`margin-bottom: 16px;`;

const Title = styled.div`
	flex: 1 1 0;
	font-size: 26px;
`;

const Payoff = styled.div`flex: 1 1 0;`;

const HeaderBase = () =>
	<Container>
		<Row>
			<Col md="12">
				<Header>
					<Title>Ondernemersplein OpenData Example</Title>
					<Img src={logo} alt="logo" />
					<Payoff />
				</Header>
			</Col>
		</Row>
	</Container>;

export default HeaderBase;
