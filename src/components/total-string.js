// @flow

import React from 'react';
import { unexisty } from '../helpers/functional';

const TotalString = (props: { children: Element, total: number }) => {
	if (unexisty(props.children) || unexisty(props.total)) {
		return null;
	}

	return (
		<span>
			{props.children}: <strong>{props.total}</strong>
		</span>
	);
};

export default TotalString;
