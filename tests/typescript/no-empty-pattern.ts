var {} = foo;
var [] = foo;
var {a: {}} = foo;
var {a: []} = foo;
function foo({}) {}
function bar([]) {}
function baz({a: {}}) {}
function qux({a: []}) {}