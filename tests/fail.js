function sayHello() {

  /* comment */
  return 'Hello'
}

console.log(sayHello() + 'World');

const opts = { some: 'opt1', some2: 'opt2', some3: 'opt3' };
const { some, some2, ...rest } = opts;
// eslint-disable-next-line no-console
console.log(rest);