// @flow

import styled from 'styled-components';

const ReferenceLink = styled.a`
	margin: 0 6px;
	font-size: 1.1rem;

	& + & {
		margin-left: 0;
	}
`;

export default ReferenceLink;
