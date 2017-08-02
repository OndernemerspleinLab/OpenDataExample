// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import OverviewPage from '../pages/overviewPage';
import ArticlePage from '../pages/articlePage';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Redirect } from 'react-router';

export const articleUrl = '/artikel/';
export const articlesUrl = '/artikelen/';

const Main = () =>
	<main>
		<Container>
			<Row>
				<Col md="12">
					<Switch>
						<Route path={`${articlesUrl}:offset?`} component={OverviewPage} />
						<Route path={`${articleUrl}:id`} component={ArticlePage} />
						<Route render={() => <Redirect to={articlesUrl} />} />
					</Switch>
				</Col>
			</Row>
		</Container>
	</main>;

export default Main;
