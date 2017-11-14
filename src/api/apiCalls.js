// @flow

import type { ArticleModel } from '../models/article';
import type { ArticlesModel } from '../models/articles';
import type { EventModel } from '../models/event';
import type { EventsModel } from '../models/events';
import type { SubsidieModel } from '../models/subsidie';
import type { SubsidiesModel } from '../models/subsidies';
import { fetchJson } from './fetch';
import type { ArticleType } from '../models/article-type';

type PromiseArticle = Promise<ArticleModel>;
type PromiseArticles = Promise<ArticlesModel>;
type PromiseEvent = Promise<EventModel>;
type PromiseEvents = Promise<EventsModel>;
type PromiseSubsidie = Promise<SubsidieModel>;
type PromiseSubsidies = Promise<SubsidiesModel>;
type ArticleParams = {
	offset: number,
	type: ArticleType[],
	sort: string,
	direction: 'ascending' | 'descending',
};

const apiOrigin = 'https://opendata.ondernemersplein.nl';
export const apiBaseUrl = `${apiOrigin}/api/`;
export const articlesEndpoint = `${apiBaseUrl}v1/articles/`;
export const eventsEndpoint = `${apiBaseUrl}events/`;
export const subsidiesEndpoint = `${apiBaseUrl}subsidies/`;

export const getArticles = (props: {
	offset: any,
	searchTerm: String,
}): PromiseArticles => {
	const { offset = 0, searchTerm = '' } = props;

	const params: ArticleParams = {
		offset,
		type: ['antwoordpagina-nl'],
		sort: 'headLine',
		direction: 'ascending',
		searchTerm,
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
