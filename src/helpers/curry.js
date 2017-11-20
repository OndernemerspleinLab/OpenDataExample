// More info about currying: https://hughfdjackson.com/javascript/why-curry-helps/

const curry1 = (arity, fn, args) =>
	args.length >= arity ? fn(...args) : curryNext(args)(arity, fn); //eslint-disable-line no-use-before-define

const curryNext = oldArgs => (arity, fn) => (...newArgs) =>
	curry1(arity, fn, [...oldArgs, ...newArgs]);

export const curryArity = curryNext([]);

const curry = fn => curryArity(fn.length, fn);

export default curry;
