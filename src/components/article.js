// @flow
import React from 'react';
import styled from 'styled-components';
import type { ArticleModel } from '../models/article';
import type { AuthorModel } from '../models/author';
import { ExternalButtonLink } from './button-link';

const addHtmlKey = (htmlString: ?string = ''): {} => {
	return { __html: htmlString };
};

type Props = {
	article: ArticleModel,
};

const ArticleTitle = styled.h1`margin-bottom: 10px;`;

const Author = styled.p`
	margin-bottom: 10px;
	color: dimgray;
	font-style: italic;
`;

const Intro = styled.div`
	font-size: 18px;
	margin-bottom: 34px;
`;

const ArticleLink = styled(ExternalButtonLink)`
	margin-top: 8px;
	float: right;
`;

const InfoText = (props: { author: AuthorModel }) => {
	if (!props.author) {
		return null;
	}

	return (
		<Author>
			{'Deze informatie is geplaatst door: '}
			{props.author.name}
		</Author>
	);
};

const Article = (props: Props) => {
	const article = props.article;
	const articleBody = addHtmlKey(article.articleBody);

	return (
		<article>
			<header>
				<ArticleLink to={article.url} className="">
					Bekijk deze pagina op Ondernemersplein.nl
				</ArticleLink>
				<ArticleTitle>
					{article.headLine}
				</ArticleTitle>
				<InfoText author={article.author[0]} />
			</header>
			<Intro>
				{article.about}
			</Intro>
			<div dangerouslySetInnerHTML={articleBody} />
		</article>
	);
};

export default Article;
