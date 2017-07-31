// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../api/apiCalls';
import type { Articles } from '../models/articles';

class OverviewPage extends Component<void, void, State> {
	constructor() {
		super();

		this.state = {
			articles: [],
		};
	}

	componentDidMount() {
		getArticles().then((result: Articles) => {
			this.setState({ articles: result.articles });
		});
	}

	render() {
		return (
			<div>
				<h1>
					{'Overview'}
				</h1>

				{this.state.articles.map((article, key) => {
					return (
						<div key={key}>
							<Link to={`/artikel/${article.identifier}`}>
								{article.headLine}
							</Link>
						</div>
					);
				})}
			</div>
		);
	}
}

export default OverviewPage;
