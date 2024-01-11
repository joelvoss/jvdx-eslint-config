if (test) {
  function doSomething() { }
}

function doSomethingElse() {
  if (test) {
      function doAnotherThing() { }
  }
}

if (foo) function f(){}

class C {
  static {
      if (test) {
          function doSomething() { }
      }
  }
}