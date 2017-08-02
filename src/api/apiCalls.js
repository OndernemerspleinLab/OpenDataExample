// @flow

import type { ArticleModel } from '../models/article';
import type { ArticlesModel } from '../models/articles';
import { fetchJson } from './fetch';

type PromiseArticle = Promise<ArticleModel>;
type PromiseArticles = Promise<ArticlesModel>;

const apiOrigin = 'https://opendata.ondernemersplein.nl';
const apiBaseUrl = `${apiOrigin}/api/v1/`;
const articlesEndpoint = `${apiBaseUrl}articles/`;

export const getArticles = (offset: number = 0): PromiseArticles => {
	const params = {
		offset: offset,
	};

	return fetchJson(articlesEndpoint, {}, params);
};

export const getArticle = (id: number): PromiseArticle =>
	fetchJson(`${articlesEndpoint}${id}`);
