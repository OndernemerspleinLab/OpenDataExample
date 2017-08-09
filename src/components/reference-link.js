// @flow

import styled from 'styled-components';
import { A } from '../components/link';

const ReferenceLink = styled(A)`
	margin: 0 6px;

	& + & {
		margin-left: 0;
	}
`;

export default ReferenceLink;
