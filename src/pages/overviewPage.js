import React from 'react';

import {
	articlesEndpoint,
	eventsEndpoint,
	getArticles,
	getSubsidies,
	subsidiesEndpoint,
	getEvents,
	webinarEndpoint,
	getWebinars,
} from '../api/apiCalls';
import ArticleList from '../components/article-list';
import { getObjectPath, shallowEqual } from '../helpers/functional';
import { LayoutContainer } from '../components/layoutContainer';
import { Column } from '../components/column';
import { ThemeSwitcher } from '../components/theme-switcher';
import { SectionLoading } from '../components/section-loading';
import { ArticleFilter } from '../components/article-filter';
import { SearchResult } from '../components/searchResult';
import { formatDate } from '../helpers/date';
import { updatePath, getFilterFromParams } from '../helpers/route';
import { SupplyTypeList } from '../components/supplyTypeList';
import type { ArticleType } from '../models/article-type';

const getTotal = statePart => getObjectPath(statePart, ['pagination', 'total']);

const getOrderQuery = props => {
	const { sort = 'modified', direction = 'desc' } = props;

	return `${sort}:${direction}`;
};

const filterOptions = {
	directionFilter: [
		{ title: 'Wijzigingsdatum aflopend', value: 'desc' },
		{ title: 'Wijzigingsdatum oplopend', value: 'asc' },
	],
};

const articleTypes = [
	{ value: 'antwoordpagina-nl', label: "Antwoordpagina's" },
	{ value: 'artikel-nl', label: 'Artikelen' },
	{ value: 'regel-nl', label: 'Regels' },
	{ value: 'wetswijziging-nl', label: 'Wetswijzigingen' },
	{ value: 'subsidie-nl', label: 'Subsidies' },
	{ value: 'webinar-nl', label: 'Webinars' },
];

const getTitleFromArticleType = (target: ArticleType): string =>
	articleTypes.find(type => type.value === target).label;

const getArticleTitle = (types: ArticleType[]): string => {
	return types.map(value => getTitleFromArticleType(value)).join(` en `);
};

const createSupplyList = ({
	totalArticles,
	totalEvents,
	totalSubsidies,
	totalWebinars,
}) => [
	{
		title: `Aantal antwoordpagina’s`,
		quantity: totalArticles,
		apiUrl: `${articlesEndpoint}?type=antwoordpagina-nl`,
		apiTitle: 'API Endpoint',
	},
	{
		title: 'Aantal evenementen',
		quantity: totalEvents,
		apiUrl: `${eventsEndpoint}`,
		apiTitle: 'API Endpoint',
		referenceTitle: 'Bekijk op ondernemersplein.kvk.nl',
		referenceUrl: 'https://ondernemersplein.kvk.nl/evenementen/',
	},
	{
		title: 'Aantal subsidies',
		quantity: totalSubsidies,
		apiUrl: `${subsidiesEndpoint}`,
		apiTitle: 'API Endpoint',
		referenceTitle: 'Bekijk op ondernemersplein.kvk.nl',
		referenceUrl: 'https://ondernemersplein.kvk.nl/subsidies-en-regelingen/',
	},
	{
		title: 'Aantal webinars',
		quantity: totalWebinars,
		apiUrl: `${webinarEndpoint}`,
		apiTitle: 'API Endpoint',
		referenceTitle: 'Bekijk op ondernemersplein.kvk.nl',
		referenceUrl: 'https://ondernemersplein.kvk.nl/webinars-en-videos/',
	},
];

class OverviewPage extends React.Component {
	constructor() {
		super();
		this.state = {
			articles: {},
			totalArticles: 0,
			totalEvents: 0,
			totalSubsidies: 0,
			loading: true,
		};
		this.handleSearchArticles = this.handleSearchArticles.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const nextParams = getFilterFromParams(nextProps.match.params);
		const lastParams = getFilterFromParams(this.props.match.params);

		if (shallowEqual(lastParams, nextParams)) {
			return;
		}

		this.fetchArticles(nextParams);
	}

	componentDidMount() {
		const {
			searchTerm,
			sortField,
			sortDirection,
			searchType,
			offset,
		} = getFilterFromParams(this.props.match.params);
		const order = getOrderQuery({ sort: sortField, direction: sortDirection });
		const articlesPromise = getArticles({
			offset,
			search: searchTerm,
			order,
			type: searchType,
		});
		const articlesCompletePromise = getArticles({});
		const eventsPromise = getEvents();
		const subsidiesPromise = getSubsidies();
		const webinarsPromise = getWebinars();

		Promise.all([
			articlesPromise,
			articlesCompletePromise,
			eventsPromise,
			subsidiesPromise,
			webinarsPromise,
		]).then(result => {
			const [articles, articlesComplete, events, subsidies, webinars] = result;

			const supplyList = createSupplyList({
				totalArticles: getTotal(articlesComplete),
				totalEvents: getTotal(events),
				totalSubsidies: getTotal(subsidies),
				totalWebinars: getTotal(webinars),
			});

			this.setState({
				articles,
				supplyList,
				loading: false,
			});
		});
	}

	fetchArticles({ offset, searchTerm, searchType, sortField, sortDirection }) {
		const order = getOrderQuery({ sort: sortField, direction: sortDirection });
		this.setState({
			loading: true,
		});

		return getArticles({
			offset,
			search: searchTerm,
			type: searchType,
			order,
		}).then(result => {
			this.setState({
				articles: result,
				loading: false,
			});
		});
	}

	handleSearchArticles(props) {
		const filter = getFilterFromParams(this.props.match.params);
		const {
			searchTerm = filter.searchTerm,
			searchType = filter.searchType,
			sortDirection = filter.sortDirection,
			offset = filter.offset,
		} = props;

		updatePath({
			history: this.props.history,
			searchTerm,
			searchType,
			sortDirection,
			offset,
		});
	}

	render() {
		const { supplyList, articles, loading } = this.state;

		const filter = getFilterFromParams(this.props.match.params);

		return (
			<LayoutContainer>
				<Column size="twoThird">
					<h1>
						{'Overzicht'}
					</h1>
					<p>
						<strong>
							{`Ondernemersplein bundelt informatie van de overheid voor
							ondernemers tot één logisch antwoord. Wij bieden deze informatie
							ook aan via een open data API. Onderstaand het aanbod op dit
							moment.`}
						</strong>
					</p>

					<SupplyTypeList supplyList={supplyList} />

					<ul>
						<li>
							{`Datum: ${formatDate(new Date())}`}
						</li>
					</ul>
					<h2>
						{`Overzicht ${getArticleTitle(filter.searchType)}`}
					</h2>
					<ArticleFilter
						filter={filter}
						handleChange={this.handleSearchArticles}
						filterOptions={filterOptions}
						articleTypes={articleTypes}
					/>
					<SearchResult
						results={articles.articles}
						searchTerm={filter.searchTerm}
					/>
					{loading
						? <SectionLoading />
						: <ArticleList
								articles={articles}
								pathname={getObjectPath(this.props, ['location', 'pathname'])}
								onPagination={this.handleSearchArticles}
								offset={filter.offset}
								total={articles.pagination.total}
							/>}
				</Column>
				<Column size="third" sideColumn>
					<ThemeSwitcher clickHandler={this.props.clickHandler} />
				</Column>
			</LayoutContainer>
		);
	}
}

export default OverviewPage;
