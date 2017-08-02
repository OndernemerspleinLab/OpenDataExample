// @flow

import type { ArticleType } from './article-type';

export type PaginationModel = {
	limit: number,
	offset: number,
	returned: number,
	total: number,
};

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

export const defaultPagination: PaginationModel = {
	limit: 0,
	offset: 0,
	returned: 0,
	total: 0,
};
