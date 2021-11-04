function sayHello() {
	/* comment */
	return 'Hello';
}

// eslint-disable-next-line no-console
console.log(sayHello() + 'World');

const opts = { some: 'opt1', some2: 'opt2', some3: 'opt3' };
const { some: _, some2: __, ...rest } = opts;
// eslint-disable-next-line no-console
console.log(rest);

// eslint-disable-next-line no-unused-vars
function ReactComp() {
	return <Comp>React Comp</Comp>;
}
