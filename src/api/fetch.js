// @flow

type PromiseResponse = Promise<Response>;
type PromiseAny = Promise<any>;

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

export const httpFetch = (
	url: string,
	options: ?RequestOptions
): PromiseResponse => {
	const responsePromise = fetch(url, options).then(checkStatus);
	responsePromise.catch(error => {
		console.log(error);
	});

	return responsePromise;
};

export const fetchJson = (
	url: string,
	options: ?RequestOptions = {}
): PromiseAny => httpFetch(url, options).then(response => response.json());
