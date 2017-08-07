import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { articleUrl } from './main';
import { unexisty } from '../helpers/functional';

const ArticleWrapper = styled.div``;

const ArticleLink = styled(Link)`
	display: block;
`;

const ArticleList = props => {
	const articles = props.articles;

	if (unexisty(articles)) {
		return null;
	}

	return (
		<ArticleWrapper>
			{articles.map((article, key) => {
				return (
					<ArticleLink
						key={key}
						to={{
							pathname: `${articleUrl}${article.identifier}`,
							query: { backLink: props.pathname },
						}}
					>
						{article.headLine}
					</ArticleLink>
				);
			})}
		</ArticleWrapper>
	);
};

export default ArticleList;
