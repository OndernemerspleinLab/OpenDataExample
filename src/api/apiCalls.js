// @flow

import type { Article } from '../models/article';
import type { Articles } from '../models/articles';
import { fetchJson } from './fetch';

type PromiseArticle = Promise<Article>;
type PromiseArticles = Promise<Articles>;

const apiOrigin = 'https://opendata.ondernemersplein.nl';
const apiBaseUrl = `${apiOrigin}/api/v1/`;
const articlesEndpoint = `${apiBaseUrl}articles`;

export const getArticles = (): PromiseArticles => fetchJson(articlesEndpoint);

export const getArticle = (id: number): PromiseArticle =>
	fetchJson(`${articlesEndpoint}${id}`);
