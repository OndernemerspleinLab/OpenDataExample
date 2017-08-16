// @flow

import React, { Component } from 'react';
import { getArticle } from '../api/apiCalls';
import { defaultArticle } from '../models/article';
import Article from '../components/article';
import ArticleBackLink from '../components/article-back-link';
import { articlesUrl } from './main';
import { getObjectPath, hasObjectPath } from '../helpers/functional';
import { LayoutContainer } from '../components/layoutContainer';
import { Column } from '../components/column';
import { ArticleLink } from '../components/article-link';
import { ThemeSwitcher } from '../components/theme-switcher';
import { SectionLoading } from '../components/section-loading';
import { AsideLinkLists } from '../components/aside-linklists';
import type { ArticleModel } from '../models/article';
import type { ArticlePart } from '../models/articlePart';

const getBackLink = (props): string =>
	hasObjectPath(props, ['location', 'query', 'backLink'])
		? getObjectPath(props, ['location', 'query', 'backLink'])
		: articlesUrl;

const partToLink = (part: ArticlePart) => {
	return {
		text: part.headLine,
		url: part.url,
	};
};

const hasPartToLinkLists = (hasPart: ArticlePart[]) => {
	const wettenEnRegels = [];
	const furtherInfo = [];

	hasPart.map(item => {
		switch (item.additionalType) {
			case 'regel-nl':
			case 'wetswijziging-nl':
			case 'subsidie-nl':
			case 'page-nl':
				return wettenEnRegels.push(partToLink(item));
			default:
				return furtherInfo.push(partToLink(item));
		}
	});

	return [
		{
			text: 'Zie ook',
			links: furtherInfo,
		},
		{
			text: 'Wetten en regels',
			links: wettenEnRegels,
		},
	];
};

class ArticlePage extends Component {
	/* eslint-disable no-undef */
	state: {
		article: ArticleModel,
		loading: boolean,
		linkLists: {},
	};

	constructor() {
		super();

		this.state = {
			article: defaultArticle(),
			loading: true,
			linkLists: {},
		};
	}

	componentDidMount() {
		getArticle(this.props.match.params.id).then((result: ArticleModel) => {
			const stateObject = {
				article: result,
				loading: false,
				linkLists: hasPartToLinkLists(result.hasPart),
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
					{this.state.loading
						? <SectionLoading />
						: <Article article={this.state.article} />}
				</Column>
				<Column size="third" sideColumn>
					<AsideLinkLists linkLists={this.state.linkLists} />
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
