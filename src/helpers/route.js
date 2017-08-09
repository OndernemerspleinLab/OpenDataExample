import React from 'react';
import { Route } from 'react-router-dom';

const renderMergedProps = (component, ...args) => {
	const mergedProps = Object.assign({}, ...args);

	return React.createElement(component, mergedProps);
};

export const RouteWithProps = ({ component, ...args }) =>
	<Route
		{...args}
		render={routeProps => renderMergedProps(component, routeProps, args)}
	/>;
