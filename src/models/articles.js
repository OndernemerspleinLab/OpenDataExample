// @flow

import type { ArticleType } from './article-type';
import { PaginationModel } from './pagination';

export type ArticleReference = {
	additionalType: ArticleType,
	headLine: string,
	identifier: string,
};

/* eslint-disable no-undef */
export type ArticlesModel = {
	articles: ArticleReference[],
	pagination: PaginationModel,
};
