import React from 'react';

import {
	articlesEndpoint,
	eventsEndpoint,
	getArticles,
	getSubsidies,
	subsidiesEndpoint,
	getEvents,
} from '../api/apiCalls';
import ArticleList from '../components/article-list';
import { getObjectPath, shallowEqual } from '../helpers/functional';
import TotalString from '../components/total-string';
import ReferenceLink from '../components/reference-link';
import { LayoutContainer } from '../components/layoutContainer';
import { Column } from '../components/column';
import { ThemeSwitcher } from '../components/theme-switcher';
import { SectionLoading } from '../components/section-loading';
import { ArticleFilter } from '../components/article-filter';
import { SearchResult } from '../components/searchResult';
import { formatDate } from '../helpers/date';
import { updatePath, getFilterFromParams } from '../helpers/route';

const getTotal = statePart => getObjectPath(statePart, ['pagination', 'total']);

const getOrderQuery = props => {
	const { sort = 'modified', direction = 'desc' } = props;

	return `${sort}:${direction}`;
};

const filterOptions = {
	directionFilter: [
		{ title: 'Publicatiedatum aflopend', value: 'desc' },
		{ title: 'Publicatiedatum oplopend', value: 'asc' },
	],
};

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
			offset,
		} = getFilterFromParams(this.props.match.params);
		const order = getOrderQuery({ sort: sortField, direction: sortDirection });
		const articlesPromise = getArticles({
			offset,
			search: searchTerm,
			order,
		});
		const articlesCompletePromise = getArticles({});
		const eventsPromise = getEvents();
		const subsidiesPromise = getSubsidies();

		Promise.all([
			articlesPromise,
			articlesCompletePromise,
			eventsPromise,
			subsidiesPromise,
		]).then(result => {
			const [articles, articlesComplete, events, subsidies] = result;

			this.setState({
				articles,
				totalArticles: getTotal(articlesComplete),
				totalEvents: getTotal(events),
				totalSubsidies: getTotal(subsidies),
				loading: false,
			});
		});
	}

	fetchArticles({ offset, searchTerm, sortField, sortDirection }) {
		const order = getOrderQuery({ sort: sortField, direction: sortDirection });
		this.setState({
			loading: true,
		});

		return getArticles({ offset, search: searchTerm, order }).then(result => {
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
			sortDirection = filter.sortDirection,
			offset = filter.offset,
		} = props;

		updatePath({
			history: this.props.history,
			searchTerm,
			sortDirection,
			offset,
		});
	}

	render() {
		const {
			totalArticles,
			totalEvents,
			totalSubsidies,
			articles,
			loading,
		} = this.state;

		const filter = getFilterFromParams(this.props.match.params);

		return (
			<LayoutContainer>
				<Column size="twoThird">
					<h1>
						{'Overzicht'}
					</h1>
					<p>
						<strong>
							{`Ondernemersplein.nl bundelt informatie van de overheid voor
							ondernemers tot één logisch antwoord. Wij bieden deze informatie
							ook aan via een open data API. Onderstaand het aanbod op dit
							moment.`}
						</strong>
					</p>
					<ul>
						<li>
							{`Datum: ${formatDate(new Date())}`}
						</li>
						<li>
							<TotalString total={totalArticles}>
								{`Aantal antwoordpagina’s`}
							</TotalString>
							<ReferenceLink
								href={`${articlesEndpoint}?type=antwoordpagina-nl`}
							>
								{'(API Endpoint)'}
							</ReferenceLink>
						</li>
						<li>
							<TotalString total={totalEvents}>
								{'Aantal evenementen'}
							</TotalString>
							<ReferenceLink href="https://www.ondernemersplein.nl/evenementen/">
								{'(Bekijk op ondernemersplein.nl)'}
							</ReferenceLink>
							<ReferenceLink href={eventsEndpoint}>
								{'(API Endpoint)'}
							</ReferenceLink>
						</li>
						<li>
							<TotalString total={totalSubsidies}>
								{'Aantal subsidies'}
							</TotalString>
							<ReferenceLink href="https://www.ondernemersplein.nl/ondernemen/geldzaken/subsidies/">
								{'(Bekijk op ondernemersplein.nl)'}
							</ReferenceLink>
							<ReferenceLink href={subsidiesEndpoint}>
								{'(API Endpoint)'}
							</ReferenceLink>
						</li>
					</ul>
					<h2>
						{'Overzicht antwoordpagina’s'}
					</h2>
					<ArticleFilter
						filter={filter}
						handleChange={this.handleSearchArticles}
						filterOptions={filterOptions}
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
