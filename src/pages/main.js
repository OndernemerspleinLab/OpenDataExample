// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import OverviewPage from './overviewPage';
import ArticlePage from './articlePage';
import { Redirect } from 'react-router';
import { mq } from '../styles/utils';
import {
	RouteWithProps,
	articlesUrl,
	articleUrl,
	createArticlesOverviewPathname,
} from '../helpers/route';

const MainBase = styled.main`
	flex: 1 0 auto;
	margin-top: 1.95rem;
	${mq('small')`margin-top: 2.1rem`};
	${mq('large')`margin-top: 2.25`};
`;

class Main extends React.Component {
	render() {
		return (
			<MainBase>
				<Switch>
					<RouteWithProps
						path={`${articlesUrl}/:query?/wijzigingsdatum/:order/vanaf/:offset`}
						component={OverviewPage}
						exact={true}
						clickHandler={this.props.clickHandler}
					/>
					<RouteWithProps
						path={`${articleUrl}/:id`}
						component={ArticlePage}
						clickHandler={this.props.clickHandler}
					/>
					<Route
						render={() => <Redirect to={createArticlesOverviewPathname({})} />}
					/>
				</Switch>
			</MainBase>
		);
	}
}

export default Main;
