(obj?.foo)();

(obj?.foo).bar;

(foo?.()).bar;

(foo?.()).bar();

(obj?.foo ?? obj?.bar)();

(foo || obj?.foo)();

(obj?.foo && foo)();

(foo ? obj?.foo : bar)();

(foo, obj?.bar).baz;

(obj?.foo)`template`;

new (obj?.foo)();

[...obj?.foo];

bar(...obj?.foo);

1 in obj?.foo;

bar instanceof obj?.foo;

for (bar of obj?.foo);

const { bar } = obj?.foo;

[{ bar } = obj?.foo] = [];

class A extends obj?.foo {}

var a = class A extends obj?.foo {};

async function foo () {
    const { bar } = await obj?.foo;
   (await obj?.foo)();
   (await obj?.foo).bar;
}