// @flow

import React from 'react';
import styled from 'styled-components';
import { Button } from './button';
import { unexisty } from '../helpers/functional';

const hasPreviousLink = (offset: number): boolean => offset > 0;
const hasNextLink = (offset: number, limit: number, total: number): boolean =>
	total - offset - limit > 0;

const getPreviousOffset = (offset: number, limit: number) => offset - limit;
const getNextOffset = (offset: number, limit: number) => offset + limit;

const PaginationList = styled.div`
	padding-left: 0;
	margin-top: 20px;
	display: flex;
	width: 300px;
	justify-content: space-between;
`;

const PreviousLink = (props: {
	offset: number,
	limit: number,
	onPagination: Function,
}) =>
	hasPreviousLink(props.offset)
		? <Button
				onClick={() =>
					props.onPagination({
						offset: getPreviousOffset(props.offset, props.limit),
					})}
			>
				<span>
					{'Vorige'}
				</span>
			</Button>
		: null;

const NextLink = (props: {
	offset: number,
	limit: number,
	total: number,
	onPagination: Function,
}) =>
	hasNextLink(props.offset, props.limit, props.total)
		? <Button
				onClick={() =>
					props.onPagination({
						offset: getNextOffset(props.offset, props.limit),
					})}
			>
				<span>
					{'Volgende'}
				</span>
			</Button>
		: null;

const Pagination = (props: {
	limit: number,
	offset: number,
	total: number,
	onPagination: Function,
}) => {
	const { limit, offset, total, onPagination } = props;

	if (unexisty(total) || total <= 0) {
		return null;
	}

	return (
		<PaginationList>
			<PreviousLink
				offset={offset}
				limit={limit}
				total={total}
				onPagination={onPagination}
			/>
			<NextLink
				offset={offset}
				limit={limit}
				total={total}
				onPagination={onPagination}
			/>
		</PaginationList>
	);
};

export default Pagination;
