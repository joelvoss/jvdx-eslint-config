if (false) {
  doSomethingUnfinished();
}

if (void x) {
  doSomethingUnfinished();
}

if (x &&= false) {
  doSomethingNever();
}

if (class {}) {
  doSomethingAlways();
}

if (new Boolean(x)) {
  doSomethingAlways();
}

if (Boolean(1)) {
  doSomethingAlways();
}

if (undefined) {
  doSomethingUnfinished();
}

if (x ||= true) {
  doSomethingAlways();
}

for (;-2;) {
  doSomethingForever();
}

while (typeof x) {
  doSomethingForever();
}

do {
  doSomethingForever();
} while (x = -1);

var result = 0 ? a : b;

if(input === "hello" || "bye"){
output(input);
}