import React from 'react';
import styled from 'styled-components';
import { articleUrl } from '../pages/main';
import { unexisty } from '../helpers/functional';
import { AnchorLink } from './link';

const ArticleWrapper = styled.div``;

const ArticleLink = styled(AnchorLink)`
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
