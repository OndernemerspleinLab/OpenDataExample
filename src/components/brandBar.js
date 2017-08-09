// @flow

import styled from 'styled-components';
import { mq } from '../styles/utils';

const BrandBar = styled.div`
	background: ${props => props.theme.brandBarBackground};
	display: flex;
	align-items: center;
	min-height: 1.875rem;
	margin-left: 0;
	padding-left: 0;

	${mq('small')`min-height: 2.94rem;`} ${mq('large')`min-height: 3rem;`} ${mq(
			'extraExtraExtraLarge'
		)`height: 3.8rem;`};
`;

export default BrandBar;
