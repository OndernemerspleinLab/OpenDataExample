// @flow
import React from 'react';
import styled from 'styled-components';
import type { ArticleModel } from '../models/article';
import type { AuthorModel } from '../models/author';
import { hemelblauw } from '../styles/colors';
import { fixIframes } from './iFrame';

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
	font-size: 0.875rem;
`;

const Intro = styled.div`
	font-size: 1.2rem;
	margin-bottom: 1.2rem;
	color: ${hemelblauw.darkest};
	font-style: italic;
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
	const fixedArticleBody = fixIframes(article.articleBody);
	const articleBody = addHtmlKey(fixedArticleBody);

	return (
		<article>
			<header>
				<ArticleTitle>
					{article.headLine}
				</ArticleTitle>
				<InfoText author={article.author[0]} />
			</header>
			<Intro>
				{article.about}
			</Intro>
			<div dangerouslySetInnerHTML={articleBody} ref={fixIframes} />
		</article>
	);
};

export default Article;
