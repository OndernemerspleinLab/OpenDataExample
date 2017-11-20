import curry from './curry';

export const negate = fn => (...args) => !fn(...args);

export const unexisty = value => value === null || typeof value === 'undefined';

export const existy = negate(unexisty);

export const isObject = obj => existy(obj) && typeof obj === 'object';

export const isArray = array => existy(array) && Array.isArray(array);

export const isFilledArray = array => isArray(array) && array.length > 0;

export const isEmptyArray = negate(isFilledArray);

export const isFilledObject = object =>
	isObject(object) && Object.keys(object).length > 0;

export const isEmptyObject = negate(isFilledObject);

export const isNotObject = negate(isObject);

export const hasObjectPath = (object: Object, path: Array): boolean => {
	let testObject = object;

	return path.every(key => {
		if (isEmptyObject(testObject) || !(key in testObject)) {
			return false;
		}

		testObject = testObject[key];
		return true;
	});
};

export const getObjectPath = (object: Object, path: Array) =>
	path.reduce((obj, key) => {
		return isNotObject(obj) ? obj : obj[key];
	}, object);

export const delayed = (delay, callback, ...args) => {
	if (unexisty(delay) || delay === 0) {
		callback(...args);
		return null;
	} else {
		return setTimeout(() => callback(...args), delay);
	}
};

export const debounce = (callback, delay) => {
	let timer;

	const debounced = (...args) => {
		clearTimeout(timer);
		timer = delayed(delay, callback, ...args);
	};

	debounced.now = (...args) => {
		clearTimeout(timer);
		callback(...args);
	};

	return debounced;
};

export const getIn = curry(([key, ...restKeys], obj) => {
	const normalizedObj = isObject(obj) ? obj : {};

	if (restKeys.length === 0) {
		return normalizedObj[key];
	} else {
		return getIn(restKeys, normalizedObj[key]);
	}
});
