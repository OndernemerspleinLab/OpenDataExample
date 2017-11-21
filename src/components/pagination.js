// @flow

import React from 'react';
import styled from 'styled-components';
import { Button, InactiveButton } from './button';
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

const previousLabel = 'Vorige';
const nextLabel = 'Volgende';

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
					{previousLabel}
				</span>
			</Button>
		: <InactiveButton>
				<span>
					{previousLabel}
				</span>
			</InactiveButton>;

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
					{nextLabel}
				</span>
			</Button>
		: <InactiveButton>
				<span>
					{nextLabel}
				</span>
			</InactiveButton>;

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
