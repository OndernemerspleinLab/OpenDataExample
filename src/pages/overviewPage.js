// @flow

import React from 'react';

import { getArticles } from '../api/apiCalls';
import type {
	ArticlesModel,
	ArticleReference,
	PaginationModel,
} from '../models/articles';
import { defaultPagination } from '../models/articles';
import ArticleList from '../components/article-list';
import Pagination from '../components/pagination';
import { getObjectPath } from '../helpers/functional';

const articlesPerPage = 20;

class OverviewPage extends React.Component {
	/* eslint-disable no-undef */
	state: {
		articles: ArticleReference[],
		pagination: PaginationModel,
	};

	constructor() {
		super();
		this.state = {
			articles: [],
			pagination: defaultPagination,
		};
	}

	componentWillReceiveProps(newProps: any) {
		if (newProps.match.params.offset !== this.props.match.params.offset) {
			getArticles(
				newProps.match.params.offset
			).then((result: ArticlesModel) => {
				this.setState({
					articles: result.articles,
					pagination: result.pagination,
				});
			});
		}
	}

	componentDidMount() {
		getArticles(
			this.props.match.params.offset
		).then((result: ArticlesModel) => {
			this.setState({
				articles: result.articles,
				pagination: result.pagination,
			});
		});
	}

	render() {
		return (
			<div>
				<h1>
					{'Overview'}
				</h1>

				<ArticleList
					articles={this.state.articles}
					pathname={getObjectPath(this.props, ['location', 'pathname'])}
				/>
				<Pagination
					pagination={this.state.pagination}
					limit={articlesPerPage}
				/>
			</div>
		);
	}
}

export default OverviewPage;
