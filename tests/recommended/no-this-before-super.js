class A1 extends B {
  constructor() {
      this.a = 0;
      super();
  }
}

class A2 extends B {
  constructor() {
      this.foo();
      super();
  }
}

class A3 extends B {
  constructor() {
      super.foo();
      super();
  }
}

class A4 extends B {
  constructor() {
      super(this.foo());
  }
}