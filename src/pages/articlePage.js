// @flow

import React, { Component } from 'react';
import { getArticle } from '../api/apiCalls';
import { defaultArticle } from '../models/article';
import Article from '../components/article';
import ArticleBackLink from '../components/article-back-link';
import type { ArticleModel } from '../models/article';
import { articlesUrl } from './main';
import { getObjectPath, hasObjectPath } from '../helpers/functional';
import { LayoutContainer } from '../components/layoutContainer';
import { Column } from '../components/column';
import { ArticleLink } from '../components/article-link';

const getBackLink = (props): string =>
	hasObjectPath(props, ['location', 'query', 'backLink'])
		? getObjectPath(props, ['location', 'query', 'backLink'])
		: articlesUrl;

class ArticlePage extends Component {
	/* eslint-disable no-undef */
	state: {
		article: ArticleModel,
	};

	constructor() {
		super();

		this.state = {
			article: defaultArticle(),
		};
	}

	componentDidMount() {
		getArticle(this.props.match.params.id).then((result: ArticleModel) => {
			const stateObject = {
				article: result,
			};

			this.setState(stateObject);
		});
	}

	render() {
		return (
			<LayoutContainer>
				<Column size="twoThird">
					<ArticleBackLink backLink={getBackLink(this.props)}>
						{'Terug naar overzicht'}
					</ArticleBackLink>
					<Article article={this.state.article} />
				</Column>
				<Column size="third" sideColumn>
					<ArticleLink to={this.state.article.url} className="">
						{'Bekijk deze pagina op Ondernemersplein.nl'}
					</ArticleLink>
				</Column>
			</LayoutContainer>
		);
	}
}

export default ArticlePage;
