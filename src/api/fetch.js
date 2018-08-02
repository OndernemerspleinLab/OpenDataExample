// @flow

import { isFilledArray } from '../helpers/functional';

type PromiseResponse = Promise<Response>;

const checkStatus = (response: Response): Response => {
	if (!response) {
		throw new Error('Possible CORS Error');
	}
	if (response.status >= 200 && response.status < 300) {
		return response;
	}

	const error: { response?: Response } & Error = new Error(response.statusText);

	error.response = response;
	throw error;
};

const addJsonHeaders = (options = {}) =>
	Object.assign({ headers: { Accept: 'application/json' }, options });

const appendParams = (parsedUrl, queryParams) => {
	for (let key of Object.keys(queryParams)) {
		if (isFilledArray(queryParams[key])) {
			for (let param of queryParams[key]) {
				parsedUrl.searchParams.append(key, param);
			}
		} else {
			parsedUrl.searchParams.append(key, queryParams[key]);
		}
	}
	return parsedUrl;
};

export const httpFetch = (
	url: string,
	options: RequestOptions,
	queryParams: { [key: string]: any }
): PromiseResponse => {
	const parsedUrl = new URL(url);

	appendParams(parsedUrl, queryParams);

	const responsePromise = fetch(parsedUrl.href, addJsonHeaders(options)).then(
		checkStatus
	);
	responsePromise.catch(error => {
		console.log(error);
	});

	return responsePromise;
};

export const fetchJson = (
	url: string,
	options: RequestOptions = {},
	params: { [key: string]: any } = {}
) => httpFetch(url, options, params).then(response => response.json());
