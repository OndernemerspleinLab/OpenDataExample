// @flow

import React from 'react';
import styled from 'styled-components';
import { Button } from './button';
import {
	mediaObject,
	mediaObjectFigure,
	mediaObjectText,
} from '../styles/mediaObject';

export type FilterObject = {
	searchTerm: string,
};

const Form = styled.form``;

const SearchWrapper = styled.div`
	${mediaObject};

	max-width: 40rem;
	margin-bottom: 2rem;
	align-items: stretch;
`;

const TextInput = styled.input`
	${mediaObjectText};

	padding: 0.5rem 0 0.65rem;
	padding-left: 1rem;
	border: 1px solid #033054;
`;

const SearchButton = styled(Button)`
	${mediaObjectFigure};
`;

export const ArticleFilter = (props: { filter: FilterObject }) => {
	const filter = props.filter;

	return (
		<Form>
			<SearchWrapper>
				<TextInput
					type="search"
					name="searchInput"
					defaultValue={filter.searchTerm}
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
