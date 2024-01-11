interface FooAny<T extends any> {}

interface FooUnknown<T extends unknown> {}

type BarAny<T extends any> = {};

type BarUnknown<T extends unknown> = {};

class BazAny<T extends any> {
  quxAny<U extends any>() {}
}

const QuuxAny = <T extends any>() => {};

function QuuzAny<T extends any>() {}