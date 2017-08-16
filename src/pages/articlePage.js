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
import { ThemeSwitcher } from '../components/theme-switcher';
import { SectionLoading } from '../components/section-loading';
import { AsideLinkLists } from '../components/aside-linklists';

const getBackLink = (props): string =>
	hasObjectPath(props, ['location', 'query', 'backLink'])
		? getObjectPath(props, ['location', 'query', 'backLink'])
		: articlesUrl;

class ArticlePage extends Component {
	/* eslint-disable no-undef */
	state: {
		article: ArticleModel,
		loading: boolean,
	};

	constructor() {
		super();

		this.state = {
			article: defaultArticle(),
			loading: true,
		};
	}

	componentDidMount() {
		getArticle(this.props.match.params.id).then((result: ArticleModel) => {
			const stateObject = {
				article: result,
				loading: false,
			};

			this.setState(stateObject);
		});
	}

	render() {
		const linkLists = [
			{
				text: 'test 1',
				links: [{ text: 'test' }, { text: 'test' }, { text: 'test' }],
			},
			{
				text: 'test 2',
				links: [{ text: 'test' }, { text: 'test' }, { text: 'test' }],
			},
		];

		return (
			<LayoutContainer>
				<Column size="twoThird">
					<ArticleBackLink backLink={getBackLink(this.props)}>
						{'Terug naar overzicht'}
					</ArticleBackLink>
					{this.state.loading
						? <SectionLoading />
						: <Article article={this.state.article} />}
				</Column>
				<Column size="third" sideColumn>
					<AsideLinkLists linkLists={linkLists} />
					<ThemeSwitcher clickHandler={this.props.clickHandler} />
					<ArticleLink to={this.state.article.url} className="">
						{'Bekijk deze pagina op Ondernemersplein.nl'}
					</ArticleLink>
				</Column>
			</LayoutContainer>
		);
	}
}

export default ArticlePage;
