// @flow

import React from 'react';
import styled from 'styled-components';
import { A } from '../components/link';
import { existy } from '../helpers/functional';

const ReferenceLinkStyled = styled(A)`
	margin: 0 6px;

	& + & {
		margin-left: 0;
	}
`;

export const ReferenceLink = props =>
	existy(props.href) && existy(props.children)
		? <ReferenceLinkStyled {...props} />
		: null;
