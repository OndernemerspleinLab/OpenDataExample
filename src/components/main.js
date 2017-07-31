// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import OverviewPage from '../pages/overviewPage';
import ArticlePage from '../pages/articlePage';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const Main = () =>
	<main>
		<Container>
			<Row>
				<Col md="12">
					<Switch>
						<Route path="/artikelen" component={OverviewPage} />
						<Route path="/artikel/:id" component={ArticlePage} />
					</Switch>
				</Col>
			</Row>
		</Container>
	</main>;

export default Main;
