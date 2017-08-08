import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'muicss/react';

const MarginContainer = styled(Container)`
	margin-top: 20px;
`;

export const PreContent = props =>
	<MarginContainer>
		<Row>
			<Col md="12">
				{props.children}
			</Col>
		</Row>
	</MarginContainer>;
