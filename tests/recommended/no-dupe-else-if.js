if (isSomething(x)) {
  foo();
} else if (isSomething(x)) {
  bar();
}

if (a) {
  foo();
} else if (b) {
  bar();
} else if (c && d) {
  baz();
} else if (c && d) {
  quux();
} else {
  quuux();
}

if (n === 1) {
  foo();
} else if (n === 2) {
  bar();
} else if (n === 3) {
  baz();
} else if (n === 2) {
  quux();
} else if (n === 5) {
  quuux();
}