function MyInput() {}

function Comp() {
  return (
    <div>
      <input type="text" autocomplete="incorrect" />
      <input type="email" autocomplete="url" />
      <MyInput autocomplete="incorrect" />
    </div>
  )
}