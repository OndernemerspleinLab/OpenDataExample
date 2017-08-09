// @flow

import { css } from 'styled-components';

type Breakpoints =
	| 'extraSmall'
	| 'small'
	| 'smallMedium'
	| 'medium'
	| 'mediumLarge'
	| 'large'
	| 'extraLarge'
	| 'extraExtraLarge'
	| 'extraExtraExtraLarge'
	| 'largest';

const mediaQueries = {
	extraSmall: {
		// 384px
		greater: '(min-width: 24em)',
		lesser: '(max-width: #{24em - (1/16)})',
	},
	small: {
		// 560px
		greater: '(min-width: 35em)',
		lesser: '(max-width: #{35em - (1/16)})',
	},
	smallMedium: {
		// 640px
		greater: '(min-width: 40em)',
		lesser: '(max-width: #{40em - (1/16)})',
	},
	medium: {
		// 720px
		greater: '(min-width: 45em)',
		lesser: '(max-width: #{45em - (1/16)})',
	},
	mediumLarge: {
		// 800px
		greater: '(min-width: 50em)',
		lesser: '(max-width: #{50em - (1/16)})',
	},
	large: {
		// 880px
		greater: '(min-width: 55em)',
		lesser: '(max-width: #{55em - (1/16)})',
	},
	extraLarge: {
		// 912px
		greater: '(min-width: 57em)',
		lesser: '(max-width: #{57em - (1/16)})',
	},
	extraExtraLarge: {
		// 1120px
		greater: '(min-width: 70em)',
		lesser: '(max-width: #{70em - (1/16)})',
	},
	extraExtraExtraLarge: {
		// 1296px
		greater: '(min-width: 81em)',
		lesser: '(max-width: #{81em - (1/16)})',
	},
	largest: {
		// 1920px
		greater: '(min-width: #{map-get($maxPageWidth, em)})',
		lesser: '(max-width: #{map-get($maxPageWidth, em) - (1/16)})',
	},
};

const getMediaQuery = (name: Breakpoints, type: 'greater' | 'lesser') => {
	return mediaQueries[name][type];
};

const getMqBetween = (from: Breakpoints, to: Breakpoints) =>
	`@media ${getMediaQuery(from, 'lesser')} and ${getMediaQuery(to, 'greater')}`;

export const mq = (
	name: { from: Breakpoints, to: Breakpoints } | Breakpoints,
	type: 'greater' | 'lesser' | 'between' = 'greater'
) => (...args: any) => {
	if (typeof name === 'object') {
		const { from, to } = name;
		return css`${getMqBetween(from, to)} { ${css(...args)}}`;
	}

	if (typeof name === 'string' && type !== 'between') {
		return css`@media ${getMediaQuery(name, type)} { ${css(...args)}}`;
	}

	return null;
};
