// @flow

import styled from 'styled-components';
import { A } from '../components/link';

const ReferenceLink = styled(A)`
	margin: 0 6px;
	font-size: 1.1rem;

	& + & {
		margin-left: 0;
	}
`;

export default ReferenceLink;
