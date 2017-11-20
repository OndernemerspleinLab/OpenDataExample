import React from 'react';
import styled from 'styled-components';
import { articleUrl } from '../pages/main';
import { unexisty } from '../helpers/functional';
import { AnchorLink } from './link';
import Pagination from './pagination';
import { grijs } from '../styles/colors';
import parse from 'date-fns/parse';
import { formatDate } from '../helpers/date';

const articlesPerPage = 20;
const ArticleWrapper = styled.div``;

const ArticleEntryWrapper = styled.div`display: flex;`;

const Identifier = styled.span`
	font-size: 0.7rem;
	margin-right: 1rem;
	padding-top: 4px;
	color: ${grijs.default};
`;

const ArticleLink = styled(AnchorLink)`
`;

const StyledModified = styled.span`
	font-size: 0.7rem;
	margin-left: 0.5rem;
	padding-top: 4px;
	color: ${grijs.default};
`;

const Modified = ({ children }) => {
	const date = parse(children);

	const formattedDate = formatDate(date);

	return (
		<StyledModified>
			{formattedDate}
		</StyledModified>
	);
};

const ArticleEntry = props => {
	const { identifier, headLine, dateModified } = props.article;

	return (
		<ArticleEntryWrapper>
			<Identifier>
				{identifier}
			</Identifier>
			<ArticleLink
				to={{
					pathname: `${articleUrl}${identifier}`,
					query: { backLink: props.pathname },
				}}
			>
				{headLine}
			</ArticleLink>
			<Modified>
				{dateModified}
			</Modified>
		</ArticleEntryWrapper>
	);
};

const ArticleList = props => {
	const { articles, pagination } = props.articles;

	if (unexisty(articles)) {
		return null;
	}

	return (
		<ArticleWrapper>
			{articles.map((article, key) => {
				return (
					<ArticleEntry key={key} article={article} pathname={props.pathname} />
				);
			})}
			<Pagination pagination={pagination} limit={articlesPerPage} />
		</ArticleWrapper>
	);
};

export default ArticleList;
