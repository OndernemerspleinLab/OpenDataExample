// @flow

import type { AuthorModel } from './author';
import type { ArticleType } from './article-type';

export type ArticleModel = {
	about: string,
	additionalType: ArticleType,
	articleBody: string,
	author: AuthorModel[],
	dateCreated: string,
	dateModified: string,
	hasPart: string[],
	headLine: string,
	identifier: string,
	inLanguage: string,
	isPartOf: string[],
	keywords: string[],
	publisher: AuthorModel[],
	url: string,
};

export const defaultArticle = (): ArticleModel => {
	return {
		about: '',
		additionalType: '',
		articleBody: '',
		author: [],
		dateCreated: '',
		dateModified: '',
		hasPart: [],
		headLine: '',
		identifier: '',
		inLanguage: '',
		isPartOf: [],
		keywords: [],
		publisher: [],
		url: '',
	};
};
