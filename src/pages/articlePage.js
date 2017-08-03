// @flow

import React, { Component } from 'react';
import { getArticle } from '../api/apiCalls';
import { defaultArticle } from '../models/article';
import Article from '../components/article';
import ArticleBackLink from '../components/article-back-link';
import type { ArticleModel } from '../models/article';
import { articlesUrl } from '../components/main';
import { getObjectPath, hasObjectPath } from '../helpers/functional';

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
			<div>
				<ArticleBackLink backLink={getBackLink(this.props)}>
					Terug naar overzicht
				</ArticleBackLink>
				<Article article={this.state.article} />
			</div>
		);
	}
}

export default ArticlePage;
