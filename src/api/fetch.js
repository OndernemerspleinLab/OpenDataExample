// @flow

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

export const httpFetch = (
	url: string,
	options: RequestOptions,
	queryParams: { [key: string]: any }
): PromiseResponse => {
	const parsedUrl = new URL(url);

	Object.keys(queryParams).map(key => {
		if (Array.isArray(queryParams[key]) && queryParams[key].length > 1) {
			for (let param of queryParams[key]) {
				parsedUrl.searchParams.append(key, param);
			}
			return true;
		}
		return parsedUrl.searchParams.append(key, queryParams[key]);
	});

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
