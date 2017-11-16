// @flow

import React from 'react';
import styled from 'styled-components';
import { Button } from './button';
import { mediaObject, mediaObjectFigure } from '../styles/mediaObject';
import { SearchInput } from './searchInput';
import { SearchSelect } from './searchSelect';

export type FilterObject = {
	searchTerm: string,
};

export const searchInputId = 'searchInput';

const Form = styled.form``;

const ArticleFilterWrapper = styled.div`
	margin: 2rem 0;
	max-width: 40rem;
	display: flex;
	flex-wrap: wrap;
`;

const SearchWrapper = styled.div`
	${mediaObject};

	align-items: stretch;
	flex: 1 1 auto;
	margin-bottom: 1rem;
`;

const SearchButton = styled(Button)`
	${mediaObjectFigure};
`;

const FilterWrapper = styled.div`
	flex: 0 1 auto;
	margin-bottom: 1rem;
`;

export const ArticleFilter = (props: {
	filter: FilterObject,
	handleSubmit: Function,
	handleChange: Function,
	filterOptions: Object,
}) => {
	const { filter, handleSubmit, handleChange, filterOptions } = props;
	const { sortFilter, directionFilter } = filterOptions;

	return (
		<Form onSubmit={handleSubmit}>
			<ArticleFilterWrapper>
				<SearchWrapper>
					<SearchInput
						id={searchInputId}
						name="searchInput"
						value={filter.searchTerm}
						handleSearch={handleChange}
					/>
					<SearchButton>
						<span>
							{'Zoek'}
						</span>
					</SearchButton>
				</SearchWrapper>
				<FilterWrapper>
					<SearchSelect
						name="sortField"
						handleSelect={handleChange}
						options={sortFilter}
					/>
					<SearchSelect
						name="sortDirection"
						handleSelect={handleChange}
						options={directionFilter}
					/>
				</FilterWrapper>
			</ArticleFilterWrapper>
		</Form>
	);
};
