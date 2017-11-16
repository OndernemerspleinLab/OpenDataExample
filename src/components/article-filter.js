// @flow

import React from 'react';
import styled from 'styled-components';
import { Button } from './button';
import { mediaObject, mediaObjectFigure } from '../styles/mediaObject';
import { SearchBox } from './searchBox';

export type FilterObject = {
	searchTerm: string,
};

export const searchInputId = 'searchInput';

const Form = styled.form``;

const SearchWrapper = styled.div`
	${mediaObject};

	max-width: 40rem;
	margin: 2rem 0;
	align-items: stretch;
`;

const SearchButton = styled(Button)`
	${mediaObjectFigure};
`;

export const ArticleFilter = (props: {
	filter: FilterObject,
	handleSubmit: Function,
	handleChange: Function,
}) => {
	const { filter, handleSubmit, handleChange } = props;

	return (
		<Form onSubmit={handleSubmit}>
			<SearchWrapper>
				<SearchBox
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
		</Form>
	);
};
