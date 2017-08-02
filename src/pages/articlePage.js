// @flow

import React, { Component } from 'react';
import { getArticle } from '../api/apiCalls';
import { defaultArticle } from '../models/article';
import Article from '../components/article';
import type { ArticleModel } from '../models/article';

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
			const articleObject = { article: result };

			this.setState(articleObject);
		});
	}

	render() {
		return <Article article={this.state.article} />;
	}
}

export default ArticlePage;
