var foo = {
  set a(value) {
      this.val = value;
      return value;
  }
};

class Foo {
  set a(value) {
      this.val = value * 2;
      return this.val;
  }
}

const Bar = class {
  static set a(value) {
      if (value < 0) {
          this.val = 0;
          return 0;
      }
      this.val = value;
  }
};

Object.defineProperty(foo, "bar", {
  set(value) {
      if (value < 0) {
          return false;
      }
      this.val = value;
  }
});