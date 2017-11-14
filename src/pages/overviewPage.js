import React from 'react';

import {
	articlesEndpoint,
	eventsEndpoint,
	getArticles,
	getEvents,
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

const getTotal = statePart => getObjectPath(statePart, ['pagination', 'total']);

class OverviewPage extends React.Component {
	constructor() {
		super();
		this.state = {
			articles: {},
			events: {},
			subsidies: {},
			loading: true,
			filter: {
				searchTerm: '',
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
		const eventsPromise = getEvents();
		const subsidiesPromise = getSubsidies();

		Promise.all([
			articlesPromise,
			eventsPromise,
			subsidiesPromise,
		]).then(result => {
			const [articles, events, subsidies] = result;

			this.setState({
				articles,
				events,
				subsidies,
				loading: false,
			});
		});
	}

	fetchArticles({ offset, searchTerm }) {
		this.setState({ loading: true });

		return getArticles({ offset, searchTerm }).then(result => {
			this.setState({
				...this.state,
				articles: result,
				loading: false,
			});
		});
	}

	render() {
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
							<TotalString total={getTotal(this.state.articles)}>
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
							<TotalString total={getTotal(this.state.events)}>
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
							<TotalString total={getTotal(this.state.subsidies)}>
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
					<ArticleFilter filter={this.state.filter} />
					<p>
						{'Klik op een antwoordpagina om de inhoud van de API te bekijken.'}
					</p>
					{this.state.loading
						? <SectionLoading />
						: <ArticleList
								articles={this.state.articles}
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
