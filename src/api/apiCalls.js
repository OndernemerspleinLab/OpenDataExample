// @flow

import type { ArticleModel } from '../models/article';
import type { ArticlesModel } from '../models/articles';
import type { EventModel } from '../models/event';
import type { EventsModel } from '../models/events';
import type { SubsidieModel } from '../models/subsidie';
import type { SubsidiesModel } from '../models/subsidies';
import { fetchJson } from './fetch';
import type { ArticleType } from '../models/article-type';
import type { SortTokens } from '../models/sortTokens';

type PromiseArticle = Promise<ArticleModel>;
type PromiseArticles = Promise<ArticlesModel>;
type PromiseEvent = Promise<EventModel>;
type PromiseEvents = Promise<EventsModel>;
type PromiseSubsidie = Promise<SubsidieModel>;
type PromiseSubsidies = Promise<SubsidiesModel>;
type ArticleParams = {
	offset?: number,
	type?: ArticleType[],
	order?: SortTokens[],
	search?: string,
};

const apiPath =
	process.env.REACT_APP_API_PATH || 'https://opendata.ondernemersplein.nl';
export const apiBaseUrl = `${apiPath}/api/`;
export const articlesEndpoint = `${apiBaseUrl}v1/articles/`;
export const eventsEndpoint = `${apiBaseUrl}events/`;
export const subsidiesEndpoint = `${apiBaseUrl}subsidies/`;
export const webinarEndpoint = `${articlesEndpoint}?type=webinar-nl`;

export const articlesPerPage = 20;

export const getArticles = (props: {
	offset: any,
	search: string,
	order: string,
	type: ArticleType[],
}): PromiseArticles => {
	const {
		offset = 0,
		search = '',
		order = '',
		type = ['antwoordpagina-nl'],
	} = props;

	const params: ArticleParams = {
		offset,
		limit: articlesPerPage,
		type,
		search,
		order,
	};

	return fetchJson(articlesEndpoint, {}, params);
};

export const getArticle = (id: number): PromiseArticle =>
	fetchJson(`${articlesEndpoint}${id}`);

export const getEvents = (): PromiseEvents => fetchJson(eventsEndpoint);
export const getEvent = (id: number): PromiseEvent =>
	fetchJson(`${eventsEndpoint}${id}`);

export const getSubsidies = (): PromiseSubsidies =>
	fetchJson(subsidiesEndpoint);
export const getSubsidie = (id: number): PromiseSubsidie =>
	fetchJson(`${subsidiesEndpoint}${id}`);

export const getWebinars = (): PromiseSubsidies => fetchJson(webinarEndpoint);
