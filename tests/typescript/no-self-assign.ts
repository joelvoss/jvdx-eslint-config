foo = foo;

[a, b] = [a, b];

[a, ...b] = [x, ...b];

({a, b} = {a, x});

foo &&= foo;
foo ||= foo;
foo ??= foo;