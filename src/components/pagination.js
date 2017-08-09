// @flow

import React from 'react';
import styled from 'styled-components';

import { articlesUrl } from '../pages/main';
import { PaginationModel } from '../models/pagination';
import { unexisty } from '../helpers/functional';
import { InternalButtonLink } from './button-link';

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

const PreviousLink = (props: { offset: number, limit: number }) =>
	hasPreviousLink(props.offset)
		? <InternalButtonLink to={getPreviousUrl(props.offset, props.limit)}>
				{'Vorige'}
			</InternalButtonLink>
		: null;

const NextLink = (props: { offset: number, limit: number, total: number }) =>
	hasNextLink(props.offset, props.limit, props.total)
		? <InternalButtonLink to={getNextUrl(props.offset, props.limit)}>
				{'Volgende'}
			</InternalButtonLink>
		: null;

const Pagination = (props: { pagination: PaginationModel, limit: number }) => {
	const pagination: PaginationModel = props.pagination;
	const limit = props.limit;

	if (unexisty(pagination) || unexisty(limit)) {
		return null;
	}

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
