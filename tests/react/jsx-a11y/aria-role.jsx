function Foo() {}

function Comp() {
  let role = 'bar';
  return (
    <div>
      <div role="datepicker"></div>
      <div role="range"></div>
      <div role=""></div>
      <Foo role={role}></Foo>
    </div>
  )
}