// @flow

import { css } from 'styled-components';

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

const getMediaQuery = (name, type: 'greater' | 'lesser') =>
	mediaQueries[name][type];
const getMqGreater = name => `@media ${getMediaQuery(name, 'greater')}`;
const getMqLesser = name => `@media ${getMediaQuery(name, 'lesser')}`;
const getMqBetween = name =>
	`@media ${getMediaQuery(name, 'lesser')} and ${getMediaQuery(
		name,
		'greater'
	)}`;

export const mq = (
	name: string,
	type: 'greater' | 'lesser' | 'between' = 'greater'
) => (...args: any) => {
	if (type === 'between') {
		return css`${getMqBetween(name)} { ${css(...args)}}`;
	}

	console.log(css(...args));
	console.log(css`@media ${getMediaQuery(name, type)} { ${css(...args)}}`);

	return css`@media ${getMediaQuery(name, type)} { ${css(...args)}}`;
};

// export const mq = {
// 	extraSmall: (...args: any) => css`
// 		${getMqGreater('extraSmall')} { ${css(...args)} }
// 	`,
// 	small: (...args: any) => css`
// 		${getMqGreater('small')} { ${css(...args)} }
// 	`,
// 	smallMedium: (...args: any) => css`
// 		${getMqGreater('smallMedium')} { ${css(...args)} }
// 	`,
// 	medium: (...args: any) => css`
// 		${getMqGreater('medium')} { ${css(...args)} }
// 	`,
// 	mediumLarge: (...args: any) => css`
// 		${getMqGreater('mediumLarge')} { ${css(...args)} }
// 	`,
// 	large: (...args: any) => css`
// 		${getMqGreater('large')} { ${css(...args)} }
// 	`,
// 	extraLarge: (...args: any) => css`
// 		${getMqGreater('extraLarge')} { ${css(...args)} }
// 	`,
// 	extraExtraLarge: (...args: any) => css`
// 		${getMqGreater('extraExtraLarge')} { ${css(...args)} }
// 	`,
// 	extraExtraExtraLarge: (...args: any) => css`
// 		${getMqGreater('extraExtraExtraLarge')} { ${css(...args)} }
// 	`,
// 	largest: (...args: any) => css`
// 		${getMqGreater('largest')} { ${css(...args)} }
// 	`,
// };
