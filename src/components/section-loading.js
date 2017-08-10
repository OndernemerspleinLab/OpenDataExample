import React from 'react';
import styled from 'styled-components';
import { LoadingIndicator } from './loading-indicator';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 8rem;
`;

export const SectionLoading = () =>
	<Wrapper>
		<LoadingIndicator />
	</Wrapper>;
