// use lower-case primitives for consistency
const str: String = 'foo';
const bool: Boolean = true;
const num: Number = 1;
const symb: Symbol = Symbol('foo');
const bigInt: BigInt = 1n;

// use a proper function type
const func: Function = () => 1;

// use safer object types
const lowerObj: Object = {};
const capitalObj: Object = { a: 'string' };

const curly1: {} = 1;
const curly2: {} = { a: 'string' };