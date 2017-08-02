import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PaginationModel } from '../models/articles';
import { articlesUrl } from './main';
import { buttonStyle } from '../styles/index';

const hasPreviousLink = (offset: number): boolean => offset > 0;
const hasNextLink = (offset: number, limit: number, total: number): boolean =>
	total - offset - limit > 0;

const getPreviousUrl = (offset: number, limit: number) =>
	`${articlesUrl}${offset - limit}`;
const getNextUrl = (offset: number, limit: number) => {
	const nextOffset = offset + limit;

	return `${articlesUrl}${nextOffset}`;
};

const PaginationList = styled.div`
	padding-left: 0;
	margin-top: 20px;
	display: flex;
	width: 300px;
	justify-content: space-between;
`;
const PaginationLink = styled(Link)`
	${buttonStyle}
`;

const PreviousLink = (props: { offset: number, limit: number }) =>
	hasPreviousLink(props.offset)
		? <PaginationLink to={getPreviousUrl(props.offset, props.limit)}>
				<span>Previous</span>
			</PaginationLink>
		: null;

const NextLink = (props: { offset: number, limit: number, total: number }) =>
	hasNextLink(props.offset, props.limit, props.total)
		? <PaginationLink to={getNextUrl(props.offset, props.limit)}>
				<span>Next</span>
			</PaginationLink>
		: null;

const Pagination = props => {
	const pagination: PaginationModel = props.pagination;
	const limit: number = props.limit;

	return (
		<PaginationList>
			<PreviousLink offset={pagination.offset} limit={limit} />
			<NextLink
				offset={pagination.offset}
				limit={limit}
				total={pagination.total}
			/>
		</PaginationList>
	);
};

export default Pagination;
