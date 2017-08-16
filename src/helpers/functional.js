export const negate = fn => (...args) => !fn(...args);

export const unexisty = value => value === null || typeof value === 'undefined';

export const existy = negate(unexisty);

export const isObject = obj => existy(obj) && typeof obj === 'object';

export const isArray = array => existy(array) && Array.isArray(array);

export const isFilledArray = array => isArray(array) && array.length > 0;

export const isEmptyArray = negate(isFilledArray);

export const isNotObject = negate(isObject);

export const hasObjectPath = (object: Object, path: Array): boolean => {
	let testObject = object;

	return path.every(key => {
		if (isNotObject(testObject) || !(key in testObject)) {
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
