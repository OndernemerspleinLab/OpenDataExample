// @flow

import type { Author } from './author';

export type Article = {
	additionalType: string,
	articleBody: string,
	author: Author[],
	dateCreated: string,
	dateModified: string,
	hasPart: string[],
	headLine: string,
	identifier: string,
	inLanguage: string,
	isPartOf: string[],
	keywords: string[],
	publisher: Author[],
	url: string,
};
