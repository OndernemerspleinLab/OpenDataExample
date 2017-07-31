// @flow

type Pagination = {
	limit: number,
	offset: number,
	returned: number,
	total: number,
};

type ArticleReference = {
	additionalType: string,
	headLine: string,
	identifier: string,
};

export type Articles = {
	articles: ArticleReference[],
	pagination: Pagination,
};
