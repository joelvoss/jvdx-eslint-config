function Component(props) {
  useEffect(() => {
    const res = props.a + props.b;
    console.log(res);
  }, []);
  return null;
}
