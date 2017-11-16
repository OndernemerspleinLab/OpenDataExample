import React from 'react';

import {
	articlesEndpoint,
	eventsEndpoint,
	getArticles,
	getSubsidies,
	subsidiesEndpoint,
} from '../api/apiCalls';
import ArticleList from '../components/article-list';
import { getObjectPath } from '../helpers/functional';
import TotalString from '../components/total-string';
import ReferenceLink from '../components/reference-link';
import { LayoutContainer } from '../components/layoutContainer';
import { Column } from '../components/column';
import { ThemeSwitcher } from '../components/theme-switcher';
import { SectionLoading } from '../components/section-loading';
import { ArticleFilter } from '../components/article-filter';
import { getQueryFromForm } from '../helpers/formHelper';
import { SearchResult } from '../components/searchResult';

const getTotal = statePart => getObjectPath(statePart, ['pagination', 'total']);

const getSortsQuery = props => {
	const { sort = 'modified', direction = 'desc' } = props;

	return `${sort}:${direction}`;
};

const filterOptions = {
	sortFilter: [
		{ title: 'Modified', value: 'modified', selected: true },
		{ title: 'Type', value: 'type' },
	],
	directionFilter: [
		{ title: 'Oplopend', value: 'asc' },
		{ title: 'Aflopend', value: 'desc', selected: true },
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
			filter: {
				searchTerm: '',
				sortField: 'modified',
				sortDirection: 'desc',
			},
		};
	}

	componentWillReceiveProps(newProps: any) {
		if (newProps.match.params.offset !== this.props.match.params.offset) {
			this.fetchArticles(newProps.match.params.offset);
		}
	}

	componentDidMount() {
		const offset = this.props.match.params.offset;
		const articlesPromise = getArticles({ offset });
		//const eventsPromise = getEvents();
		const subsidiesPromise = getSubsidies();

		Promise.all([
			articlesPromise,
			//eventsPromise,
			subsidiesPromise,
		]).then(result => {
			const [articles, events, subsidies] = result;

			this.setState({
				articles,
				totalArticles: getTotal(articles),
				totalEvents: getTotal(events),
				totalSubsidies: getTotal(subsidies),
				loading: false,
			});
		});
	}

	fetchArticles({ offset, query, sort, direction }) {
		this.setState({ loading: true });
		const sorts = getSortsQuery({ sort, direction });

		return getArticles({ offset, search: query, sorts }).then(result => {
			this.setState({
				...this.state,
				articles: result,
				loading: false,
			});
		});
	}

	handleSearchArticles(props) {
		const { searchTerm, sortField, sortDirection } = props;

		this.setState({
			...this.state,
			filter: {
				searchTerm,
				sortField,
				sortDirection,
			},
		});
		this.fetchArticles({
			query: searchTerm,
			sort: sortField,
			direction: sortDirection,
		});
	}

	handleSearchArticlesSubmit(event) {
		event.preventDefault();
		const searchTerm = getQueryFromForm(event.currentTarget);

		this.handleSearchArticles({ searchTerm });
	}

	render() {
		const {
			totalArticles,
			totalEvents,
			totalSubsidies,
			filter,
			articles,
			loading,
		} = this.state;

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
							{`Datum: ${new Date().toLocaleDateString()}`}
						</li>
						<li>
							<TotalString total={totalArticles}>
								{`Aantal antwoordpagina's`}
							</TotalString>
							<ReferenceLink href="https://www.ondernemersplein.nl/">
								{'(Bekijk op ondernemersplein.nl)'}
							</ReferenceLink>
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
					<ArticleFilter
						filter={filter}
						handleSearch={this.handleSearchArticlesSubmit.bind(this)}
						handleChange={this.handleSearchArticles.bind(this)}
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
