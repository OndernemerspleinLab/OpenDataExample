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
import Pagination from '../components/pagination';
import { getObjectPath } from '../helpers/functional';
import TotalString from '../components/total-string';
import ReferenceLink from '../components/reference-link';
import { LayoutContainer } from '../components/layoutContainer';
import { Column } from '../components/column';

const articlesPerPage = 20;

const getTotal = statePart => getObjectPath(statePart, ['pagination', 'total']);

class OverviewPage extends React.Component {
	constructor() {
		super();
		this.state = {
			articles: {},
			events: {},
			subsidies: {},
		};
	}

	componentWillReceiveProps(newProps: any) {
		if (newProps.match.params.offset !== this.props.match.params.offset) {
			getArticles(newProps.match.params.offset).then(result => {
				this.setState({
					articles: result,
				});
			});
		}
	}

	componentDidMount() {
		const articles = getArticles(this.props.match.params.offset);
		const events = getEvents();
		const subsidies = getSubsidies();

		Promise.all([articles, events, subsidies]).then(result => {
			this.setState({
				articles: result[0],
				events: result[1],
				subsidies: result[2],
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
					<p>
						{'Klik op een antwoordpagina om de inhoud van de API te bekijken.'}
					</p>
					<ArticleList
						articles={this.state.articles.articles}
						pathname={getObjectPath(this.props, ['location', 'pathname'])}
					/>
					<Pagination
						pagination={this.state.articles.pagination}
						limit={articlesPerPage}
					/>
				</Column>
			</LayoutContainer>
		);
	}
}

export default OverviewPage;
