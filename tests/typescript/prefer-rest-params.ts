function foo1() {
  console.log(arguments);
}

function foo2(action) {
  var args = Array.prototype.slice.call(arguments, 1);
  action.apply(null, args);
}

function foo3(action) {
  var args = [].slice.call(arguments, 1);
  action.apply(null, args);
}