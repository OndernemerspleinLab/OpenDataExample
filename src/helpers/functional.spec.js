import {
	existy,
	getObjectPath,
	hasObjectPath,
	negate,
	unexisty,
} from './functional';

describe('functional', () => {
	it('should negate a function', () => {
		expect(negate(() => true)()).toBe(false);
		expect(negate(() => false)()).toBe(true);
	});

	it('should discern existing and unexisting objects', () => {
		expect(existy(null)).toBe(false);
		expect(existy(undefined)).toBe(false); //eslint-disable-line no-undefined
		expect(existy('')).toBe(true);
		expect(existy(0)).toBe(true);
		expect(existy([])).toBe(true);

		expect(unexisty(null)).toBe(true);
		expect(unexisty(undefined)).toBe(true); //eslint-disable-line no-undefined
		expect(unexisty('')).toBe(false);
		expect(unexisty(0)).toBe(false);
		expect(unexisty([])).toBe(false);
	});

	it('should check for the existence of an object path in a object', () => {
		const object = { test1: { test2: { test3: 'value' } } };

		expect(hasObjectPath(object, ['test1', 'test2', 'test3'])).toBe(true);
		expect(hasObjectPath(object, ['test1', 'test2', 'test4'])).toBe(false);
	});

	it('should get a path of a given object', () => {
		const object = { test1: { test2: { test3: 'value' } } };

		expect(getObjectPath(object, ['test1', 'test2', 'test3'])).toEqual(
			object.test1.test2.test3
		);
		expect(getObjectPath(object, ['test1', 'test2', 'test5'])).toBeUndefined();
	});
});
