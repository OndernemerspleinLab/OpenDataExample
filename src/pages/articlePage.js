// @flow

import React, { Component } from 'react';
import { getArticle } from '../api/apiCalls';
import type { Article } from '../models/article';

const addHtmlKey = (htmlString: string): {} => {
	return { __html: htmlString };
};

class ArticlePage extends Component<void, void, State> {
	constructor() {
		super();

		this.state = {
			article: {},
			articleBody: {},
		};
	}

	componentDidMount() {
		getArticle(this.props.match.params.id).then((result: Article) => {
			const articleObject = { article: result, articleBody: {} };
			articleObject.articleBody = addHtmlKey(result.articleBody);

			this.setState(articleObject);
		});
	}

	render() {
		return (
			<div>
				<h1>
					{this.state.article.headLine}
				</h1>
				<div dangerouslySetInnerHTML={this.state.article.articleBody} />
			</div>
		);
	}
}

export default ArticlePage;
