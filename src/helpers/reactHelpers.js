import { existy } from './functional';

// Only render component when condition is met
export const renderWhenCondition = condition => render => (props = {}) =>
	condition(props) ? render(props) : null;

// Only render component when all propNames are existing
export const renderWhenExisty = (...propNames) =>
	renderWhenCondition(props =>
		propNames.every(propName => existy(props[propName]))
	);
