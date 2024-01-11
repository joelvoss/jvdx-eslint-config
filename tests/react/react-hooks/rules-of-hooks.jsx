function Component() {
  const a = false;
  if (a) {
    useEffect(() => {}, []);
  }
  return null;
}

function Component2() {
  const a = [1, 2];
  for (let i of a) {
    useEffect(() => {}, []);
  }
  return null;
}

function Component3() {
  const sub = () => {
    useEffect(() => {}, []);
  }
  sub();

  return null;
}

function Component4() {
  const a = false;
  if (a) {
    return null;
  }
  useEffect(() => {}, []);
  return null;
}