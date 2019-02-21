// @flow

import React from 'react';
import { getArticle } from '../api/apiCalls';
import { defaultArticle } from '../models/article';
import Article from '../components/article';
import ArticleBackLink from '../components/article-back-link';
import { articlesUrl, articleUrl } from '../helpers/route';
import { getObjectPath, hasObjectPath } from '../helpers/functional';
import { LayoutContainer } from '../components/layoutContainer';
import { Column } from '../components/column';
import { ArticleLink } from '../components/article-link';
import { ThemeSwitcher } from '../components/theme-switcher';
import { SectionLoading } from '../components/section-loading';
import { AsideLinkLists } from '../components/aside-linklists';
import type { ArticleModel } from '../models/article';
import { RelatedBar } from '../components/related-bar';
import type { ArticlePart } from '../models/articlePart';

const getBackLink = (props): string =>
	hasObjectPath(props, ['location', 'query', 'backLink'])
		? getObjectPath(props, ['location', 'query', 'backLink'])
		: articlesUrl;

const isExternalLink = (additionalType: string) =>
	additionalType === 'external';

const partToLink = (part: ArticlePart) => {
	const isExternal = isExternalLink(part.additionalType);

	return {
		text: part.headLine,
		url: isExternal ? part.url : `${articleUrl}/${part.identifier}`,
		isExternal,
	};
};

const getRelatedAnwsers = (isPartOf: ArticlePart[]) =>
	isPartOf
		.filter(
			(part: ArticlePart) =>
				part.partType === 'answer' &&
				part.additionalType === 'antwoordpagina-nl'
		)
		.map(partToLink);

const getLinkLists = (hasPart: ArticlePart[]) => {
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

class ArticlePage extends React.Component {
	/* eslint-disable no-undef */
	state: {
		article: ArticleModel,
		loading: boolean,
		linkLists: {}[],
	};

	constructor() {
		super();

		this.state = {
			article: defaultArticle(),
			loading: true,
			linkLists: [],
		};
	}

	componentDidMount() {
		this.fetchArticle(this.props.match.params.id);
	}

	componentWillReceiveProps(newProps: any) {
		if (newProps.match.params.id !== this.props.match.params.id) {
			this.fetchArticle(newProps.match.params.id);
		}
	}

	fetchArticle(id: number) {
		this.setState({ loading: true });

		getArticle(id).then((result: ArticleModel) => {
			const stateObject = {
				article: result,
				loading: false,
				linkLists: getLinkLists(result.hasPart),
				relatedArticles: getRelatedAnwsers(result.isPartOf),
			};

			this.setState(stateObject);
			this.forceUpdate();
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
					<RelatedBar relatedArticles={this.state.relatedArticles} />
					<AsideLinkLists linkLists={this.state.linkLists} />
					<ThemeSwitcher clickHandler={this.props.clickHandler} />
					<ArticleLink to={this.state.article.url} className="">
						{'Bekijk deze pagina op Ondernemersplein'}
					</ArticleLink>
				</Column>
			</LayoutContainer>
		);
	}
}

export default ArticlePage;
