// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import OverviewPage from './overviewPage';
import ArticlePage from './articlePage';
import { Redirect } from 'react-router';
import { mq } from '../styles/utils';

export const articleUrl = '/artikel/';
export const articlesUrl = '/artikelen/';

const MainBase = styled.main`
	flex: 1 0 auto;
	margin-top: 1.95rem;
	${mq('small')`margin-top: 2.1rem`};
	${mq('large')`margin-top: 2.25`};
`;

const Main = () =>
	<MainBase>
		<Switch>
			<Route path={`${articlesUrl}:offset?`} component={OverviewPage} />
			<Route path={`${articleUrl}:id`} component={ArticlePage} />
			<Route render={() => <Redirect to={articlesUrl} />} />
		</Switch>
	</MainBase>;

export default Main;
