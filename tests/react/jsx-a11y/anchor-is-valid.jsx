function Comp() {
  let foo = () => {};
  return (
    <div>
      <a onClick={foo} />
      <a href="#" onClick={foo} />
      <a href={"#"} onClick={foo} />
      <a href={`#`} onClick={foo} />
      <a href="javascript:void(0)" onClick={foo} />
      <a href={"javascript:void(0)"} onClick={foo} />
      <a href={`javascript:void(0)`} onClick={foo} />
      <a />
      <a href={undefined} />
      <a href={null} />
      <a href="#" />
      <a href={"#"} />
      <a href={`#`} />
      <a href="javascript:void(0)" />
      <a href={"javascript:void(0)"} />
      <a href={`javascript:void(0)`} />
    </div>
  )
}